<template>
  <div class="watch">
    <QuickStage />
    <iframe
      :src="streamLink"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
import { defineComponent, useMeta, useRoute, useStore } from '@nuxtjs/composition-api'
import streams from '~/static/streams.json'

export default defineComponent({

  setup () {
    const route = useRoute()
    const store = useStore()
    const { title } = useMeta()

    const streamKey = route.value.params.key
    const streamIndex = route.value.params.streamIndex

    const streamInfo = streams.filter(e => e.key === streamKey)[0]
    const streamLink = streamInfo.streams[streamIndex]

    store.subscribe((_, state) => {
      title.value = state.event.currentlyPlaying[streamKey]
    })

    title.value = store.state.event.currentlyPlaying[streamKey] || streamInfo.displayName

    return {
      streamKey,
      streamLink
    }
  },
  head: {}
})
</script>

<style lang="scss" scoped>
.watch {
  position: relative;
  height: 100%;
  overflow: hidden;

  &:hover {
    ::v-deep .quickStage {
      opacity: 1;
    }
  }

  iframe {
    height: 100%;
    width: 100%;
  }
}
</style>
