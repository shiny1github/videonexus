import { Container, HStack, VStack,Button, border, color } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
  return <Container maxW={"container.xl"} h={"100vh"} p={'16'}>
    <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'}/>
        <form action="">
            <HStack>
                <input required type="file"
                 css={{
                    '&::file-selector-button':{
                        border:'none',
                        width:'calc(100% + 36px)',
                        height:'100%',
                        marginLeft:'-18px',
                        color:'purple',
                        backgroundColor:'white',
                        cursor:'pointer'
                    },
                }} />
                
            </HStack>
            <Button top={'3'}  marginLeft={'100'} colorScheme={"purple"} type={"submit"}>Upload</Button>
        </form>
    </VStack>


  </Container>
}

export default Upload