import { Box, Heading, Text,Flex, Link } from '@chakra-ui/react'
import { useState } from 'react'

function Header() {



    return(
    //     <header>
    //     <div class="logo">
    //         <h3 class="lh">{sonny}</h3>
    //     </div>
    //         <section>
    // //         <nav class="buttoms">
    // //             <a href="#inicio" class="seccion s1">Inicio</a>
    // //             <a href="#sobremi" class="seccion s2">Sobre mi</a>
    // //             <a href="#habil" class="seccion s3">Habilidades</a>
    // //             <a href="#proyect" class="seccion s4">Proyectos</a>
    // //             <a href="#servicio" class="seccion s4">Servicios</a>
    // //             <a href="#contactos" class="seccion s5">Contacto</a>
    // //         </nav>
    // //     </section>
    //      </header>




        <>
        <Box as='header' bg='#ffff' w='100%' fontFamily='"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'>
            <Flex alignItems='center' justifyContent='space-between' mr={70}>

                <Text as='b'color='#ff8a00' p={12} fontSize='1.4em' ml={90}>sonny</Text>

                <Flex as='nav' mr='5.5em' color='#555555'
                fontSize='0.97em'fontFamily='"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;' 
                textDecoration="none"
                letterSpacing='0.08em' m={14} p={20} gap={30}>
                    <Link as='a' href='#home'scrollBehavior='smooth' 
                    transition='0.3s' 
                    _hover={{
                        color:'#ff8a00',
                        borderBottom:'0.2em solid #ff8a00'
                    }}>Inicio</Link>
                    <Link as='a' href='#about'scrollBehavior='smooth'
                        transition='0.3s' 
                        _hover={{
                        color:'#ff8a00',
                        borderBottom:'0.2em solid #ff8a00'}}>Sobre Mi</Link>
                    <Link as='a' href='#skill'scrollBehavior='smooth'
                                            transition='0.3s color,0.3s border-bottom' 
                                            _hover={{
                                            color:'#ff8a00',
                                            borderBottom:'0.2em solid #ff8a00'}}>Habilidades</Link>
                    <Link as='a' href='#project'scrollBehavior='smooth'
                                            transition='0.3s color,0.3s border-bottom' 
                                            _hover={{
                                            color:'#ff8a00',
                                            borderBottom:'0.2em solid #ff8a00'}}>Proyectos</Link>
                    <Link as='a' href='#service'scrollBehavior='smooth'
                                            transition='0.3s color,0.3s border-bottom' 
                                            _hover={{
                                            color:'#ff8a00',
                                            borderBottom:'0.2em solid #ff8a00'}}>Servicios</Link>
                    <Link as='a' href='#contact'scrollBehavior='smooth'
                                            transition='0.3s color,0.3s border-bottom' 
                                            _hover={{
                                            color:'#ff8a00',
                                            borderBottom:'0.2em solid #ff8a00'}}>Contacto</Link>
                </Flex>
            </Flex>
        </Box>

        </>
    )
}

export default Header