import { auth, provider } from "../../../Config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

//create a form for users to fill in details
//create a link for createacount that allows user choose between google or form sign in
// navigate user to home once logged in
function CreateAccount() {
    const navigate = useNavigate();

    const createAccountBtn = async () => {
      const result = await signInWithPopup(auth, provider);
      console.log (result)
      navigate("/LoginPage");
    };
  return (
   <>
   <form action=""></form>
   </>
  )
}

export default CreateAccount