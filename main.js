let form = document.querySelector("form");
let input = document.querySelector("input");
let container = document.getElementById("container");



container.addEventListener("click", (eo) => {

    if (eo.target.className == "icon-trash icon") {
        eo.target.parentElement.parentElement.remove();

    } else if (eo.target.className == "icon-angry2 icon") {
        eo.target.classList.add("dn");

        const heart = ` <span class="icon-heart">   </span> `
        eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.add("finish");




        eo.target.parentElement.innerHTML += heart;




    } else if (eo.target.className == "icon-heart") {
        eo.target.parentElement.parentElement.getElementsByClassName("task-text")[0].classList.remove("finish");

        eo.target.classList.add("dn");

        const angry = ` <span class="icon-angry2 icon"> </span>`;

        eo.target.parentElement.innerHTML += angry;

    } else if (eo.target.className == "icon-star icon") {

        eo.target.classList.add("orange")
        container.prepend(eo.target.parentElement)

    } else if (eo.target.className == "icon-star icon orange") {

        eo.target.classList.remove("orange")


    }

});







form.addEventListener("submit", (eo) => {

    eo.preventDefault();
    const task = ` <div class="task">
    <span class="icon-star icon"> </span>
    <p lang="ar" class="task-text">${input.value}</p>

    <div>
        <span class="icon-trash icon"> </span>

        <span class="icon-angry2 icon"> </span>
    </div>

    <!-- <span class="icon-heart">   </span> -->
</div>`

    container.innerHTML += task;

    input.value = "";


});