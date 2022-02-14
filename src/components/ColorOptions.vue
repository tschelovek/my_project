<template>

  <ul class="colors">
    <li class="colors__item" v-for="color in colors" :key="color.id">
      <label class="colors__label">
        <input class="colors__radio sr-only"
               type="radio"
               :value="color.id"
               v-model.number="currentColorId">
        <span class="colors__value" :style="setBackgroundColor(color.codeHEX)">
                  </span>
      </label>
    </li>
  </ul>
</template>

<script>

export default {
  props: ['colors', 'currentColor'],
  data() {
    return {
      computedColor: this.currentColor,
    };
  },
  // computed: {
  //   colors() {
  //     return colors;
  //   },
  // },
  methods: {
    setBackgroundColor(color) {
      return `background-color: ${color};`;
    },
  },
};
</script>

<style>
.colors__value {
  border: 1px solid #999999;
}
</style>
