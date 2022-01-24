import {Button, Input, Stack} from "@chakra-ui/react";

const ChatForm = ({colorMode, message, handlepost, handlechange}) => {
  return (
    <Stack
      alignItems={"center"}
      as={"header"}
      bg={colorMode === "dark" ? "gray.900" : "gray.300"}
      bottom={0}
      direction={"row"}
      h={"50px"}
      position={"fixed"}
      px={2}
      w={"100%"}
      zIndex={10}
    >
      <form style={{display: "flex", width: "100%", gap: "10px"}} onSubmit={handlepost}>
        <Button>🙂</Button>
        <Input
          fontSize={20}
          fontWeight={"thin"}
          placeholder="Text here..."
          value={message}
          variant="filled"
          onChange={handlechange}
        />

        <Button fontWeight={"medium"} type="submit">
          Enviar
        </Button>
      </form>
    </Stack>
  );
};

export default ChatForm;
