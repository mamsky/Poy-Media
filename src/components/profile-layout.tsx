import { Avatar } from "@/components/ui/avatar";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

interface props {
  params?: string | undefined;
}

const ProfileLayout = ({ params }: props) => {
  return (
    <>
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
          src="https://static.vecteezy.com/system/resources/previews/006/792/766/non_2x/collection-of-cute-cat-cartoon-face-design-icon-cute-cat-cartoon-face-illustration-free-vector.jpg"
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
          borderBottom={
            params == "profile"
              ? { _light: "5px solid black", _dark: "5px solid cyan" }
              : "none"
          }
          w="50%"
        >
          <Link to="/profile">
            <Text>All Post</Text>
          </Link>
        </Box>
        <Box
          textAlign="center"
          w="50%"
          borderBottom={
            params == "media"
              ? { _light: "5px solid black", _dark: "5px solid cyan" }
              : "none"
          }
        >
          <Link to="/profile/media">
            <Text>Media</Text>
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default ProfileLayout;
