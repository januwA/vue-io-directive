## vue-io-directive 在vue组件上双向绑定数据

灵感来自Angular:
```html
<my-test [(name)]="parentName" [(pwd)]="parentPwd"></my-test>
```

在Angular中当`name`属性发生变化会通知`nameChange`方法

在vue中:
```html
<my-test v-io:name="parentName" v-io:pwd="parentPwd"></my-test>
```

## Install
```
npm install vue-io-directive
```

## Example
```html
<div id="app">
  <input v-model="parentName" /> {{ parentName }}
  <br>
  <input v-model="parentPwd" /> {{ parentPwd }}
  <hr />
  <my-test v-io:name="parentName" v-io:pwd="parentPwd"></my-test>
</div>

<script src="https://unpkg.com/vue@2.6.11/dist/vue.js"></script>
<script src="./vue-io-directive.js"></script>

<script>
  const l = console.log;

  // 定义子组件
  Vue.component("my-test", {
    name: "my-test",
    data() {
      return {
        name: "(unknow)",
        pwd: "(unknow)",
      };
    },
    methods: {
      // name改变会通知nameChange，也可以用watch监听
      nameChange(newVal, oldVal) {
        l(newVal, this.name)
      }
    },
    watch: {
      name: function (newVal, oldVal) {
        l(`watch name change, new value is ${newVal}`);
      },
    },
    template: `
      <div>
        <input v-model="name" /> {{ name }}
        <br>
        <input :value="pwd" @input="pwd = $event.target.value" /> {{ pwd }}
      </div>
      `,
  });

  // 定义指令
  Vue.directive("io", VueIoDirective);

  // 根组件
  var app = new Vue({
    el: "#app",
    data: {
      parentName: '',
      parentPwd: ''
    },
    watch: {
      parentName: function (newVal, oldVal) {
        l(`watch parentName change, new value is ${newVal}`);
      },
    },
  });
</script>
```

或者:
```
import Vue from "vue";
import { VueIoDirective } from "vue-io-directive";

Vue.directive("io", VueIoDirective);
```

## dev
> $ npm start

## build
> $ npm run build


## See also:
- https://webpack.js.org/
- https://www.webpackjs.com/