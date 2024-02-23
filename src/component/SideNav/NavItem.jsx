import { Flex, Icon, Menu, MenuButton, Text, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
 
const NavItem = ({
    title,
    icon,
    headProps,
    link,
}) => {
    return (
        <Flex
            mb="2"
            direction="column"
            w="100%"
            alignItems={"flex-start"}
            px={"5"}
            py="2.5"
            background={'none'}
            _hover={{ backgroundColor: "gray" }}
            cursor="pointer"
            {...headProps}
        >
            <Menu placement="right">
                <MenuButton w="100%" ml={["0rem", "0rem", "0rem", "3rem"]} bg='none' border={'none'}>
                    <Link to={`${link}`} style={{textDecoration:'none'}}>
                        <Flex align="center">
                            <Icon
                                as={icon}
                                fontSize="1.6rem"
                                color="white"
                                alignItems={"flex-start"}
                            />
                            <Text
                                ml="1rem"
                                color='white'
                                textDecoration='none !important'
                                fontSize="1.2rem"
                                display={"flex"}
                            >
                                {title}
                            </Text>
                        </Flex>
                    </Link>
                </MenuButton>
            </Menu>
        </Flex>
    );
};
 
export default NavItem;