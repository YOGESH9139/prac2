document.getElementById("regform").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const eventName = document.getElementById("event").value;
    document.getElementById("msg").textContent = "Registration Successful! Thank you, " + name + ". Registered for the " + eventName + "event.";
    document.getElementById("regform").reset();
})