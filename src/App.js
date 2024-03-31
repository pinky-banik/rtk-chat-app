import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Conversation from "./pages/Conversation";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UseAuthCheck from "./Hooks/useAuthCheck";
import PublicRoute from "./components/PublicRoutes";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const authChecked = UseAuthCheck();

  return (
    !authChecked ? <div>Checking authentication.....</div> :
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<PublicRoute><Register/></PublicRoute>} />
      <Route path="/inbox" element={<PrivateRoute><Conversation /></PrivateRoute>} />
      <Route path="/inbox/:id" element={<PrivateRoute><Inbox /></PrivateRoute>} />
    </Routes>
  </Router>
  );
}

export default App;
