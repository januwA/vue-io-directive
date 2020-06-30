<template>
  <div>
    <input v-model="name" />
    <input v-model="child.name" />
  </div>
</template>

<script>
export default {
  name: "my-test",
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
