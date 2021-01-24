import {
  Flex,
  Spacer,
  Box,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import YesBank from "../components/yes_bank.json";
import { useRouter } from "next/router";

export default function Home({ banks }) {
  const router = useRouter();
  const formSelect = [
    {
      form_label: "Bank",
      placeholder: "Select Bank",
      size: "md",
      disabled: false,
      options: [...banks],
    },
    {
      form_label: "State",
      placeholder: "Select State",
      size: "md",
      disabled: true,
      options: [],
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
          if (select.form_label === "Bank") {
            return (
              <Box key={index}>
                <FormLabel>{select.form_label}</FormLabel>
                <Select
                  placeholder={select.placeholder}
                  size="md"
                  disabled={select.disabled}
                  onChange={(e) => {
                    const path = e.target.value;
                    router.push(`/${path}`);
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

      </FormControl>
    </Flex>
  );
}

export async function getServerSideProps(context) {
  const banks = [...new Set(YesBank.map((item) => item.bank))].map((value) =>
    value.split(" ").join("-")
  );
  return {
    props: { banks }, // will be passed to the page component as props
  };
}
