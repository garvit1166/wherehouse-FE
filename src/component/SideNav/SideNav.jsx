import {
    Box,
    Flex,
    Link,
    Image,
    Divider,
    Avatar,
    Heading,
} from "@chakra-ui/react";
import NavItem from "./NavItem";
import { MdOutlineLogout } from "react-icons/md";
import { navItems } from "./config";
import { useState } from "react";
import logo from '../../assets/logo.png'
 
const Sidebar = () => {
    const [username, setUsername] = useState("Guest")
    return (
        <Flex
            h="91.2vh"
            w='100%'
            boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
            flexDir="column"
            justifyContent="space-between"
            bg="black"
            color="white"
            py="2.5rem"
        >
            <Flex
                flexDir="column"
                alignItems={"flex-start"}
                as="nav"
                grow="1"
            >
                <Flex w="100%" px={"5"} justify="center" mb="2%">
                    <Link href="/" w='80%' h='100%'>
                        <Image
                            w="80%"
                            h='100%'
                            src={logo}
                            alt='Logo'
                            m='auto'
                            loading='eager'
                        />
                    </Link>
                </Flex>
                <Flex
                    pt="1"
                    w='100%'
                    px={"5"}
                    flexDir="column"
                    alignItems={"flex-start"}
                >
                    <Divider />
                </Flex>
                <Box mt="2rem" w="100%" borderTop="1px solid white">
                    {navItems.map((item) => {
                        return (
                            <NavItem
                                key={item.id}
                                icon={item.icon}
                                title={item.name}
                                link={item.link}
                            />
                        );
                    })}
                </Box>
                <NavItem
                    icon={MdOutlineLogout}
                    title="Logout"
                    headProps={{ mt: "auto" }}
                    link={'/'}
                />
            </Flex>
            <Flex
                pt="1"
                px={"5"}
                flexDir="column"
                alignItems={"flex-start"}
                borderTop="1px solid white"
            >
                <Divider display={"flex"} />
                <Flex mt={4} align="center">
                    <Box w="35px">
                        <Avatar name={username} size={["sm", "sm", "sm", "md"]} src="" />
                    </Box>
                    <Flex
                        flexDir="row"
                        ml={["2", "2", "2", "6"]}
                        display={"flex"}
                    >
                        <Flex alignItems="center">
                            <Heading as="h2" fontSize="18px" mr="0.5rem">{username} </Heading>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
};
 
export default Sidebar;