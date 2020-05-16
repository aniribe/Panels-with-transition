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

console.log(mainUpBtn);

mainUpBtn.addEventListener("click", function () {
  //   mainPanel.style.top = "100vh";
  //   upPanel.style.top = "0";
  siteWrap.style.top = "0";
});

upDownBtn.addEventListener("click", function () {
  //   mainPanel.style.top = "0";
  //   upPanel.style.top = "-100vh";
  siteWrap.style.top = "-100vh";
});

mainUpRightBtn.addEventListener("click", function () {
  //   mainPanel.style.top = "100vh";
  //   mainPanel.style.left = "-100vw";
  //   upRightPanel.style.top = "0";
  //   upRightPanel.style.left = "0";
  siteWrap.style.top = "0";
  siteWrap.style.left = "-100vw";
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
