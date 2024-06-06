const mobileMenu = document.querySelector(".home__burguer-menu-mobile");
const burgerMenu = document.querySelector(".burger-menu");
const radioMenus = document.querySelectorAll("input[type='radio']");
const slideSource = document.querySelector(".slide-show__slide");
const slideContent = document.querySelector(".slide-comments__content");

const slideShowContent = [
  {
    source: "../../../assets/images/fishBowl-Image.svg",
    content:
      "1. Entre em contato conosco para conseguir seu equipamento Blean. Mande uma mensagem para o email 'blean@contato.com', ou uma mensagem para '+55 (11)99999-9999",
  },
  {
    source: "/assets/videos/arduino.mp4", // for some reason it doesn't work with dynamic path ('./')
    content:
      "2. Use o equipamento para análise da água, por exemplo, como mostrado no vídeo",
  },
  {
    source: "../../../assets/images/Statistic-Image.png",
    content:
      "3. Faça login no site com a conta que criarmos para você (registrada já no seu equipamento), e veja os dados da análise!",
  },
];
const slideShow = (elementId) => {
  const sourceEl =
    elementId === "2"
      ? document.createElement("video")
      : document.createElement("img");

  if (elementId === "2") {
    sourceEl.setAttribute("controls", "");
    sourceEl.setAttribute("autoplay", "");
    const sourceVideo = document.createElement("source");
    sourceVideo.src = slideShowContent[elementId - 1].source;
    sourceVideo.type = "video/mp4";
    sourceEl.appendChild(sourceVideo);
  } else {
    sourceEl.src = slideShowContent[elementId - 1].source;
  }

  if (slideSource.childNodes.length > 0) {
    slideSource.removeChild(slideSource.firstChild);
  }
  slideSource.appendChild(sourceEl);
  slideContent.textContent = slideShowContent[elementId - 1].content;
};
slideShow("1");

radioMenus.forEach(
  (radio) =>
    (radio.onclick = () => {
      slideShow(radio.id);
    })
);
burgerMenu.addEventListener("click", () => {
  // burger menu func
  mobileMenu.classList.toggle("active");
  burgerMenu.classList.toggle("change");
});
