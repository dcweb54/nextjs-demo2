import {
  Flex,
  Spacer,
  Box,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";


export default function ContentSelection({formSelect}) {

  return (
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
  );
}
