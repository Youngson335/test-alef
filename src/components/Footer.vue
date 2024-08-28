<template>
  <div class="footer">
    <div class="footer__text">
      <p>all rights reserved</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.footer {
  background: rgba(250, 250, 250, 1);
  box-shadow: 0px 1px 0px 0px rgba(17, 17, 17, 0.1);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  &__text {
    display: flex;
    justify-content: center;
    alight-items: center;
    padding: 30px 0px;
  }
}
</style>
