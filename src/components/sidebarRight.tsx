import { Avatar } from "@/components/ui/avatar";
import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import BgCat from "../assets/bg-cat.png";

interface props {
  hide?: string | undefined;
}
const SidebaRight = ({ hide }: props) => {
  return (
    <>
      {!hide ? (
        <Box
          bg={{ _dark: "white/20", _light: "black/20" }}
          p="2"
          borderRadius="10px"
        >
          <Text>My Profile</Text>
          <Box display="flex" justifyContent="space-between">
            <Image
              src={BgCat}
              boxSize="50px"
              borderRadius="full"
              fit="cover"
              alt="Naruto Uzumaki"
            />
            <Link
              to="/"
              style={{
                border: "1px solid",
                height: "50%",
                padding: "4px",
                borderRadius: "15px",
              }}
            >
              Edit Profile
            </Link>
          </Box>
          <Text textStyle="xl">✨Paste Prosmana✨</Text>
          <Text textStyle="xs">@pasteprosmana</Text>
          <Text textStyle="xs">picked over by the worms, and weird fishes</Text>
          <Box display="flex" gap="2">
            <Text>291 Following</Text>
            <Text>291 Follower</Text>
          </Box>
        </Box>
      ) : (
        ""
      )}

      <Box
        bg={{ _dark: "white/20", _light: "black/20" }}
        p="2"
        borderRadius="10px"
        my="20px"
      >
        <Text>Suggested for you</Text>
        <Box display="flex" justifyContent="space-between" my="10px">
          <Stack gap="8">
            <HStack gap="4">
              <Avatar size="sm" src={BgCat} />
              <Stack gap="0">
                <Text fontStyle="xs">Papoy Gaming</Text>
                <Text color="fg.muted" textStyle="xs">
                  @papoy
                </Text>
              </Stack>
            </HStack>
          </Stack>
          <Button
            bg="fg.muted"
            _hover={{ bg: "black" }}
            border="1px solid"
            h="50%"
            color="white"
          >
            Following
          </Button>
        </Box>

        <Box display="flex" justifyContent="space-between" my="10px">
          <Stack gap="8">
            <HStack gap="4">
              <Avatar
                size="sm"
                src="https://i.pinimg.com/564x/c1/e3/4f/c1e34fc1445081af3d5858209081bb02.jpg"
              />
              <Stack gap="0">
                <Text fontStyle="xs">Papoy Gaming</Text>
                <Text color="fg.muted" textStyle="xs">
                  @papoy
                </Text>
              </Stack>
            </HStack>
          </Stack>
          <Button
            _hover={{ bg: "black" }}
            bg="transparent"
            border="1px solid"
            h="50%"
            color="white"
          >
            Follow
          </Button>
        </Box>

        <Box display="flex" justifyContent="space-between" my="10px">
          <Stack gap="8">
            <HStack gap="4">
              <Avatar
                size="sm"
                src="https://i.pinimg.com/736x/01/9d/b8/019db80e90c37f4d57bc22a97c5ca09f.jpg"
              />
              <Stack gap="0">
                <Text fontStyle="xs">Papoy</Text>
                <Text color="fg.muted" textStyle="xs">
                  @papoy
                </Text>
              </Stack>
            </HStack>
          </Stack>
          <Button
            _hover={{ bg: "black" }}
            bg="transparent"
            border="1px solid"
            h="50%"
            color="white"
          >
            Follow
          </Button>
        </Box>

        <Box display="flex" justifyContent="space-between" my="10px">
          <Stack gap="8">
            <HStack gap="4">
              <Avatar
                size="sm"
                src="https://thumb.viva.id/vivagadget/665x374/2024/08/02/66ad0ef1294fc-7-karakter-cewek-anime-yang-disukai-wibu_.jpg"
              />
              <Stack gap="0">
                <Text fontStyle="xs">Papoy Gaming</Text>
                <Text color="fg.muted" textStyle="xs">
                  @papoy
                </Text>
              </Stack>
            </HStack>
          </Stack>
          <Button
            _hover={{ bg: "black" }}
            bg="transparent"
            border="1px solid"
            h="50%"
            color="white"
          >
            Follow
          </Button>
        </Box>
      </Box>

      <Box
        bg={{ _dark: "white/20", _light: "black/20" }}
        p="2"
        borderRadius="10px"
      >
        <Text>Developed by Paste Prosmana .</Text>
      </Box>
    </>
  );
};

export default SidebaRight;
