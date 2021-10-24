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
