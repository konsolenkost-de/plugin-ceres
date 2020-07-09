import Vue from "vue";

Vue.directive("open-mobile-navigation",
    {
        bind(el, binding)
        {
            el.onclick = function(event)
            {
                ceresStore.dispatch("loadComponent", "mobile-navigation");

                setTimeout(function()
                {
                    if (document.querySelector(".mobile-navigation"))
                    {
                        document.querySelector(".mobile-navigation").classList.add("open");
                        document.querySelector("body").classList.add("menu-is-visible");
                    }
                }, 1);
            };
        }
    });
