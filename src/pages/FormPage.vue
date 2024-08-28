<template>
  <div class="form__title">
    <h3>Персональные данные</h3>
  </div>
  <Form />
</template>
<script>
import Form from "../components/Form.vue";
export default {
  components: {
    Form,
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
