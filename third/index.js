const form = document.querySelector("body>form");
form.style.border = "1px solid";
form.addEventListener("submit", (e) => {
  e.preventDefault(); //새로고침방지
  const i = document.querySelector("#i");
  console.log(i.value);

  const message = `${i.value}님, 저희 허브폰에 회원가입해주셔서 감사합니다`;

  if (confirm(message)) {
    alert("환영");
  } else {
    alert("취소");
  }
});
