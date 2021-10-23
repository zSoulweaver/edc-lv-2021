<template>
  <div class="schedule">
    <h1>Schedule for {{ streamInfo.displayName }}</h1>
    <div class="schedule__columns">
      <template
        v-for="(daySchedule, day) in schedule[streamKey]"
      >
        <!-- <h2 class="schedule__day">
          {{ day }}th
        </h2> -->
        <div
          v-for="(event, index) in daySchedule"
          :key="index"
          class="schedule__event"
        >
          <p class="schedule__artist">
            {{ event.artist }}
          </p>
          <p class="schedule__time">
            {{ getDay(event.startTime, day) }} {{ parseTime(event.startTime, day) }} - {{ parseTime(event.endTime, day) }}
          </p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
// eslint-disable-next-line no-unused-vars
import { format, parse } from 'date-fns'
import streams from '~/static/streams.json'
import schedule from '~/static/schedule.json'

export default defineComponent({
  setup () {
    const route = useRoute()

    const streamKey = route.value.params.key
    const streamInfo = streams.filter(e => e.key === streamKey)[0]

    function getDay (time, day) {
      const parsedTime = parse(`${time} ${day} 10 -0700`, 'HHmm dd LL XXXX', new Date())
      return format(parsedTime, 'EEEE')
    }

    function parseTime (time, day) {
      const parsedTime = parse(`${time} ${day} 10 -0700`, 'HHmm dd LL XXXX', new Date())
      return format(parsedTime, 'hh:mm b')
    }

    return {
      streams,
      schedule,
      streamKey,
      streamInfo,
      parseTime,
      getDay
    }
  }
})
</script>

<style lang="scss" scoped>
.schedule {
  padding: 2rem 2rem;

  > h1 {
    margin-top: 0;
  }

  &__columns {
    display: flex;
    flex-direction: column;
  }

  &__column {
    &:not(:last-child) {
      margin-right: 4rem;
    }
  }

  &__day {
    text-decoration: underline;
  }

  &__event {
    background: var(--color-background-alt);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  &__artist {
    margin: 0;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  &__time {
    margin: 0;
    opacity: 0.5;
    font-size: 0.85rem;
  }
}
</style>
