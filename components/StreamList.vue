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
          v-if="schedule[stream.key] !== undefined"
          class="streamList__currentArtist"
        >
          Currently playing: <span>{{ scheduleTimes[stream.key] && scheduleTimes[stream.key].artist || 'Unknown' }}</span>
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
import { defineComponent, onBeforeUnmount, onMounted, reactive } from '@nuxtjs/composition-api'
import { utcToZonedTime } from 'date-fns-tz'
import { parse, isWithinInterval } from 'date-fns'
import streams from '~/static/streams.json'
import schedule from '~/static/schedule.json'

export default defineComponent({
  setup () {
    const scheduleTimes = reactive({
      cosmicmeadow: null,
      circuitgrounds: null,
      kineticfield: null,
      basspod: null,
      neongarden: null,
      wasteland: null,
      quantumvalley: null,
      stereobloom: null
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

      const events = schedule[stage]
      if (events === undefined || events[date.getDate()] === undefined) {
        return
      }

      return events[date.getDate()].find((event) => {
        const parsedStartTime = parse(`${event.startTime} ${date.getDate()} 10 -0700`, 'HHmm dd LL XXXX', new Date())
        const parsedEndTime = parse(`${event.endTime} ${date.getDate()} 10 -0700`, 'HHmm dd LL XXXX', new Date())

        if (isWithinInterval(Date.now(), {
          start: parsedStartTime,
          end: parsedEndTime
        })) {
          return event
        }

        return null
      })
    }

    return {
      schedule,
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
