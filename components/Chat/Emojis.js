import {
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import useEmojis from "../../hooks/useEmojis";

const Emojis = ({handleEmoji}) => {
  const emojis = useEmojis();

  return (
    <Popover placement="top-start">
      <PopoverTrigger>
        <Button fontSize={20}>🙂</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <SimpleGrid minChildWidth="25px">
            {emojis &&
              emojis.map((e) => {
                return (
                  <Text key={Math.random()} cursor={"pointer"} fontSize={20} onClick={handleEmoji}>
                    {e}
                  </Text>
                );
              })}
          </SimpleGrid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Emojis;
