<template>
  <div>
    <h2>Parent:</h2>
    <input v-model="name" />
    <input v-model="obj['aaa-aa sdsa']" />
    <hr />
    <Child v-io:name="name" v-io:child.name="obj['aaa-aa sdsa']"></Child>
  </div>
</template>

<script>
import Child from "./child";
export default {
  name: "app",
  components: { Child },
  data() {
    return {
      name: "",
      obj: {
        'aaa-aa sdsa': ''
      }
    };
  },
  watch: {
    name: function (newVal, oldVal) {
      
    },
  },
};
</script>

<style></style>
