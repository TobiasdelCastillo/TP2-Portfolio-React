import { Box, Input, Textarea, VStack, Button, ButtonGroup, CloseButton, ChakraProvider, Flex, Spacer, Heading, Text, HStack,Link, Icon } from "@chakra-ui/react";
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    } from '@chakra-ui/react'
    import { FaInstagram } from "react-icons/fa";
    import { FaLinkedin } from "react-icons/fa";
    import { FaGithub } from "react-icons/fa";
    import { FaDiscord } from "react-icons/fa";



function Contact(){


    return(

        <Flex alignItems='center' justifyContent='center' m={140}  id="#contact">


        <Box w='400px' mr={100}>
            <Flex >
                <VStack alignItems='start'>
                    <Heading color='#ff8a00' fontSize='2em' >Contactame</Heading>
                    <Text color='#555555' mb={35}>Si te interesó mi portfolio y estas interesado en trabajar conmigo o tienes alguna consulta no dudes en contactarme! Aqui abajo te dejo otras formas de comunicarme.</Text>
                    <HStack spacing={19}>
                        <Link href="https://www.instagram.com/tobiasdc_/">
                            <Icon color='#555555' fontSize='1.6em'>
                            <FaInstagram />
                            </Icon>
                        </Link>
                        <Link href="https://www.linkedin.com/in/tob%C3%ADas-del-castillo-b289b12a4/">
                            <Icon color='#555555' fontSize='1.6em'>
                            <FaLinkedin />
                            </Icon>
                        </Link>
                        <Link href="https://github.com/TobiasdelCastillo">
                            <Icon color='#555555' fontSize='1.6em'>
                            <FaGithub />
                            </Icon>
                        </Link>
                        <Link href="https://discord.com/channels/@me">
                            <Icon color='#555555' fontSize='1.6em'>
                            <FaDiscord />
                            </Icon>
                        </Link>
                    </HStack>
                </VStack>
            </Flex>
        </Box>

        <Box>

        <Formik initialValues={{
            nombre:'',
            email:'',
            mensaje:''
        }}
        

        validationSchema={Yup.object({
            nombre:Yup
            .string()
            .required('Por favor ingrese su nombre!')
            .max(25,'Muy Largo!')
            .min(3,'Muy Corto!'),
            email:Yup
            .string()
            .required('Por favor ingrese su email!')
            .email('Se requiere un email valido "@example.com"!')
        })}

        onSubmit={(values)=>{
            console.log(values)
        }}
        >

        {({
            values,
            errors,
            handleChange,
            handleSubmit
        })=>(


        

        <Box as="form" action="" p={4} borderWidth={1} borderRadius="md" boxShadow="lg"
        onSubmit={(handleSubmit)}>
            <Flex >
                <Box m={6}>

                {/* {errors.email?
                <ChakraProvider>
                    <Box>
                        <VStack>
                            <Alert>
                                <AlertIcon />
                                <AlertTitle>{errors.email}</AlertTitle>
                            </Alert>
                        </VStack>
                    </Box>
                </ChakraProvider>
                :null}
                </Box>
                <Box> */}

            <VStack spacing={4}>
                <Input 
                onChange={handleChange}
                value={values.nombre}
                name="nombre"
                type="text" 
                placeholder="Nombre" 
                variant="filled" 
                fontSize='.9em'
                h='35px'
                w='450px'
                pl='20px'
                mb='30px'
                />

                {/* advertencia nombre */}

                {errors.nombre?
                <ChakraProvider>
                    <Box>
                        <VStack>
                            <Alert>
                                <AlertIcon />
                                <AlertTitle>{errors.nombre}</AlertTitle>
                            </Alert>
                        </VStack>
                    </Box>
                </ChakraProvider>
                :null}


                <Input 
                onChange={handleChange}
                value={values.email}
                name="email"
                type="email" 
                placeholder="Email" 
                variant="filled"
                fontSize='.9em'
                h='35px'
                w='450px'
                pl='20px'
                mb='30px'
                />

                {/* advertencia email */}

                {errors.email?
                <ChakraProvider>
                    <Box>
                        <VStack>
                            <Alert>
                                <AlertIcon />
                                <AlertTitle>{errors.email}</AlertTitle>
                            </Alert>
                        </VStack>
                    </Box>
                </ChakraProvider>
                :null}

                <Textarea 
                onChange={handleChange}
                resize='none'
                value={values.mensaje}
                name="mensaje"
                placeholder="Mensaje" 
                rows={10} 
                variant="filled"
                h='200px'
                w='450px'
                p='25px 29px 25px 21px'
                mb='30px'
                />
                <ChakraProvider>
                <Box >
                    <Button type="submit" colorScheme='orange' w='450px'>Enviar Mensaje</Button>
                </Box>
                </ChakraProvider>

            </VStack>
                </Box>
            </Flex>
            


        </Box>
        )}
        </Formik>
        </Box>
        </Flex>

        
)

}

export default Contact