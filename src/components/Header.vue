<template>
  <div class="header">
    <div class="header__logo">
      <img src="../assets/logo.svg" alt="" />
    </div>
    <div class="header__menu">
      <Menu />
    </div>
  </div>
</template>
<script>
import Menu from "./Menu.vue";
export default {
  components: {
    Menu,
  },
};
</script>
<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 22px;
  border-bottom: 1px solid rgba(17, 17, 17, 0.1);
  margin-bottom: 30px;
  box-sizing: border-box;
  &__menu {
    width: 100%;
  }
}
</style>
