const forma = document.getElementById("arizaForm");
const javob = document.getElementById("javob");

forma.addEventListener("submit", function (e) {
  e.preventDefault();
  javob.textContent = "Ariza qabul qilindi";
  javob.style.color = "green";
  forma.reset();
});

