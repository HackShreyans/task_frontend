// ActionMenu.js
import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const ActionMenu = ({ onAddTask, onFilterChange }) => {
  return (
    <ButtonGroup>

      
      <Button variant="primary" onClick={onAddTask}>
        Add Task
      </Button>
      <Button variant="secondary" onClick={() => onFilterChange('all')}>
        All
      </Button>
      <Button variant="secondary" onClick={() => onFilterChange('active')}>
        Active
      </Button>
      <Button variant="secondary" onClick={() => onFilterChange('completed')}>
        Completed
      </Button>
    </ButtonGroup>
  );
};

export default ActionMenu;
