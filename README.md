## vue-io-directive 

在 *vue 2* 组件上双向绑定多个数据，灵感来自Angular

此库在*vue 3*中不可用，vue 3 可以在组件上[支持多个v-model](https://v3.cn.vuejs.org/guide/component-basics.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model)

## Install
```
$ npm i vue-io-directive
```

## 使用
```
import Vue from "vue";
import { VueIoDirective } from "vue-io-directive";

Vue.directive("io", VueIoDirective);
```

## Demo
```html
<my-test v-io:name="parentName" v-io:pwd="parentPwd"></my-test>
<my-test v-io:name="obj.parentName" v-io:pwd="obj.parentPwd"></my-test>

<my-test v-io:child.name="parentName" v-io:child.pwd="parentPwd"></my-test>
<my-test v-io:child.name="obj.parentName" v-io:child.pwd="obj.parentPwd"></my-test>
```


- `v-io:name="arr[0]"` 对于数组, 数据更新后ui也不会刷新,使用传统的emit
- src目录下有`example`不懂可以看下