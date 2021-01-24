import {
  Flex,
  Spacer,
  Box,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import YesBank from "../../../components/yes_bank.json";
import { useRouter } from "next/router";
export default function District({ districts }) {
  const router = useRouter();
  const { bank,state } = router.query;
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
      placeholder: "Select District",
      size: "md",
      disabled: false,
      options: [...districts],
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
          if (select.form_label === "District") {
            return (
              <Box key={index}>
                <FormLabel>{select.form_label}</FormLabel>
                <Select
                  placeholder={select.placeholder}
                  size="md"
                  disabled={select.disabled}
                  onChange={(e) => {
                    const nextPath = e.target.value;
                    router.push(`/${bank}/${state}/${nextPath}`);
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
  const districts = [
    ...new Set(YesBank.map((item) => item.district)),
  ].map((value) => value.split(" ").join("-"));

  return {
    props: { districts }, // will be passed to the page component as props
  };
}
