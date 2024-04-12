<template>
  <div>
    <transition-group name="list-transition" tag="div">
      <wish-list-item v-for="wishListItem in wishListItems" :key="wishListItem.id" :wish-list-item-raw="wishListItem"
        :item-details-data="itemDetailsData">
      </wish-list-item>
    </transition-group>
    <div class="mt-5 mb-0">
      <p class="h4" v-if="inactiveVariationIds.length !== 0">{{ $translate("Ceres::Template.wishListInactiveItems") }}</p>
    </div>
    <transition-group name="list-transition" tag="div">
      <wish-list-inactive-item v-for="wishListInactiveItem in inactiveVariationIds" :key="wishListInactiveItem"
        :wish-list-inactive-item-raw="wishListInactiveItem" :item-details-data="itemDetailsData">
      </wish-list-inactive-item>
    </transition-group>
    <p class="h4 text-muted text-center my-5"
      v-if="!isLoading && (!wishListItems || wishListItems.length === 0) || inactiveVariationIds.length !== 0">{{
        $translate("Ceres::Template.wishListNoItems") }}</p>
    <loading-animation v-if="isLoading"></loading-animation>
    <hr>
    <last-seen-item-list :items-per-page="4" :max-items="4" v-cloak
      v-if="!isLoading && (!wishListItems || wishListItems.length === 0)" class="bordered-item-list">
      <template #heading>
        <div class="widget-caption bg-appearance widget-item-list-caption mb-3">
          <div>
            <h2>Zuletzt angesehen</h2>
          </div>
        </div>
      </template>
    </last-seen-item-list>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import WishListItem from "./WishListItem.vue";
import WishListInactiveItem from "./WishListInactiveItem.vue";

export default {

  name: "wish-list",

  components:
  {
    WishListItem,
    WishListInactiveItem
  },

  props:
  {
    itemDetailsData:
    {
      type: Array,
      default: () => ["wishListItem.variation.availability"]
    }
  },

  computed: mapState({
    wishListItems: state => state.wishList.wishListItems,
    isLoading: state => state.wishList.isLoading,
    wishListIds: state => state.wishList.wishListIds,
    inactiveVariationIds: state => state.wishList.inactiveVariationIds
  }),

  mounted () {
    this.initWishListItems();
  },

  methods:
  {
    ...mapActions([
      "initWishListItems"
    ])
  }
}
</script>