<template>
  <div class="container">
    <div>
      已完成{{isComplete}} / 全部{{list.length}}
    </div>
    <div v-if="isComplete > 0" class="btn">
      <button @click="clear">清除已完成</button>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "NavFooter",
  props: {
    list: {
      type: Array,
      require: true
    }
  },
  setup(props, context) {
    let isComplete = computed(() => {
      // 过滤已完成的
      let arr = props.list.filter(item => {
        return item.complete
      })
      return arr.length
    })

    let clear = () => {
      // 过滤未完成的，留下的就是已完成的
      let arr = props.list.filter(item => {
        return item.complete === false
      })

      context.emit('clear', arr)
    }

    return {
      isComplete,
      clear
    }
  }
}
</script>

<style scoped lang="scss">

.container {
  display: flex;
  align-items: center;
  .btn {
    margin-left: 10px;
  }
}

</style>
