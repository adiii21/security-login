import { Avatar, Flex, Text, Wrap, WrapItem } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import React from "react";

export const Navbar = () => {
  return (
    <>
      <Flex bg="black" color="white">
        <Wrap mx="auto">
          <WrapItem>
            <Avatar pt="10px" size="xl" src={logo} />
            <Text
              my="auto"
              fontFamily="monospace"
              fontSize="2xl"
              color="red.600"
            >
              Security-Pie
            </Text>
          </WrapItem>
        </Wrap>
      </Flex>
    </>
  );
};
