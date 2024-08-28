<template>
  <Header />
  <div class="main">
    <router-view></router-view>
  </div>
  <Footer />
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
}
.main {
  max-width: 616px;
  margin: 0 auto;
  @media (max-width: 650px) {
    max-width: calc(100% - 60px);
  }
}
</style>
