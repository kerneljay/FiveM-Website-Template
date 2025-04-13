// Router.jsx
import { Router, Routes, Route } from 'solid-app-router';
import App from './App';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/home" component={App} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default AppRouter;
