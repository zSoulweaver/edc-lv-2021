<template>
  <div class="watch">
    <iframe
      :src="streamLink"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script>
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import streams from '~/static/streams.json'

export default defineComponent({
  setup () {
    const route = useRoute()

    const streamKey = route.value.params.key
    const streamInfo = streams.filter(e => e.key === streamKey)[0]
    const streamLink = streamInfo.streams[0]

    return {
      streamKey,
      streamLink
    }
  }
})
</script>

<style lang="scss" scoped>
.watch {
  height: 100%;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
