import { html, render} from "lit-html";

genNavBar();

function genNavBar() {
  // This is a lit-html template function. It returns a lit-html template.
  const navTemplate = (link) => html`<li><a href="${link}"><p>MP0</p></a></li>`;
  console.log("template called");

  // This rendersto the document body
  render(navTemplate('/projects/hcde-438/mp0/mp0.html'), document.getElementById("menu"));
  render(navTemplate('/projects/hcde-438/mp1/mp1.html'), document.getElementById("menu"));
}