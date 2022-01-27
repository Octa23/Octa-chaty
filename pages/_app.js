import {ChakraProvider} from "@chakra-ui/react";

import {UserProvider} from "../context/UserContext";
import "../styles/globals.css";
import theme from "../theme/Theme";
function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
