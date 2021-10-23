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
        <p class="streamList__currentArtist">
          Currently playing: <span>{{ scheduleTimes[stream.key] && scheduleTimes[stream.key].artist || 'Unknown' }}</span>
        </p>
        <div>
          <nuxt-link
            class="streamList__button"
            :to="`/watch/${stream.key}`"
          >
            Watch
          </nuxt-link>
          <nuxt-link
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
import { defineComponent, onBeforeUnmount, onMounted, reactive } from '@nuxtjs/composition-api'
import { utcToZonedTime } from 'date-fns-tz'
import { format } from 'date-fns'
import streams from '~/static/streams.json'
import schedule from '~/static/schedule.json'

export default defineComponent({
  setup () {
    const scheduleTimes = reactive({
      cm: null,
      cg: null,
      kf: null,
      bp: null
    })

    let refreshInterval

    onMounted(() => {
      getCurrentSchedule()
      refreshInterval = setInterval(getCurrentSchedule, 60000)
    })

    onBeforeUnmount(() => {
      clearInterval(refreshInterval)
    })

    function getCurrentSchedule () {
      const stages = Object.keys(schedule)
      stages.forEach((stage) => {
        Object.assign(scheduleTimes, {
          [stage]: getCurrentScheduleForStage(stage)
        })
      })
    }

    function getCurrentScheduleForStage (stage) {
      const date = utcToZonedTime(Date.now(), 'America/Los_Angeles')
      const formattedTime = format(date, 'HHmm')
      const hour = formattedTime.substring(0, 2)
      const minute = formattedTime.substring(2, 4)

      const events = schedule[stage][date.getDate()]
      if (events === undefined || !events[date.getDate()]) {
        return
      }
      return events.find((event) => {
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
      streams,
      scheduleTimes
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

  &__button {
    display: inline-block;
    border-radius: 0.25rem;
    background: var(--color-button);
    color: #fff;
    text-decoration: none;
    padding: 0.75rem 2rem;
    font-weight: 600;
  }

  &__currentArtist {
    span {
      font-weight: 600;
    }
  }
}
</style>
