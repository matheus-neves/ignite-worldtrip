import { Box, Flex, Text } from "@chakra-ui/layout"
import { Image, Stack } from "@chakra-ui/react"

interface CityProps {
  country: string;
  city: string;
  citySrc: string;
  flagSrc: string;
}

const City = ({ city, country, flagSrc, citySrc }: CityProps) => (

  <Box bg="#fff" borderRadius="4px" >
    <Image src={citySrc} alt={city} width="100%" />
    <Flex
      alignItems="center"
      justifyContent="space-between"
      padding="6"
      border="1px"
      borderColor="yellow"
      borderRadius="4px"
      borderTopRadius="0"
      borderTop="0"
      minHeight="135px"
    >
      <Stack>
        <Text
          as="h3"
          fontSize="xl"
          color="gray.800"
          fontWeight="600"
        >{city}</Text>
        <Text
          as="strong"
          fontSize="md"
          color="gray.500"
          fontWeight="500"
        >{country}</Text>
      </Stack>
      <Image src={flagSrc} alt="Bandeira" w="30px" h="30px" />
    </Flex>
  </Box>

);

export default City;