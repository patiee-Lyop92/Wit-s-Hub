import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../../Config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface PostsData {
  description: string;
}
function FormInputs() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  const schema = yup.object().shape({
    description: yup.string().required("unable to send post, type something"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostsData>({
    resolver: yupResolver(schema),
  });

  const postsCollection = collection(db, "posts");
  
  const handlePosts = async (data: PostsData) => {
    await addDoc(postsCollection, {
      description: data.description,
      userName: user?.displayName,
      userId: user?.uid,
    });
    navigate("/")
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(handlePosts)}>
        <textarea
          className="post-area"
          placeholder="share your thoughts"
          {...register("description")}
        />
        <p style={{color: "red"}}>{errors.description?.message}</p>
        <input className="posts-input" type="submit" placeholder="post" />
      </form>
    </div>
  );
}

export default FormInputs;
