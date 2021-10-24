<template>
  <div class="layout">
    <div class="layout__sidebar">
      <Header />
      <Chat />
    </div>
    <div class="layout__content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onBeforeUnmount } from '@nuxtjs/composition-api'
import { utcToZonedTime } from 'date-fns-tz'
import { parse, isWithinInterval } from 'date-fns'
import { useEvent } from '~/store/event'
import schedule from '~/static/schedule.json'

export default defineComponent({
  setup () {
    const eventStore = useEvent()

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
        eventStore.setCurrentlyPlaying({
          stage,
          data: getCurrentScheduleForStage(stage)
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
  }
})
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;
  background: var(--color-background);

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }

  &__sidebar {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
      order: 2;
      height: 20rem;
    }
  }

  &__content {
    height: 100%;
    flex: 1;
    overflow-y: auto;
    z-index: 10;
    background: var(--color-background);
  }
}
</style>
