<template>
  <div
    v-if="!isHome"
    class="header"
  >
    <nuxt-link
      v-if="!isHome"
      class="header__item"
      to="/"
    >
      <ArrowLeft />
    </nuxt-link>
    <p
      v-if="isStream"
      class="header__currentArtist"
    >
      Currently:
      <span>{{ currentlyPlaying[streamKey] || 'Unknown' }}</span>
    </p>
  </div>
</template>

<script>
import { computed, defineComponent, useRoute, useStore } from '@nuxtjs/composition-api'
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue'

export default defineComponent({
  components: {
    ArrowLeft
  },

  setup () {
    const route = useRoute()
    const store = useStore()

    const streamKey = computed(() => route.value.params.key)
    const isHome = computed(() => route.value.name === 'index')
    const isStream = computed(() => route.value.name === 'watch-key-streamIndex')

    const currentlyPlaying = computed(() => store.state.event.currentlyPlaying)

    return {
      isHome,
      isStream,
      streamKey,
      currentlyPlaying
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
  z-index: 5;
  border-top: 1px solid #393939;

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

  &__currentArtist {
    margin-left: 0.5rem;

    span {
      font-weight: 600;
    }
  }
}
</style>
