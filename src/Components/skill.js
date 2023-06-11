import {
  Box,
  Flex,
  Container,
  Heading,
  Text,
  Center,
  Progress,
  Stack,
  VStack,
  Spacer,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import { InViewWrapper, scaleInVariant } from "../motions";
import bulletTextVariant from "../motions/bulletTextMotion";

export default function SkillSet() {
  //   const [progressValue, setProgressValue] = useState({
  //     progressBar1: 0,
  //     progressBar2: 0,
  //     progressBar3: 0,
  //     progressBar4: 0,
  //     progressBar5: 0,
  //     progressBar6: 0,
  //     progressBar7: 0
  //   });

  //  useEffect (() => {
  //     const handleScroll = () => {
  //       const scrollPosition = window.scrollY;
  //       const windowHeight = window.innerHeight;
  //       const documentHeight = document.documentElement.scrollHeight;

  //       const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 90;
  //       const scrollPercentage1 = (scrollPosition / (documentHeight - windowHeight)) * 100;
  //       const scrollPercentage2 = (scrollPosition / (documentHeight - windowHeight)) * 90;
  //       const scrollPercentage3 = (scrollPosition / (documentHeight - windowHeight)) * 50;
  //       const scrollPercentage4 = (scrollPosition / (documentHeight - windowHeight)) * 90;
  //       const scrollPercentage5 = (scrollPosition / (documentHeight - windowHeight)) * 70;
  //       const scrollPercentage6 = (scrollPosition / (documentHeight - windowHeight)) * 90;
  //       setProgressValue({
  //         progressBar: scrollPercentage,
  //         progressBar2: scrollPercentage1,
  //         progressBar3: scrollPercentage2,
  //         progressBar4: scrollPercentage3,
  //         progressBar5: scrollPercentage4,
  //         progressBar6: scrollPercentage5,
  //         progressBar7: scrollPercentage6,

  //       })
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };

  //  }, []);

  return (
    <>
      <Flex>
        <Container maxW={{ lg: "container.lg" }} mt={10}>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            <Center>
              <InViewWrapper variant={scaleInVariant(0.3, 1.5)}>
                <Box position={"relative"}>
                  <h1 className="newHeader">Specialities</h1>
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
                    Skills
                  </Heading>
                </Box>
              </InViewWrapper>
            </Center>
          </Heading>
          <Stack direction={{ base: "column", md: "column", lg: "row" }}>
            <VStack>
              <Box w={400}>
                <InViewWrapper variant={bulletTextVariant(0.5, 0, 60, 1)}>
                  <Box pb={5}>
                    <Text className="secondText">Vulnerability Managment</Text>
                    <Progress hasStripe size="md" value={100} />
                  </Box>
                </InViewWrapper>
                <InViewWrapper variant={bulletTextVariant(0.7, 0, 60, 1)}>
                  <Box pb={5}>
                    <Text className="secondText">Malware Analysis</Text>
                    <Progress hasStripe value={90} />
                  </Box>
                </InViewWrapper>
                <InViewWrapper variant={bulletTextVariant(0.9, 0, 60, 1)}>
                  <Box pb={5}>
                    <Text className="secondText">
                      Automated/Manual Code review
                    </Text>
                    <Progress hasStripe value={90} />
                  </Box>
                </InViewWrapper>
                <InViewWrapper variant={bulletTextVariant(1.1, 0, 60, 1)}>
                  <Box pb={5}>
                    <Text className="secondText">Web/Mobile/API pentest</Text>
                    <Progress hasStripe value={90} />
                  </Box>
                </InViewWrapper>
              </Box>
            </VStack>
            <Spacer />
            <VStack>
              <Box w={400}>
                <InViewWrapper variant={bulletTextVariant(0.6, 0, 60, 1)}>
                  <Box pb={5}>
                    <Text className="secondText">Various AWS Services</Text>
                    <Progress hasStripe value={90} />
                  </Box>
                </InViewWrapper>
                <InViewWrapper variant={bulletTextVariant(0.8, 0, 60, 1)}>
                  <Box pb={5}>
                    <Text className="secondText">Python</Text>

                    <Progress hasStripe value={90} />
                  </Box>
                </InViewWrapper>
                <InViewWrapper variant={bulletTextVariant(1, 0, 60, 1)}>
                  <Box pb={5}>
                    <Text className="secondText">JavaScript</Text>
                    <Progress hasStripe value={90} />
                  </Box>
                </InViewWrapper>
                <InViewWrapper variant={bulletTextVariant(1.2, 0, 60, 1)}>
                  <Box pb={5}>
                    <Text className="secondText">Cloud Pentest</Text>
                    <Progress hasStripe value={40} />
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
