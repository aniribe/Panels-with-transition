class Panels {
  constructor() {
    this.mainButtons = document.getElementById("main").querySelectorAll("a");

    this.addListeners();
  }

  addListeners() {
    for (let element in this) {
      for (let item of this[element]) {
        console.log(item);
        item.addEventListener("click", this.changePosition);
      }
    }
  }

  changePosition() {
    siteWrap.style.top = this.getAttribute("data-top");
    siteWrap.style.left = this.getAttribute("data-left");
  }
}

let panels = new Panels();
// console.log(panels.mainButtons);

const siteWrap = document.getElementById("site-wrap");
const mainPanel = document.getElementById("main");
const upPanel = document.getElementById("up");
const upRightPanel = document.getElementById("upRight");

const mainUpBtn = mainPanel.querySelector("[name='main-up']");
const mainUpRightBtn = mainPanel.querySelector("[name='main-up-right']");

const upDownBtn = upPanel.querySelector("[name='up-down']");
const upRightBtn = upPanel.querySelector("[name='up-right']");

const upRightDownLeftBtn = upRightPanel.querySelector(
  "[name='upRight-down-left']"
);
const upRightLeftBtn = upRightPanel.querySelector("[name='upRight-left']");

// console.log(mainUpBtn);

// function changePosition() {
//   siteWrap.style.top = this.getAttribute("data-top");
//   siteWrap.style.left = this.getAttribute("data-left");
// }

// mainUpBtn.addEventListener("click", changePosition);
// mainUpRightBtn.addEventListener("click", changePosition);

upDownBtn.addEventListener("click", function () {
  //   mainPanel.style.top = "0";
  //   upPanel.style.top = "-100vh";
  siteWrap.style.top = "-100vh";
});

upRightDownLeftBtn.addEventListener("click", function () {
  //   mainPanel.style.top = "0";
  //   mainPanel.style.left = "0";
  //   upRightPanel.style.top = "-100vh";
  //   upRightPanel.style.left = "100vw";
  siteWrap.style.top = "-100vh";
  siteWrap.style.left = "0";
});

upRightLeftBtn.addEventListener("click", function () {
  //   upPanel.style.top = "0";
  //   upPanel.style.left = "0";
  //   upRightPanel.style.top = "-100vh";
  //   upRightPanel.style.left = "100vw";
  //   siteWrap.style.top = "-100vh";
  siteWrap.style.left = "0";
});

upRightBtn.addEventListener("click", function () {
  //   upPanel.style.top = "0";
  //   upPanel.style.left = "0";
  //   upRightPanel.style.top = "-100vh";
  //   upRightPanel.style.left = "100vw";
  //   siteWrap.style.top = "-100vh";
  siteWrap.style.left = "-100vw";
});
