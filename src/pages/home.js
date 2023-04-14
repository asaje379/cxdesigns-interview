import { Store } from "../api";

const getUserTemplate = (user) => `<div class="profile">
  <img src="${user.picture.medium}" alt="" />
  <div>
    <div>
      <h5>${user.name.first} ${user.name.last}</h5>
      <div>${user.location.city}, ${user.location.state}, ${user.location.country}</div>
    </div>
    <div>
      ${user.email} - ${user.phone}
    </div>
  </div>
</div>`;

export function getUsersTemplate() {
  return Store.users.map((user) => getUserTemplate(user)).join(""); // [#3]
}

export const homeTemplate = `
<div>
  <div class="search">
    <input type="text" placeholder="Rechercher..." id="searchbar" />
  </div>
  <div id="list-user"></div>
</div>
`;
