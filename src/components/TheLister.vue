<template>
  <section class="main">
    <input class="toggle-all" id="toggle-all" type="checkbox" :checked="chooseAll">
    <label for="toggle-all" @click="toggleAll">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="(item,index) in show" :class="[item.completed && 'completed', item.editing && 'editing']">
        <div class="view">
          <input class="toggle" type="checkbox" :checked="item.completed" @click="toggleCompleted(index)"/>
          <label @dblclick="editingMode(index,$event)">{{item.title}}</label>
          <button class="destroy" @click="destroy(index)"></button>
        </div>
        <input class="edit" v-model="item.title" 
          @blur="doneEdit(item)" 
          @keyup.enter="doneEdit(item)" >
      </li>
    </ul>
  </section>

  
</template>

<script>
  export default{
    name:'TheList',
    
    data:function(){
      return{
        
      }
    },
    computed:{
      todos() {
        return this.$store.state.todos
      },
      filter() {
        return this.$store.state.filter
      },
      show(){
        let filter = this.filter;
        let todos = this.todos.filter( data => {
          if(filter === 'all'){
            return data
          }else if( filter === 'await'){
            return !data.completed
          }else if( filter === 'achieve'){
            return data.completed
          }
        })
        return todos
      },
      chooseAll(){
        return this.todos.every(data => data.completed);
      },
    },
    methods: {  
     changeFilter (key, event) { //点击切换
        this.filter = key
      },      
      toggleCompleted(index){//点击切换状态
        this.todos[index]['completed'] = !this.todos[index]['completed']
      },
      editingMode(index,event){//编辑内容
        this.todos[index]['editing'] = true
        this.editeIndex = index;
      },
      doneEdit(item){//编辑内容后回车确认
        item.editing = false;
        this.editeIndex = null;
      },
      toggleAll(e){//全选的
        let chooseAll = this.chooseAll;
        let crr=this.todos.forEach( data => data.completed = !chooseAll);
        this.$emit('toggleAll',crr)
      },
      destroy(index){// 删除个体todos
        this.todos.splice(index,1)
      },
    },
  }

</script>