import { Divider, Flex } from "@chakra-ui/layout"
import Head from "next/head"
import { Banner } from "../components/Banner"
import Header from "../components/Header"
import Slider from "../components/Slider"
import TravelTypes from "../components/TravelTypes"


const Home = () => {
  return (
    <Flex direction="column" h="100vh">
      <Head> <title>Worldtrip | Home</title> </Head>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider background="gray.800" pt="2px" w="90px" mx="auto" mt="20px" />
      <Slider />
    </Flex >
  )
}

export default Home