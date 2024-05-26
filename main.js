// CAL BACK FUNCTION


function getFullname(func) {
    return func()
}

function myName() {
    return "My Name is" + " " + "Usai Mong" + " " + "Marma"
}

console.log(myName(getFullname))
console.log(getFullname(myName))
