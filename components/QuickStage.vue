<template>
  <div class="quickStage">
    <template
      v-for="stream in streams"
    >
      <nuxt-link
        v-for="(streamLink, index) in stream.streams"
        :key="streamLink"
        :to="`/watch/${stream.key}/${index}`"
        class="quickStage__stage"
      >
        {{ currentlyPlaying[stream.key] || (stream.displayName + (index >= 1 ? ` (${index})` : '')) }}
      </nuxt-link>
    </template>
  </div>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import streams from '~/static/streams.json'
import { useEvent } from '~/store/event'

export default defineComponent({
  setup () {
    const eventStore = useEvent()

    const currentlyPlaying = computed(() => eventStore.currentlyPlaying)

    return {
      streams,
      currentlyPlaying
    }
  }
})
</script>

<style lang="scss" scoped>
.quickStage {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  z-index: 10;
  top: 0;
  left: 1rem;
  opacity: 0;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }

  &__stage {
    display: block;
    height: 2.5rem;
    padding: 0 1rem;
    border-top: none;
    line-height: 2.5rem;
    color: #fff;
    background: var(--color-background);
    border-radius: 0 0 0.5rem 0.5rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease;

    &:hover {
      background: var(--color-button);
    }

    &:not(:last-child) {
      margin-right: 0.25rem;
    }
  }
}
</style>
