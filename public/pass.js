function checkPassword() {
  const correctPassword = "123";
  const input = document.getElementById("password").value;

  if (input === correctPassword) {
    window.location.href = "private.html"; // Or any target page
  } else {
    alert("Incorrect password. Try again.");
    document.getElementById("password").value = "";
  }
}



