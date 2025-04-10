export class Main {

    name = "";
    age = 0;
    gender = "";

    constructor(){
       console.log("Hello from constructor");
    }

    printName = () => {
        console.log(`Name: ${this.name}`)
    }

    printAge = () => {
        console.log(`Age: ${this.age}`)
    }

    printGender = () => {
        console.log(`Gender: ${this.gender}`)
    }

}
export class Main2 {

    #name = "";
    #age = 0;

    constructor(name = "", age = 0){
        this.#name = name;
        this.#age = age;
    }

    #printData = () => {
        console.log(`Name: ${this.#name}\nAge: ${this.#age}\n`);
    }

    print = () => {
        this.#printData();
    }

}

export class Main3{
    
    static print = () => {
        console.log("Hello");
    }

    static check = () => {
        const obj = {
            name: "jj",
            age: 0
        }
        if("name" in obj)
            console.log("True");
        else
            console.log("False");
    }
}