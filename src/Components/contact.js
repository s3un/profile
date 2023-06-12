import {
  Box,
  Container,
  Flex,
  HStack,
  Stack,
  Heading,
  Text,
  Center,
  VStack,
  InputGroup,
  FormLabel,
  InputLeftElement,
  FormControl,
  Input,
  Textarea,
  Button,
  IconButton,
  useColorModeValue,
  Spacer,
} from "@chakra-ui/react";

import { BsPerson, BsGithub } from "react-icons/bs";

import { MdOutlineEmail, MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

import { InViewWrapper, scaleInVariant } from "../motions";

export default function myContact() {
  // const { hasCopied, onCopy } = useClipboard('example@example.com');
  return (
    <Flex mt={"60px"}>
      <Container maxW={{ lg: "container.lg" }}>
      <InViewWrapper variant={scaleInVariant(0.3, 1.5)}> 
      <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
          <Center>
            <Box position={"relative"}>
              <h1 className="newHeader">Contact</h1>
              <Heading
                // as={'span'}
                position={"absolute"}
                top={0}
                h={"100%"}
                w={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                _after={{
                  // content: "''",
                  // width: "full",
                  // height: useBreakpointValue({ base: "20%", md: "30%" }),
                  // position: "absolute",
                  // bottom: 1,
                  // left: 0,
                  // bg: "blue.400",
                  // zIndex: -1,
                  borderBottom: "4px",
                  borderBottomColor: "blue.400",
                }}
              >
                Get In touch
              </Heading>
            </Box>
          </Center>
        </Heading>
      </InViewWrapper>

        <Stack
          // spacing={"10px"}
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
        >
          <VStack>
            <Box w={400}>
              <Text
                className="secondText"
                fontSize={20}
                fontWeight={"bold"}
                color={"blue.400"}
              >
                Contact
              </Text>

              <Text fontSize={35} className="boldTest" fontWeight={"bold"}>
                You want to hire me ?
              </Text>

              <Text className="secondText">
                Kindly send am email to the address below:
              </Text>

              <Box display="inline-flex" alignItems={"center"}>
                <Text className="secondText" pt={30}>
                  Email: Oyebowalemuiz@gmail.com
                </Text>
              </Box>
            </Box>
          </VStack>
          <Spacer />

          <VStack spacing={"5"}>
            <Box w={400}>
              <FormControl
                mb={5}>
                <InputGroup>
                  <InputLeftElement children={<BsPerson />} />
                  <Input type="text" name="name" placeholder="Your Name" />
                </InputGroup>
              </FormControl>

              <FormControl
                mb={5}>
                <InputGroup>
                  <InputLeftElement children={<MdOutlineEmail />} />
                  <Input type="email" name="email" placeholder="Your Email" />
                </InputGroup>
              </FormControl>

              <FormControl
                mb={5}>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  resize="none"
                />
              </FormControl>

              <Button
                size="md"
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                mb={5}
                w={"200px"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                Send message
              </Button>
            </Box>
          </VStack>
        </Stack>
      </Container>
    </Flex>
  );
}
