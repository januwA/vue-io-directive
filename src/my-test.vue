<template>
  <div>
    <input v-model="name" />
    {{ name }}
    <br />
    <input v-model="pwd" />
    {{ pwd }}
  </div>
</template>

<script>
export default {
  name: "my-test",
  data() {
    return {
      name: "(unknow)",
      pwd: "(unknow)",
    };
  },
  methods: {
    nameChange(newVal, oldVal) {
      console.log(newVal, this.name);
    },
  },
  watch: {
    name: function (newVal, oldVal) {
      console.log(`watch name change, new value is ${newVal}`);
    },
  },
};
</script>

<style></style>
