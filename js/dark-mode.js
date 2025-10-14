const toggleThemeBtn = document.getElementById("toggle-theme-btn");

document.body.classList.add("clase-ejemplo");

toggleThemeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");
   // alert("me diste click");
}
);