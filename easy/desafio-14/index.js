class Pilot {

    constructor(firstName, lastName, birthday) {

        this.firstName = firstName;

        this.lastName = lastName;

        this.birthday = new Date(birthday);

        this.flightLicense = false;

    }

    getMonth() {

        return String(this.birthday.getMonth() + 1).padStart(2, "0");

    }

    getDecade() {

        return String(Math.floor(this.birthday.getFullYear() * 10) / 10);

    }

    createLicense() {

        if (!this.flightLicense) {

            let license = [];

            for (let i = 0; i < 5; i++) {

                if (i >= this.lastName.length) {

                    license.push("9");

                } else {

                    license.push(this.lastName[i].toUpperCase());
                    
                }

            }

            license.push("-", this.getDecade()[2] ,this.getMonth(), this.getDecade()[3], ".", this.firstName[0].toLowerCase());

            this.flightLicense = license.join("").toString();

            return;

        }

        return "Flight License already exists";

    }

}


const pilots = [
    new Pilot("John", "Doe", "1977-05-25"),
    new Pilot("Hal", "Jordan", "1995-09-02"),
    new Pilot("Carol", "Danvers", "1968-08-17"),
    new Pilot("Poe", "Dameron", "1979-03-09"),
];

for (const pilot of pilots) {

    pilot.createLicense();  

    console.log(pilot);

}