import {Image, Stack, Text} from "@chakra-ui/react";

const Avatar = ({size, user}) => {
  const {photoURL, displayName} = user;

  return (
    <Stack alignItems={"center"} direction={"row"} fontSize={size}>
      <Image rounded={"full"} src={photoURL} w={size - 4} />
      <Stack>
        <Text fontSize={size} fontWeight={300}>
          {displayName}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Avatar;
