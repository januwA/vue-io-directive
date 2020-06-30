<template>
  <div>
    <input v-model="parentName" />
    {{ parentName }}
    <br />
    <input v-model="parentPwd" />
    {{ parentPwd }}
    <hr />
    <myTest v-io:name="parentName" v-io:pwd="parentPwd"></myTest>
  </div>
</template>

<script>
import myTest from "./my-test";
export default {
  name: "app",
  components: { myTest },
  data() {
    return {
      parentName: "",
      parentPwd: "",
    };
  },
  watch: {
    parentName: function (newVal, oldVal) {
      console.log(`watch parentName change, new value is ${newVal}`);
    },
  },
};
</script>

<style></style>
