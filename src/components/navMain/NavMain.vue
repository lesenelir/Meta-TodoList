<template>
  <div>
    <div v-if="list.length > 0">
      <div v-for="(item, index) in list" :key="index">
        <div class="item">
          <input type="checkbox" v-model="item.complete">
          {{ item.title }}
          <button class="del" @click="del(item, index)">删除</button>
        </div>
      </div>
    </div>
    <div v-else>
      暂无任务
    </div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "NavMain",
  props: {
    list: {
      type: Array,
      require: true
    }
  },
  emits: ['del'],
  setup(props, context) {

    // 删除任务
    let del = (item, index) => {
      context.emit('del', index)
      console.log(item)
      console.log(index)
    }

    return {
      del
    }
  }
}
</script>

<style scoped lang="scss">

.item {
  height: 35px;
  line-height: 35px;
  position: relative;
  width: 160px;
  cursor: pointer;

  button {
    position: absolute;
    right: 20px;
    top: 6px;
    display: none;
    z-index: 99;
  }

  &:hover { // item的hover 伪类
    background-color: #42b983;

    button {
      display: block;
    }
  }

}

</style>
