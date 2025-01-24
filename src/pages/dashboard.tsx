import { Avatar } from "@/components/ui/avatar";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileUploadRoot, FileUploadTrigger } from "@/components/ui/file-upload";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { CiHome, CiImageOn, CiLogout } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { LuUserSearch } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import BgCat from "../assets/bg-cat.png";

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

        <DialogRoot>
          <DialogTrigger asChild>
            <Button variant="outline" w="100%" borderRadius="15px" bg="green">
              Open Dialog
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader></DialogHeader>
            <DialogBody>
              <Box display="flex" gap="2">
                <Avatar name="Paste Prosmana" src="" />
                <Textarea border="none" placeholder="What is happening?" />
              </Box>
            </DialogBody>
            <DialogFooter>
              {/* file Upload */}
              <FileUploadRoot>
                <FileUploadTrigger asChild>
                  <Button variant="outline" size="sm">
                    <CiImageOn />
                  </Button>
                </FileUploadTrigger>
              </FileUploadRoot>

              <Button bg="green" borderRadius="15px">
                Post
              </Button>
            </DialogFooter>
            <DialogCloseTrigger />
          </DialogContent>
        </DialogRoot>

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
                <Avatar
                  size="sm"
                  src="https://i.pinimg.com/564x/c1/e3/4f/c1e34fc1445081af3d5858209081bb02.jpg"
                />
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
                <Avatar
                  size="sm"
                  src="https://i.pinimg.com/736x/01/9d/b8/019db80e90c37f4d57bc22a97c5ca09f.jpg"
                />
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
                <Avatar
                  size="sm"
                  src="https://thumb.viva.id/vivagadget/665x374/2024/08/02/66ad0ef1294fc-7-karakter-cewek-anime-yang-disukai-wibu_.jpg"
                />
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

        <Box bg="white/20" p="2" borderRadius="10px">
          <Text>Developed by Paste Prosmana .</Text>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;
