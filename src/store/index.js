import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
   // state 类似 data
   //这里面写入数据
    filter: 'all',
    todos:[
      {title: '吃饭饭',completed: true,editing: false},
      {title: '睡觉觉',completed: false,editing: false},
      {title: '打豆豆',completed: false,editing: false},
      {title: '我不是豆豆！',completed: true,editing: false},
    ],
  },
  getters:{
   // mutations 类似methods
   // 写方法对数据做出更改(同步操作)
    todosCount: (state) => {//foot
      return state.todos.length
    },
    hasCompleted: (state) => {//foot
      return state.todos.some(data => data.completed)
    },
    allCompleted: (state) => {//list
      return state.todos.every(data => data.completed)
    }
  
  },
  mutations: {
    // getters 类似 computed 
    // 在这里面写个方法
    changeFilter (state, filter) {//todoVue
      state.filter = filter
    },
    create (state, todo) {//head
      state.todos.push(todo)
    },
    removeCompleted (state) {//foot
      state.todos = state.todos.filter(data => !data.completed)
    },
  },
 
  actions: {
    // actions 类似methods
    // 写方法对数据做出更改(异步操作)
  }
})