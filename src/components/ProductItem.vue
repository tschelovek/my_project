<template>
  <div>
    <a class="catalog__pic" href="#">
      <img :src="product.image" :alt="product.title">
    </a>
    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">
      {{ product.price }} ₽
    </span>
    <ul class="colors colors--black">
      <li class="colors__item"
          v-for="itemColor in itemColors" :key="itemColor.id">
        <ProductColorOptions :itemColor="itemColor"/>
      </li>
    </ul>
<!--    <ColorOptions :colors="itemColors" :current-color.sync="currentColorId" />-->
  </div>
</template>

<script>
import ProductColorOptions from './ProductColorOptions.vue';
// import ColorOptions from './ColorOptions.vue';
import colors from '../data/colors';

export default {
  components: { ProductColorOptions },
  // components: { ColorOptions, ProductColorOptions },
  props: ['product'],
  computed: {
    colors() {
      return this.product.colors.map((id) => colors.find((color) => color.id === id));
    },
    itemColors() {
      return this.colors.filter((color) => this.product.colors.includes(color.id));
    },
  },
};
</script>
