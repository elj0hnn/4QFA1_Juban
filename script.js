function inputValidation(input) {
    if (input.value == "") {
        input.style.border = "2.5px dashed #eb4539";
    }
}
function removeValidationStyle(input) {
    input.style.border = "2.5px dashed #76f066";
}
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var display = document.getElementById("display");
    display.innerHTML = "";
    var fields = document.querySelectorAll("input, select, textarea");
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].name!= "passwordVisibility") {
            display.innerHTML += fields[i].name + ": " + fields[i].value + "<br>";
        }
    }
});

function clearDisplay() {
    var display = document.getElementById("display");
    display.innerHTML = "";
}