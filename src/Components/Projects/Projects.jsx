import { Box, Heading, HStack, Image, Link, VStack } from "@chakra-ui/react";

function Projects(){
    const breakpoints = {
        base: '0em', // 0px
        sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
        md: '48em', // ~768px
        lg: '62em', // ~992px
        xl: '80em', // ~1280px
        '2xl': '96em', // ~1536px
    }
    return(

        <Box w='100%' pt={50} pb={80} id="project">
            <VStack w='100%'>
                <Heading fontSize={32} mb={30} color='#ff8a00' fontWeight='bold'>MIS PROYECTOS</Heading>
                <HStack width='100%' mb={8} spacing={14} justifyContent='center' >
                    <Link as='a' href="https://github.com/TobiasdelCastillo/TP1---Portfolio"><Image w={{md:'180px'}} w='250px' h='300px' src="https://github.com/TobiasdelCastillo/TP2-Portfolio-React/blob/main/public/proyecto1.JPG?raw=true" transition='0.3s filter'_hover={{
                        filter:'grayscale(100%)'
                    }}></Image> </Link>
                    <Link as='a' href="https://github.com/TobiasdelCastillo/TP2-Portfolio-React"><Image w={{md:'180px'}} w='250px' h='300px' src="https://github.com/TobiasdelCastillo/TP2-Portfolio-React/blob/main/public/tp2.jpg?raw=true" transition='0.3s filter'_hover={{
                        filter:'grayscale(100%)'
                    }}></Image> </Link>
                </HStack>

            </VStack>
        </Box>
    )
}

export default Projects