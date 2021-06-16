import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/layout"
import Head from "next/head"
import Header from "../components/Header"
import Container from "../containers/Container"
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Tooltip, Image, Stack } from "@chakra-ui/react"

import City from '../components/City';

const Continent = () => {
  return (
    <Flex direction="column" h="100vh">
      <Head> <title>Worldtrip | Europa</title> </Head>
      <Header />
      <Box
        w='100%'
        backgroundImage="url('/images/banner/europe-bg.png')"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        <Container
          alignItems={["center", "flex-end"]}
          justifyContent={["center", "flex-start"]}
          height={['150px', '500px']}
        >
          <Text
            fontSize={["28px", "5xl"]}
            color="gray.50"
            fontWeight="600"
          >Europe</Text>
        </Container>
      </Box>
      <Container
        alignItems={{ base: "flex-start", xl: "center" }}
        justify="space-between"
        flexDirection={{ base: "column", xl: "row" }} >

        <Text
          fontSize={{ base: "14px", md: "2xl" }}
          fontWeight="400"
          mb={{ base: "16px", md: "32px", xl: "0" }}
          maxWidth={{ xl: "600px" }}
          textAlign="justify"
        >
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia,
          a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural,
          o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex
          alignItems="center"
          justifyContent="space-between"
          w="100%"
          maxWidth={{ base: "300px", md: "469px" }}
        >
          <Flex flexDirection="column">
            <Text
              as="strong"
              fontSize={{ base: "2xl", md: "4xl" }}
              color="yellow"
              fontWeight="600"
              align={{ base: "left", md: "center" }}
            >
              50
              <Text
                as="span"
                lineHeight="30px"
                display="block"
                fontSize={{ base: "18px", md: "2xl" }}
                color="gray.800"
                fontWeight={{ base: "400", md: "600" }}>
                países
              </Text>
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text
              as="strong"
              fontSize={{ base: "2xl", md: "4xl" }}
              color="yellow"
              fontWeight="600"
              align={{ base: "left", md: "center" }}
            >60
              <Text
                as="span"
                lineHeight="30px"
                display="block"
                fontSize={{ base: "18px", md: "2xl" }}
                color="gray.800"
                fontWeight={{ base: "400", md: "600" }}>línguas</Text>
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text
              as="strong"
              fontSize={{ base: "2xl", md: "4xl" }}
              color="yellow"
              fontWeight="600"
              align={{ base: "left", md: "center" }}
            >27
              <Flex alignItems="center">
                <Text
                  as="span"
                  lineHeight="30px"
                  fontSize={{ base: "18px", md: "2xl" }}
                  color="gray.800"
                  fontWeight={{ base: "400", md: "600" }}
                  mr={2}
                >cidades +100 </Text>
                <Tooltip label="Search places" placement="right-start" >
                  <span><AiOutlineInfoCircle size="16px" color="#999999" /></span>
                </Tooltip>
              </Flex>

            </Text>
          </Flex>
        </Flex>
      </Container>

      <Container direction="column">

        <Text
          as="h2"
          fontSize={["2xl", "4xl"]}
          color="gray.800"
          fontWeight="500"
          mb="8"
        >Cidades +100</Text>

        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={['20px', '40px']} minChildWidth="256px">
          <City city="Londres" citySrc="/images/cities/londres.png" country="Reino Unido" flagSrc="/images/cities/uk-flag.png" />
          <City city="Paris" citySrc="/images/cities/paris.png" country="França" flagSrc="/images/cities/franca-flag.png" />
          <City city="Roma" citySrc="/images/cities/roma.png" country="Itália" flagSrc="/images/cities/italia-flag.png" />
          <City city="Praga" citySrc="/images/cities/praga.png" country="República Tcheca" flagSrc="/images/cities/republica-tcheca-flag.png" />
          <City city="Amsterdã" citySrc="/images/cities/amsterda.png" country="Holanda" flagSrc="/images/cities/holanda-flag.png" />
        </SimpleGrid >

      </Container>

    </Flex >
  )
}

export default Continent