const form = document.querySelector("body>form");

form.style.border = "1px solid";

form.addEventListener("submit", (e) => {
  e.preventDefault(); //새로고침방지
  const name = document.querySelector("#r");
  console.log(name.value);

  const item = document.querySelector("#i");
  console.log(item.value);

  const address = document.querySelector("#a");
  console.log(address.value);

  const message = `${name.value}님, 저희 말고기를 찾아주셔서 감사합니다 선택하신 상품의 가격은 ${item.value}원입니다 받으실주소는 ${address.value}가 맞나?`;

  if (confirm(message)) {
    alert("곧배송");
  } else {
    alert("다시한번 생각 말고기");
  }
});
