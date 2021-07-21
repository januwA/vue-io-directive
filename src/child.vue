<template>
  <div>
    <h2>Child:</h2>
    <input v-model="name" />
    <input v-model="child.name" />
  </div>
</template>

<script>
export default {
  name: "child",
  data() {
    return {
      name: "(unknow)",
      child: {name: ''}
    };
  },
  watch: {
    name: function (newVal, oldVal) {
      console.log(`watch name change, new value is ${newVal}`);
    },
  },
};
</script>

<style></style>
