import { InputGroup } from "@/components/ui/input-group";
import { Box, Input, Text } from "@chakra-ui/react";
import { RiUserSearchFill } from "react-icons/ri";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import accountPeople from "../JSON/account.json";
import { Avatar } from "@/components/ui/avatar";
interface account {
  id: number;
  username: string;
  name: string;
}
const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [people, setPeople] = useState<account[]>(accountPeople);

  const filterAccount = (search: string) => {
    const filtered = people.filter((data) => {
      return (
        data.username.toLowerCase().includes(search.toLowerCase()) ||
        data.name.toLowerCase().includes(search.toLowerCase())
      );
    });
    setPeople(filtered);
  };

  useEffect(() => {
    if (search.length == 0) {
      setPeople(accountPeople);
    } else {
      filterAccount(search);
    }
  }, [search]);

  return (
    <Layout page="search">
      <InputGroup flex="1" w="100%" startElement={<RiUserSearchFill />}>
        <Input
          onChange={({ target }) => setSearch(target.value)}
          placeholder="Username"
        />
      </InputGroup>

      {search.length == 0 ? (
        <Box display="flex" justifyContent="center" alignItems="center" h="80%">
          <Text>haven't searched for anything yet</Text>
        </Box>
      ) : people.length > 0 ? (
        people.map((data) => (
          <Box key={data.id} display="flex" gap={3} alignItems="center" my={2}>
            <Box>
              <Avatar name={data.name} src="" />
            </Box>
            <Box>
              <Text>{data.name}</Text>
              <Text>{data.username}</Text>
            </Box>
          </Box>
        ))
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="80%"
          flexDirection={"column"}
        >
          <Text fontWeight={"bold"}>No results for "{search}"</Text>
          <Text color={"gray"}>Try searching for something else or check</Text>
          <Text color={"gray"}>the spelling of what you typed.</Text>
        </Box>
      )}
    </Layout>
  );
};

export default Search;
