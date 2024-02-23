import { Outlet } from "react-router-dom"
import { Flex } from "@chakra-ui/react";
import Sidebar from "../../component/SideNav/SideNav";
 
import './MainPage.css';
 
const MainPage = () =>{
    return(
        <Flex className="landing-page">
            <Flex className="sideNav">
                <Sidebar/>
            </Flex>
            <Flex className="outlet">
                <Outlet/>
            </Flex>
        </Flex>
    )
}
export default MainPage