import {Button, Center, Image, Link, Stack, Text, useColorMode} from "@chakra-ui/react";
import {useContext} from "react";
import {FaGithub} from "react-icons/fa";

import UserContext from "../context/UserContext";

import Avatar from "./Avatar";

const Login = () => {
  const {user, handleLogin, handleLogout} = useContext(UserContext);
  const {colorMode} = useColorMode();

  return (
    <Center
      bg={colorMode === "dark" ? "gray.900" : "gray.300"}
      borderRadius={5}
      boxShadow={"dark-lg"}
      h={"500px"}
      m={"auto"}
    >
      <Stack alignItems={"center"} h={"100%"} justifyContent={"space-evenly"} px={10}>
        <Stack alignItems={"center"} flex={user && 1} justifyContent={"end"} textAlign={"center"}>
          <Image src="/conversation.png" w={90} />
          <Text fontSize={30} fontWeight={500}>
            Octa Chaty
          </Text>
          <Text fontSize={20} fontWeight={300} m={0} textAlign={"center"}>
            New live message web application!
          </Text>
        </Stack>
        {!user ? (
          <Button fontSize={20} fontWeight={300} leftIcon={<FaGithub />} onClick={handleLogin}>
            Ingresar con Github
          </Button>
        ) : (
          <Stack alignItems={"center"} flex={1} justifyContent={"space-evenly"}>
            <Text fontSize={40} fontWeight={300}>
              ¡Bienvenido!
            </Text>
            {user && <Avatar size={20} user={user} />}
            <Link href="/Home">Ir hacia la home</Link>
            <Button onClick={handleLogout}>Log Out</Button>
          </Stack>
        )}
      </Stack>
    </Center>
  );
};

export default Login;
