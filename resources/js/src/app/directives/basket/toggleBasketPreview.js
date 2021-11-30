import Vue from "vue";

Vue.directive("toggle-basket-preview",
    {
        bind(el)
        {
            el.addEventListener("click", event =>
            {
                document.body.classList.toggle("basket-open");
                if (document.getElementById("tidio-chat").hidden == false){
                document.getElementById("tidio-chat").hidden = true;
                }else{
                document.getElementById("tidio-chat").hidden = false;
                }
                

                event.preventDefault();
                event.stopPropagation();
            });
        }
    });
