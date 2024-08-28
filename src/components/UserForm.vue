<template>
  <div class="form__user">
    <div class="user__info">
      <div class="info__name">
        <label for="fullName">Имя</label>
      </div>
      <input type="text" v-model="user.fullName" id="fullName" required />
    </div>
    <div class="user__info">
      <div class="info__age">
        <label for="age">Возраст:</label>
      </div>
      <input type="number" v-model="user.age" id="age" required />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>
<style lang="scss" scoped>
input {
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
}
label {
  color: rgba(17, 17, 17, 0.48);
}
.user__info {
  border: 1px solid rgba(241, 241, 241, 1);
  width: 100%;
  max-width: 616px;
  border-radius: 4px;
  padding: 8px 16px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.info__name {
  margin-bottom: 2px;
}
</style>
