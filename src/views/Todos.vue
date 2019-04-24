<template>
   <!--  <div id="app" class="todoapp" v-cloak>      
      <TheHeader :todos=todos @create="create"></TheHeader>
      <TheList :todos=todos :filter="filter"></TheList>
      <TheFooter :todos=todos :clearCompleted="clearCompleted" :changeFilter="changeFilter"></TheFooter>
    </div>   -->
     <section class="todoapp" v-cloak>
      <the-header />
      <the-list />
      <the-footer />
  </section>
</template>

<script>
  import '@/assets/base.css';
  import '@/assets/index.css';
  import TheHeader from '@/components/TheHeader.vue';
  import TheList from '@/components/TheLister.vue';
  import TheFooter from '@/components/TheFooter.vue';
  
  export default{    
   
    created() {
      this.fetchFilter();
    },
    watch: {
      '$route': 'fetchFilter'
    },
    methods: {
      fetchFilter: function() {
        let filter = this.$route.params.id || 'all';
        this.$store.commit('changeFilter', filter)
      },
      changeFilter (key, event) {//项目筛选
        this.filter = key
      },
    },
    
    components: {
      'the-header': TheHeader,
      'the-list': TheList,
      'the-footer': TheFooter,
      
    },
  }
</script>


