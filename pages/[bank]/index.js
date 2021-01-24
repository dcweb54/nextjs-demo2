import {
  Flex,
  Spacer,
  Box,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import YesBank from "../../components/yes_bank.json";
import { useRouter } from "next/router";

export default function State({ states }) {
  const router = useRouter();
  const { bank } = router.query;
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
      placeholder: "Select State",
      size: "md",
      disabled: false,
      options: [...states],
    },
    {
      form_label: "District",
      placeholder: "Select District",
      size: "md",
      disabled: true,
      options: [],
    },
    {
      form_label: "Branch",
      placeholder: "Select Branch",
      size: "md",
      disabled: true,
      options: [],
    },
  ];

  return (
    <Flex width="370px" shadow="lg">
      <FormControl id="country" colorScheme="teal.200" p="20px">
        {formSelect.map((select, index) => {
          if (select.form_label === "State") {
            return (
              <Box key={index}>
                <FormLabel>{select.form_label}</FormLabel>
                <Select
                  placeholder={select.placeholder}
                  size="md"
                  disabled={select.disabled}
                  onChange={(e) => {
                    const nextPath = e.target.value;
                    router.push(`/${bank}/${nextPath}`);
                  }}
                >
                  {select.options.map((opt, index2) => (
                    <option key={index2}>{opt}</option>
                  ))}
                </Select>
              </Box>
            );
          } else {
            return (
              <Box key={index}>
                <FormLabel>{select.form_label}</FormLabel>
                <Select
                  placeholder={select.placeholder}
                  size="md"
                  disabled
                ></Select>
              </Box>
            );
          }
        })}

        {/* bank */}
        {/* <FormLabel>Bank</FormLabel>
        <Select placeholder={bank.split("-").join(" ")} size="md" disabled>
          {unique.map((value, index) => (
            <option key={index}>{value}</option>
          ))}
        </Select>

        <FormLabel>State</FormLabel>
        <Select
          placeholder="Select State"
          size="md"
          onChange={(e) => {
            const nextPath = e.target.value;
            router.push(`/${state}/${nextPath}`);
          }}
        >
          {unique.map((value, index) => (
            <option key={index}>{value}</option>
          ))}
        </Select> */}
      </FormControl>
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const states = [...new Set(YesBank.map((item) => item.state))].map((value) =>
    value.split(" ").join("-")
  );
  return {
    props: { states }, // will be passed to the page component as props
  };
}
