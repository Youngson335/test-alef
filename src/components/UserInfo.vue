<template>
  <div class="preview__info">
    <div class="preview__user">
      <strong>{{ user.fullName }} {{ user.age }} лет</strong>
    </div>
    <div class="preview__children">
      <div class="children__title">
        <h5>Дети</h5>
      </div>
      <div class="children__items" v-for="child of children">
        <div class="children__item">
          <strong>{{ child.name }} {{ child.age }} лет</strong>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: "",
      children: "",
    };
  },
  methods: {
    saveUserInfo(info) {
      const userInfo = info[0];
      const childrenInfo = info[1];
      this.user = userInfo || "Нет информации";
      this.children = childrenInfo || "Нет информации";
    },
  },
  mounted() {
    const result = localStorage.getItem("userInfo");
    let response = JSON.parse(result);
    if (response) {
      this.saveUserInfo(response);
    }
  },
};
</script>
<style lang="scss">
.preview {
  &__info {
    max-width: 616px;
    margin: 0 auto;
  }
  &__user {
    margin-bottom: 60px;
    font-size: 16px;
    font-weight: 700;
  }
  &__children {
  }
}
.children {
  &__title {
    margin-bottom: 20px;
    h5 {
      font-size: 16px;
      font-weight: 500;
      color: rgba(17, 17, 17, 1);
    }
  }
  &__items {
    margin-bottom: 20px;
  }
  &__item {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 700;
    background: rgba(0, 0, 0, 0.107);
    border-radius: 5px;
  }
}
</style>
