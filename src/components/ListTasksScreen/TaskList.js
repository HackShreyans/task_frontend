// TaskList.js
import React, { useState } from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';

const TaskList = ({ tasks, onTaskToggle, onTaskClick, onDeleteTasks }) => {
  const [selectedTaskIds, setSelectedTaskIds] = useState([]);

  const handleToggleSelect = (taskId) => {
    // Toggle the selected state of the task
    setSelectedTaskIds((prevSelectedIds) =>
      prevSelectedIds.includes(taskId)
        ? prevSelectedIds.filter((id) => id !== taskId)
        : [...prevSelectedIds, taskId]
    );
  };

  const handleDeleteSelected = () => {
    // Call the onDeleteTasks function passed from the parent component with the selected task ids
    onDeleteTasks(selectedTaskIds);
    // Clear the selected task ids
    setSelectedTaskIds([]);
  };

  return (
    <ListGroup>
      {tasks.map((task) => (
        <ListGroup.Item key={task.id} action>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Form.Check
              type="checkbox"
              label={
                <div>
                  <strong>{task.title}</strong>
                  <p>{task.description}</p>
                </div>
              }
              checked={task.completed}
              onChange={() => {
                onTaskToggle && onTaskToggle(task.id);
                handleToggleSelect(task.id);
              }}
            />
            <span
              onClick={() => onTaskClick && onTaskClick(task.id)}
              style={{ marginLeft: '10px', cursor: 'pointer' }}
            >
              {task.completed ? 'Completed' : 'Active'}
            </span>
          </div>
        </ListGroup.Item>
      ))}
      {selectedTaskIds.length > 0 && (
        <ListGroup.Item>
          <Button variant="danger" onClick={handleDeleteSelected}>
            Delete Selected
          </Button>
        </ListGroup.Item>
      )}
    </ListGroup>
  );
};

export default TaskList;
