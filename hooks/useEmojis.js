import {useEffect, useState} from "react";

import {emojisarray} from "../public/emojisarray";
const useEmojis = () => {
  const [emojis, setEmojis] = useState(null);

  useEffect(() => {
    setEmojis(emojisarray);
  }, []);

  return emojis;
};

export default useEmojis;
