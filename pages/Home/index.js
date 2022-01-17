import {Box, Divider, Image, Stack, Text} from "@chakra-ui/react";
import {useEffect, useState} from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.12:4000/posts").then((response) => {
      response.json().then(setPosts);
    });
  }, []);

  return (
    <>
      <Stack
        alignItems={"center"}
        as={"header"}
        bg="white"
        borderBottom={"1px solid #ccc"}
        direction={"row"}
        h={"50px"}
        position={"fixed"}
        top={0}
        w={"100%"}
        zIndex={10}
      >
        <Text fontSize={20} fontWeight={700} px={5}>
          Inicio
        </Text>
      </Stack>
      <Box px={5} py={"60px"}>
        {posts &&
          posts.map((post) => {
            return (
              <Box key={post.id}>
                <Stack direction={"row"}>
                  <Image h={10} rounded={"full"} src={post.avatar} w={10} />
                  <Stack pl={2} spacing={-1}>
                    <Text>{post.displayName}</Text>
                    <Text fontWeight={300}>{post.message}</Text>
                  </Stack>
                </Stack>
                <Divider my={2} overflow={"hidden"} zIndex={-10} />
              </Box>
            );
          })}
      </Box>
      <Stack
        alignItems={"center"}
        as={"header"}
        bg="white"
        borderTop={"1px solid #ccc"}
        bottom={0}
        direction={"row"}
        h={"50px"}
        position={"fixed"}
        w={"100%"}
        zIndex={10}
      >
        <Text fontSize={20} fontWeight={700} px={5}>
          Footer
        </Text>
      </Stack>
    </>
  );
};

export default Home;
