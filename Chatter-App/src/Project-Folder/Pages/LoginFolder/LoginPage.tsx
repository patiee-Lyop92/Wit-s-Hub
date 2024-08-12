import { auth, provider } from "../../../Config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  //function useNavigate redirects user to the home page after signing in
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log (result)
    navigate("/");
  };

  const createAccountBtn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log (result)
    navigate("/LoginPage");
  };
  return (
    <div className="loginPage-wrapper">
      <div className="withub-container">
        <h2>Welcome To</h2>
        <h1>WIT HUB</h1>
      </div>
      <div className="signup-signin-wrapper">
        <div className="signup-container">
          <p>Sign Up With Google</p>
          <button className="login-Btn" onClick={handleSignIn}>Sign IN with Google</button>
          <p>Or</p>
          <button className="login-Btn" onClick={createAccountBtn} >Create an account</button>
        </div>
        <div>
          <p>Already have an account?</p>
          <button className="login-Btn" onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
