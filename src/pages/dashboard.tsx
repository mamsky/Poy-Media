import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import { CiHome } from "react-icons/ci";
import { LuUserSearch } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import BgCat from "../assets/bg-cat.png";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Avatar } from "@/components/ui/avatar";

const Dashboard = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" minHeight="100vh" h="auto">
      <GridItem colSpan={1} p="6">
        <Text textStyle="4xl" color="green">
          Poy Media
        </Text>
        <Box my="50px">
          <Text
            textStyle="2xl"
            my="20px"
            display="flex"
            alignItems="center"
            gap="4"
          >
            <CiHome />
            Hallo
          </Text>
          <Text
            textStyle="2xl"
            my="20px"
            display="flex"
            alignItems="center"
            gap="4"
          >
            <LuUserSearch />
            Search
          </Text>
          <Text
            textStyle="2xl"
            my="20px"
            display="flex"
            alignItems="center"
            gap="4"
          >
            <FaHeart />
            Follows
          </Text>
          <Text
            textStyle="2xl"
            my="20px"
            display="flex"
            alignItems="center"
            gap="4"
          >
            <RiAccountCircleLine />
            Account
          </Text>
        </Box>
        <Box float="bottom">
          <Text
            textStyle="2xl"
            my="20px"
            display="flex"
            alignItems="center"
            gap="4"
          >
            <CiLogout />
            Logout
          </Text>
        </Box>
      </GridItem>
      <GridItem colSpan={4} p="6" borderX="1px solid" borderWidth="1px">
        <h1>Halo</h1>
      </GridItem>
      <GridItem colSpan={1} p="6">
        <Box bg="white/20" p="2" borderRadius="10px">
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
          <Text textStyle="sm">@pasteprosmana</Text>
          <Text textStyle="sm">picked over by the worms, and weird fishes</Text>
          <Box display="flex" gap="2">
            <Text>
              291 <span style={{ color: "whitesmoke" }}>Following</span>
            </Text>
            <Text>291 Follower</Text>
          </Box>
        </Box>

        <Box bg="white/20" p="2" borderRadius="10px" my="20px">
          <Text>Suggested for you</Text>
          <Box display="flex" justifyContent="space-between" my="10px">
            <Stack gap="8">
              <HStack gap="4">
                <Avatar size="sm" src={BgCat} />
                <Stack gap="0">
                  <Text fontStyle="sm">Papoy Gaming</Text>
                  <Text color="fg.muted" textStyle="sm">
                    @papoy
                  </Text>
                </Stack>
              </HStack>
            </Stack>
            <Button bg="fg.muted" border="1px solid" h="50%" color="white">
              Following
            </Button>
          </Box>

          <Box display="flex" justifyContent="space-between" my="10px">
            <Stack gap="8">
              <HStack gap="4">
                <Avatar size="sm" src={BgCat} />
                <Stack gap="0">
                  <Text fontStyle="sm">Papoy Gaming</Text>
                  <Text color="fg.muted" textStyle="sm">
                    @papoy
                  </Text>
                </Stack>
              </HStack>
            </Stack>
            <Button bg="transparent" border="1px solid" h="50%" color="white">
              Follow
            </Button>
          </Box>

          <Box display="flex" justifyContent="space-between" my="10px">
            <Stack gap="8">
              <HStack gap="4">
                <Avatar size="sm" src={BgCat} />
                <Stack gap="0">
                  <Text fontStyle="sm">Papoy</Text>
                  <Text color="fg.muted" textStyle="sm">
                    @papoy
                  </Text>
                </Stack>
              </HStack>
            </Stack>
            <Button bg="transparent" border="1px solid" h="50%" color="white">
              Follow
            </Button>
          </Box>

          <Box display="flex" justifyContent="space-between" my="10px">
            <Stack gap="8">
              <HStack gap="4">
                <Avatar size="sm" src={BgCat} />
                <Stack gap="0">
                  <Text fontStyle="sm">Papoy Gaming</Text>
                  <Text color="fg.muted" textStyle="sm">
                    @papoy
                  </Text>
                </Stack>
              </HStack>
            </Stack>
            <Button bg="transparent" border="1px solid" h="50%" color="white">
              Follow
            </Button>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
