// AddTaskForm.js
import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';

const AddTaskForm = ({ onAddTask, onCancel }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskStatus, setTaskStatus] = useState('active');

  const handleAddTask = () => {
    // Validate task title
    if (!taskTitle.trim()) {
      alert('Task title cannot be empty.');
      return;
    }

    // Call the onAddTask function passed from the parent component with the new task
    onAddTask({
      id: Date.now(), // Use a unique identifier (in this case, timestamp) as the task id
      title: taskTitle,
      description: taskDescription,
      status: taskStatus,
    });

    // Clear the input and select
    setTaskTitle('');
    setTaskDescription('');
    setTaskStatus('active');

    // Optional: Close the form or navigate to another screen
    onCancel(); // Uncomment this line if you want to close the form after adding a task
  };

  return (
    <Container className="mt-3">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Add Task</h2>
          <Form>
            <Form.Group className="mb-3" controlId="taskTitle">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Enter task title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="taskDescription">
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Enter task description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="taskStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
              >
                <option value="active">Active</option>
                <option value="completed">Completed</option>
              </Form.Control>
            </Form.Group>
            <Button variant="success" onClick={handleAddTask} className="w-100">
              Add Task
            </Button>
            <Button variant="danger" onClick={onCancel} className="w-100 mt-3">
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddTaskForm;
