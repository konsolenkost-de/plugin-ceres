import Vue from "vue";
import { mapState } from "vuex";
import BasketListItem from "./BasketListItem";

Vue.component("basket-list", {
    components:
    {
        BasketListItem
    },

    props:
    {
        template:
        {
            type: String,
            default: "#vue-basket-list"
        },
        basketDetailsData:
        {
            type: Array,
            default: () => []
        },
        isPreview:
        {
            type: Boolean,
            default: false
        }
    },

    computed: mapState({
        basketItems: state => state.basket.items,
        isBasketInitiallyLoaded: state => state.basket.isBasketInitiallyLoaded
    })
});
