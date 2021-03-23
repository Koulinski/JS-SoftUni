/* function constructACat(arr) {

    for (const el of arr) {
        let [name, age] = el.split(' ');

        class Cat {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
        }
        let cats = new Cat(name, age);
        console.log(`${cats.name}, age ${cats.age} says Meow`);
    }
}
constructACat(['Mellow 2', 'Tom 5']); */


function constructACat(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (const el of arr) {
        let [name, age] = el.split(' ');
        let cat = new Cat(name, age);
        cat.meow();
    }
}
constructACat(['Mellow 2', 'Tom 5']);