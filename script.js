function showMessage() {
    alert("Welcome to MediReminder Website!");
}

function setReminder() {

    let medicine = document.getElementById("medicineName").value;

    let time = document.getElementById("medicineTime").value;

    let output = document.getElementById("output");

    if (medicine === "" || time === "") {
        output.innerHTML = "Please enter medicine name and time.";
        output.style.color = "red";
    }
    else {
        output.innerHTML = `Reminder set for ${medicine} at ${time}`;
        output.style.color = "green";

        alert(`Reminder Added Successfully for ${medicine}`);
    }
}