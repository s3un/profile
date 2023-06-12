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
} from "@chakra-ui/react";

import { InViewWrapper, scaleInVariant } from "../motions";
import bulletTextVariant from "../motions/bulletTextMotion";

import ImageSe from "../img/me.PNG";
import DomainC from "../img/dm.png";
import Resi from "../img/ResiEase.png";

export default function Service() {
  const boxStyling = {
    background: "url(webapp/src/img/me.PNG)",
  };

  const isLargeScreen = useBreakpointValue({ base: false, lg : true})

  return (
    <>
      <Flex mt={10}>
        <Container maxW={{ lg: "container.lg" }}>
          <InViewWrapper variant={scaleInVariant(0.3, 1.5)}>
            <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
              <Center>
                <Box position={"relative"}>
                {isLargeScreen && <h1 className="newHeader">Work Done</h1> }
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
                  <Card maxW="sm" boxShadow="md">
                    <CardBody>
                      <Image src={DomainC} />
                    </CardBody>
                  </Card>
                </Box>
              </InViewWrapper>

              <InViewWrapper variant={bulletTextVariant(0.5, 0, 60, 1)}>
                <Box>
                  <Card
                    maxW="sm"
                    boxShadow="md"
                    borderRadius="md"
                    overflow="hidden"
                    position="relative"
                  >
                    <CardBody>
                      <Image
                        src={Resi}
                        _hover={{
                          opacity: "0.3",
                        }}
                      />
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
