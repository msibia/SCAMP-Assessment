// Validating Empty Field
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
        alert("Fill All Fields !");
    } else {
        document.getElementById('form').submit();
        alert("Form Submitted Successfully...");
    }
}
//Function To Display Popup
function div_show() {
    document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide() {
    document.getElementById('abc').style.display = "none";
}

//DOM Elements
const time = document.getElementById("time"),
    greeting = document.getElementById("greeting")
name = document.getElementById("name");

//Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and Greeting
function setGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // morning
        document.body.style.backgroundImage = "url('background_image.jpg')";
        greeting.textContent = 'Good Morning'
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('image.jpg')";
        greeting.textContent = 'Good Afternoon'
    } else {
        // Evening
        document.body.style.backgroundImage = "url('image.jpg')";
        greeting.textContent = 'Good Evening'

    }
}
showTime();
setBgGreet();