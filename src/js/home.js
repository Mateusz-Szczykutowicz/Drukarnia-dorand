const hello = "Witaj na stronie drukarnii Dorand";
const authors =
    "Created by:\n\nMateusz Szczykutowicz\nhttps://about.deltastorm.pl/\nSzymon Kwiatkowki\nhttps://www.instagram.com/smnart_studio/";
console.log(hello);
console.log(authors);

const form = document.querySelector("#contact_form");
const formMessage = document.querySelector("#form_message");

const aboutUsButton = document.querySelector("#aboutUsButton");
const offerButton = document.querySelector("#offerButton");
const contactButton = document.querySelector("#contactButton");

const aboutUs = document.querySelector("#aboutUsElement");
const offer = document.querySelector("#offerElement");
const contact = document.querySelector("#contactElement");

aboutUsButton.addEventListener("click", () => {
    window.scrollTo({
        top: aboutUs.offsetTop - 30,
        behavior: "smooth",
    });
});

offerButton.addEventListener("click", () => {
    window.scrollTo({
        top: offer.offsetTop - 10,
        behavior: "smooth",
    });
});

contactButton.addEventListener("click", () => {
    window.scrollTo({
        top: contact.offsetTop - 30,
        behavior: "smooth",
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newForm = new FormData(form);
    formMessage.style.display = "block";
    setTimeout(() => {
        formMessage.style.display = "none";
    }, 5000);

    for (const child of form.children) {
        if (child.value !== "WYŚLIJ") {
            child.value = "";
        }
    }
    fetch(`https://dorand.deltastorm.pl/mail`, {
        method: "POST",
        body: newForm,
    })
        .then((res) => res.json())
        .then((res) => console.log(res));
});
