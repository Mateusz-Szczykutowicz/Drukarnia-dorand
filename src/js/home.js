let x = "Witaj na stronie drukarnii Dorand";
console.log(x);

const form = document.querySelector("#contact_form");
const formMessage = document.querySelector("#form_message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newForm = new FormData(form);
    formMessage.style.display = "block";
    setTimeout(() => {
        formMessage.style.display = "none";
    }, 5000);

    console.log(newForm.get("name"));
    console.log(newForm.get("tel"));
    console.log(newForm.get("email"));
    console.log(newForm.get("subject"));
    console.log(newForm.get("message"));
});
