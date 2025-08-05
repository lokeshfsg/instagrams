let loki = document.getElementsByClassName("fa-regular fa-heart");

for (let i = 0; i < loki.length; i++) {
    loki[i].addEventListener("click", function() {
         this.classList.toggle("fa-regular");
        this.classList.toggle("fa-solid");

        this.classList.toggle("change");
    });
}
let val = document.getElementsByClassName("stories-img"); 
for (let i = 0; i < val.length; i++) {
    val[i].addEventListener("click", function() {
        window.open("https://youtu.be/dlx8TanWFys");
    });
}