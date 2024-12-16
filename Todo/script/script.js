new Vue({
  el: '#app',
  data() {
    return {
      newTodo: '', // 入力中のタスク
      todos: [], // タスクのリスト
    };
  },
  computed: {
    // 完了タスク
    doneTodo() {
      return this.todos.filter((todo) => todo.isDone === true);
    },
    // 未完了タスク
    incompleteTodo() {
      return this.todos.filter((todo) => todo.isDone === false);
    },
  },
  methods: {
    // タスク追加
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({
          id: Date.now(),
          text: this.newTodo.trim(),
          isDone: false,
        });
        this.newTodo = ''; // 入力欄をクリア
      }
    },
    // タスク削除
    deleteTodo(id) {
      const index = this.getIndexBy(id);
      this.todos.splice(index, 1);
    },
    // 完了・未完了の切り替え
    toggleIsDone(id) {
      const index = this.getIndexBy(id);
      this.todos[index].isDone = !this.todos[index].isDone;
    },
    // IDからインデックス取得
    getIndexBy(id) {
      const filteredTodo = this.todos.filter((todo) => todo.id === id)[0];
      const index = this.todos.indexOf(filteredTodo);
      return index;
    },
  },
});
