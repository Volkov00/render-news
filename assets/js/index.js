"use strict";
//==================================================>
const itemCard = data.map((item) => createCard(item));
const mySection = document.querySelector(".myNews");
const search = document.querySelector(".search-inp");
const btn = createElement("button", {
  classNames: ["addNews", "fas", "fa-plus-circle"],
});
mySection.append(...itemCard, btn);
//===================================================>
function createCard(item) {
  const card = createElement("article", {
    classNames: ["localInformation"],
  });

  const titleInformation = createElement("div", {
    classNames: ["titleInformation"],
  });

  const title = createElement(
    "h3",
    { classNames: ["title"] },
    document.createTextNode(item.title || "????")
  );

  const span = createElement(
    "span",
    {
      classNames: ["span"],
    },
    document.createTextNode(item.dataPublication || "???")
  );

  titleInformation.append(title, span);

  const par = createElement(
    "p",
    { classNames: ["content"] },
    document.createTextNode(item.newText || "????")
  );

  card.append(titleInformation, par);
  return card;
}
//===========================================

const newFormAdd = () => {
  const blockForm = createElement("div", {
    classNames: ["myBlockForm"],
  });

  const myForm = createElement("form", {
    classNames: ["myForm"],
  });

  const myInput = createElement("input", {
    classNames: ["myInput"],
  });

  const myArea = createElement("textarea", {
    classNames: ["myArea"],
  });

  const myBtn = createElement(
    "button",
    {
      classNames: ["myBtn"],
    },
    document.createTextNode("add news")
  );

  const myBtnCancel = createElement(
    "button",
    {
      classNames: ["myBtnCancel"],
    },
    document.createTextNode("cancel")
  );
  mySection.before(blockForm);
  myForm.append(myInput, myArea, myBtn, myBtnCancel);
  blockForm.append(myForm);

  myBtnCancel.addEventListener("click", (e) => {
    e.preventDefault();
    blockForm.remove();
    btn.style.display = "block";
  });
  myBtn.addEventListener("click", (e) => {
    e.preventDefault();

    blockForm.remove();
    btn.style.display = "block";

    const postObj = {
      title: myArea.value,
      newText: myInput.value,
      dataPublication: new Date().toLocaleDateString(),
    };
    data.push(postObj);
    mySection.prepend(createCard(postObj));
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
search.addEventListener("keyup", (e) => {
  data.filter((item) => {
    if (item.title.includes(e.key)) {
      console.log(1);
    }
  });
});
