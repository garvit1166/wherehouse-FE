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

import './tableView.css'
 
const customHeaders = ['id','Avatar', 'Performance_Score']

 
const TableView = ({data}) => {
    
 
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