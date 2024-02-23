import {
    Table,
    Thead,
    Tbody,
    Tr,
    TableContainer,
    Th,
    Td,
    Flex,
  } from "@chakra-ui/react";
import React from 'react'
import { useToast } from "@chakra-ui/react";
import './tableView.css'
 
const customHeaders = ['id','Avatar', 'Performance_Score']
const data = [
    {
        id:1,
        Avatar:'Test1',
        Performance_Score:2
    },
    {
        id:2,
        Avatar:'Test1',
        Performance_Score:2
    },
    {
        id:3,
        Avatar:'Test1',
        Performance_Score:2
    },
    {
        id:4,
        Avatar:'Test1',
        Performance_Score:2
    },
    {
        id:5,
        Avatar:'Test1',
        Performance_Score:2
    },
    {
        id:6,
        Avatar:'Test1',
        Performance_Score:2
    },
    {
        id:1,
        Avatar:'Test1',
        Performance_Score:2
    },
    {
        id:2,
        Avatar:'Test1',
        Performance_Score:2
    },
    {
        id:3,
        Avatar:'Test1',
        Performance_Score:2
    },
    {
        id:4,
        Avatar:'Test1',
        Performance_Score:2
    },
    {
        id:5,
        Avatar:'Test1',
        Performance_Score:2
    },
    {
        id:6,
        Avatar:'Test1',
        Performance_Score:2
    },
   
]
 
const TableView = () => {
    const toast = useToast();
 
  return (
    <Flex w="100%" flexDir={'column'}>
        <TableContainer h="30rem" display={'flex'} justifyContent='center' alignItems={'center'} w="100%" boxShadow={'xl'} border='1px' borderColor='#8987935' >
            <Table size='lg'>
                <Thead  whiteSpace="normal">
                    <Tr position="sticky" top='0' bg='black' h='5rem'>
                        {customHeaders.map((header) => {
                            return(
                                <Th bg={'black'} textAlign={"center"} color="#ffffff" key={header} minWidth='15rem'>
                                  {header}
                                </Th>
                            )
                        })}
                    </Tr>
                </Thead>
                <Tbody>
                {data.map((item, index) =>{
                    return(
                    <Tr className="dataTableRows" key={index} h='3rem'>
                        {customHeaders.map((header) => (
                            <Td textAlign={"center"} key={header}>
                                {item[header]}
                            </Td>
                        ))}
                    </Tr>
                )})}
                </Tbody>
            </Table>
        </TableContainer>
    </Flex>
  )
}
 
export default TableView