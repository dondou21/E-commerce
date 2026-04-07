import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ProtectedRoute } from "./components/ProtectedRoute"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard" 
import { AuthProvider } from "./context/AuthContext"


function App() {

  return (
   <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
   </AuthProvider>
  )
}

export default App
