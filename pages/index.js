import Head from "next/head";
import {Stack} from "@chakra-ui/react";

import Login from "../components/Login";

export default function Home() {
  return (
    <>
      <Head>
        <title>Octa Chaty</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/conversation.png" rel="icon" />
      </Head>
      <Stack
        bgImage="url('/18307.jpg')"
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        h={"100vh"}
        w={"100vw"}
      >
        <Login />
      </Stack>
    </>
  );
}
