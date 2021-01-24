import {
  Flex,
  Spacer,
  Box,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import YesBank from "../../../../components/yes_bank.json";
import { useRouter } from "next/router";

export default function Branch({ branches }) {
  const router = useRouter();
  const { bank,state,district } = router.query;
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
      placeholder: "Select Branch",
      size: "md",
      disabled: false,
      options: [...branches],
    },
  ];
  return (
    <Flex width="370px" shadow="lg">
      <FormControl id="country" colorScheme="teal.200" p="20px">
        {formSelect.map((select, index) => {
          if (select.form_label === "Branch") {
            return (
              <Box key={index}>
                <FormLabel>{select.form_label}</FormLabel>
                <Select
                  placeholder={select.placeholder}
                  size="md"
                  disabled={select.disabled}
                  onChange={(e) => {
                    const nextPath = e.target.value;
                    router.push(`/${bank}/${state}/${district}/${nextPath}`);
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
  const branches = [...new Set(YesBank.map((item) => item.branch))].map((value) =>
    value.split(" ").join("-")
  );


  return {
    props: { branches }, // will be passed to the page component as props
  };
}
