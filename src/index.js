import { getUsers, Store } from "./api";
import { Handlers } from "./handlers";
import { homeTemplate } from "./pages/home";
import { loginTemplate } from "./pages/login";
import { render, renderUsers } from "./renders";
import "./styles.css";

export const app = document.getElementById("app");

getUsers().then(() => {
  console.log("users", Store.users);

  render(loginTemplate);

  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // [#1]
    const { username, password } = loginForm.elements;
    const isLogged = Handlers.login(username.value, password.value);
    if (!isLogged) {
      alert("Bad credentials");
      return;
    }
    render(homeTemplate);
    renderUsers();
    Handlers.configureSearch();
  });
});
