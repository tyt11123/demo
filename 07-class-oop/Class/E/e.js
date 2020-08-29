class Person {
    constructor(options) {
        this.age = options.age;
        this.name = options.name;
    }

    info() {
        return `The person is called ${this.name} and is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(options) {
        super(options);
        this.gpa = options.gpa;
    }

    info() {
        return `The person is called ${this.name} and is ${this.age} years old. He has an overall GPA of ${this.gpa} in the university.`;
    }
}

const student = new Student( {age: 44, name: 'Tom', gpa: 4.0 });
console.log(student.info()) // The person is called Tom and is 44 years old