import { html } from "../../node_modules/lit-html/lit-html.js";
import { until } from '../../node_modules/lit-html/directives/until.js';
import { getRequestsByTeamId, getTeamById, requestToJoin, cancelMemebership, approvemembership } from '../api/data.js';
import { loaderTemplate } from "./common/loader.js";


const teamDetails = (data, isOwner, createControls, members, pending) => html`
<section id="team-home">
    <article class="layout">
        <img src=${data.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${data.name}</h2>
            <p>${data.description}</p>
            <span class="details">${data.memberCount}</span>
            <div>
                ${createControls()}
            </div>
        </div>
        <div class="pad-large">
            <h3>Members</h3>
            <ul class="tm-members">
                ${members.map(m=>  membersTemplate(m, isOwner))}
            </ul>
        </div>
        ${isOwner ? html`
        <div class="pad-large">
            <h3>Membership Requests</h3>
            <ul class="tm-members">
                ${pending.map(pendingMemberPemplate)}
            </ul>
        </div>` : ''}

    </article>
</section>`;


const membersTemplate = (request, isOwner) => html`
<li>
    ${request.user.username}
    ${isOwner ? html`
    <a @click=${request.decline} href="javascript:void(0)" class="tm-control action">
        Remove from team
    </a>` : ''}
</li>`;

const pendingMemberPemplate = (request) => html`
<li>${request.user.username}
    <a @click=${request.approve} href="javascript:void(0)" class="tm-control action">Approve</a>
    <a @click=${request.decline} href="javascript:void(0)" class="tm-control action">Decline</a>
</li>`;

const actionTemplate = () => html`
<div>
    <a href=${`/edit/${data._id}`} class="action">Edit team</a>
    <a href="javascript:void(0)" class="action">Join team</a>
    <a href="javascript:void(0)" class="action invert">Leave team</a>
    Membership pending. <a href="javascript:void(0)">Cancel request</a>
</div>`;



export async function detailsPage(ctx) {
    const teamId = ctx.params.id;

    ctx.render(until(populateTemplate(teamId), loaderTemplate()));

    async function populateTemplate(teamId) {
        const userId = sessionStorage.getItem('userId');
        const [data, requests] = await Promise.all([
            getTeamById(teamId),
            getRequestsByTeamId(teamId),

        ]);
        requests.forEach(r => {
            r.approve = (e) => approve(e, r);
            r.decline = (e) => leave(e, r._id)
        });

        const isOwner = userId == data._ownerId;
        const members = requests.filter(r => r.status == 'member');
        const pending = requests.filter(r => r.status == 'pending');
        data.memberCount = members.length;

        return teamDetails(data, isOwner, createControls, members, pending);

        function createControls() {
            if (userId != null) {
                const request = requests.find(r => r._ownerId == userId);
                if (isOwner) {
                    return html`<a href=${`/edit/${data._id}`} class="action">Edit team</a>`;
                } else if (request && request.status == 'member') {
                    return html`<a @click=${e => leave(e, request._id)} href="javascript:void(0)" class="action invert">Leave team</a>`;
                } else if (request && request.status == 'pending') {
                    return html`Membership pending. <a @click=${e => leave(e, request._id)} href="javascript:void(0)">Cancel request</a>`;
                } else {
                    return html`<a @click=${join} href="javascript:void(0)" class="action">Join team</a>`;
                }
            } else {
                return '';
            }
        }

        async function join(ev) {
            ev.target.remove();
            await requestToJoin(teamId);
            ctx.render(await populateTemplate(teamId));
        }

        async function leave(event, requestId) {
            const confirmed = confirm(`Are you sure you want to leave?`);
            if (confirmed) {
                event.target.remove();
                await cancelMemebership(requestId);
                ctx.render(await populateTemplate(teamId));

            }
        }

        async function approve(e, request) {
            e.target.remove();
            await approvemembership(request);
            ctx.render(await populateTemplate(teamId));
        }
    }
}


