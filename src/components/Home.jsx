import {Box,Container,Image }  from '@chakra-ui/react'
import React from 'react'
import{Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";
import { Heading ,Stack,Text} from '@chakra-ui/react';
import { transform } from 'framer-motion';
const headingOptions={
 pos:"absolute",
  top:"50%",
  left:"50%",
  transform:"translate(-50%,-50%)",
  textTransform:"uppercase",
  p:'4',
  size:'4xl'
}
const Home = () => {
  return <Box >
    <MyCarosel/>

    <Container maxH={'container.xl'} minH={'100vh'} bgColor={''} p={'16'}>
        <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} m="auto">Services</Heading>
        <Stack
            h="full"
            p={'4'}
            alignItems={'center'}
            direction={['column','row']}
            >
                <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
                <Text letterSpacing={'widest'} lineHeight={"190%"} p={['4','16']} textAlign={"center"}>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Maxime repellendus, magni iusto dolores itaque a 
                    nulla dolorum dolor maxime adipisci, totam, architecto accusamus
                     fugiat veniam dicta quas facilis eveniet dignissimos. Delectus e
                     veniet labore voluptatum blanditiis!
                </Text>

        </Stack>

    </Container>

  </Box>;
};
const MyCarosel=()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w="full" h={"100vh"}>
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={"white"}{...headingOptions}> watch the future</Heading>

        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img2} />
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>future is gamming</Heading>

        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Gamming on console</Heading>

        </Box>
        <Box w="full" h={"100vh"}>
            <Image src={img4} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>Night Life is cool</Heading>

        </Box>
        

    </Carousel>
)

export default Home