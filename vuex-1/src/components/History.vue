<template>
  <div class="history container">
    <h4>History</h4>
    <div class="flex">
      <p
        v-for="(number, index) in history"
        :key="index"
        :class="activeIndex(parseInt(value)).includes(index) && 'bold'"
      >
        {{ number }}
      </p>
    </div>
    <input type="number" v-model="value" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "history",
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    ...mapState(["history"]),
    ...mapGetters(["activeIndex"]),
  },
};
</script>

<style>
.container {
  margin-top: 7rem;
}
.flex {
  display: flex;
  text-align: center;
  width: 25rem;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
}
.flex p {
  margin: 1rem;
}
.bold {
  font-weight: 700;
}
</style>
