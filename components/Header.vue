<template>
  <div class="header">
    <div class="header__left">
      <nuxt-link
        class="header__item"
        to="/"
      >
        Home
      </nuxt-link>
    </div>
    <!-- <div class="header__right">
      <div class="header__item">
        <p>Hide Chat</p>
      </div>
      <div class="header__item">
        <p>Swap Chat</p>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 4rem;
  padding: 0 3rem;
  background: var(--color-background-alt);
  display: flex;
  justify-content: space-between;

  &__left,
  &__right {
    display: flex;
  }

  &__item {
    height: 100%;
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
}
</style>
