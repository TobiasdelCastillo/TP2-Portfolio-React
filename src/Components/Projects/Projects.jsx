import { Box, Heading, HStack, Image, Link, VStack } from "@chakra-ui/react";

function Projects(){
    return(
        // <!-- inicio del projects -->
        // <section id="proyect" class="projects">
        //     <h2>MIS PROYECTOS</h2>
        //     <div class="proy">
        //         <div class="item">
        //             <!-- CAMBIAR POR LINK DEL REPOSITORIO DE ESTE PROYECTO -->
        //             <a href="https://github.com/TobiasdelCastillo/TP1---Portfolio">
                        
        //                 <img src="img/proyecto1.JPG" alt="">
        //             </a>
        //         </div>
        //         <div class="item">
        //             <a href="#">
                        
        //                 <img src="http://via.placeholder.com/300" alt="">
        //             </a>
        //         </div>
        //         <div class="item">
        //             <a href="#">
                        
        //                 <img src="http://via.placeholder.com/300" alt="">
        //             </a>
        //         </div>
        //         <div class="item">
        //             <a href="#">
                        
        //                 <img src="http://via.placeholder.com/300" alt="">
        //             </a>
        //         </div>
        //         <div class="item">
        //             <a href="#">
                        
        //                 <img src="http://via.placeholder.com/300" alt="">
        //             </a>
        //         </div>
        //         <div class="item">
        //             <a href="#">
                        
        //                 <img src="http://via.placeholder.com/300" alt="">
        //             </a>
        //         </div>
        //     </div>
        // </section>
        // <!-- fin del projects -->
        <Box w='100%' pt={50} pb={80}>
            <VStack>
                <Heading fontSize={32} mb={30} color='#ff8a00' fontWeight='bold'>MIS PROYECTOS</Heading>
                <HStack mb={8} spacing={14} >
                    <Link as='a' href="https://github.com/TobiasdelCastillo/TP1---Portfolio"><Image w='300px' h='300px' src="https://github.com/TobiasdelCastillo/TP2-Portfolio-React/blob/main/public/proyecto1.JPG?raw=true" transition='0.3s filter'_hover={{
                        filter:'grayscale(100%)'
                    }}></Image> </Link>
                    <Link as='a' href="https://github.com/TobiasdelCastillo/TP2-Portfolio-React"><Image w='300px' h='300px' src="https://github.com/TobiasdelCastillo/TP2-Portfolio-React/blob/main/public/tp2.jpg?raw=true" transition='0.3s filter'_hover={{
                        filter:'grayscale(100%)'
                    }}></Image> </Link>
                    <Image src="http://via.placeholder.com/300"></Image>
                </HStack>
                <HStack spacing={14} >
                    <Image src="http://via.placeholder.com/300"></Image>
                    <Image src="http://via.placeholder.com/300"></Image>
                    <Image src="http://via.placeholder.com/300"></Image>
                </HStack>
            </VStack>
        </Box>
    )
}

export default Projects