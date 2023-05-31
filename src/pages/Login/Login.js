import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Checkbox,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Stack,
} from "@chakra-ui/react";
import banner from "../../assets/banner.png";
import { useState } from "react";

export const Login = () => {
  const [show, setShow] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const handleClick = () => setShow(!show);
  const handleRegisterClick = () => setIsRegister(!isRegister);

  return (
    <Box
      minH={"calc(100vh - 96px)"}
      display={"flex"}
      alignItems={"center"}
      bg="black"
    >
      <Container minW="6xl">
        <Flex>
          <Box color="white" mx="auto">
            <Image
              bg="yellow.400"
              borderRadius="full"
              boxSize="250px"
              src={banner}
              alt="Dan Abramov"
            />
          </Box>
          <Box color="white" mr="auto" my="auto">
            <Card bg="yellow.400" fontFamily="monospace">
              <CardHeader fontSize="xl">
                {isRegister ? "REGISTER CREDENTIALS" : "LOG-IN CREDENTIALS"}
              </CardHeader>
              <CardBody>
                <Stack spacing={3}>
                  <Input
                    focusBorderColor="black "
                    htmlSize={25}
                    placeholder="user-name"
                    size="md"
                  />
                  {isRegister ? (
                    <Input
                      focusBorderColor="black "
                      htmlSize={25}
                      placeholder="user-email"
                      size="md"
                    />
                  ) : null}
                  <InputGroup size="md">
                    <Input
                      focusBorderColor="black "
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {isRegister ? (
                    <InputGroup>
                      <Input
                        focusBorderColor="black "
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="confirm password"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  ) : null}
                  <Checkbox>Remember me</Checkbox>
                  <Center fontSize="l">
                    {isRegister
                      ? "Already have an account?"
                      : "Dont have a account?"}{" "}
                    <Text
                      href="/"
                      color="blue"
                      onClick={handleRegisterClick}
                      cursor="pointer"
                    >
                      {isRegister ? "Login?" : "Register?"}
                    </Text>
                  </Center>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
