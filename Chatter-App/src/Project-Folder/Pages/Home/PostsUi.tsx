import { post as interfaceProp } from "./HomePage";
import { auth, db } from "../../../Config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
// import { User } from "firebase/auth";
// add bookmark and comment icons 

interface props {
  post: interfaceProp;
}
interface userHasLiked {
  userId: string;
  likedId: string;
}
function Post(props: props) {
  const [displayLikes, setDisplayLikes] = useState<userHasLiked[] | null>(null);
  const [user] = useAuthState(auth);
  const likesCollection = collection(db, "Likes");
  const { post } = props;
  const likesDoc = query(likesCollection, where("postId", "==", post.id));

  const getLikes = async () => {
    const likesResult = await getDocs(likesDoc);
    setDisplayLikes(
      likesResult.docs.map((likesLength) => ({
        userId: likesLength.data().userId,
        likedId: doc().id,
      }))
    );
  };
  const addLikes = async () => {
    try {
      const newDoc = await addDoc(likesCollection, {
        userId: user?.uid,
        postId: post.id,
      });
      if (user) {
        setDisplayLikes((prev) =>
          prev
            ? [...prev, { userId: user?.uid, likedId: newDoc.id }]
            : [{ userId: user.uid, likedId: newDoc.id }]
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deleteLikes = async () => {
    try {
      const deleteFromQuery = query(
        likesCollection,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );
      const dataToDelete = await getDocs(deleteFromQuery);
      const likeId = dataToDelete.docs[0].id;
      const likesToDelete = doc(db, "Likes", likeId);
      await deleteDoc(likesToDelete);
      if (user) {
        setDisplayLikes(
          (prev) => prev && prev.filter((like) => like.likedId !== likeId)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  
  const userAlreadyLiked = displayLikes?.find(
    (likes) => likes.userId === user?.uid
  );
  useEffect(() => {
    getLikes();
  }, []);
  return (
    <div className="post-body">
      <div className="post-field" style={{ display: "flex" }}>
        <img
          src={user?.photoURL || " "}
          style={{ borderRadius: "50%", width: "50px" }}
        />
        <p className="postUser">@{post.userName}</p>
      </div>

      <div className="text-field">
        <p>{post?.description}</p>
        {
          <button
            className="likeBtn"
            onClick={userAlreadyLiked ? deleteLikes : addLikes}
          >
            {userAlreadyLiked ? <>&#128078;</> : <>&#128077;</>}
          </button>
        }
        {displayLikes && displayLikes.length}
        {displayLikes && (
          <button className="likeBtn" onClick={addLikes}>
            &#9829;{displayLikes?.length}
          </button>
        )}
      </div>
    </div>
  );
}

export default Post;
