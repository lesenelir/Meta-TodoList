<template>
  <div class="start-box">
    <button @click="start" class="button">开始任务</button>
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

.start-box {
  width: 500px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -130px;
  margin-top: -160px;
}

.button {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #42b983;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {
  background-color: #3e8e41
}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

</style>
