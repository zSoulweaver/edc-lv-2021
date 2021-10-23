<template>
  <div class="streamList">
    <div
      v-for="stream in streams"
      :key="stream.key"
      class="streamList__stream"
    >
      <div class="streamList__image">
        <img :src="stream.thumbnail" alt="">
      </div>
      <div>
        <h1 class="streamList__name">
          {{ stream.displayName }}
        </h1>
        <nuxt-link
          class="streamList__watchButton"
          :to="`/watch/${stream.key}`"
        >
          Watch
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import streams from '~/static/streams.json'

export default defineComponent({
  setup () {
    return {
      streams
    }
  }
})
</script>

<style lang="scss" scoped>
.streamList {
  &__stream {
    display: flex;
    padding: 1rem;
    border-radius: 0.2rem;
    background: var(--color-background-alt);

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &__image {
    width: 100%;
    max-width: 10rem;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-right: 1rem;

    img {
      width: 100%;
      height: 100%;
      transform: scale(1.4);
    }
  }

  &__name {
    margin: 0;
    margin-bottom: 1rem;
  }

  &__watchButton {
    display: inline-block;
    border-radius: 0.25rem;
    background: var(--color-button);
    color: #fff;
    text-decoration: none;
    padding: 1rem 2rem;
  }
}
</style>
