  export default{
      name: '.todoapp',
      data: {
        value: '',
        editeIndex: null,
        filter: 'all',
        filters: {
          'all': '全部',
          'await': '待办',
          'achieve': '已完成',
        },
        todos:[
          {title: '吃饭饭',completed: true,editing: false},
          {title: '睡觉觉',completed: false,editing: false},
          {title: '打豆豆',completed: false,editing: false},
        ],
      },
      computed: {

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
        }
      },
     
      methods: {
        // changeFilter (key, event) { //点击切换
        //   this.filter = key
        // },      
        // toggleCompleted(index){//点击切换状态
        //   this.todos[index]['completed'] = !this.todos[index]['completed']
        // },
        // editingMode(index,event){//编辑内容
        //   this.todos[index]['editing'] = true
        //   // console.log(this.todos)
        //   this.editeIndex = index;
        // },
        // doneEdit(item){//编辑内容后回车确认
        //   item.editing = false;
        //   this.editeIndex = null;
        // },
        // toggleAll(e){//全选的
        //   let chooseAll = this.chooseAll;
        //   this.todos.forEach( data => data.completed = !chooseAll)
        // },
        // create(e){//添加项目
        //   let value = this.value;
        //   this.todos.push({
        //     title:value,
        //     completed:false,
        //     editing:false
        //   })
        //   this.value = '';
        // },
        // destroy(index){// 删除个体todos
        //   this.todos.splice(index,1)
        // },
        // clearCompleted(){//清除所有已经完成
        //   let del = this.todos.filter(data => data.completed === false)
        //   this.todos = del
        // },
        // changeFilter (key, event) {//项目筛选
        //   this.filter = key
        // },
      },
      
    }