import { Link, Navigate } from "react-router-dom";
import { auth } from "../../Config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { GoHome } from "react-icons/go";
import ThemeSwitcher from "../Pages/ThemeFolder/ThemeSwitcher";

function Navbar() {
  //the useAuthState function alllows display of different login account information
  const [user] = useAuthState(auth);

  const LogUserOut = async () => {
    const result = await signOut(auth);
    console.log(result);
  };

  return (
    <div className="navbar-wrapper">
      <Link to="/" className="navbarlink">
        Home
        {/* <GoHome /> */}
      </Link>
      {!user ? (
        <Link to="/LoginPage" className="navbarlink">
          Login
        </Link>
      ) : (
        <Link to="/CreatePost" className="navbarlink">
          Create Post
        </Link>
      )}
      <button onClick={LogUserOut}>Sign Out</button>
      <div>
        <img
          src={user?.photoURL || " "}
          style={{ borderRadius: "50%", width: "50px" }}
        />
        <p>{user?.displayName}</p>
      </div>
    </div>
  );
}

export default Navbar;
