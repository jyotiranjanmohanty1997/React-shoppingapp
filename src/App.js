import UserApp from "./user/userapp";
import AdminApp from "./admin/adminapp";

function App() {
  if (localStorage.getItem("sellerid") == null) {
    return <UserApp />;
  } else {
    return <AdminApp />;
  }
}

export default App;
