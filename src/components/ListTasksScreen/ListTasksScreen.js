// ListTasksScreen.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ActionMenu from './ActionMenu';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import SearchBar from './SearchBar';

const ListTasksScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTask = (newTask) => {
    // Update the tasks state with the new task
    setTasks((prevTasks) => [...prevTasks, newTask]);
    // Close the add task form
    setShowAddTaskForm(false);
  };

  const handleFilterChange = (newFilter) => {
    // Update the filter state
    setFilter(newFilter);
  };

  const handleShowAddTaskForm = () => {
    // Show the add task form
    setShowAddTaskForm(true);
  };

  const handleTaskToggle = (taskId) => {
    // Implement the logic for toggling task completion
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskClick = (taskId) => {
    // Implement the logic for handling a task click
    console.log(`Task clicked: ${taskId}`);
  };

  const handleDeleteTasks = (taskIds) => {
    // Implement the logic to delete tasks based on taskIds
    setTasks((prevTasks) => prevTasks.filter((task) => !taskIds.includes(task.id)));
  };

  const handleSearch = (term) => {
    // Update the search term state
    setSearchTerm(term);
  };

  const filterTaskByButton = () => {
    return tasks
      .filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter((task) => {
        if (filter === 'active') {
          return !task.completed;
        } else if (filter === 'completed') {
          return task.completed;
        } else {
          return true; // 'all' filter, show all tasks
        }
      });
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h2>Task List</h2>
          <SearchBar onSearch={handleSearch} />
          <TaskList
            tasks={filterTaskByButton()}
            onTaskToggle={handleTaskToggle}
            onTaskClick={handleTaskClick}
            onDeleteTasks={handleDeleteTasks}
          />
        </Col>
        <Col md={4}>
          <ActionMenu onAddTask={handleShowAddTaskForm} onFilterChange={handleFilterChange} />
        </Col>
      </Row>
      {showAddTaskForm && (
        <AddTaskForm onAddTask={handleAddTask} onCancel={() => setShowAddTaskForm(false)} />
      )}
    </Container>
  );
};

export default ListTasksScreen;
