import {Button, Input, Stack, Text} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {useContext, useEffect} from "react";

import Chat from "../../components/Chat";
import UserContext from "../../context/UserContext";
import useChat from "../../hooks/useChat";
const Home = () => {
  const {message, handlepost, handlechange, posts} = useChat();
  const {user} = useContext(UserContext);

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
      {user && <Chat posts={posts} />}
      <Stack
        alignItems={"center"}
        as={"header"}
        bg="white"
        borderTop={"1px solid #ccc"}
        bottom={0}
        direction={"row"}
        h={"50px"}
        p={4}
        position={"fixed"}
        w={"100%"}
        zIndex={10}
      >
        <form style={{display: "flex", width: "100%", gap: "10px"}} onSubmit={handlepost}>
          <Input
            fontSize={20}
            fontWeight={700}
            placeholder="Text here..."
            px={5}
            value={message}
            onChange={handlechange}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </Stack>
    </>
  );
};

export default Home;
