import {useContext, useEffect, useState} from "react";

import UserContext from "../context/UserContext";

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
      const data = {
        id: Math.random(),
        avatar: user.photoURL,
        displayName: user.displayName,
        message: message,
      };

      fetch("http://192.168.1.12:4000/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(setPosts([...posts, data]));
      setMessage("");
    }
  };

  useEffect(() => {
    fetch("http://192.168.1.12:4000/posts").then((response) => {
      response.json().then(setPosts);
    });
  }, []);

  return {message, handlepost, handlechange, handleEmoji, posts};
};

export default useChat;
