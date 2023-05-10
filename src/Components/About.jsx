import React from 'react'
import "./About.css"
import { Box, Flex, Heading, Spacer,Image,Text, Grid, GridItem } from '@chakra-ui/react';
import { AiFillGithub ,AiOutlineLinkedin} from "react-icons/ai";
const About = () => {
  return (
    <div className='container1' id="about">
     <Heading  m="auto" textAlign='center' > All About <span style={{color:"#3500D3"}}>Me</span> </Heading>
     <Box>
       
       <Box width={["75%",'100%','75%']} height="auto" m='auto'  p='10px' >
        <Flex 
        w='100%'
        h="auto"
        m="auto"
        direction={{base:'column',md:'row',lg:"row"}}
        >
          <Box width={['100%','100%','40%']}>
            <Image src='Final.png' height={['280','280',"350"]} width={['280','280',"350"]}  border={'10px solid #3500D3'} borderRadius="100%" />
          </Box>
          <Spacer/>
          <Box width={['100%','100%','70%']}>
            <Box height={'auto'} w='auto' m='auto' mt='6%'>
            <Heading size={['md','md','lg']} m="5px" textAlign={['center','left','left']}>Hi, I am <span style={{color:"#3500D3"}}>Vaishnavi Chaudhari</span></Heading>
            <Text color={'black'} fontSize={['14px','14px','20px']}  width={['100%','80%','80%']} m={['4px','3px','10px']}>Highly motivated, results-driven who enjoys a challenge and is committed to succeeding in a challenging environment.Willing to work with others and  maintain positive attitude.Seeking an opportunity to work in a challenging environment to prove my skills and utilize my knowledge with the organization</Text>
            
            <Box width={['15%','10%','10%']} m={['auto','5px','5px']}>
            <Flex>
            <a href="https://github.com/vaishu0428" target="_blank" >
                    <AiFillGithub fontSize={'30px'} color='#3500D3'/>
                   </a>
                   <Spacer />
                   <a  href="https://www.linkedin.com/in/vaishnavi-chaudhari-345b97228/" target="_blank">
                    <AiOutlineLinkedin fontSize={'30px'} color='#3500D3'/>
                   </a>
                   </Flex>
                   </Box>
                   
          </Box>
          </Box>
        </Flex>
        <Grid templateColumns={['repeat(2,1fr)','repeat(3,1fr)','repeat(5,1fr)']} gap={'10px'} w="100%" h="auto" m="auto" mt="55px" mb="20px">
           <GridItem boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"  w="100%" h="70px" p="2" m="auto" textAlign={'center'} >
           <Heading as={'h4'} size={['xs','xs','md']}>1200+ hrs Coding</Heading>
           </GridItem >
           <GridItem boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"  w="100%" h="70px" p="2" m="auto" textAlign={'center'}>
           <Heading as='h4' size={['xs','xs','md']}>600+ hrs DSA</Heading>
           </GridItem>
           <GridItem boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"  w="100%" h="70px" p="2" m="auto" textAlign={'center'}>
           <Heading as='h4' size={['xs','xs','md']}>5+ Group Project</Heading>
           </GridItem>
           <GridItem boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"  w="100%" h="70px" p="2" m="auto" textAlign={'center'}>
           <Heading as='h4' size={['xs','xs','md']}>2+ Individual Projects</Heading>
           </GridItem>
           <GridItem boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"  w="100%" h="70px" p="2" m="auto" textAlign={'center'}>
           <Heading as='h4' size={['xs','xs','md']}>600+ Git Commits</Heading>
           </GridItem>
          
          </Grid>
       </Box>
     </Box>
    </div>
  )
}

export default About