<template>
  <ul class="catalog__pagination pagination" v-if="pages > 1">
    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow"
           :class="{'pagination__link--disabled': page === 1}"
           href="#" aria-label="Предыдущая страница"
           @click.prevent="paginate(page - 1)">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>
    <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
      <a href="#" class="pagination__link"
         :class="{'pagination__link--current': pageNumber === page}"
         @click.prevent="paginate(pageNumber)"
        >
        {{ pageNumber }}
      </a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow"
         :class="{'pagination__link--disabled': page === pages}"
         href="#" aria-label="Следующая страница"
         @click.prevent="paginate(page + 1)"
        >
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginate(page) {
      this.page = (this.page < 1 ? 1 : this.page);
      this.page = (this.page > this.pages ? this.pages : this.page);
      this.$emit('update:page', page);
    },
  },
};
</script>
