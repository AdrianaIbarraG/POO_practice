let divEmployees = document.getElementById("divEmployees");
/**
    *Clase Person que representa a una persona y su información
*/

class Person {
    /** @property {String} name - identifica el nombre de la persona */
    name="";

    /** @property {String} email - identifica el email de la persona */
    email="";

    /** @property {Number} age - identifica la edad de la persona */
    age=0;

    /** @property {String} resume - identifica e resume de la persona */
    resume="";

    /** @property {String} id - identifica como única a la persona */
    id=0;

    
    /** @static {Number} total - Variable de clase (estática) que cuenta a las personas, 
        * existe una vez y se accede mediante la clase
     */
    static total=0; // no se hereda, 

    constructor (name, email, age, resume){
        this.name=name;
        this.email=email.toLowerCase(); // para que los datos se pongan en minusculas
        this.age= (age<18)?18:age; // significa que si la persona tiene menos de 18 años, se pondrá que tiene 18
        this.resume=resume;
        Person.total++; // cada vez que se agregue una persona, va a incrementar
        this.id=Person.total;
    }//constructor person
    static printTotal (){
        console.log(Person.total);
    }// printTotal

    /**
        * @param {HTMLELmennt} div - Elementno en HTML donde se anexa la información de lo
     */
    printInfo(div){// método
        //console.log(this.name, this.email, this.age, this.resume);
        div.insertAdjacentHTML("beforeend",
            `
            <div id="card_${this.id}" class="card text-bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">${this.name}</div>
                <div class="card-body">
                <h5 class="card-title">${this.email}</h5>
                <p class="card-text">${this.resume}</p>
                <p class="card-text"><strong>${this.age}</strong></p>
                </div>
            </div>`);
            
    }// printInfo Person
}// class Person


class Employee extends Person { // quiere decir que a parte de la clase employee, tendrá características de personas
        department="";
        salary=0.0;
        constructor(name, email, age, resume, department, salary){
            super(name, email, age, resume); // llamar al constructor de personal
            this.department=department;
            this.salary= salary;
        }//constructor de employee

        calculateSalary(){
            return ((this.salary*30)*1.16).toFixed(2);
        }// calculate Salary

        printInfo(div){ // método
        
            super.printInfo(div);
            let cardBody = document.getElementById(`card_${this.id}`) // llamar a cardBody para usarlo
                .getElementsByClassName("card-body")[0];
            cardBody.insertAdjacentHTML("beforeend",`
                <p class="card-text">${this.department}</p>
                <p class="card-text text-end"><strong>${this.calculateSalary()}</strong></p>
                `);
            /* console.log(this.department, this.salary, this.calculateSalary()); */
        }// PrintInfo Employee
}// class Employee

//Así se asignan los valores si se tiene constructor de persona en persona 
        /* let chimi = new Employee("Chimi", "chimi@gmail.com", 20, "Java FUllStack Developer", "IT", 550.00);
        let musa = new Employee("Musa", "musa@gmail.com", 27, "Sr. Web Developer", "IT", 1000.00);
        let camille = new Employee("Camille", "camille@GMAIL.com", -17, "Java FUllStack Developer", "IT", 500.00);


        chimi.printInfo(divEmployees);
        musa.printInfo(divEmployees);
        camille.printInfo(divEmployees); */


//Arreglo y forEach para evitar poner de persona en persona
let employees=[];
employees.push(
    new Employee("Chimi", "chimi@gmail.com", 20, "Java FUllStack Developer", "IT", 550.00),
    new Employee("Musa", "musa@gmail.com", 27, "Sr. Web Developer", "IT", 1000.00),
    new Employee("Camille", "camille@GMAIL.com", -17, "Java FUllStack Developer", "IT", 500.00),
    new Employee ("Adriana Ibarra", "adriana@gmail.com", 27, "Java Full Stack Developer", "IT", 600.00),
    new Employee ("Andrés Millán", "Andres@GMAIL.com", 26, "Sr Automation Engineer", "Automation", 1500.00)
);

employees.forEach(e=> e.printInfo(divEmployees));

Person.printTotal(); 



/* let adriana = new Person ("Adriana Ibarra", "adriana@gmail.com", 27, "desconocido" );
let andres = new Person ("Andrés Millán", "Andres@GMAIL.com", -26, "desconocido");  *///se cambia a 18 por la validación que hicismo en el constructor

/* let adi = new Person();
adi.name="Adriana Ibarra";
adi.age=27;
adi.email="adriana@gmail.com"; */ // Así se deben asignar los datos si no se tiene constructor
/* adriana.resume="otra cosa"; */

/* adriana.printInfo();
andres.printInfo(); */ // esto imprimirá solo los datos de person si no se agrega print info en Employee 