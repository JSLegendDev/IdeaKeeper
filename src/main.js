import "./style.css";
import { getName } from "@tauri-apps/api/app";
import DOMPurify from "dompurify";

function card(parent, { key, title, description }) {
  const markup = `
    <article id=${key} class="card">
      <h1 class="text single-line">${title}</h1>
      <p class="text single-line">${description}</p>
    </article>
  `;

  parent.innerHTML += DOMPurify.sanitize(markup);

  const container = document.getElementById(key);
  const titleNode = container.children[0];
  const descriptionNode = container.children[1];

  console.log(container);
  console.log(titleNode);

  titleNode.setAttribute("contenteditable", true);
  descriptionNode.setAttribute("contenteditable", true);

  return {
    container,
    titleNode,
    descriptionNode,
  };
}

async function main() {
  const app = document.getElementById("app");
  const cards = [
    { title: "Hello World!", description: "This is a great idea" },
    { title: "Hello World 2!", description: "This is a description" },
    { title: "Hello World 3!", description: "This is a description" },
    { title: "Hello World 4!", description: "This is a description" },
    { title: "Hello World 5!", description: "This is a description" },
    { title: "Hello World 6!", description: "This is a description" },
    { title: "Hello World 7!", description: "This is a description" },
  ];

  const cardRefs = [];
  for (let i = 0; i < cards.length; i++) {
    cardRefs.push(card(app, { key: i, ...cards[i] }));
  }

  console.log(cardRefs);
}

main();
