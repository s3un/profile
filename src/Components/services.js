import {
  Flex,
  Heading,
  Container,
  Center,
  Card,
  Box,
  Stack,
  HStack,
  Image,
  CardBody,
  useBreakpointValue,
  Badge,
  Text,
  IconButton,
  Link,
} from "@chakra-ui/react";

import { InViewWrapper, scaleInVariant } from "../motions";
import bulletTextVariant from "../motions/bulletTextMotion";

import ImageSe from "../img/me.PNG";
import DomainC from "../img/dm.png";
import Resi from "../img/ResiEase.png";
import { BsGithub } from "react-icons/bs";

export default function Service() {
  const boxStyling = {
    background: "url(webapp/src/img/me.PNG)",
  };

  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Flex mt={10}>
        <Container maxW={{ lg: "container.lg" }}>
          <InViewWrapper variant={scaleInVariant(0.3, 1.5)}>
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              <Center>
                <Box position={"relative"}>
                  {isLargeScreen && <h1 className="newHeader">Work Done</h1>}
                  <Heading
                    // as={'span'}
                    position={"absolute"}
                    top={0}
                    h={"100%"}
                    w={"100%"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    Projects
                  </Heading>
                </Box>
              </Center>
            </Heading>
          </InViewWrapper>

          <Stack spacing={10} justify="center" align="center">
            <HStack>
              <InViewWrapper variant={bulletTextVariant(0.5, 0, 60, 1)}>
                <Box>
                  <Card maxW="lg" boxShadow="md">
                    <CardBody>
                      <Badge fontSize={15} mb={5} colorScheme="green">
                        Completed
                      </Badge>
                      <Image src={DomainC} />
                      <Heading className="secondText">Domain Controller</Heading>
                      <Text className="secondText" pt={5}>
                        A dark web and clear web reconnaisance tool. Written in python.
                      </Text>
                      <Center>
                        <IconButton
                          as={Link}
                          aria-label="github"
                          href={"https://github.com/s3un/domain-controller"}
                          variant={"ghost"}
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#3182CE" }}
                          icon={<BsGithub size={"28px"} />}
                        />
                      </Center>
                    </CardBody>
                  </Card>
                </Box>
              </InViewWrapper>

              <InViewWrapper variant={bulletTextVariant(0.5, 0, 60, 1)}>
                <Box>
                  <Card
                    maxW="lg"
                    boxShadow="md"
                    borderRadius="md"
                    overflow="hidden"
                    position="relative"
                  >
                    <CardBody>
                      <Badge fontSize={15} mb={5} colorScheme="orange">
                        ongoing
                      </Badge>
                      <Image
                        src={Resi}
                        _hover={{
                          opacity: "0.2",
                        }}
                      />
                      <Heading className="secondText">ReSiEase</Heading>
                      <Text className="secondText" pt={5}>
                        Private estate management solution for attendance and
                        utils.
                      </Text>
                      <Center>
                        <IconButton
                          as={Link}
                          aria-label="github"
                          href={"#"}
                          variant={"ghost"}
                          size="lg"
                          isRound={true}
                          _hover={{ bg: "#3182CE" }}
                          icon={<BsGithub size={"28px"} />}
                        />
                      </Center>
                    </CardBody>
                  </Card>
                </Box>
              </InViewWrapper>
            </HStack>
          </Stack>
        </Container>
      </Flex>
    </>
  );
}
