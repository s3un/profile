import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Spacer,
  Link,
  IconButton,
  HStack,
  Box,
  Image,
  Avatar,
  AvatarGroup,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import Typed from "typed.js";
import ImageSe from "../img/me.PNG";

import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import InViewWrapper from "../motions/inViewWrapper";
import { BulletTextVariant, itemVariants } from "../motions";

export default function Wall() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["a Cybersecurity Engineer,", "and Front-end Engineer."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Box direction={{ base: "column", md: "row" }}>
        <Flex
          p={8}
          ml={{ md: "10", lg: "150" }}
          mt={{ base: "20", lg: "50" }}
          mr={{ md: "10", lg: "150" }}
        >
          <Stack spacing={2} w={"full"} maxW={"x2"}>
            <InViewWrapper variant={itemVariants(0.3, -200, 1)}>
              <Box>
                <Text fontSize={25} className="secondText">
                  Welcome to my world
                </Text>
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  Hi, {""}
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, blue.500, blue.500)"
                    bgClip={"text"}
                  >
                    <span>Oluwaseun Oyebowale</span>
                  </Text>
                  <br />
                  <Text as={"span"} className="boldTest" ref={el}></Text>
                  <br />
                  {""}
                </Heading>
              </Box>

              <Box>
                <Text fontSize={30} className="secondText">
                  Currently, work at SeamlessHR, <br /> Nigeria
                </Text>
              </Box>
            </InViewWrapper>

            <Stack direction={{ base: "colum", md: "row" }} spacing={4}>
              <InViewWrapper variant={BulletTextVariant(1.3, 0, 30)}>
                <Button
                  size="lg"
                  className="buttonSet"
                  bg={"blue.400"}
                  rounded={"full"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                  leftIcon={<GrNotes />}
                >
                  Download my CV
                </Button>
              </InViewWrapper>
              <InViewWrapper variant={BulletTextVariant(1.7, 0, 30)}>
                <Button
                  size="lg"
                  className="buttonSet"
                  bg={"whiteAlpha.300"}
                  rounded={"full"}
                  color={"blue.400"}
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
                  View my Blog
                </Button>
              </InViewWrapper>
            </Stack>

            <Box>
              <Box mt={90}>
                <InViewWrapper variant={BulletTextVariant(0.1, 0, 30, 0.7)}>
                  <Text pl={2} fontWeight={"extrabold"} className="secondText">
                    Find me
                  </Text>
                </InViewWrapper>
                <HStack direction={{ base: "column", md: "row" }} spacing={0}>
                  <InViewWrapper variant={BulletTextVariant(0.3, 30, 0, 1)}>
                    <IconButton
                      as={Link}
                      aria-label="github"
                      href={"https://github.com/s3un"}
                      variant={"ghost"}
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#3182CE" }}
                      icon={<BsGithub size={"28px"} />}
                    />
                  </InViewWrapper>
                  <InViewWrapper variant={BulletTextVariant(0.5, 30, 0, 1)}>
                    <IconButton
                      as={Link}
                      aria-label="linkedin"
                      href={"#"}
                      variant={"ghost"}
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#3182CE" }}
                      icon={<BsTwitter size={"28px"} />}
                    />
                  </InViewWrapper>
                  <InViewWrapper variant={BulletTextVariant(0.7, 30, 0, 1)}>
                    <IconButton
                      as={Link}
                      aria-label="github"
                      href={
                        "https://www.linkedin.com/in/oluwaseun-oyebowale-357a69179/"
                      }
                      variant={"ghost"}
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#3182CE" }}
                      icon={<BsLinkedin size={"28px"} />}
                    />
                  </InViewWrapper>
                </HStack>
              </Box>
            </Box>
          </Stack>
          <Spacer />
          <Stack>
            <AvatarGroup size="lg">
              <InViewWrapper
                className="tooltiptext"
                variant={itemVariants(0.1, -30, 1)}
              >
                <span>
                  5+ <br /> years experience{" "}
                </span>
              </InViewWrapper>
              <InViewWrapper
                animate={["visible", "springMovementYAxis"]}
                variant={BulletTextVariant(0.3, 0, 30, 0.7)}
              >
                <Avatar boxShadow="dark-lg" h={600} w={250} src={ImageSe} />
              </InViewWrapper>
              <InViewWrapper
                animate={["visible", "springMovementYAxis"]}
                variant={BulletTextVariant(0.7, 0, 30, 0.7)}
              >
                <Avatar boxShadow="dark-lg" h={500} w={150} src={ImageSe} />
              </InViewWrapper>
              <InViewWrapper
                animate={["visible", "springMovementYAxis"]}
                variant={BulletTextVariant(1.1, 0, 30, 0.7)}
              >
                <Avatar boxShadow="dark-lg" h={400} w={100} src={ImageSe} />
              </InViewWrapper>
            </AvatarGroup>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
