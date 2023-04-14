import { Store } from "./api";
import { renderUsers } from "./renders";

export class Handlers {
  static login(username, password) {
    console.log(username, password);

    // [#2]
    const user = Store.users.find(
      (user) =>
        user.login.username === username && user.login.password === password
    );

    if (user) {
      Store.currentUser = user;
      return true;
    }
    // [#2__end]

    return false;
  }

  static configureSearch() {
    const searhbar = document.getElementById("searchbar");
    searhbar.addEventListener("input", (event) => {
      // Do the search [#3]
      Store.isSearching = true;
      const value = event.target.value;

      if (value === "") {
        Store.isSearching = false;
        Store.users = Store.defaultUsers;
        return;
      }

      Store.users = Store.defaultUsers.filter((item) =>
        JSON.stringify(item).includes(value)
      );
      renderUsers();
      // [#3__end]
    });
  }
}
