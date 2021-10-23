<template>
  <div class="layout">
    <Header />
    <div class="layout__content-container">
      <Chat />
      <div class="layout__content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #fff;

  &__content-container {
    display: flex;
    flex: 1;
    background: var(--color-background);
  }

  &__content {
    height: 100%;
    flex: 1;
    overflow-y: scroll;
  }
}
</style>
