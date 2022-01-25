import {useColorMode} from "@chakra-ui/react";
import {useContext} from "react";

import UserContext from "../../context/UserContext";
import useChat from "../../hooks/useChat";

import Chat from "./Chat";
import ChatForm from "./ChatForm";
import Header from "./Header";

const Layout = () => {
  const {user} = useContext(UserContext);
  const {colorMode, toggleColorMode} = useColorMode();
  const {message, posts, handlepost, handlechange, handleEmoji} = useChat();

  return (
    <>
      <Header colorMode={colorMode} toggleColorMode={toggleColorMode} user={user} />
      {user && <Chat posts={posts} user={user} />}
      <ChatForm
        colorMode={colorMode}
        handleEmoji={handleEmoji}
        handlechange={handlechange}
        handlepost={handlepost}
        message={message}
      />
    </>
  );
};

export default Layout;
