import { getDocs, collection, doc } from "firebase/firestore";
import { db } from "../../../Config/firebase";
import { useState, useEffect } from "react";
import Post from "./PostsUi";
// import {} from "react-icons/fa"
import { GoHome } from "react-icons/go";

export interface post {
  id: string;
  description: string;
  userName: string;
}
function HomePage() {
  const [postsLists, setPostsList] = useState<post[] | null>(null);
  const PostsData = collection(db, "posts");
  const getPosts = async () => {
    const userData = await getDocs(PostsData);
    setPostsList(
      userData.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as post[]
    );
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      {postsLists?.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default HomePage;
