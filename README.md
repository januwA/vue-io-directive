## vue-io-directive 在vue组件上双向绑定数据

灵感来自Angular:
```html
<my-test [(name)]="parentName" [(pwd)]="parentPwd"></my-test>
```

在Angular中当`name`属性发生变化会通知`nameChange`方法，在`v-io`中不存在,可以使用watch监听

在vue中:
```html
<my-test v-io:name="parentName" v-io:pwd="parentPwd"></my-test>
<my-test v-io:name="obj.parentName" v-io:pwd="obj.parentPwd"></my-test>

<my-test v-io:child.name="parentName" v-io:child.pwd="parentPwd"></my-test>
<my-test v-io:child.name="obj.parentName" v-io:child.pwd="obj.parentPwd"></my-test>
```

## Install
```
npm install vue-io-directive
```

## 使用
```
import Vue from "vue";
import { VueIoDirective } from "vue-io-directive";

Vue.directive("io", VueIoDirective);
```

注：
- `v-io:name="arr[0]"`对于数组, 数据更新后ui也不会刷新,使用传统的emit
- 可能引发安全问题

## dev
> $ npm start

## build
> $ npm run build


## See also:
- https://webpack.js.org/
- https://www.webpackjs.com/
- https://cn.vuejs.org/v2/api/#vm-watch