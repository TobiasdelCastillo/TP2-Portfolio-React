import { Box, Flex, HStack, Image, Heading, VStack, Text, Button, ChakraProvider} from "@chakra-ui/react";

function About(){
    return(
        // <!-- inicio del about -->
        // <section id="sobremi" class="about">
        //     <div>
        //         <img src="img/aboutimg.jpg" alt="">
        //         <div class="contenido">                    
        //             <h2>SOBRE MI</h2>
        //             <p>Mi nombre es Tobías del Castillo, tengo 20 años y soy de Córdoba, Argentina. Actualmente estoy estudiando Ingeniería en Sistemas de Información en la Universidad Técnologica Nacional y un curso de Desarrollo Web Full Stack. En el secundario aprendí programación por primera vez a través de MikroC y Arduino.</p>
        //             <a href="">Descargar Curriculum</a>
        //         </div>
        //     </div>
        // </section>
        // <!-- fin del about -->
        <Box p={120} id="about">
            <Flex alignItems='center' justifyContent='center'>
            <HStack >
            <Box boxSize='400px' mr={60}>
                <Image src='https://github.com/TobiasdelCastillo/TP2-Portfolio-React/blob/main/public/about.jpg?raw=true' alt='Dan Abramov' />
            </Box>
            <Box>
                <VStack w='455px' alignItems='start'>
                <Heading fontSize={28} mb={15} color='#ff8a00' fontWeight='bold'>SOBRE MI</Heading>
                <Text mb={70} color='#555555' lineHeight={1.1}>Mi nombre es Tobías del Castillo, tengo 20 años y soy de Córdoba, Argentina. Actualmente estoy estudiando Ingeniería en Sistemas de Información en la Universidad Técnologica Nacional y un curso de Desarrollo Web Full Stack. En el secundario aprendí programación por primera vez a través de MikroC y Arduino.</Text>
                <ChakraProvider>
                <Button as='a' href="../../../public/Curriculum.pdf" download colorScheme='orange'>Descargar Curriculum</Button>
                </ChakraProvider>
                </VStack>
            </Box>

            </HStack>
            </Flex>
        </Box>
    )
}

export default About