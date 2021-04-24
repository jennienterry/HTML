function join() {
  var pwElem1 = document.getElementById("pw1");
  var pwElem2 = document.getElementById("pw2");

  if (pwElem1.value !== pwElem2.value) {
    alert("비밀번호를 확인 해주세요.");
    return;
  }
  location.href = "login.html";
}

function goToBack() {
  history.back();
}
