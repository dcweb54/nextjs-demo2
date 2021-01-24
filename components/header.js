import { Flex, Icon, Box, Link, Heading } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

export default function Header() {
  return (
    <Flex
      px={2}
      py={2}
      justify="space-between"
      bg="#892cdc"
      alignItems="center"
      color="white"
    >
      {/* left icon and title */}
      <Flex alignItems="center">
        <Box as="a" href="#">
          <Icon as={MdMenu} h={8} w={8} />
        </Box>
        <Box as="a" href="#" mx={3}>
          <Heading as="a" size="md">
            WeCareSolution Pvt Ltd.
          </Heading>
        </Box>
      </Flex>

      {/* right side links */}
      <Box>
        <Heading as="a" size="md" href="#">
          Home
        </Heading>
      </Box>
    </Flex>
  );
}
