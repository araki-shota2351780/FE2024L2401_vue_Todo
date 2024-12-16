new Vue({
  el: '#app',
  data() {
    return {
      newTodo: '', // 入力中のタスク
      todos: [], // タスクリスト
    };
  },
  methods: {
    // タスクを追加
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({
          id: Date.now(),
          text: this.newTodo.trim(),
          isDone: false,
        });
        this.newTodo = '';
      }
    },
    // タスクの削除
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 完了状態を切り替え
    toggleIsDone(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
  },
  computed: {
    // 完了したタスク
    doneTodo() {
      return this.todos.filter((todo) => todo.isDone);
    },
    // 未完了のタスク
    incompleteTodo() {
      return this.todos.filter((todo) => !todo.isDone);
    },
  },
});
