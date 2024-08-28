<template>
  <div class="form__child">
    <div class="child__info">
      <div class="info__name">
        <label :for="'childName-' + index">Имя ребенка:</label>
      </div>
      <input
        type="text"
        v-model="child.name"
        :id="'childName-' + index"
        required
      />
    </div>
    <div class="child__info">
      <div class="info__age">
        <label :for="'childAge-' + index">Возраст ребенка:</label>
      </div>
      <input
        type="number"
        v-model="child.age"
        :id="'childAge-' + index"
        required
      />
    </div>

    <BtnDeleteChildren @click="removeChild" />
  </div>
</template>

<script>
import BtnDeleteChildren from "./BtnDeleteChildren.vue";
export default {
  components: {
    BtnDeleteChildren,
  },
  props: {
    child: Object,
    index: Number,
  },
  methods: {
    removeChild() {
      this.$emit("remove-child", this.index);
    },
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
.form__child {
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: showForm 0.3s ease;
  @keyframes showForm {
    0% {
      opacity: 0;
      transform: translateY(15px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @media (max-width: 650px) {
    justify-content: center;
    flex-direction: column;
  }
}
.child__info {
  border: 1px solid rgba(241, 241, 241, 1);
  max-width: 260px;
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  @media (max-width: 650px) {
    margin-bottom: 10px;
    max-width: 100%;
  }
}
</style>
