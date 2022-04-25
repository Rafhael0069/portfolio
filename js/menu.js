class MobileNavbar {
  constructor(menuMobile, ulNavegacao, navLinks) {
    this.menuMobile = document.querySelector(menuMobile);
    this.ulNavegacao = document.querySelector(ulNavegacao);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.ulNavegacao.classList.toggle(this.activeClass);
    this.menuMobile.classList.toggle(this.activeClass);
  /*   console.log("teste");
    if(this.menuMobilei.activeClass){
        console.log("entrou");
    }else{
        console.log("não entrou");
    } */
    this.animateLinks();
  }

  addClickEvent() {
    this.menuMobile.addEventListener("click", this.handleClick);
    this.navLinks.forEach((link) => {
      link.addEventListener("click", this.handleClick);
    });
  }

  init() {
    if (this.menuMobile) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".menu-mobile",
  ".ul-navegacao",
  ".ul-navegacao li"
);
mobileNavbar.init();
