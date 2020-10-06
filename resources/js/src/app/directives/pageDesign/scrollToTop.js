import Vue from "vue";

Vue.directive("scroll-to-top",
    {
        bind(el, binding)
        {
            el.onclick = event =>
            {
                window.scrollTo({ top: 0, behavior: "smooth" });
            };
        }
    });
