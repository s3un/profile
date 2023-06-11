import { Box, Center, Container, Stack, Text, Image, HStack, Link, IconButton } from "@chakra-ui/react";
import Logo from '../img/logo.png';
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <>
      <Box
        bg={"#3182CE"}>
        <Center>
            <Stack>
            <Image src={Logo} boxSize={120}/>
            </Stack>
            

            <HStack direction={{base: 'column', md: 'row'}} spacing={"2"}>
                      <IconButton
                        as={Link}
                        aria-label='github'
                        href={"https://github.com/s3un"}
                        variant={"ghost"}
                        size="lg"
                        isRound={true}
                        _hover = {{ bg: "#3182CE"}}
                        icon={<BsGithub size={"28px"} />}
                        />

                      <IconButton
                        as={Link}
                        aria-label='linkedin'
                        href={"https://www.linkedin.com/in/oluwaseun-oyebowale-357a69179/"}
                        variant={"ghost"}
                        size="lg"
                        isRound={true}
                        _hover = {{ bg: "#3182CE"}}
                        icon={<BsTwitter size={"28px"} />}
                        />

                      <IconButton
                        as={Link}
                        aria-label='twitter'
                        href={"#"}
                        variant={"ghost"}
                        size="lg"
                        isRound={true}
                        _hover = {{ bg: "#3182CE"}}
                        icon={<BsInstagram size={"28px"} />}
                        />

                      <IconButton
                        as={Link}
                        aria-label='github'
                        href={"#"}
                        variant={"ghost"}
                        size="lg"
                        isRound={true}
                        _hover = {{ bg: "#3182CE"}}
                        icon={<BsLinkedin size={"28px"} />}
                        />
                      
                    </HStack>

        </Center>
      </Box>
    </>
  );
}
