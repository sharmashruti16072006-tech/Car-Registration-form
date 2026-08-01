// Prevent selecting past dates

const today = new Date().toISOString().split("T")[0];

document.querySelectorAll('input[type="date"]').forEach(date => {
    date.min = today;
});

// Form validation

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value.trim();
    const phone = document.querySelector('input[type="tel"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const pickup = document.querySelectorAll('input[type="date"]')[0].value;
    const drop = document.querySelectorAll('input[type="date"]')[1].value;

    if(name==="" || phone==="" || email==="" || pickup==="" || drop===""){
        alert("⚠️ Please fill all the fields.");
        return;
    }

    if(drop < pickup){
        alert("Return date cannot be before Pickup date.");
        return;
    }

    alert("🎉 Registration Successful!\n\nThank you for choosing Rental Car.");

    form.reset();

});
