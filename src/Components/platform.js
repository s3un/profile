import { 
    Box, 
    Image, 
    Text, 
    Container, 
    Heading,
    Flex,
    IconButton, 
    Center,
    Divider
} from "@chakra-ui/react";
import imageMe from '../img/aws.svg'
import portSwigger from '../img/PortSwigger.svg'
import postMan from '../img/Postman.svg'
import vC from '../img/Visual-Studio-Code.svg'
import bitBucket from '../img/Bitbucket-Cloud.svg'
import sonarCloud from '../img/sonarcloud-wordmark.svg'
import OWASPl from '../img/OWASP-Open-Web-Application-Security-Project.svg'
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
// import { useState } from "react";





export default function Platform() {

    return(
      <>
        <Flex
          mt={30}
          h={20}
          bg="gray.50"
          p={2}
          border={"1px"}
          borderColor={"gray.100"} >
        
      
        <Center flex={1}>
          <Image src={imageMe} 
           boxSize='120px'
           ml={10}/>
          
        </Center>
        
        <Center flex={1}
        >
          <Image src={OWASPl} 
           boxSize='180px'
           ml={10}/>
          
        </Center>

        <Center flex={1}>
          <Image src={postMan} 
           boxSize='170px'
           ml={10}/>
         
        </Center>
        

        <Center flex={1}>
        <Image src={portSwigger} 
           boxSize='200px'
           ml={10}/>
        </Center>

        <Center flex={1}>
        <Image src={bitBucket} 
           boxSize='200px'
           ml={10}/>
        </Center>

        <Center flex={1}>
        <Image src={sonarCloud} 
           boxSize='200px'
           ml={10}/>
        </Center>
        </Flex>
      </>
    )
}

