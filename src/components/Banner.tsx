import { Image } from "@chakra-ui/image"
import { Box, Flex, Stack, Text } from "@chakra-ui/layout"
import Container from "../containers/Container"

export function Banner() {
  return (
    <Box
      as="section"
      w='100%'
      h={['163px', '335px']}
      backgroundImage="url('/images/banner/bg.jpg')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Container
        justifyContent="space-between"
        alignItems='center'
        h={['163px', '335px']}
      >
        <Stack
          flexDirection="column"
          spacing={["2", "5"]}
          maxWidth="550px"
          pr="5"
        >
          <Text
            as="strong"
            fontSize={["xl", "4xl"]}
            color="gray.50"
            fontWeight="normal"
          >
            <Text as="span" display="block">5 Continentes,</Text>
              infinitas possibilidades.
            </Text>
          <Text
            fontSize={["sm", "xl"]}
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
      </Container>
    </Box>
  )
}