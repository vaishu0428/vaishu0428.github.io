// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2'
// const Contact = () => {
//   const handleOnSubmit = (e) => {
//     e.preventDefault()
   
//     emailjs.sendForm('service_coxq6bj', 'template_fkij5wi', e.target, 'MowgQl_c9pidFZaZE').then(
//       (result) => {
//         console.log(result.text)
//         Swal.fire({
//           icon: 'success',
//           title: 'Message Sent Successfully',
//         })
//       },
//       (error) => {
//         console.log(error.text)
//         Swal.fire({
//           icon: 'error',
//           title: 'Ooops, something went wrong',
//           text: error.text,
//         })
//       },
//     )
//     e.target.reset()
//   }
 
//   return (
//     <div id='contact'>Contact
//  <form onSubmit={handleOnSubmit} >
//                     <label>Name</label>
//                     <br />
               
//                     <input type="text" name="your_name" placeholder='Enter your name..'/>
//                     <br />
//                     <label>Email</label>
//                     <br />
//                     <input type="text" name="your_email" placeholder='user@gamil.com' />
//                     <br />
//                     <label>Message</label>
//                     <br />
                    
//                     <textarea type="text" name="your_message" placeholder='Enter a message'/>
//                     <br />
//                     <br />
//                     <input  type="submit" value="Send Message" /></form>
//   </div>
//   )
// }

// export default Contact;




import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub,BsLinkedin, BsPerson ,BsFillTelephoneFill} from 'react-icons/bs';
import { AiFillGithub ,AiOutlineLinkedin} from "react-icons/ai";
import {HiLocationMarker} from "react-icons/hi"
import {SiGmail} from "react-icons/si"
import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2'
import "./Contact.css"
export const Contact = () => {

  const handleOnSubmit = (e) => {
      e.preventDefault()
     
      emailjs.sendForm('service_coxq6bj', 'template_fkij5wi', e.target, 'MowgQl_c9pidFZaZE').then(
        (result) => {
          console.log(result.text)
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully',
          })
        },
        (error) => {
          console.log(error.text)
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
        },
      )
      e.target.reset()
    }
  return (
      <div id='contact' className="mainContactContainer">
   <h2 className="contactHeading">Contact</h2>
      <div className="contactContainer">
        
      <div className="cont1">
        {/* <h2 className="contactHeading">Contact</h2> */}
        <h3>Connect with me : </h3>

        <div className="c1">
        <h4><SiGmail />vaishnvischaudhari28@gmail.com</h4>
          <h4><BsFillTelephoneFill />8080308148</h4>
         
          <h4><HiLocationMarker />Pune,Maharashtra</h4>
          
        
        </div>
          <div className="social">
          <a href="https://github.com/vaishu0428" target="_blank">
                    <AiFillGithub />
                   </a>
                   <a  href="https://www.linkedin.com/in/vaishnavi-chaudhari-345b97228/" target="_blank">
                    <AiOutlineLinkedin />
                   </a>
          </div>
      </div>
             
                        
                  <div className="cont2">
                      <form onSubmit={handleOnSubmit} className="conForm">
                      <label>Name</label>
                      <br />
                 
                      <input type="text" name="your_name" placeholder='Enter name...'/>
                      <br />
                      <label>Email</label>
                      <br />
                      <input type="text" name="your_email" placeholder='abc@gmail.com' />
                      <br />
                      <label>Message</label>
                      <br />
                      
                      <textarea type="text" name="your_message" placeholder='Greet Me' />
                      <br />
                      <br />
                      <input className="sub" type="submit" value="Send Message" />
                      </form>
                      
                      </div>
                      </div>
                     
    </div>
  );
}

export default Contact
