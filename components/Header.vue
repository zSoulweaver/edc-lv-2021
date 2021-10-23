<template>
  <div class="header">
    <nuxt-link
      v-if="!isHome"
      class="header__item"
      to="/"
    >
      <ArrowLeft />
    </nuxt-link>
  </div>
</template>

<script>
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue'

export default defineComponent({
  components: {
    ArrowLeft
  },

  setup () {
    const route = useRoute()

    const isHome = computed(() => route.value.name === 'index')

    return {
      isHome
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  height: 3.5rem;
  background: var(--color-background-alt);
  display: flex;
  align-items: center;
  padding: 0 0.5rem;

  &__left,
  &__right {
    display: flex;
  }

  &__item {
    height: 2.5rem;
    background: #444;
    border-radius: 0.5rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      background: var(--color-hover);
    }

    &:not(:last-child) {
      margin-right: 0.25rem;
    }

    * {
      margin: 0;
      color: #fff;
    }
  }
}
</style>
