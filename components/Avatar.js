import {Image, Stack, Text} from "@chakra-ui/react";
import {useContext} from "react";

import UserContext from "../context/UserContext";

const Avatar = ({size}) => {
  const {user} = useContext(UserContext);
  const {photoURL, displayName} = user;

  return (
    <Stack alignItems={"center"} direction={"row"} fontSize={size}>
      <Image rounded={"full"} src={photoURL} w={size} />
      <Stack>
        <Text fontWeight={300}>{displayName}</Text>
      </Stack>
    </Stack>
  );
};

export default Avatar;
