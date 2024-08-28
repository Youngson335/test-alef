<template>
  <div class="btn__children">
    <div class="children__img">
      <img src="../assets/icons/plus__icon.svg" alt="" />
    </div>
    <button>Добавить ребенка</button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
button {
  background: none;
  border: none;
  font-family: "Montserrat", sans-serif;
  color: rgba(1, 167, 253, 1);
  font-size: 14px;
}
.btn__children {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid rgba(1, 167, 253, 1);
  border-radius: 100px;
  max-width: 204px;
  @media (max-width: 400px) {
    padding: 5px 10px;
  }
}
.children__img {
  img {
    display: block;
  }
}
</style>
