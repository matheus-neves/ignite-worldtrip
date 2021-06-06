import { Flex } from "@chakra-ui/layout"
import Head from "next/head"
import { Banner } from "../components/Banner"
import Header from "../components/Header"

const Home = () => {
  return (
    <Flex direction="column" h="100vh">
      <Head> <title>Worldtrip | Home</title> </Head>
      <Header />
      <Banner />
    </Flex>
  )
}

export default Home