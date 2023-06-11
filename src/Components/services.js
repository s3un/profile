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
} from "@chakra-ui/react";

import ImageSe from "../img/me.PNG";

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
              <Box
                // bg="url('webapp/src/img/me.PNG')"
                // backgroundSize="cover"
                // backgroundPosition="center"
                // width={"100%"}
                // height={"300px"}
              >
                <Box sx={boxStyling}>
                  <Text>Hellow world</Text>
                </Box>
              </Box>

              <Box>
                <Box className="newClass">
                  <Text>Hellow world</Text>
                </Box>
              </Box>
            </HStack>
          </Stack>
        </Container>
      </Flex>
    </>
  );
}
