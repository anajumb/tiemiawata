
/********** DROPDOWN *********/

const menuBotao = document.querySelector("#menu-botao");
const linkNav = document.querySelector("#link-nav");

menuBotao.addEventListener("click", () => {
    linkNav.classList.toggle("ativo");
});

const linksMenu = document.querySelectorAll("#link-nav a");

linksMenu.forEach(link => {
    link.addEventListener("click", () => {
        linkNav.classList.remove("ativo");
    });
});


/**************CARD DROPDOWN *************/

const botoes = document.querySelectorAll(".botao-expandir");

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        const card = botao.closest(".card-atuacao");

        card.classList.toggle("aberto");

        if (card.classList.contains("aberto")) {
            botao.textContent = "−";
            botao.setAttribute("aria-label", "Mostrar menos");
        } else {
            botao.textContent = "+";
            botao.setAttribute("aria-label", "Mostrar mais");
        }

    });

});


/************** CARROSSEL *************/

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide");

let slideAtual = 0;

function proximoSlide() {

    slideAtual++;

    track.style.transform = `translateX(-${slideAtual * 100}%)`;

    // Quando chegar na cópia da primeira imagem
    if (slideAtual === slides.length - 1) {

        setTimeout(() => {

            // Remove a animação temporariamente
            track.style.transition = "none";

            slideAtual = 0;

            track.style.transform = "translateX(0)";

            // Força o navegador a atualizar
            track.offsetHeight;

            // Liga a animação novamente
            track.style.transition = "transform 0.8s ease-in-out";

        }, 800);
    }
}

setInterval(proximoSlide, 5000);