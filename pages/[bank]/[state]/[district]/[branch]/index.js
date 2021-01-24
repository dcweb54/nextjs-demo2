import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import DisplayBranchInfo from "../../../../../components/display_branch_info";
import ContentSelection from "../../../../../components/content_selection";
import YesBank from "../../../../../components/yes_bank.json";
import Article from "../../../../../components/article";
import { useRouter } from "next/router";

export default function Branch({ branchDetail }) {
  const router = useRouter();
  const { bank, state, district, branch } = router.query;
  const formSelect = [
    {
      form_label: "Bank",
      placeholder: bank.split("-").join(" "),
      size: "md",
      disabled: true,
      options: [],
    },
    {
      form_label: "State",
      placeholder: state.split("-").join(" "),
      size: "md",
      disabled: true,
      options: [],
    },
    {
      form_label: "District",
      placeholder: district.split("-").join(" "),
      size: "md",
      disabled: true,
      options: [],
    },
    {
      form_label: "Branch",
      placeholder: branch.split("-").join(" "),
      size: "md",
      disabled: true,
      options: [],
    },
  ];

  return (
    <Flex flex={1} justify="center" direction={{base: "column", md: "row" }} >
      {/* start */}
      <Flex
        // flex={1}
        direction="column"
        m="20px"
        shadow="lg"
        border="1px"
        borderColor="gray.200"
        width={{ base: "100%", md: "400px" }}
        order="2"
      >
        {Article.articles.map((value, index) => {
          return (
            <Box p="15px" key={index}>
              <Heading as="h4" size="md">
                {value.title}
              </Heading>
              <Text fontSize="md">{value.paragraph}</Text>
            </Box>
          );
        })}
      </Flex>

      {/* center */}
      <Flex direction="column" justify="center" order="1">
        <Box
          width={{ base: "100%", md: "400px" }}
          shadow="lg"
          p="5px"
          border="1px"
          borderColor="gray.200"
          my="10px"
        >
          <ContentSelection formSelect={formSelect} />
        </Box>

        <Box
          width={{ base: "100%", md: "400px" }}
          shadow="lg"
          p="5px"
          border="1px"
          borderColor="gray.200"
          mb="10px"
        >
          <Heading as="h4" size="md" pl="20px">
            Branch Details
          </Heading>
          <DisplayBranchInfo branchDetail={branchDetail} />
        </Box>
      </Flex>

      {/* end */}
      <Flex
        // flex={1}
        direction="column"
        m="20px"
        shadow="lg"
        border="1px"
        borderColor="gray.200"
        width={{ base: "100%", md: "400px" }}
        order="3"
      >
        {Article.articles.map((value, index) => {
          return (
            <Box p="15px" key={index}>
              <Heading as="h4" size="md">
                {value.title}
              </Heading>
              <Text fontSize="md">{value.paragraph}</Text>
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const { branch } = context.query;
  const branchDetail = YesBank.filter(
    (bank) => bank.branch.split(" ").join("-") == branch
  )[0];

  return {
    props: { branchDetail }, // will be passed to the page component as props
  };
}
