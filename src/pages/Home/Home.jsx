import { Flex, Divider } from "@chakra-ui/react";
import Header from "../../component/Header/Header";
import TableView from "../../component/TableView/TableView";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { fetchTableData } from "../../libs/apis/dataTable";

 
export default function Home() {
    const [data, setData] = useState([]);
 
    const fetchData = () => {
        fetchTableData().then((res) => {
            setData(res)
            return true
        }).catch(e => {
            toast.error('An error occurred!', {
                position: "top-right",
            });
            return false;
        });
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <Flex bg="#e2e2e2" h='100vh' w='100%'>
                <Flex
                    direction="column"
                    h="93vh"
                    m='2%'
                    bg="white"
                    borderRadius="15px"
                    w='100%'
                >
                    <Header fetchData={fetchData} data={data}/>
                    <Divider colorScheme="blackAlpha" boxShadow="4px 4px 7px #403d3d !important" />
                    <Flex h="95%" justify="center" align="center" overflowY="auto" w="100%" >
                    <TableView data={data}/>
                    </Flex>
                </Flex>
            </Flex>
            <ToastContainer/>
        </>
        
    );
}