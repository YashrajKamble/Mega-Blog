import { useDispatch } from "react-redux";
import authService from "../../store/authSlice";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
      Logout
    </div>
  );
}

export default LogoutBtn;
