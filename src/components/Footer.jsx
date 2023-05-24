import { Box, Button, HStack,Heading, Input, Stack, VStack} from '@chakra-ui/react'

import React from 'react'
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={'40'} p="16" color={'white'}>
    <Stack direction={["column","row"]}>
        <VStack alignItems={"stretch"} w={"full"} px={"4"}>
            <Heading size="md" textTransform={"uppercase"} textAlign={["center","left"]}> Subscribe for More Updates</Heading>
            <HStack borderBottom={"2px solid white"} py="2"
            >
                <Input placeholder='Enter Email here...' border={"none"}
                 borderRadius={"none"} outline={"none"} focusBorderColor='none'
                 />
                <Button
                p={"0"}
                colorScheme={"purple"}
                variant={"ghost"}
                borderRadius={"0 20px 20px 0"}
                >
                    <AiOutlineSend size={20}/>
                </Button>
            </HStack>
        </VStack >


        <VStack w={"full"} borderLeft={["none","1px solid white"]}
        borderRight={["none","1px solid white"]}
        >
            <Heading  textTransform={"uppercase"} textAlign={"center"}>
                VideoNexus
            </Heading>
           <p> All rights reserve</p>
        </VStack>
        <VStack w={"full"}>
            <Heading  size={"md"}textTransform={"uppercase"}>
                social Media
            </Heading>
            <Button variant={"link"} colorScheme={"white"}> 
              <a href="https://www.youtube.com/">YouTube</a>

            </Button>
            <Button variant={"link"} colorScheme={"white"}> 
              <a href="https://www.linkedin.com/feed/">LinkedIn</a>

            </Button>
            <Button variant={"link"} colorScheme={"white"}> 
              <a href="https://github.com/">GitHub</a>

            </Button>
            

        </VStack>

    </Stack>

  </Box>
}

export default Footer