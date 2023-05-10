import React from 'react'
import "./Home.css";
import Type from "./Type"
import {Box, Button, Heading, Text} from "@chakra-ui/react"

const Home = () => {
  const handleClick = () => {
    window.open(
      "/fw20_0865-Vaishnavi-Chaudhari-Resume.pdf"
    );
  };

  return (
    <div className='container home-page' id="home">
     <Box height={'auto'} width={'auto'} margin={'6%'} mt="8%" textAlign={'left'} >
     <Heading color={'white'} textAlign={['center','','left']} m='5px'>Hii ...!</Heading>
     <Heading color={'white'} m='5px' textAlign={['center','','left']} size={['md','md','lg']}>This is <span style={{color:"#3500D3"}}>Vaishnavi ,</span><span><Type/></span> </Heading>

     <Text color={'white'} m={['4','','5px']} textAlign={['center','','left']} fontSize={['14','','23px']} w={["80%","","57%"]} > Aspiring Full-Stack Web Developer trained by Masai School Bengaluru.I have a passion to create useful projects and systems which can contribute in everyone's wellbeing. I go to full extent in execution.</Text>
    {/* <Button margin={'10px'} mt="20px"  color='#3500D3'>Contact</Button> */}
              <a target="_blank"
                href="fw20_0865-Vaishnavi-Chaudhari-Resume.pdf"
                download="fw20_0865-Vaishnavi-Chaudhari-Resume.pdf"
                onClick={handleClick}><button style={{backgroundColor:"#3500D3",marginTop:"30px",color:"white",fontWeight:"bold", fontSize:"15px", cursor:"pointer",padding:"8px 15px" ,border:"3px solid white"}} >Download Resume</button></a>
     
     </Box>
      


    
    </div>
  )
}





export default Home