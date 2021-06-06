import { Flex, Text } from "@chakra-ui/layout";
import Container from '../containers/Container'
import { IconBeach, IconClassic, IconModern, IconMore, IconNightlife } from '../components/icons'

const TravelTypes = () => (
  <Container
    justifyContent={{ base: 'center', md: "space-between" }}
    alignItems='center'
    pt={[
      '20px',
      '40px',
      '135px'
    ]}
    wrap="wrap"
  >
    <Flex
      h='145px'
      minWidth='160px'
      maxWidth="109px"
      flexDirection='column'
      justifyContent='space-between'
      alignItems='center'
      m='5'
    >
      <IconNightlife />
      <Text
        as="strong"
        fontSize={["xl", "2xl"]}
        fontWeight="600"
      >vida noturna</Text>
    </Flex>
    <Flex
      h='145px'
      minWidth='160px'
      flexDirection={['row', 'column']}
      justifyContent='space-between'
      alignItems='center'
      m='5'
    >
      <IconBeach />
      <Text
        as="strong"
        fontSize={["xl", "2xl"]}
        fontWeight="600"
      >praia</Text>
    </Flex>
    <Flex
      h='145px'
      minWidth='160px'
      flexDirection={['row', 'column']}
      justifyContent='space-between'
      alignItems='center'
      m='5'
    >
      <IconModern />
      <Text
        as="strong"
        fontSize={["xl", "2xl"]}
        fontWeight="600"
      >moderno</Text>
    </Flex>
    <Flex
      h='145px'
      minWidth='160px'
      flexDirection={['row', 'column']}
      justifyContent='space-between'
      alignItems='center'
      m='5'
    >
      <IconClassic />
      <Text
        as="strong"
        fontSize={["xl", "2xl"]}
        fontWeight="600"
      >clássico</Text>
    </Flex>
    <Flex
      h='145px'
      minWidth='160px'
      flexDirection={['row', 'column']}
      justifyContent='space-between'
      alignItems='center'
      m='5'
    >
      <IconMore />
      <Text
        as="strong"
        fontSize={["xl", "2xl"]}
        fontWeight="600"
      >e mais...</Text>
    </Flex>
  </Container>
)

export default TravelTypes;