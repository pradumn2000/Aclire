import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Dashboard ✅</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}