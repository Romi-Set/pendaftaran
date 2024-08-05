document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  const message = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;

    const email = document.getElementById("email").value;

    if (username === "" || email === "") {
      message.textContent = "Semua field harus diisi!";

      message.style.color = "red";
    } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
      message.textContent =
        "Nama pengguna hanya boleh mengandung huruf dan angka!";

      message.style.color = "red";
    } else {
      message.textContent = `Pendaftaran berhasil! Selamat datang, ${username}!`;

      message.style.color = "green";
    }
  });
});
