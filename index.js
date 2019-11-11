import './style';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    taskText: '',
    taskCompleted: false,
    taskToAdd: [],
  },
  methods: {
    inputTask(event) {
      this.taskText = event.target.value;
    },
    addTask() {
      event.preventDefault();
      // Add an object to taskToAdd array with text and completed properties
      this.taskToAdd.push({text: this.taskText, completed: this.taskCompleted});
    },
    handleComplete(completed, index) {
      console.log(completed, index);
      if(completed == false) {
        this.taskToAdd[index].completed = true;
      } else {
        this.taskToAdd[index].completed = false;
      }
    }
  }
});

