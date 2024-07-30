import { Image,Box, VStack, Flex, Heading, Text, HStack, Link, Icon, } from '@chakra-ui/react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

function Hero(){

    return(

        // <!-- inicio del hero -->
        // <section id="inicio" class="hero">            
        //     <img src="img/Captura.JPG" alt="">
        //     <h2 class="nombre">TOBÍAS DEL CASTILLO</h2>
        //     <h3>DESARROLLADOR WEB</h3>
        //     <div class="logos">                
        //         <a href="https://www.instagram.com/tobiasdc_/"><i class="bi bi-instagram"></i></a>
        //         <a href="https://www.linkedin.com/in/tob%C3%ADas-del-castillo-b289b12a4/"><i class="bi bi-linkedin"></i></a>
        //         <a href="https://github.com/TobiasdelCastillo"><i class="bi bi-git"></i></a>
        //         <a href="https://discord.com/channels/@me"><i class="bi bi-discord"></i></a>
        //     </div>
        // </section>
        // <!-- fin del hero -->
        <>

        <Box w='100' h='800' 
        fontFamily='"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
        background='url(https://github.com/TobiasdelCastillo/TP2-Portfolio-React/blob/main/public/bgi2.jpg?raw=true)'
        backgroundSize='cover'>
            <Flex alignItems='center' justifyContent='center'>
                <VStack>
                    <Image
                        mt={150}
                        borderRadius='100'
                        boxSize='163px'
                        src='https://tobiasdelcastillo.github.io/TP1---Portfolio/img/Captura.JPG'
                        alt='Dan Abramov'
                        />

                    <Heading as='h1' mb={-15} color='#F68906'>TOBÍAS DEL CASTILLO</Heading>
                    <Text color='#fff'>DESARROLLADOR WEB</Text>
                    <HStack spacing={19}>
                        <Link href="https://www.instagram.com/tobiasdc_/">
                            <Icon color='#fff' fontSize='1.6em'>
                            <FaInstagram />
                            </Icon>
                        </Link>
                        <Link href="https://www.linkedin.com/in/tob%C3%ADas-del-castillo-b289b12a4/">
                            <Icon color='#fff' fontSize='1.6em'>
                            <FaLinkedin />
                            </Icon>
                        </Link>
                        <Link href="https://github.com/TobiasdelCastillo">
                            <Icon color='#fff' fontSize='1.6em'>
                            <FaGithub />
                            </Icon>
                        </Link>
                        <Link href="https://discord.com/channels/@me">
                            <Icon color='#fff' fontSize='1.6em'>
                            <FaDiscord />
                            </Icon>
                        </Link>
                    </HStack>

                </VStack>
            </Flex>

        </Box>
        </>
    )

}

export default Hero