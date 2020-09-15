"use strict";

const btnTulosta = document.querySelector("#btnTulosta");

btnTulosta.onclick = function () {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  const usernamepassword = document.querySelector("#usernamepassword");
  usernamepassword.innerHTML = ` Tervetuloa ${username}, ${password}`;
  return false;
};
