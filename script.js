const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li");
const form = document.getElementById("contact-form");

//  Script para mudar a cor da seção da navbar
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(li => {
        li.classList.remove("active");
        const anchor = li.querySelector("a");
        if (anchor.getAttribute("href").slice(1) === current) {
            li.classList.add("active");
        }
    });
});



//  Script para o formulário do Contact me
      
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("subject", data.subject);
  formData.append("message", data.message);

  fetch(GAS_ENDPOINT, {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    alert("Mensagem enviada com sucesso!");
    form.reset(); // limpa os campos
  })
  .catch(error => {
    console.error("Erro:", error);
    alert("Erro ao enviar. Tenta novamente.");
  });
});