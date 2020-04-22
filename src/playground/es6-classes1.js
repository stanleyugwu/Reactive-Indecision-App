class Person {
    constructor(name = 'Anony', age = 0) {
        this.name = name;
        this.age = age;
        this.human = (this.age > 0) ? true : false;
        console.log('New Person Initialized!')
    }
    greet() {
        return `Hello am ${this.name}`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }
}

class Traveller extends Student {
    constructor(name, age, major, location) {
        super(name, age, major);
        this.location = location;
    }

    greet() {
        let prevGreet = super.greet();
        return (!!this.location) ? prevGreet += ` and i stay in ${this.location}` : prevGreet
    }
}

const ada = new Person('Adamma', 24);
console.log(ada.getDescription())

const obi = new Student('Stan');
console.log(obi.hasMajor(), obi.age)

const trv = new Traveller('stan', 33, 'cs', 'Enugu');
console.log(trv)