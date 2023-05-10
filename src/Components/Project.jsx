import {  Box,   Grid, GridItem, Heading,Image,Text,SimpleGrid, color } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";
import "./Project.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
let projects = [
    {
        image: "https://agiled.app/wp-content/uploads/2021/05/image-2-1024x492.png",
        projectName: "Bonsai App ",
        description: "This is a clone website of Hellobonsai.com. Hello Bonsai is a freelancing management web application by which users can track their time and generate invoices. ",
        skills: "HTML | CSS | JavaScript",
        netlifyLink: "https://monumental-crisp-761be5.netlify.app/",
        githubLink: "https://github.com/masum-raja/HelloBonsai"
    },
    {
        image: "https://snipboard.io/2RuPdi.jpg",
        projectName: "Digital HealthCare Clone",
        description: " Tata 1mg is India's leading consumer health platform. It aspires to be the trusted health partner for all Indians and its mission is to make healthcare accessible, understandable and affordable for a billion Indians.",
        skills: "HTML | CSS | JavaScript",
        netlifyLink: "https://6392efbfc3889404ba85fcb7--projectrct101.netlify.app",
        githubLink: "https://github.com/vaishu0428/jagged-voice-299"
    },
   
    {
        image: "https://snipboard.io/AtYmh2.jpg",
        projectName: "Sparta Fitness Club Clone ",
        description: "Sparta Fitness Club is an digital fitness content publisher. The company offers free and paid at-home exercise videos through their website. Sparta Fitness Club offers individual workouts and workout plans. ",
        skills: "HTML | CSS | JavaScript | React",
        netlifyLink: "https://gray-system-3325.vercel.app/",
        githubLink: "https://github.com/vaishu0428/Sparta-Fitness-Club"
    },
    {
        image: "https://snipboard.io/fWaoOm.jpg",
        projectName: "BigBasket.com Clone ",
        description: "BigBasket.com is an India`s Online Grocery Shopping and Online Supermarket. All the daily needs product are available on BigBasket. ",
        skills: "HTML | CSS | JavaScript | React-Redux | Chakra",
        netlifyLink: "https://big-basket-sooty.vercel.app/",
        githubLink: "https://github.com/Saif-sk5417/savvy-harmony-4539"
    },
    
   
]

export const Projects = () => {
    return (
        <Box id="project" w="100%" h="auto" m="auto">
             <Heading  m="auto" textAlign='center' mb="20px">My <span style={{color:"#3500D3"}}>Project</span> </Heading>
            <div style={{ width: "90%", margin: "auto" }}>
                 <div >
                
                <SimpleGrid  spacing='50px' className="projectdiv">
                    {
                        projects.map((el,index) => (
                            
                            <div key={index} height='auto' style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px", padding:"20px", textAlign:"start"}}>
                            <Image src={el.image} height="250px" width="100%" margin="auto" borderRadius={"15PX"} borderBottom='1px solid #3500D3'/>
                                <p style={{fontSize:"23px", fontWeight:"700", lineHeight:"2.5", textAlign:"center", color:'#3500D3'}}>{el.projectName}</p>
                                <p style={{ lineHeight:"2" ,fontSize:"17px" ,color:"gray"}}>{el.description}</p>
                                <p style={{marginTop:"10px",color:"gray"}}>
                                    <span style={{ color: "#3500D3", fontWeight:"bold" }}>Tech Stack: </span>
                                    {el.skills}
                                </p>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center",marginTop:"20px"}}>
                                    <a href={el.netlifyLink} target="_blank" rel="noopener noreferrer">
                                        <button  style={{ backgroundColor:"#3500D3",color:"white", fontWeight:"bold", fontSize:"15px", cursor:"pointer",padding:"8px 15px",borderRadius:"15px",display:"flex", gap:"5px", alignItems:"center" ,border:"3px solid rgba(11,12,16,0.4)"}} ><span style={{marginRight:"5px"}}><SiNetlify /></span> Live</button>
                                    </a>
                                    <a href={el.githubLink} target="_blank" rel="noopener noreferrer" style={{listStyle:"none"}}>
                                        <button style={{backgroundColor:"#3500D3",color:"white",fontWeight:"bold", fontSize:"15px", cursor:"pointer",padding:"8px 15px",borderRadius:"15px",display:"flex", gap:"5px", alignItems:"center", border:"3px solid rgba(11,12,16,0.4)"}} ><span style={{marginRight:"5px"}}><BsGithub /></span> Code</button>
                                    </a>
                                </div> 
                            
                             </div>
                        ))}
                </SimpleGrid>
                </div>

            </div>
          
            
          
        </Box>
    )
}
export default Projects