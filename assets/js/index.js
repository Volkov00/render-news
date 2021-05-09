"use strict";
let data = [
  {
    title: "What is Lorem Ipsum?",
    newText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    dataPublication: "08.05.1993",
  },
  {
    title: "Where can I get some",
    newText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    dataPublication: "08.05.1995",
  },
  {
    title: "Where does it come from?",
    newText:
      "ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    dataPublication: "08.05.1996",
  },
];
//==================================================>
const itemCard = data.map((item) => createCard(item));
const mySection = document.querySelector(".myNews");
const btn = document.createElement("button");
btn.classList.add("addNews");
btn.classList.add("fas", "fa-plus-circle");
const searchInp = document.createElement("input");
searchInp.classList = document.createAttribute("searchInp");
//загатовка на живой поиск
// searchInp.addEventListener("keypress", ({ target }) => {
//   let val = target.value;
//   let q = document.querySelector("body");
//   if (q.innerText.search(val) == -1) {
//     console.log(12);
//   }
// });
mySection.append(...itemCard, btn, searchInp);
//===================================================>
function createCard(item) {
  const card = document.createElement("article");
  card.classList.add("localInformation");
  const titleInformation = document.createElement("div");
  titleInformation.classList.add("titleInformation");
  const title = document.createElement("h3");
  title.classList.add("title");
  title.append(document.createTextNode(item.title || "????"));
  const span = document.createElement("span");
  span.classList.add("span");
  span.append(document.createTextNode(item.dataPublication || "???"));
  titleInformation.append(title, span);
  const par = document.createElement("p");
  par.classList.add("content");
  par.append(document.createTextNode(item.newText || "????"));
  card.append(titleInformation, par);
  return card;
}
//===========================================

const newFormAdd = () => {
  const blockForm = document.createElement("div");
  blockForm.classList.add("myBlockForm");
  const myForm = document.createElement("form");
  myForm.classList.add("myForm");
  const myInput = document.createElement("input");
  myInput.classList.add("myInput");
  const myArea = document.createElement("textarea");
  myArea.classList.add("myArea");
  const myBtn = document.createElement("button");
  myBtn.innerText = "ADD NEWS";
  const myBtnCancel = document.createElement("button");
  myBtnCancel.innerText = "Cancel";
  mySection.before(blockForm);
  myBtn.classList.add("myBtn");
  myBtnCancel.classList.add("myBtnCancel");
  myForm.append(myInput, myArea, myBtn, myBtnCancel);
  blockForm.append(myForm);
  myBtnCancel.addEventListener("click", (e) => {
    e.preventDefault();
    blockForm.remove();
    console.dir((btn.style.display = "block"));
  });
  myBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const q = document.createElement("article");
    q.classList.add("localInformation");
    mySection.prepend(q);
    const titleInformation = document.createElement("div");
    titleInformation.classList.add("titleInformation");
    const title = document.createElement("h3");
    title.classList.add("title");
    const span = document.createElement("span");
    span.classList.add("span");
    titleInformation.append(title, span);
    const par = document.createElement("p");
    par.classList.add("content");
    q.append(titleInformation, par);
    title.append(document.createTextNode(myInput.value || "Новости нету"));
    par.append(document.createTextNode(myArea.value || "Новости нету"));
    span.append(document.createTextNode(new Date().toLocaleDateString()));
    blockForm.remove();
    console.dir((btn.style.display = "block"));
  });
};
//=======================================================================>
btn.addEventListener("click", newFormAdd);
function hiddenBtn({ target }) {
  target.style.display = "none";
}
btn.addEventListener("click", hiddenBtn);
function showBtn({ target }) {
  target.style.display = "block";
}
