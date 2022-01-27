import {Button, Center, chakra, Image, Stack, Text, useColorMode} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {useContext} from "react";
import {FaGoogle} from "react-icons/fa";

import UserContext from "../context/UserContext";

import Avatar from "./Avatar";

const MotionBox = chakra(motion.div);

const Login = () => {
  const router = useRouter();
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
      <MotionBox
        animate={{opacity: 1, y: 0, transition: {duration: 1}}}
        h={"100%"}
        initial={{opacity: 0, y: -100}}
      >
        <Stack alignItems={"center"} h={"100%"} justifyContent={"center"} px={10}>
          <Stack
            alignItems={"center"}
            flex={user && 1}
            justifyContent={"center"}
            mb={!user && 20}
            textAlign={"center"}
          >
            <Image src="/conversation.png" w={90} />
            <Text fontSize={30} fontWeight={500}>
              Octa Chaty
            </Text>
            <Text fontSize={20} fontWeight={300} m={0} textAlign={"center"}>
              New live message web application!
            </Text>
          </Stack>
          {!user ? (
            <Button fontSize={20} fontWeight={300} leftIcon={<FaGoogle />} onClick={handleLogin}>
              Sign in with Google
            </Button>
          ) : (
            <Stack alignItems={"center"} flex={1} justifyContent={"space-evenly"}>
              <Text fontSize={40} fontWeight={300}>
                ¡Welcome!
              </Text>
              {user && <Avatar size={20} user={user} />}
              <Stack
                alignItems={"center"}
                direction={"row"}
                flex={1}
                justifyContent={"space-between"}
              >
                <Button onClick={handleLogout}>Log Out</Button>
                <Button
                  onClick={() => {
                    router.push("/Home");
                  }}
                >
                  Home
                </Button>
              </Stack>
            </Stack>
          )}
        </Stack>
      </MotionBox>
    </Center>
  );
};

export default Login;
