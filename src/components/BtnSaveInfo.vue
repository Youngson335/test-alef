<template>
  <button type="submit" @click="saveInfo">Сохранить</button>
</template>
<script>
export default {
  props: {
    user: Object,
    children: Array,
  },
  methods: {
    saveInfo() {
      const result = [this.user, this.children];

      localStorage.setItem("userInfo", JSON.stringify(result));
      console.log(JSON.stringify(result));
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  background: rgba(1, 167, 253, 1);
  font-family: "Montserrat", sans-serif;
  border: none;
  color: rgba(255, 255, 255, 1);
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 100px;
  cursor: pointer;
}
</style>
