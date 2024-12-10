new Vue({
  el: '#app',
  data() {
    return {
      newTodo: '', // 入力中のタスク
      todos: [] // タスクのリスト
    };
  },
  methods: {
    // inputTextメソッドを追加
    inputText(event) {
      this.newTodo = event.target.value; // 入力イベントの値をnewTodoに設定
    },
    // addTodoメソッドを追加
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push(this.newTodo.trim());
        this.newTodo = ''; // 入力欄をクリア
      }
    },
    // resetTextメソッドを追加
    resetText() {
      this.newTodo = ''; // 入力欄をクリア
    }
  }
});
