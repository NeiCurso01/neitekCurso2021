var yearDate = 1998;

function nameAndYearDate(){
    const name = "Kevin Cantu";
    return "name: " + name + " birthDate: " + yearDate;
}

function calculateAge(){
     var actualDate = new Date();
     let age = actualDate.getFullYear() - yearDate;
     console.log(age);
}

calculateAge();
nameAndBirthDate();
