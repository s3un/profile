import {
  Flex,
  Container,
  Heading,
  Text,
  VStack,
  Stack,
  Box,
  HStack,
  Spacer,
  Center,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Link,
  Badge,
  useBreakpointValue,
} from "@chakra-ui/react";
// import { BsJustify } from 'react-icons/bs'
import { CheckIcon } from "@chakra-ui/icons";
import { MdCheckCircle } from "react-icons/md";
import { InViewWrapper, itemVariants, scaleInVariant } from "../motions";
import bulletTextVariant from "../motions/bulletTextMotion";

export default function Resume() {
  const isLargeScreen = useBreakpointValue({ base: false, lg : true})

  return (
    <>
      <Flex mt={10}>
        <Container maxW={{ lg: "container.xl" }}>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            <Center>
              <InViewWrapper variant={scaleInVariant(0.3, 1.5)}>
                <Box position={"relative"}>
                {isLargeScreen && <h1 className="newHeader">Summary</h1> }
                  <Heading
                    position={"absolute"}
                    top={0}
                    h={"100%"}
                    w={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    _after={{
                      border: "4px",
                      borderBottomColor: "blue.400",
                    }}
                  >
                    Resume
                  </Heading>
                </Box>
              </InViewWrapper>
            </Center>
          </Heading>
          <Stack
            direction={{ base: "column", md: "column", lg: "row" }}
            mt={35}
          >
            <VStack>
              <Box maxW={{ lg: "xlg" }}>
                <InViewWrapper variant={itemVariants(0.5, -30, 1)}>
                  <Text
                    className="secondText"
                    fontSize={20}
                    color={"black"}
                    pb={19}
                  >
                    My Experience
                  </Text>
                </InViewWrapper>
                <InViewWrapper variant={bulletTextVariant(0.5, 0, 60, 1)}>
                  <Box mb={2} border={"1px"} borderColor={"gray.100"}>
                    <Box m={4}>
                      <Badge
                        rounded={"full"}
                        colorScheme="green"
                        fontWeight="bold"
                        className="secondText"
                      >
                        JULY 1 2022 - Present
                      </Badge>

                      <Text className="secondText" fontSize={23}>
                        Application/Cloud Security Engineer
                      </Text>
                      <Text
                        className="secondText"
                        as={Link}
                        fontSize={15}
                        href={"#"}
                      >
                        SeamlessHR
                      </Text>
                      <List spacing={2}>
                        <ListItem>
                          <ListIcon
                            className="secondText"
                            as={MdCheckCircle}
                            color="blue.400"
                          />
                          Performing (composition analysis, SAST, DAST, and
                          IAST) on web/mobile applications.
                        </ListItem>

                        <ListItem>
                          <ListIcon
                            className="secondText"
                            as={MdCheckCircle}
                            color="blue.400"
                          />
                          Responding to security incidents and carrying out
                          threat-hunting activity in the cloud environment (AWS
                          GuardDuty, Amazon Macie, etc).
                        </ListItem>

                        <ListItem>
                          <ListIcon
                            className="secondText"
                            as={MdCheckCircle}
                            color="blue.400"
                          />
                          Automated pipeline (Sonar cloud) and manual source
                          code review.
                        </ListItem>
                      </List>
                    </Box>
                  </Box>
                </InViewWrapper>
                <InViewWrapper variant={bulletTextVariant(0.7, 0, 60, 1)}>
                  <Box mb={2} border={"1px"} borderColor={"gray.100"}>
                    <Box m={4}>
                      <Badge
                        rounded={"full"}
                        colorScheme="red"
                        fontWeight="bold"
                        className="secondText"
                      >
                        June 2022 - September 2022
                      </Badge>

                      <Text className="secondText" fontSize={23}>
                        Threat Detection Engineer
                      </Text>
                      <Text
                        className="secondText"
                        as={Link}
                        fontSize={15}
                        href={"#"}
                      >
                        Wazuh
                      </Text>
                      <List spacing={2}>
                        <ListItem>
                          <ListIcon
                            className="secondText"
                            as={MdCheckCircle}
                            color="blue.400"
                          />
                          Security engineering
                        </ListItem>

                        <ListItem>
                          <ListIcon
                            className="secondText"
                            as={MdCheckCircle}
                            color="blue.400"
                          />
                          Malware research and analysis (Static & Dynamic)
                        </ListItem>
                      </List>
                    </Box>
                  </Box>
                </InViewWrapper>
                <InViewWrapper variant={bulletTextVariant(0.9, 0, 60, 1)}>
                  <Box mb={2} border={"1px"} borderColor={"gray.100"}>
                    <Box m={4}>
                      <Badge
                        rounded={"full"}
                        colorScheme="red"
                        fontWeight="bold"
                        className="secondText"
                      >
                        July 2021 - July 2022
                      </Badge>

                      <Text className="secondText" fontSize={23}>
                        Senior Threat Intelligence Analyst
                      </Text>
                      <Text
                        className="secondText"
                        as={Link}
                        fontSize={15}
                        href={"#"}
                      >
                        Access Bank Plc.
                      </Text>
                      <List spacing={2}>
                        <ListItem>
                          <ListIcon
                            className="secondText"
                            as={MdCheckCircle}
                            color="blue.400"
                          />
                          Explores network and system activity patterns through
                          log correlation using ArcSight.
                        </ListItem>

                        <ListItem>
                          <ListIcon
                            className="secondText"
                            as={MdCheckCircle}
                            color="blue.400"
                          />
                          Used a number of tools and systems (automated and
                          manual) to discover threats, MDATP, Carbon Black, and
                          ArcSight.
                        </ListItem>

                        <ListItem>
                          <ListIcon
                            className="secondText"
                            as={MdCheckCircle}
                            color="blue.400"
                          />
                          Vulnerability management and remediation
                        </ListItem>
                      </List>
                    </Box>
                  </Box>
                </InViewWrapper>
                <InViewWrapper variant={bulletTextVariant(1.1, 0, 60, 1)}>
                  <Box mb={2} border={"1px"} borderColor={"gray.100"}>
                    <Box m={4}>
                      <Badge
                        rounded={"full"}
                        colorScheme="red"
                        fontWeight="bold"
                        className="secondText"
                      >
                        November 2019 - June 2021
                      </Badge>

                      <Text className="secondText" fontSize={23}>
                        Threat Intelligence Analyst
                      </Text>
                      <Text
                        className="secondText"
                        as={Link}
                        fontSize={15}
                        href={"#"}
                      >
                        CyberSOC Africa
                      </Text>
                      <List spacing={2}>
                        <ListItem>
                          <ListIcon
                            className="secondText"
                            as={MdCheckCircle}
                            color="blue.400"
                          />
                          Malware research and analysis
                        </ListItem>

                        <ListItem>
                          <ListIcon
                            className="secondText"
                            as={MdCheckCircle}
                            color="blue.400"
                          />
                          Vulnerability assessment on client web application
                        </ListItem>

                        <ListItem>
                          <ListIcon
                            className="secondText"
                            as={MdCheckCircle}
                            color="blue.400"
                          />
                          Dark web monitoring and investigation
                        </ListItem>

                        <ListItem>
                          <ListIcon
                            className="secondText"
                            as={MdCheckCircle}
                            color="blue.400"
                          />
                          Open-source intelligence gathering on cybercrime cases
                        </ListItem>

                        <ListItem>
                          <ListIcon
                            className="secondText"
                            as={MdCheckCircle}
                            color="blue.400"
                          />
                          Network threat-hunting
                        </ListItem>

                        <ListItem>
                          <ListIcon
                            className="secondText"
                            as={MdCheckCircle}
                            color="blue.400"
                          />
                          Threat actor research, investigation, and reporting
                        </ListItem>
                      </List>
                    </Box>
                  </Box>
                </InViewWrapper>
              </Box>
            </VStack>
            <Spacer />
            <VStack>
              <Box maxW={{ lg: "xlg" }}>
                <InViewWrapper variant={itemVariants(0.5, -30, 1)}>
                  <Text
                    fontSize={20}
                    color={"black"}
                    className="secondText"
                    pb={19}
                  >
                    My Courses & Certifications
                  </Text>
                </InViewWrapper>
                <InViewWrapper variant={bulletTextVariant(0.5, 0, 60, 1)}>
                  <Box mb={2} border={"1px"} borderColor={"gray.100"}>
                    <Box m={4}>
                      <Badge
                        rounded={"full"}
                        colorScheme="orange"
                        fontWeight="bold"
                        className="secondText"
                      >
                        Currently Studying
                      </Badge>

                      <Text className="secondText" fontSize={23}>
                        AWS
                      </Text>
                      <Text
                        className="secondText"
                        as={Link}
                        fontSize={15}
                        href={"#"}
                      >
                        Amazon Security Speciality
                      </Text>
                    </Box>
                  </Box>
                </InViewWrapper>
                <InViewWrapper variant={bulletTextVariant(0.7, 0, 60, 1)}>
                  <Box mb={2} border={"1px"} borderColor={"gray.100"}>
                    <Box m={4}>
                      <Badge
                        rounded={"full"}
                        colorScheme="green"
                        fontWeight="bold"
                        className="secondText"
                      >
                        April 2021
                      </Badge>

                      <Text className="secondText" fontSize={23}>
                        eLearning Secuirty
                      </Text>
                      <Text className="secondText" fontSize={15} href={"#"}>
                        eLearning Junior Penetration Tester
                      </Text>
                    </Box>
                  </Box>
                </InViewWrapper>
                <InViewWrapper variant={bulletTextVariant(0.9, 0, 60, 1)}>
                  <Box mb={2} border={"1px"} borderColor={"gray.100"}>
                    <Box m={4}>
                      <Badge
                        rounded={"full"}
                        colorScheme="green"
                        fontWeight="bold"
                        className="secondText"
                      >
                        May 2022
                      </Badge>

                      <Text className="secondText" fontSize={23}>
                        PECB
                      </Text>
                      <Text
                        className="secondText"
                        as={Link}
                        fontSize={15}
                        href={"#"}
                      >
                        PECB Certified Lead Pen Test Professional
                      </Text>
                    </Box>
                  </Box>
                </InViewWrapper>
              </Box>
            </VStack>
          </Stack>
        </Container>
      </Flex>
    </>
  );
}
