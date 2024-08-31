const Todos = require("./todoLib");

const getAllTodos = (req, res) => {
    const Todolist = Todos.getAll();
    res.json(Todolist);
  };

  const createTodo = (req, res) => {
    const { task, completed, dueDate } = req.body;
  
    const newTodo = Todos.addOne(task, completed, dueDate);
  
    if (newTodo) {
      res.json(newTodo);
    } else {
      res.status(500).json({ message: "Failed to create todo" });
    }
  };

  const getTodoById = (req, res) => {
    const id = req.params.id;
    const todo = Todos.findById(id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  };

  const updateTodo = (req, res) => {
    const id = req.params.id;
  
    const { task, completed, dueDate} = req.body;
  
    const updatedTodo = Todos.updateOneById(id, { task, completed, dueDate });
  
    if (updatedTodo) {
      res.json(updatedTodo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  };

  const deleteTodo = (req, res) => {
    const id = req.params.id;
  
    const isDeleted = Todos.deleteOneById(id);
  
    if (isDeleted) {
      res.json({ message: "Todo deleted successfully" });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  };


  module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
  };