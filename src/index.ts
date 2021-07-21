import Vue from "vue";
import { VueIoDirective } from "./io-directive";
export { VueIoDirective } from "./io-directive";


// @ts-ignore: Unreachable code error
import App from "./app.vue";

// 定义指令
Vue.directive("io", VueIoDirective);

new Vue({
  render: (h) => h(App),
  components: {
    App,
  },
}).$mount("#app");
