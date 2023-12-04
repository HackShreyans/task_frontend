// SearchBar.js
import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Control
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </Form.Group>
  );
};

export default SearchBar;
