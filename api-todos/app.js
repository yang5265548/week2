const express = require("express");
const app = express();

const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./todoHandlers"); // 'todoHandlers.js' contains the route handlers

// Middleware to parse JSON
app.use(express.json());

// ROUTES

// GET /todos
app.get("/todos", getAllTodos);

// POST /todos
app.post("/todos", createTodo);

// GET /todos/:todoId
app.get("/todos/:id", getTodoById);

// PUT /todos/:todoId
app.put("/todos/:id", updateTodo);

// DELETE /todos/:todoId
app.delete("/todos/:id", deleteTodo);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
