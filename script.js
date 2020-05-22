class Panels {
  constructor() {
    this.siteWrap = document.getElementById("site-wrap");
    this.mainName = document
      .getElementById("main")
      .querySelector("span[name='main']");
    this.mainButtons = document.getElementById("main").querySelectorAll("a");
    this.upLeftButtons = document
      .getElementById("upLeft")
      .querySelectorAll("a");
    this.upButtons = document.getElementById("up").querySelectorAll("a");
    this.upRightButtons = document
      .getElementById("upRight")
      .querySelectorAll("a");
    this.leftButtons = document.getElementById("left").querySelectorAll("a");
    this.rightButtons = document.getElementById("right").querySelectorAll("a");
    this.downLeftButtons = document
      .getElementById("downLeft")
      .querySelectorAll("a");
    this.downButtons = document.getElementById("down").querySelectorAll("a");
    this.downRightButtons = document
      .getElementById("downRight")
      .querySelectorAll("a");

    this.addListeners();
  }

  changePosition(top, left) {
    this.siteWrap.style.top = top;
    this.siteWrap.style.left = left;
  }

  addListeners() {
    this.mainName.addEventListener("click", () => {
      this.siteWrap.classList.toggle("active");
    });

    for (let element in this) {
      if ((element !== "siteWrap") & (element !== "mainName")) {
        for (let item of this[element]) {
          item.addEventListener("click", () => {
            this.changePosition(
              item.getAttribute("data-top"),
              item.getAttribute("data-left")
            );
          });
        }
      }
    }
  }
}

let panels = new Panels();
