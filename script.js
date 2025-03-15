const input = document.querySelector("textarea");
const select = document.querySelector("select");

window.addEventListener("load" , (e) => {
    if(localStorage.getItem("data")) {
        input.value = localStorage.getItem("data");
    }

    input.className = localStorage.getItem("selectedTheme");

});

input.addEventListener("focusout", (e) => {
    localStorage.setItem("data" , input.value);
});

select.addEventListener("change" , (e)=> {

    input.className = select.value;
    localStorage.setItem("selectedTheme" , select.value);

});
