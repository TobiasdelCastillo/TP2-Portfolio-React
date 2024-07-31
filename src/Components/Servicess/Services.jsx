import { Box, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { FaDatabase } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa";
import { BsCodeSquare } from "react-icons/bs";




function Services(){
    return(

        
        <Box  h={700} id="service"
        bg='url(https://github.com/TobiasdelCastillo/TP2-Portfolio-React/blob/main/public/bgi3.jpg?raw=true)' 
        bgSize='cover'
        fontFamily='"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;'
        >
            <VStack>

                    <Heading pt={95} fontSize={32} mb={20} color='#ff8a00' fontWeight='bold'>MIS SERVICIOS</Heading>
                    <Text mb={90} color='#fff'  >Estos son algunos de los servicios que soy capaz de brindar si estas dispuesto a trabajar conmigo!</Text>

                <HStack spacing={80}>
                    <Box>
                    <Box  w='250px' h='150px' bgColor='#5555' pl={100} pt={30}>
                        <Icon w='80px' h='80px' color='#ff8a00' transition='0.3s color' _hover={{
                            color:'#555555'

                        }}><FaDatabase /></Icon>
                    </Box>
                        <Text pl={35} bgColor='#5555' pb={20} color='#fff' >Diseño de base de datos</Text>
                    </Box>

                    <Box>
                    <Box  w='250px' h='150px' bgColor='#5555'  pl={100} pt={30} >
                        <Icon w='80px' h='80px' color='#ff8a00' transition='0.3s color' _hover={{
                            color:'#555555'

                        }} ><FaConnectdevelop /></Icon>
                    </Box>
                    <Text pl={35} bgColor='#5555' pb={20} color='#fff'>Diseño de base de datos</Text>
                    </Box>

                    <Box>
                    <Box  w='250px' h='150px' bgColor='#5555'  pl={100} pt={30}>
                        <Icon w='80px' h='80px' color='#ff8a00' transition='0.3s color' _hover={{
                            color:'#555555'

                        }} ><BsCodeSquare /></Icon>
                    </Box>
                        <Text pl={35} bgColor='#5555' pb={20} color='#fff'>Diseño de base de datos</Text>
                    </Box>
                </HStack>
            </VStack>
        </Box>
    )
}

export default Services