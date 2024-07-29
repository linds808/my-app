import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ForgetPass from './Pages/ForgetPass';
import Login from './Pages/Login';
import ResetPass from './Pages/resetpassword';
import CreateAcc from './Pages/CreateAcc';
import Dashboard from './Pages/Dashboard';
import List from './Pages/list';
import ListFoodSeeker from './Pages/List-foodseeker';
import ListEstablishment from './Pages/List-establishment';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorBoundary from './Pages/ErrorBoundary'; // Import ErrorBoundary

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> }, // Add this line if using Option 2
  { path: "forgotpass", element: <ForgetPass /> },
  { path: "resetpass", element: <ResetPass /> },
  { path: "createacc", element: <CreateAcc /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "list", element: <List /> },
  { path: "listfoodseekers", element: <ListFoodSeeker /> },
  { path: "listestablishment", element: <ListEstablishment /> },
]);

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
