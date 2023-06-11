import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Center,
  StackDivider,
  useColorModeValue,
  VStack,
  Button,
  HStack,
  useBreakpointValue,
  Divider,
  AbsoluteCenter,
  Wrap,
  WrapItem,
  Avatar,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";

import aV from "../img/console.png";
import aVa from "../img/around(1).png";
import { MdCheckCircle } from "react-icons/md";
import { InViewWrapper, itemVariants, scaleInVariant } from "../motions";
import bulletTextVariant from "../motions/bulletTextMotion";

export default function About() {
  return (
    <>
      <Container maxW={{ base: "full", lg: "container.xl" }} mt={10}>
        <Box>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            <Center>
              <InViewWrapper variant={scaleInVariant(0.3, 1.5)}>
                <Box position={"relative"}>
                  <h1 className="newHeader">About me</h1>
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
                    Know me More
                  </Heading>
                </Box>
              </InViewWrapper>
            </Center>
          </Heading>
          <Stack spacing={10} align="" direction={["column", "row"]} mt={"50"}>
            <Box>
              <InViewWrapper variant={itemVariants(0.3, -30)}>
                <Heading fontSize={"30px"} className="secondHeader">
                  I'm {""}
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, blue.500, blue.500)"
                    bgClip={"text"}
                  >
                    <span>Oluwaseun Muiz Oyebowale, </span>
                  </Text>
                  a cyber security Engineer.
                </Heading>
              </InViewWrapper>

              <InViewWrapper variant={itemVariants(0.5, -30)}>
                <Text pt={"15px"} className="secondText">
                  Cyber Security Engineer with a wide skill set in different IT
                  domains, Cloud enthusiast with strong development skills on
                  AWS services. I also keep learning
                </Text>

                <Text className="secondText">
                  new technologies have wide knowledge in software, IT
                  infrastructure, cloud, and DevOps, to keep the IT
                  infrastructure and different technologies secure.
                </Text>
              </InViewWrapper>

              <Divider mt={3} />
              {/* <Box 
              mt={10}>
                <Heading
                 className="secondText">
                    Hobbies
                </Heading>
                <List>
                    <ListItem
                    fontSize={20}>
                        <ListIcon as={MdCheckCircle} 
                        fontSize={20}
                        color='green.500'  
                        className="secondText" />
                            Gaming
                    </ListItem>

                    <ListItem
                    fontSize={20}>
                        <ListIcon as={MdCheckCircle} 
                        fontSize={20}
                        color='green.500'  
                        className="secondText" />
                            Traveling
                    </ListItem>

                    <ListItem
                    fontSize={20}>
                        <ListIcon as={MdCheckCircle} 
                        fontSize={20}
                        color='green.500'  
                        className="secondText" />
                            Music
                    </ListItem>
                </List>
              </Box> */}
            </Box>

            <VStack w={{ lg: "550px" }} align={"flex.end"} padding={"3px"}>
              <InViewWrapper variant={bulletTextVariant(0.3, 0, 30, 1)}>
                <Text className="secondText">
                  Name: Oluwaseun Muiz Oyebowale
                </Text>
                <Divider
                  background={useColorModeValue("white.200", "white.600")}
                />
              </InViewWrapper>
              <InViewWrapper variant={bulletTextVariant(0.5, 0, 30, 1)}>
                <Text className="secondText">
                  Email: oyebowalemuiz@gmail.com
                </Text>
                <Divider
                  background={useColorModeValue("white.200", "white.600")}
                />
              </InViewWrapper>
              <InViewWrapper variant={bulletTextVariant(0.7, 0, 30, 1)}>
                <Text className="secondText">From: Lagos, Nigeria</Text>
                <Divider
                  background={useColorModeValue("white.200", "white.600")}
                />
              </InViewWrapper>
              <InViewWrapper variant={bulletTextVariant(0.9, 0, 30, 1)}>
                <Button
                  size="md"
                  bg={"blue.400"}
                  rounded={"full"}
                  color={"white"}
                  w={"200px"}
                  mt={"10px"}
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
                  Download my CV
                </Button>
              </InViewWrapper>
            </VStack>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
