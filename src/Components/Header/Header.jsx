import { Box, Heading, Text,Flex, Link } from '@chakra-ui/react'
import { useState } from 'react'


function Header() {
    const breakpoints = {
        base: '0em', // 0px
        sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
        md: '48em', // ~768px
        lg: '62em', // ~992px
        xl: '80em', // ~1280px
        '2xl': '96em', // ~1536px
    }


    return(


        <>
        <Box  pr={120}
        as='header' bg='#ffff' w='100%'
        fontFamily='"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'>
            <Flex 
            alignItems='center' justifyContent='space-between'>

                <Text as='b' color='#ff8a00' p='25px' fontSize='1.4em'  >sonny</Text>

                <Flex w={{md:'30%'}}
                as='nav'  color='#555555'
                fontSize='0.97em'fontFamily='"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;' 
                textDecoration="none"
                letterSpacing='0.08em'   gap={30}>
                    <Link as='a' href='#home'scrollBehavior='smooth' 
                    transition='0.3s' 
                    _hover={{
                        color:'#ff8a00',
                        borderBottom:'0.2em solid #ff8a00'
                    }} >Inicio</Link>
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