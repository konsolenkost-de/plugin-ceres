import Vue from "vue";

Vue.directive("toggle-basket-preview",
    {
        bind(el)
        {
            el.addEventListener("click", event =>
            {
                document.body.classList.toggle("basket-open");
                document.getElementById("tidio-chat").hidden = true;

                event.preventDefault();
                event.stopPropagation();
            });
        }
    });
