<template>
  <div>
    <input v-model="name" />
    <input v-model="obj['aaa-aa sdsa']" />
    <hr />
    <myTest v-io:name="name" v-io:child.name="obj['aaa-aa sdsa']"></myTest>
  </div>
</template>

<script>
import myTest from "./my-test";
export default {
  name: "app",
  components: { myTest },
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
