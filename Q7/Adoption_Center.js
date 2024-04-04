setInterval(() => {
    let currentDate = new Date();
    document.getElementById("dateTime").innerHTML = (currentDate);
}, 1000);

function validateForm1() {
    let radio = document.querySelectorAll('input[type="radio"]:checked');
    if (radio.length < 3) {
        alert("Please fill out all the fields");
        return false;
    }
    return true;
}

function validateForm2() {
    let radio = document.querySelectorAll('input[type="radio"]:checked');
    let name = document.getElementById("nameGiver");
    let email = document.getElementById("emailGiver");

    let emailCheck = email.value.includes("@") && email.value.includes(".");

    if (radio.length < 5 || !name.value || !email.value || !emailCheck) {
        alert("Please fill out all the fields");
        return false;
    }
    return true;
}