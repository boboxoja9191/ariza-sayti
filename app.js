const forma = document.getElementById("arizaForm");
const javob = document.getElementById("javob");

forma.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Arizangiz qabul qilindi")
  forma.reset()
});
