import { Heading,Container,Button,Text, VStack, Input, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return <Container maxW={"container.xl"} h={"100vh"} p={'16'}>
    <form action="">
        <VStack alignItems={"stretch"}  spacing={"8"} m={'auto'} w={['full','96']} my={"16"}>
            <Heading>Video Nexus</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'}/>
            <Input placeholder='Name' type='Type' required focusBorderColor={'purple.500'}/>
            <Input placeholder='Email' type='email' required focusBorderColor={'purple.500'}/>
            <Input placeholder='Password' type='password' required focusBorderColor={'purple.500'}/>
            
            <Button colorScheme='purple'  type={'submit'}>Sign Up</Button>
            <Text textAlign={'right'}>
                Already Signed Up?{' '}
            <Button variant={'link'} colorScheme='purple'>
                <Link to={"/login"}>Log In</Link>
            </Button>
            </Text>


        </VStack>
    </form>
  </Container>
}

export default Signup