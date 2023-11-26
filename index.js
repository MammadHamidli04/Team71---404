const root = document.getElementById("root");
const nameInput = document.getElementById("name-input");
const surnameInput = document.getElementById("surname-input");
const nameAndsurName = document.querySelector(".intro");
const image = document.querySelector(".img");
const aboutUs = document.getElementById("about-us");
const aboutUss = document.getElementById("about-uss");
const aboutWeb = document.getElementById("about-web");
const imgPlace = document.getElementById("img-place")
const button = document.getElementById("btn");
aboutUs.style.pointerEvents = "none";
aboutUss.style.pointerEvents = "none";
aboutWeb.style.pointerEvents = "none";
imgPlace.src = "/media/WhatsApp Image 2023-11-24 at 8.43.40 PM.jpeg"


button.addEventListener("click", function nameAndSurbame() {
  const name = nameInput.value;
  const surname = surnameInput.value;
  nameAndsurName.innerText = `${
    "Dear" + " " + name + " " + surname + "," + " " + nameAndsurName.innerText
  }`;
  if (name === "" || surname === "") {
    alert("Please fill all fields");
    nameInput.style.border = "1px solid red";
    surnameInput.style.border = "1px solid red";
  } else {
    root.style.display = "none";
    nameAndsurName.style.display = "flex";
    nameInput.innerText = "";
    surnameInput.innerText = "";
    aboutUs.style.pointerEvents = "all";
    aboutUss.style.pointerEvents = "all";
    aboutWeb.style.pointerEvents = "all";
    document.img.appendChild(imgPlace)
  }
});
