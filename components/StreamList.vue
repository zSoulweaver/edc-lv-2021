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
        <p
          v-if="currentlyPlaying[stream.key] !== undefined"
          class="streamList__currentArtist"
        >
          Currently playing: <span>{{ currentlyPlaying[stream.key] || 'Unknown' }}</span>
        </p>
        <div class="streamList__actions">
          <nuxt-link
            v-for="(streamLink, index) in stream.streams"
            :key="streamLink"
            class="streamList__button"
            :to="`/watch/${stream.key}/${index}`"
          >
            Watch
          </nuxt-link>
          <nuxt-link
            v-if="schedule[stream.key] !== undefined"
            class="streamList__button"
            :to="`/schedule/${stream.key}`"
          >
            Schedule
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'
import streams from '~/static/streams.json'
import schedule from '~/static/schedule.json'
import { useEvent } from '~/store/event'

export default defineComponent({
  setup () {
    const eventStore = useEvent()

    const currentlyPlaying = computed(() => eventStore.currentlyPlaying)

    return {
      schedule,
      streams,
      currentlyPlaying
    }
  }
})
</script>

<style lang="scss" scoped>
.streamList {
  &__stream {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    border-radius: 0.2rem;
    background: var(--color-background-alt);

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &__image {
    width: 10rem;
    min-width: 10rem;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-right: 1rem;

    @media screen and (max-width: 1000px) {
      display: none;
    }

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

  &__actions {
    display: flex;
    flex-wrap: wrap;
  }

  &__button {
    border-radius: 0.25rem;
    background: var(--color-button);
    color: #fff;
    text-decoration: none;
    padding: 0.75rem 2rem;
    font-weight: 600;
    margin-top: 0.5rem;

    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }

  &__currentArtist {
    margin-bottom: 0.5rem;

    span {
      font-weight: 600;
    }
  }
}
</style>
