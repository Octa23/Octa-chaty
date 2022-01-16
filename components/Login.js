import {Button, Center, Image, Stack, Text} from "@chakra-ui/react";
import {useContext} from "react";
import {FaGithub} from "react-icons/fa";

import UserContext from "../context/UserContext";

const Login = () => {
  const {user, handleClick} = useContext(UserContext);

  return (
    <Center boxShadow={"dark-lg"} h={"80vh"} m={"auto"} my={"10%"} w={"80vw"}>
      <Center as={Stack} gap={5} px={10}>
        <Stack alignItems={"center"} textAlign={"center"}>
          <Image src="/conversation.png" w={90} />
          <Text fontSize={30} fontWeight={"thin"}>
            Octa Chaty
          </Text>
        </Stack>
        <Text fontSize={20} fontWeight={"thin"} m={0} textAlign={"center"}>
          New live message web aplicattion!
        </Text>
        {!user ? (
          <Button fontSize={20} leftIcon={<FaGithub />} onClick={handleClick}>
            Ingresar con Github
          </Button>
        ) : (
          <Stack alignItems={"center"} direction={"row"}>
            <Image rounded={"full"} src={user.photoURL} w={"70px"} />
            <Stack spacing={0}>
              <Text>Hola {user.displayName}</Text>
              <Text> {user.email}</Text>
            </Stack>
          </Stack>
        )}
      </Center>
    </Center>
  );
};

export default Login;
