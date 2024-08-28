<template>
  <div class="form">
    <form @submit.prevent="handleSubmit">
      <UserForm :user="user" />

      <div class="info__children" v-if="children.length < 5" @click="addChild">
        <div class="info__text">
          <p>Дети (макс. 5)</p>
        </div>
        <BtnAddChildren />
      </div>

      <div v-for="(child, index) in children" :key="index" class="child-info">
        <ChildForm :child="child" :index="index" @remove-child="removeChild" />
      </div>

      <BtnSaveInfo @click="submitForm" :user="user" :children="children" />
    </form>
  </div>
</template>

<script>
import UserForm from "./UserForm.vue";
import ChildForm from "./ChildForm.vue";
import BtnAddChildren from "./BtnAddChildren.vue";
import BtnSaveInfo from "./BtnSaveInfo.vue";

export default {
  components: {
    UserForm,
    ChildForm,
    BtnAddChildren,
    BtnSaveInfo,
  },
  data() {
    return {
      user: {
        fullName: "",
        age: null,
      },
      children: [],
    };
  },
  methods: {
    addChild() {
      if (this.children.length < 5) {
        this.children.push({ name: "", age: null });
      }
    },
    removeChild(index) {
      this.children.splice(index, 1);
    },
    handleSubmit() {
      console.log("User:", this.user);
      console.log("Children:", this.children);
    },
    submitForm() {
      this.user.fullName = "";
      this.user.age = null;
      this.children = [];
    },
  },
};
</script>

<style scoped lang="scss">
.child-info {
  margin-bottom: 10px;
}

button {
  margin-top: 10px;
}
form {
  width: 100%;
}
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  width: 100%;
}
.info {
  &__children {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-bottom: 11px;
  }
  &__text {
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
