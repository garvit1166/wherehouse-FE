import { Flex, Divider } from "@chakra-ui/react";

 
export default function Home() {
    return (
        <Flex bg="#e2e2e2" h='100vh' w='100%'>
            <Flex
                direction="column"
                h="93vh"
                m='2%'
                bg="white"
                borderRadius="15px"
                w='100%'
            >
                <Divider colorScheme="blackAlpha" boxShadow="4px 4px 7px #403d3d !important" />
                <Flex h="95%" justify="center" align="center" overflowY="auto" w="100%" >
                    Hi
                </Flex>
            </Flex>
        </Flex>
    );
}