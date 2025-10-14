const toggleThemeBtn = document.getElementById("toggle-theme-btn");
const colorPicker = document.getElementById("color-picker");
const bgPicker = document.getElementById("bg-color-picker");

document.body.classList.add("clase-ejemplo");

toggleThemeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        toggleThemeBtn.textContent = "Activar Light Mode"; 

    } else {
        toggleThemeBtn.textContent = "Activar Dark Mode";

    }
   // alert("me diste click");
}
);

colorPicker.addEventListener("change", function() {
    document.body.style.color = colorPicker.value;
});

bgPicker.addEventListener("change", function() {
    document.body.style.background = bgPicker.value;
    });
    