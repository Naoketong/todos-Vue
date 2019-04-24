<template>
  <header class="header">
        <h1>极客 todos</h1>
        <input class="new-todo" placeholder="What are you 弄啥咧?" autofocus  @keyup.enter="create"  v-model="value">
      </header>
</template>

<script>
  export default{
    name:'TheHeader',
    data() {
    return {
        value: ''
      }
    },  
    methods:{
      create:function(){
        
        this.$store.commit('create',{
          title: this.value,
          completed: false
        })
        this.value='';
      },      
    },  
  }

</script>