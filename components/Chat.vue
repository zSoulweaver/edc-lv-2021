<template>
  <div class="chat">
    <iframe
      :src="chatLink"
      frameborder="0"
    />
  </div>
</template>

<script>
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const { isDev } = useContext()

    const chatLink = computed(() => {
      if (isDev) {
        return 'https://www.twitch.tv/embed/insomniac/chat?darkpopout&parent=localhost'
      } else {
        return 'https://www.twitch.tv/embed/insomniac/chat?darkpopout&parent=zsoulweaver.github.io'
      }
    })

    return {
      chatLink
    }
  }
})
</script>

<style lang="scss" scoped>
.chat {
  flex: 1;
  width: 24rem;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  iframe {
    width: 100%;
    height: 100%;

    @media screen and (max-width: 800px) {
      margin-top: -7.5rem;
      height: calc(100% + 7.5rem);
    }
  }
}
</style>
