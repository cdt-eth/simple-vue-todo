const app = new Vue({
  el: "#app",
  data: {
    title: "My Todo App",
    newTodo: "",
    todoArray: [],
  },
  methods: {
    addTodo: function add() {
      console.log(this.newTodo);

      this.todoArray.push({
        title: this.newTodo,
        done: false,
      });

      this.newTodo = "";
    },
    deleteTodo(todo) {
      const todoID = this.todoArray.indexOf(todo);
      this.todoArray.splice(todoID, 1);
    },
    deleteAll() {
      this.todoArray = [];
    },
  },
});
