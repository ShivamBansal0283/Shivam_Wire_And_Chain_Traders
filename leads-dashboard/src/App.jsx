// import LeadsDashboard from './LeadsDashboard';

// function App() {
//   return <LeadsDashboard />;
// }

// export default App;


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login  from './Login';
import LeadsDashboard from './LeadsDashboard';
import { isAuthenticated } from './auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={isAuthenticated() ? <LeadsDashboard /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;