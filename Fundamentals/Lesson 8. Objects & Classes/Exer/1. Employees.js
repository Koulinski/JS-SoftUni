function employeesApp(arr) {

    class Emp {
        constructor(name, number) {
            this.name = name;
            this.number = number;
        }
        show() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.number}`);
        }
    }
    for (const el of arr) {
        let name = el;
        let letters = el.length;
        let employee = new Emp(name, letters);
        employee.show();
    }
   
}
employeesApp([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);