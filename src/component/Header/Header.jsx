import { Flex, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import DataEntryModal from "../DataEntryModal/DataEntryModal";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
export default function Header({fetchData}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
 
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleSync = () => {
        const res = fetchData();
        if (res) {
            toast.success('Fetched data successfully', {
                position: 'top-right',
            });
        }
    }
 
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
 
    const handleSavePerformance = (data) => {
        // Handle saving performance data here
        console.log('Performance data:', data);
    };
 
    return (
        <>
            <Flex px="2%" justify="space-between" boxShadow='0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)'>
                <DataEntryModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onSave={handleSavePerformance}
                />
                <Flex>
                    <Text fontSize="2rem" fontWeight="bold">Data Table</Text>
                </Flex>
                <Flex justify="flex-end" alignItems={'center'}>
                    <>
                        <Button p='13%' border='none' borderRadius='15px' fontSize={'1rem'} fontWeight='bold' mr="1rem" bg="#158b1545 !important" color="#024502" onClick={() => handleSync()}>Sync</Button>
                        <Button p='13%' border='none' borderRadius='15px' fontSize={'1rem'} fontWeight='bold' bg="#C3D0F9 !important" color="#303d65" onClick={handleOpenModal}>New <FaPlus pl='1rem' /></Button>
                    </>
                </Flex>
            </Flex>
            <ToastContainer />
        </>
    );
}