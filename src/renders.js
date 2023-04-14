import { app } from ".";
import { getUsersTemplate } from "./pages/home";

export function render(template, root = app) {
  root.innerHTML = template;
}

export function renderUsers() {
  render(getUsersTemplate(), document.getElementById("list-user"));
}
