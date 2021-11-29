import Vue from "vue";

Vue.directive("toggle-basket-preview",
    {
        bind(el)
        {
            el.addEventListener("click", event =>
            {
                document.body.classList.toggle("basket-open");
                document.getElementById("#tidio-chat iframe").style.display = "none";

                event.preventDefault();
                event.stopPropagation();
            });
        }
    });
