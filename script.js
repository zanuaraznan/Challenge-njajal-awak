let wrap = document.querySelector(".wrap");
wrap.innerHTML += `
            <div class="leftBtn bi bi-door-open"></div>
            <div class="rightBtn bi bi-arrow-right-short"></div>  
            `;

let leftBtn = document.querySelector(".leftBtn");
leftBtn.addEventListener("click", function () {
   window.location.href = "/index.html"; //
});
