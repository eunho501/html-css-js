document.write("Ready to go");

// const 막내=document.querySelector("body > div > div > div:last-child")

// 막내.style.color="tomato"

const id = document.querySelector("#find_id");
const pw = document.querySelector("#find_pw");
const sign = document.querySelector("#sign_up");

id.onclick = () => {
  alert("아이디");
  id.style.color = "black";
  pw.style.color = "blue";
  sign.style.color = "black";
};
pw.onclick = () => {
  alert("비번");
  id.style.color = "black";
  pw.style.color = "blue";
  sign.style.color = "black";
};

pw.onclick = () => {
  alert("아이디");
  id.style.color = "black";
  pw.style.color = "blue";
  sign.style.color = "black";
};
