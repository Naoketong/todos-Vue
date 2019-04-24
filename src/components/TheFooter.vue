<template>
  <footer class="footer" v-show="todosCount">
    <span class="todo-count"><strong>{{todosCount}}</strong> 总数</span>
    <ul class="filters">        
      <li>
        <router-link to="/all" :class="{selected: filter === 'all'}" >全部</router-link>
      </li>
      <li>
        <router-link to="/await" :class="{selected: filter === 'await'}">待办</router-link>
      </li>
      <li>
        <router-link to="/achieve" :class="{selected: filter === 'achieve'}">已完成</router-link>
      </li>          
    </ul>
    <button class="clear-completed" v-show="hasCompleted" @click="removeCompleted">清除已完成</button>
  </footer>

</template>

<script>
  export default{
  	name: 'TheFooter',
    data () {
      return {
      }
    },
    props: {
      todos: {
        type: Array,
        default: () => {
          return []
        }
      },
    },
    computed: {
      filter() {
        return this.$store.state.filter
      },
      todosCount() {
        return this.$store.getters.todosCount
      },
      hasCompleted() {
        return this.$store.getters.hasCompleted
      },
    },
    methods: {
      removeCompleted: function() {
        this.$store.commit('removeCompleted')
      }

    },
  }

</script>