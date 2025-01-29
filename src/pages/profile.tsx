import ProfileLayout from "@/components/profile-layout";
import { Avatar } from "@/components/ui/avatar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";
import Layout from "../components/Layout";
const Profile = () => {
  const image: boolean = true;
  return (
    <Layout hide="hidden" page="profile">
      <ProfileLayout params="profile" />
      {/* content 2 */}
      <Box display="flex" gap={2} p={2} borderY="1px solid gray">
        <Box>
          <Avatar name="Paste Prosmana" src="" />
        </Box>
        <Box>
          <Flex gap={2}>
            <Text>Adit Pratama </Text>
            <Text color="gray"> @aditp</Text>
            <Text color="gray">.</Text>
            <Text color="gray"> 6h</Text>
          </Flex>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            error praesentium, quibusdam illo mollitia iste sapiente odio? Quos
            commodi id nostrum recusandae quasi magnam ad quidem ex et error
            dolor sunt atque ipsa! Quam.
          </Text>
          <Flex my={2} gap={4}>
            <Text display="flex" alignItems="center" gap={2}>
              <FaHeart /> 321
            </Text>
            <Text display="flex" alignItems="center" gap={2}>
              <MdOutlineInsertComment /> 321
            </Text>
          </Flex>
        </Box>
      </Box>
      {/* content 3 */}
      <Box display="flex" gap={2} p={2} borderY="1px solid gray">
        <Box>
          <Avatar name="Paste Prosmana" src="" />
        </Box>
        <Box>
          <Flex gap={2}>
            <Text>tuantuaan </Text>
            <Text color="gray"> @ttuan</Text>
            <Text color="gray">.</Text>
            <Text color="gray"> 8h</Text>
          </Flex>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
            error praesentium, quibusdam illo mollitia iste sapiente odio? Quos
            commodi id nostrum recusandae quasi magnam ad quidem ex et error
            dolor sunt atque ipsa! Quam.
          </Text>
          {image ? <Image src="https://i.pravatar.cc/400?u=1" /> : ""}
          <Flex my={2} gap={4}>
            <Text display="flex" alignItems="center" gap={2}>
              <FaHeart /> 321
            </Text>
            <Text display="flex" alignItems="center" gap={2}>
              <MdOutlineInsertComment /> 321
            </Text>
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

export default Profile;
