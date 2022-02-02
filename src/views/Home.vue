<template>
  <div class="home-container">
    <NavHeader @add="add"></NavHeader>
    <NavMain :list="list" @del="del"></NavMain>
    <NavFooter :list="list" @clear="clear"></NavFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import NavHeader from "../components/navHeader/NavHeader"
import NavMain from "../components/navMain/NavMain"
import NavFooter from "../components/navFooter/NavFooter"
import {useStore} from "vuex"
import {computed, ref} from "vue";

export default {
  name: 'Home',
  props: {

  },
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup(props, context) {
    let store = useStore()   // vuex中的API useStore()
    let list = computed(() => {
      return store.state.list
    })

    let value = ref('')

    // 添加任务
    let add = (val) => {
      value.value = val
      // 判断任务是否存在
      let flag = true
      list.value.map(item => {
        if (item.title === value.value) {
          flag = false
          alert('任务已经存在')
        }
      })

      if (flag) {
        store.commit('addTodo', {
          title: value.value,
          complete: false
        })
      }

      console.log(val)
    }

    // 删除任务
    let del = (val) => {
      // 调用删除的mutation
      store.commit('delTodo', val)
      console.log(val)
    }

    // 清除已完成的
    let clear = (val) => {
      store.commit('clear', val)
    }

    return {
      list,
      value,
      add,
      del,
      clear
    }
  }
}
</script>

<style scoped lang="scss">
  .home-container {
    width: 500px;
    height: 500px;
  }
</style>
