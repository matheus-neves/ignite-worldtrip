import { Image } from "@chakra-ui/image"
import { Box, Flex, HStack, Stack, Text, VStack } from "@chakra-ui/layout"
import Head from "next/head"
import Header from "../components/Header"

const Home = () => {
  return (
    <Flex direction="column" h="100vh">
      <Head> <title>Worldtrip | Home</title> </Head>
      <Header />
      <Box
        as="section"
        w='100%'
        h='335px'
        backgroundImage="url('/images/banner/bg.jpg')"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        <Flex
          justifyContent="space-between"
          alignItems='center'
          maxWidth='1240px'
          h='335px'
          mx="auto"
          p={[
            "5",
            "10"
          ]}
        >
          <Stack
            flexDirection="column"
            spacing="5"
            maxWidth="550px"
            pr="5"
          >
            <Text
              as="strong"
              fontSize="4xl"
              color="gray.50"
              fontWeight="normal"
            >
              <Text as="span" display="block">5 Continentes,</Text>
              infinitas possibilidades.
            </Text>
            <Text
              fontSize="xl"
              color="gray.100"
              fontWeight="normal"
            >Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
          </Stack >
          <Image
            display={{ base: 'none', md: "block" }}
            alignSelf="flex-end"
            w='417px'
            h='271px'
            position="relative"
            top="20"
            src="/images/banner/airplane.png"
            alt="Avião" />
        </Flex>
      </Box>
    </Flex>
  )
}

export default Home