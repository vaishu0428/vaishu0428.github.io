import { Box, Button,  Heading, Image, Text } from "@chakra-ui/react";
// import { NavLink } from "react-router-dom";

const connect = [
    {
        name: "LinkedIn",
        img: "https://cdn3.iconfinder.com/data/icons/inficons/512/linkedin.png",
        link: "https://www.linkedin.com/in/rohini-kushwaha-735b9322b/",
        color: 'blue.500'
    },
    {
        name: "GitHub",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0Uu0auB-_30X62d-vUYM-jhN4TkqPqgv6A&usqp=CAU",
        link: "https://github.com/rohiniee0028",
        color: 'gray.700'
    },
    {
        name: "Gmail",
        img: "https://i.pinimg.com/originals/29/42/ad/2942ad3a9c3e0a074ff4e94ea289ee31.jpg",
        link: "mailto:rohini19394@gmail.com",
        color: 'red.500'
    },
]

export const Contact1 = () => {
    return (
        <Box width={'90%'} margin={'auto'} marginTop={'70px'} id="contact">
            <Heading fontSize={{base:"25px", md:"30px", lg:"35px"}}style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "80px" }} flexDir={{sm:"column", md:"row", lg:"row", base:"column"}}>Feel <Text color="red.500">Free</Text>To<Text color="red.500">Connect </Text> With Me</Heading>
            <Box display={'flex'} flexDirection={{base:"column", md:"row"}} gap={'30px'} justifyContent={'center'} alignItems={'center'} marginTop={'-20px'}>
                <Box width={{base:"100%", md:"50%", lg:"50%" }}>
                    <Image src="https://cdn.writermag.com/2020/01/shutterstock_1288206052_web.jpg" width={'100%'} />
                </Box>
                <Box width={{base:"100%", md:"40%", lg:"40%" }} >
                    <Image src="https://raw.githubusercontent.com/rahulbanerjee26/githubProfileReadmeGenerator/main/gifs/handShake.gif" align={{base:"center", sm:"center", md:"center", lg:"left"}} />
                    <Text align={{base:"center", sm:"center", lg:"left"}} fontSize={'18px'}>Feel free to get in touch with me.
                        I am always open to discussing new ideas or oppurtunities
                        and to be a part of your visions.
                        <br />
                        <br/>
                        Need help?
                    </Text>
                    <br/>
                    <Box display={'flex'} gap={'20px'}>
                        {
                            connect.map((el) => (
                                <a href={el.link} target="_blank">
                                    <Button display={'flex'} gap={'10px'} bg={el.color} color={'white'} _hover={{bg:el.color}}>
                                        <Image src={el.img} width="20px" style={{borderRadius:'20px'}} />
                                        <Text lineHeight={1.5}>{el.name}</Text>
                                    </Button>
                                </a>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Contact1