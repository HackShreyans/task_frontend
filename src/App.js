import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import ListTasksScreen from './components/ListTasksScreen/ListTasksScreen';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/tasks" element={<ListTasksScreen />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
