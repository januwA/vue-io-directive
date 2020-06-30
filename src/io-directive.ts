import { VNode } from "vue";
import { DirectiveBinding } from "vue/types/options";

export const VueIoDirective = {
  inserted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    const { arg: inputPropKey, expression: inputDataKey, value } = binding;
    if (!inputPropKey) return;

    const { context: parent, componentInstance: child } = vnode;

    if (!child || !parent) return;

    // child没有[inputPropKey]就不强制设置
    if (!child.hasOwnProperty(inputPropKey)) {
      console.error(`[v-io:${inputPropKey}] child not ${inputPropKey} data.`);
      return;
    }
    // else {
    // 使用immediate: true初始化
    //  child[inputPropKey] = value;
    // }

    const watchFunName: string = `${inputPropKey}Change`;

    // 监听parent值的变化,在设置到child
    parent.$watch(
      inputDataKey,
      function (newVal, oldVal) {
        (child as any)[inputPropKey] = newVal;
        if (child.hasOwnProperty(watchFunName)) {
          (child as any)[watchFunName].call(child, newVal, oldVal);
        }
      },
      { immediate: true }
    );

    // 监听child值的变化,在设置到parent
    child.$watch(inputPropKey, function (newVal, oldVal) {
      (parent as any)[inputDataKey] = newVal;
    });
  },
};
