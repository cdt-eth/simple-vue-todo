const app = new Vue({
  el: "#app",
  data: {
    title: "Christian",
    newTodo: "",
    todoArray: [],
  },
  methods: {
    add: function addTodo() {
      this.todoArray.push({
        title: this.newTodo,
        done: false,
      });
      this.newTodo = "";
    },
    deleteTodo(todo) {
      console.log(`deleted ${todo.title}!`);
      const todoID = this.todoArray.indexOf(todo);
      this.todoArray.splice(todoID, 1);
    },
    deleteAll() {
      this.todoArray = [];
    },
  },
});

// SET-UP
// create HTML file
// add Vue script tag
// add id of app to a main element in body element
// create app JS file
// set up new Vue app, setting el to #app and add a data object
// add script tag to html to connect JS file to HTML file
// add a vue template in your HTML with your data property to verify connection

// HTML - Create Form
// create HTML form
// create input field (type text)
// create button to add (type submit)

// JS -
// create newTodo data property and set to empty string
// add methods object in app.js
// create add function and console.log(this.newTodo) to test connection

// HTML
// in HTML add an @submitl.prevent and set it equals to our add method
// the input field add a v-model and set it equals to "newTodo" to bind it to users input

// JS
// add empty todoArray to data object
// in add function push object with two properties ("title" of todo & "done" bool set to false)
// reset the input field value (newTodo) to an empty string by add this.newTodo = ""; to add function

// HTML
// create ul with v-for="todo in todoArray" to for loop over the array
// crete an input (type checkbox) and bind it to the "done" bool using "v-model=todo.done"
// create one li in it with a vue template for todo.title in it to display todos in DOM
// create button with the text "X"

// HTML - Mark As Complete CSS Strikethrough
// add a style binding to the todo span and bind it to a class called "done"
// add a style tag in the HTML head and a CSS property of text-decoration: line-through

// JS - Delete Todo
// HTML: add an @click event for our "X" button and pass it a todo
// create a deleteTodo function in our methods and pass it a todo
// we need the specific todo so we'll create a todoID variable and set it equal to this.todoArray.indexOf(todo)
// splice our todoArray with the new todoID as the first parameter and 1 as the second to splice it out

// Delete All Todos
// HTML: create a button outside the form and call it Delete All
// JS: create deleteAll function that simply sets to an empty array again by "this.todoArray = [];"
