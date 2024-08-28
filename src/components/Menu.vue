<template>
  <nav class="menu">
    <ul class="menu__items">
      <router-link to="/">
        <li class="menu__item">Форма</li>
      </router-link>
      <router-link to="/preview">
        <li class="menu__item">Превью</li>
      </router-link>
    </ul>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss">
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: black;
}
.menu {
  &__item {
    margin-right: 24px;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      color: #00000078;
      transition: all 0.2s ease;
    }
  }
  &__items {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
