import {
    Flex,
    Button,
    HStack,
    Box,
    Text,
    Link,
    Spacer,
    useDisclosure,
    Container,
    Image
  } from '@chakra-ui/react';

  import Logo from '../img/logo.png'
  import {useEffect, useState} from 'react';
  
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


    // const { isOpen, onToggle } = useDisclosure();
    return(
      <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      position={isScrolled ? "fixed" : "static"}
      top={0}
      left={0}
      right={0}
      className="secondText"
      bgColor={isScrolled ? "#3182CE" : "transparent"}
      color={isScrolled ? "WHITE" : "3182CE"}
      boxShadow={isScrolled ? "0 0 10px rgba(0, 0, 0, 0.3)" : "none"}
      zIndex={999}
      // position={'fixed'}
    >
      <Box>
        <Button onClick={onOpen} display={{ base: "block", md: "none" }}>
          Menu
        </Button>
      </Box>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        {/* Add your navigation links here */}
        <Text 
        as={Link}
        variant="ghost" 
        
        href={'#'}
        size={7}>
            <Image 
            src={Logo} 
            boxSize={90}/>
        </Text>
        <Button 
          as={Link} 
          variant="ghost" 
          mx={2}
          href='#aboutme'>
          About
        </Button>
        <Button variant="ghost" mx={2}>
          Resume
        </Button>
        <Button variant="ghost" mx={2}>
          Services
        </Button>
        <Button variant="ghost" mx={2}>
          Contact
        </Button>
      </Box>

      <Spacer />

      
    </Flex>
    )
  }
