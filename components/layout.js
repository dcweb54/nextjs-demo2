import { Flex } from "@chakra-ui/react";
export default function Layout({ children }) {
  return (
    <Flex direction="column" minHeight="100vh">
      {/*Header */}
      <Flex height="45px" width="100%" bg="#3d5afe" color="white"></Flex>

      {/* main content */}
      <Flex direction="column" flex={1} alignItems="center" justify="center">
        {children}
      </Flex>

      {/* Footer */}
      <Flex
        minHeight="100px"
        width="100%"
        shadow="lg"
        border="1px"
        borderColor="gray.200"
        bg="#3d5afe"
        color="white"
        p="15px"
      ></Flex>
    </Flex>
  );
}
