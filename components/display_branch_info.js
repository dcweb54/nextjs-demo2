import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export default function DisplayBranchInfo({ branchDetail }) {
  return (
    <Table variant="simple"  size="md"  colorScheme="teal.200">
      <Tbody>
        {Object.keys(branchDetail).map((key, index) => (
          <Tr key={index}>
            <Td>{key.toUpperCase()}</Td>
            <Td>{branchDetail[key]}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
