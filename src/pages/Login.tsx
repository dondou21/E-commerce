import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; 

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = () => {
    login("user", "password");
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleSubmit}>Log In</button>
    </div>
  );
};