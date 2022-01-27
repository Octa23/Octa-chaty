import {useContext, useEffect, useState} from "react";

import UserContext from "../context/UserContext";
import {addData, listenNewPosts} from "../firebase/cliente";

const useChat = () => {
  const {user} = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  const handleEmoji = (e) => {
    setMessage(message.concat(e.target.innerHTML));
  };

  const handlechange = (e) => {
    setMessage(e.target.value);
  };

  const handlepost = (e) => {
    e.preventDefault();
    if (!message) {
      return;
    } else {
      addData({
        avatar: user.photoURL,
        displayName: user.displayName,
        message: message,
        userId: user.uid,
      });
      setMessage("");
    }
  };

  useEffect(() => {
    let unsubscribe = listenNewPosts(setPosts);

    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  return {message, handlepost, handlechange, handleEmoji, posts};
};

export default useChat;
