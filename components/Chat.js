import {Box, Divider, Image, Stack, Text} from "@chakra-ui/react";
import {memo, useEffect, useRef} from "react";

const Chat = ({posts}) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
  };

  useEffect(() => {
    scrollToBottom();
  }, [posts]);

  return (
    <Box px={5} py={"60px"}>
      {posts &&
        posts.map((post) => {
          return (
            <Box key={post.id}>
              <Stack direction={"row"}>
                <Image h={10} rounded={"full"} src={post.avatar} w={10} />
                <Stack ref={messagesEndRef} pl={2} spacing={-1}>
                  <Text>{post.displayName}</Text>
                  <Text fontWeight={300}>{post.message}</Text>
                </Stack>
              </Stack>
              <Divider my={2} overflow={"hidden"} zIndex={-10} />
            </Box>
          );
        })}
    </Box>
  );
};

export default memo(Chat);
