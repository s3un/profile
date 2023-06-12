import {
  Flex,
  Heading,
  Container,
  Center,
  useBreakpointValue,
  SimpleGrid,
  Card,
  CardHeader,
  Box,
  Stack,
  HStack,
  Text,
  background,
  Image,
  CardBody,
} from "@chakra-ui/react";

import ImageSe from "../img/me.PNG";
import DomainC from '../img/dm.png'
import Resi from '../img/ResiEase.png'

export default function Service() {

    const boxStyling = {
        background: 'url(webapp/src/img/me.PNG)'
    }

  return (
    <>
      <Flex mt={10}>
        <Container maxW={{ lg: "container.lg" }}>
          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            <Center>
              <Box position={"relative"}>
                <h1 className="newHeader">Work Done</h1>
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

          <Stack spacing={4} justify="center" align="center">
            <HStack>
              <Box>
                <Card maxW='sm'>
                  <CardBody>
                      <Image src={DomainC} />
                  </CardBody>
                </Card>
              </Box>

              <Box>
                <Card maxW='sm'>
                  <CardBody>
                      <Image src={Resi} />
                  </CardBody>
                </Card>
              </Box>
            </HStack>
          </Stack>
        </Container>
      </Flex>
    </>
  );
}
