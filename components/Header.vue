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
      <span>{{ currentlyPlaying && currentlyPlaying.artist || 'Unknown' }}</span>
    </p>
  </div>
</template>

<script>
import { computed, defineComponent, useRoute, onMounted, onBeforeUnmount, ref } from '@nuxtjs/composition-api'
import ArrowLeft from 'vue-material-design-icons/ArrowLeft.vue'
import { utcToZonedTime } from 'date-fns-tz'
import { format } from 'date-fns'
import schedule from '~/static/schedule.json'

export default defineComponent({
  components: {
    ArrowLeft
  },

  setup () {
    const route = useRoute()

    const streamKey = route.value.params.key
    const isHome = computed(() => route.value.name === 'index')
    const isStream = computed(() => route.value.name === 'watch-key')

    const currentlyPlaying = ref(null)

    let refreshInterval

    onMounted(() => {
      getCurrentlyPlaying()
      refreshInterval = setInterval(getCurrentlyPlaying, 60000)
    })

    onBeforeUnmount(() => {
      clearInterval(refreshInterval)
    })

    function getCurrentlyPlaying () {
      if (isStream.value) {
        currentlyPlaying.value = getCurrentScheduleForStage(streamKey.value)
      }
    }

    function getCurrentScheduleForStage (stage) {
      const date = utcToZonedTime(Date.now(), 'America/Los_Angeles')
      const formattedTime = format(date, 'HHmm')
      const hour = formattedTime.substring(0, 2)
      const minute = formattedTime.substring(2, 4)

      const events = schedule[stage]
      if (events === undefined || !events[date.getDate()]) {
        return
      }
      return events[date.getDate()].find((event) => {
        if (hour === event.startTime.substring(0, 2)) {
          if (parseInt(minute) > parseInt(event.startTime.substring(2, 4))) {
            return event
          }
        }

        if (hour === event.endTime.substring(0, 2)) {
          if (parseInt(minute) < parseInt(event.endTime.substring(2, 4))) {
            return event
          }
        }

        return null
      })
    }

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
