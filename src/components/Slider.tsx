
import { Box, Flex, Text } from "@chakra-ui/layout";

import Container from "../containers/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination
} from 'swiper/core';
import Link from "next/link";

SwiperCore.use([Navigation, Pagination]);

const Slider = () => {

  return (

    <Container direction="column">
      <Text
        as="h2"
        fontWeight="500"
        textAlign="center"
        mx="auto"
        fontSize={{ base: 'xl', md: '4xl' }}
        mt="12px"
        mb={{ base: '20px', md: '52px' }}
      >
        <Text as="span" display="block">Vamos nessa?</Text>
        Então escolhe seu continente
      </Text>
      <Swiper
        className="customSlider"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
        pagination={true}
      >
        <SwiperSlide>
          <Link href="/continente">
            <Box
              as="a"
              href="/continente"
              w='100%'
              h={{ base: '250px', md: '450px' }}
              backgroundImage="url('/images/slider/europe.png')"
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
            >
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                h="100%"
              >
                <Text
                  as="strong"
                  fontWeight="700"
                  color="gray.50"
                  fontSize={{ base: '2xl', md: '5xl' }}
                >Europa</Text>
                <Text
                  as="p"
                  fontWeight="700"
                  color="gray.100"
                  fontSize={{ base: 'sm', md: '2xl' }}
                >O continente mais antigo.</Text>
              </Flex>
            </Box>
          </Link>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>

      </Swiper>
    </Container>

  )
}

export default Slider;