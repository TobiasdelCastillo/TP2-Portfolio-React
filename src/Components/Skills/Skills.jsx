import { Box , ChakraProvider, Flex, Heading, HStack, Progress, Text} from "@chakra-ui/react";

function Skills(){
    return(


        <Box id="skill" h={400}
        bg='url(https://github.com/TobiasdelCastillo/TP2-Portfolio-React/blob/main/public/bgi3.jpg?raw=true)'>
            <HStack alignItems='center' justifyContent='center' pt={90}>
            <Box w={400} mr={150} alignItems='start'>
                <Heading color='#ff8a00' fontWeight='bold' fontSize={29}>MIS HABILIDADES</Heading>
                <Text color='#fff' lineHeight={1.1} mt={16}>Estas son mis habilidades de programación representadas en forma de barra porcentual, teniendo en cuenta mi experiencia con el "lenguaje"</Text>
            </Box>
                <Box width={360} >
                    <Flex justifyContent='space-between'>
                    <Text color='#fff'>HTML </Text>
                    <Text color='#fff'>85% </Text>
                    </Flex>
                    <ChakraProvider>
                        <Progress mb={3} value={85} colorScheme="orange" bgColor='#5555' borderRadius='6px'/>
                    </ChakraProvider>
                    <Flex justifyContent='space-between'>
                    <Text color='#fff'>CSS </Text>
                    <Text color='#fff'>65% </Text>
                    </Flex>
                    <ChakraProvider>
                        <Progress mb={3} value={65} colorScheme="orange" bgColor='#5555' borderRadius='6px'/>
                    </ChakraProvider>
                    <Flex justifyContent='space-between'>
                    <Text color='#fff'>PYTHON </Text>
                    <Text color='#fff'>75% </Text>
                    </Flex>
                    <ChakraProvider>
                        <Progress mb={3} value={75} colorScheme="orange" bgColor='#5555' borderRadius='6px'/>
                    </ChakraProvider>
                    <Flex justifyContent='space-between'>
                    <Text color='#fff'>JAVASCRIPT </Text>
                    <Text color='#fff'>60% </Text>
                    </Flex>
                    <ChakraProvider>
                        <Progress value={60} colorScheme="orange" bgColor='#5555' borderRadius='6px'/>
                    </ChakraProvider>
                </Box>

            </HStack>
        </Box>
    )
}

export default Skills