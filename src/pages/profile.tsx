import { Avatar } from "@/components/ui/avatar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { FaHeart } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";
const Profile = () => {
  const image: boolean = true;
  return (
    <Layout hide="hidden" page="profile">
      <Box display="flex" alignItems="center" gap={4}>
        <Link to="/">
          <GoArrowLeft />
        </Link>
        <Text>✨Paste Prosmana✨</Text>
      </Box>
      <Box my={4} pos="relative">
        <Image
          h="150px"
          rounded="xl"
          w="100%"
          src="https://png.pngtree.com/png-clipart/20240625/original/pngtree-abstract-colorful-and-vibrant-of-acrylic-paint-splashes-png-image_15404877.png"
        />
        <Box
          pos="absolute"
          rounded="50%"
          bottom={{ base: "-25px", lg: "-50px" }}
          left={{ base: "15px", md: "25px", lg: "50px" }}
          border="5px solid black"
        >
          <Avatar
            w={{ base: "75px", lg: "100px" }}
            h={{ base: "75px", lg: "100px" }}
            name="Paste Prosmana"
            src="https://img.freepik.com/premium-vector/cute-cat-illustration_806257-130.jpg"
          />
        </Box>
        <Box
          pos="absolute"
          rounded="50%"
          bottom="-50px"
          right={{ base: "15px", md: "25px", lg: "50px" }}
        >
          <Link to="/">
            <Text border="1px solid white" py={2} px={4} rounded="25px">
              Edit Profile
            </Text>
          </Link>
        </Box>
      </Box>

      <Box mt={20}>
        <Text textStyle="2xl">✨Paste Prosmana✨</Text>
        <Text color="gray">@paste</Text>
        <Text>picked over by the worms, and weird fishes</Text>
        <Flex my={2} gap={4}>
          <Flex gap={2} alignItems="center">
            <Text>321</Text>
            <Text color="gray">Following</Text>
          </Flex>
          <Flex gap={2} alignItems="center">
            <Text>321</Text>
            <Text color="gray">Followers</Text>
          </Flex>
        </Flex>
      </Box>
      <Flex w="100%" my={6}>
        <Box
          textAlign="center"
          borderBottom={{ _light: "5px solid black", _dark: "5px solid cyan" }}
          w="50%"
        >
          <Text>All Post</Text>
        </Box>
        <Box textAlign="center" w="50%">
          <Text>Media</Text>
        </Box>
      </Flex>
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
