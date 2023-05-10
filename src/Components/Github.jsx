import React from 'react'
import GitHubCalendar from "react-github-calendar";

import {Box, Grid, GridItem, Heading, Image} from "@chakra-ui/react"



const Github = () => {
  return (
    <Box bgColor='black'>
    <Box w={['100%','100%','70%']} h="auto" m={'auto'}   p="20px" mt={["10px","","50px"]} textAlign={'center'} >
      <Heading size={['lg','lg','xl']} m="20px" mb='30px' color={'white'}>Github <span style={{color:"#3500D3"}}>Stats & Calender</span></Heading>
    <Grid
    h="auto"
    w="100%"
    m="auto"
     templateColumns={['repeat(1, 1fr)','repeat(2,1fr)','repeat(2, 1fr)']}
    templateRows={['repeat(3, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']}
   gap={['1','3','4']}
>
  <GridItem mb={["10px","8px","40px" ]}>
    <Image src="https://github-readme-stats.vercel.app/api?username=vaishu0428&show_icons=true&count_private=true&theme=algolia"  alt="vaishu0428 Stats" w="160" h="auto" m="auto"   />
  </GridItem>
  <GridItem mb={["10px","8px","40px" ]} >
  <Image src="https://github-readme-streak-stats.herokuapp.com/?user=vaishu0428&theme=algolia" alt="vaishu0428 " w="160" h="auto" m="auto"   />
  </GridItem>
  <GridItem colSpan={[1,2,2]} 
   >
    <Box h='auto' w={['100%','100%','80%' ]} m='auto' p='20px' border={'1px solid white'}>
    <GitHubCalendar username='vaishu0428' style={{color:"white" }}   color={'#3500D3'}/>
    </Box>
 
  
  </GridItem>
 
</Grid>
    </Box>
    </Box>
  )
}

export default Github;