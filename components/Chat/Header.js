import {Button, Stack} from "@chakra-ui/react";
import {memo, useContext} from "react";

import Avatar from "../Avatar";
import UserContext from "../../context/UserContext";
const Header = ({colorMode, toggleColorMode, user}) => {
  const {handleLogout} = useContext(UserContext);

  return (
    <Stack
      alignItems={"center"}
      as={"header"}
      bg={colorMode === "dark" ? "gray.900" : "gray.300"}
      direction={"row"}
      h={"50px"}
      justifyContent={"space-between"}
      position={"fixed"}
      px={2}
      top={0}
      w={"100%"}
      zIndex={10}
    >
      {user && (
        <Stack direction={"row"} flex={1} justifyContent={"space-between"}>
          <Avatar size={14} user={user} />
          <Button fontWeight={"medium"} onClick={handleLogout}>
            Logout
          </Button>
        </Stack>
      )}
      <Button fontSize={20} onClick={toggleColorMode}>
        {colorMode === "light" ? "🌑" : "🌞"}
      </Button>
    </Stack>
  );
};

export default memo(Header);
