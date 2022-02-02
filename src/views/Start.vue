<template>
  <div>
    <button @click="start">开始任务</button>
  </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "Start",
  setup() {
    let router = useRouter()
    // start方法
    let start = () => {
      router.push({
        path: '/home'
      })
    }
    return {
      start
    }
  }
}
</script>

<style scoped>

</style>
