import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Center,
  useColorModeValue,
  VStack,
  Button,
  Divider,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";

import { InViewWrapper, itemVariants, scaleInVariant } from "../motions";
import bulletTextVariant from "../motions/bulletTextMotion";
import { FcInternal } from "react-icons/fc";
import CVPDF from "../Resume/cv.pdf"


export default function About() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const isSmallScreen = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex>
      <Container maxW={{ base: "full", lg: "container.xl" }} mt={10}>
        <Box>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            <Center>
              <InViewWrapper variant={scaleInVariant(0.3, 1.5)}>
                <Box position={"relative"}>
                  {isLargeScreen && <Text className="newHeader">About me</Text>}
                  {isLargeScreen && (
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
                  )}
                  {isSmallScreen && (
                    <Heading
                      // as={'span'}
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
                  )}
                </Box>
              </InViewWrapper>
            </Center>
          </Heading>
          <Stack spacing={10} align="" direction={["column", "row"]} mt={"50"}>
            <Box>
              {/* <InViewWrapper variant={itemVariants(0.3, -30)}>
                <Heading fontSize={"30px"} className="secondHeader">
                  I'm {""}
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, blue.500, blue.500)"
                    bgClip={"text"}
                  >
                    <span>Oluwaseun Muiz Oyebowale, </span>
                  </Text>
                  A cyber security Engineer.
                </Heading>
              </InViewWrapper> */}

              <InViewWrapper variant={itemVariants(0.5, -30)}>
                <Text pt={"15px"} className="secondText">
                  Experienced Application/Cloud Security Engineer with a strong
                  background in Information System Security and over
                  <span className="aboutClass"> 5 </span> years of IT
                  experience. Proficient in security engineering and Threat
                  Intelligence, with expertise in Cloud, vulnerability scanning,
                  Software development, and Malware analysis.
                </Text>

                <Text className="secondText">
                  <br /> Continuously expanding knowledge in software, IT
                  infrastructure, cloud, and DevOps to ensure comprehensive
                  security across diverse technologies. A highly organized team
                  player adept at managing project milestones and delivering
                  successful outcomes
                </Text>
              </InViewWrapper>

              <Divider mt={3} />
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
                <a href={CVPDF} target="_blank">
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
                  rightIcon={<FcInternal />}
                >
                  Download my CV
                </Button>
                </a>
              </InViewWrapper>
            </VStack>
          </Stack>
        </Box>
      </Container>
    </Flex>
  );
}
