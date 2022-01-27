import {Box, Divider, Image, Stack, Text} from "@chakra-ui/react";

import useTimeAgo from "../../hooks/useTimeago";

const Post = ({avatar, displayName, message, createAt, messagesEndRef}) => {
  if (createdAt) {
    const timeago = useTimeAgo(createAt);
  }

  return (
    <Box>
      <Stack direction={"row"}>
        <Image h={10} rounded={"full"} src={avatar} w={10} />
        <Stack ref={messagesEndRef} pl={2} pr={10} spacing={0} w={"100%"}>
          <Stack alignItems={"baseline"} direction={"row"}>
            <Text>{displayName}</Text>
            <Text fontSize={13} fontWeight={"thin"}>
              {timeago && timeago}
            </Text>
          </Stack>
          <Text fontWeight={300}>{message}</Text>
        </Stack>
      </Stack>
      <Divider my={2} overflow={"hidden"} zIndex={-10} />
    </Box>
  );
};

export default Post;
