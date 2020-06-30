import { VNode } from "vue";
import { DirectiveBinding } from "vue/types/options";

function setData(key: string, newValue: string, context: unknown) {
  return Function(`return function(d) { with(this){ ${key} = d; } }`)().call(
    context,
    newValue
  );
}

function getData(bindKey: string, data: unknown) {
  try {
    return Function(`with(this){ return ${bindKey} }`).apply(data, arguments);
  } catch (error) {}
}

function _getWatchInputPropKey(
  inputPropKey: string,
  modifiers: { [key: string]: boolean }
) {
  const modifiersKeys: string[] = Object.keys(modifiers);
  return modifiersKeys.length
    ? inputPropKey + "." + modifiersKeys.join(".")
    : inputPropKey;
}

export const VueIoDirective = {
  inserted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    const { modifiers, arg: inputPropKey, expression: inputDataKey } = binding;
    const { context: parent, componentInstance: child } = vnode;
    if (!inputPropKey) {
      console.error(`[v-io:??=${inputDataKey}]`);
      return;
    }
    if (!child || !parent) return;

    // v-io:obj.name="data"
    const watchInputPropKey: string = _getWatchInputPropKey(
      inputPropKey,
      modifiers
    );

    // parent value to child value
    parent.$watch(
      function () {
        return getData(inputDataKey, this);
      },
      function (newVal) {
        setData(watchInputPropKey, newVal, child);
      },
      { immediate: true, deep: true }
    );

    // child value to parent value
    child.$watch(watchInputPropKey, function (newVal) {
      setData(inputDataKey, newVal, parent);
    });
  },
};
