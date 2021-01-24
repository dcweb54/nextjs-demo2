import { Box, Flex, Image } from "@chakra-ui/react";

export default function Content() {
  return (
    <Flex flex="1" direction="column">
      <Flex>
        <Box>
          <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
        </Box>
      </Flex>
    </Flex>
  );
}
