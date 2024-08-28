<template>
  <div class="form__title">
    <h3>Персональные данные</h3>
  </div>
  <UserInfo />
</template>
<script>
import UserInfo from "../components/UserInfo.vue";
export default {
  components: {
    UserInfo,
  },
};
</script>
<style lang="scss">
.form__title {
  width: 100%;
  margin-bottom: 20px;
  h3 {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
