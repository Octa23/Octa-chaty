import {Stack} from "@chakra-ui/react";
import {memo, useEffect, useRef} from "react";

import Post from "./Post";
const Chat = ({posts}) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    scrollToBottom();
  }, [posts]);

  return (
    <Stack direction={"column-reverse"} px={5} py={"60px"} spacing={0}>
      {posts &&
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              avatar={post.avatar}
              createAt={post.createdAt}
              displayName={post.displayName}
              message={post.message}
              messagesEndRef={messagesEndRef}
            />
          );
        })}
    </Stack>
  );
};

export default memo(Chat);
