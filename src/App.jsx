import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import GeneratorPage from '@/pages/GeneratorPage'

function App() {
  // Mobile-first viewport setup
  useEffect(() => {
    const viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
      viewport.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="mobile-app-container">
          <Routes>
            <Route path="/" element={<GeneratorPage />} />
          </Routes>
        </div>
        
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          toastClassName="mobile-toast"
          toastStyle={{ zIndex: 9999 }}
        />
      </div>
    </Router>
  );
}

export default App;