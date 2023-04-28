const list = document.querySelector(".list");

async function getUsers() {
  const res = await axios.get("/assets/users.json");
  const data = res["data"];
  return data;
}

async function showUsers() {
  const data = await getUsers();
  data.map((user) => {
    const isLogged = user["isLogged"] ? "Online" : "Offline";
    list.innerHTML += `
        <li>
          <span><i class="ph ph-identification-badge"></i> ${user["id"]}</span>
          <span><i class="ph ph-user"></i> ${user["user"]}</span>
          <span><i class="ph ph-globe"></i> ${isLogged}</span>
        </li>
    `;
  });
}

showUsers();
