<template>
  <div>
    <input type="text"
           placeholder="please input Item's Name"
           v-model="value"
           @keydown.enter="enter"
    >
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "NavHeader",
  setup(props, context) {
    let value = ref('')
    let enter = () => {
      // 子传父 （把输入框中的内容传递给父组件）
      context.emit('add', value.value)
      console.log(value.value)
    }

    return {
      value,
      enter
    }
  }
}
</script>

<style scoped lang="scss">

input {
  margin-bottom: 10px;
}

</style>
