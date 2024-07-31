import { Box, Text } from "@chakra-ui/react";

function Footer(){
    return(
    //    <footer>
    //         <h3>Copyrights 2022 - 2023</h3>
    //    </footer>
        <Box bgColor='#0F0E0E' p='40px 0' display='flex' justifyContent='center' alignItems='center'>
            <Text color='#fff'>Copyrights 2022 - 2023</Text>
        </Box>
    )
}

export default Footer