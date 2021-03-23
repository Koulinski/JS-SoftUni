function matrix(num) {

    function lines(a) {

        let thelineOne = (a + ' ').repeat(a);;
        return thelineOne + '\n';
    }

    function reps(ass) {
        for (let i = 1; i <= ass; i++) {
            return lines(ass).repeat(ass-1);
        }

    }
    return lines(num) + reps(num);
  
}
let result = matrix(17)
console.log(result);




/* function matrix(num) {


}
let result = matrix(3)
console.log(result); */