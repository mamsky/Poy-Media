import { Avatar } from "@/components/ui/avatar";
import { useColorMode } from "@/components/ui/color-mode";
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
  ClientOnly,
  IconButton,
  Skeleton,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { CiHome, CiImageOn, CiLogout } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { LuMoon, LuSun, LuUserSearch } from "react-icons/lu";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

interface props {
  page?: string | undefined;
}

const SidebarLeft = ({ page }: props) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <Text
        textStyle={{ sm: "xl", md: "2xl", lg: "3xl", xl: "4xl" }}
        color={{ _dark: "cyan", _light: "black" }}
      >
        Poy Media{" "}
        <ClientOnly fallback={<Skeleton boxSize="8" />}>
          <IconButton onClick={toggleColorMode} variant="outline" size="xs">
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
          </IconButton>
        </ClientOnly>
      </Text>
      <Box my="50px">
        <Link to="/">
          <Text
            textStyle={{ md: "xl", lg: "2xl" }}
            my="20px"
            display="flex"
            color={!page ? { _dark: "cyan", _light: "gray" } : ""}
            alignItems="center"
            gap="4"
          >
            <CiHome />
            Home
          </Text>
        </Link>
        <Link to="/search">
          <Text
            color={page == "search" ? { _dark: "cyan", _light: "gray" } : ""}
            textStyle={{ md: "xl", lg: "2xl" }}
            my="20px"
            display="flex"
            alignItems="center"
            gap="4"
          >
            <LuUserSearch />
            Search
          </Text>
        </Link>
        <Text
          textStyle={{ md: "xl", lg: "2xl" }}
          my="20px"
          display="flex"
          alignItems="center"
          gap="4"
        >
          <FaHeart />
          Follows
        </Text>
        <Link to="/profile">
          <Text
            color={page == "profile" ? { _dark: "cyan", _light: "gray" } : ""}
            textStyle={{ md: "xl", lg: "2xl" }}
            my="20px"
            display="flex"
            alignItems="center"
            gap="4"
          >
            <RiAccountCircleLine />
            Profile
          </Text>
        </Link>
      </Box>

      <DialogRoot>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            color={{ _dark: "black", _light: "white" }}
            textStyle={{ md: "sm", lg: "md" }}
            w="100%"
            borderRadius="15px"
            bg={{ _dark: "cyan", _light: "black" }}
          >
            Create Content
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

            <Button bg="cyan" borderRadius="15px">
              Post
            </Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>

      <Box float="bottom">
        <Text
          textStyle={{ md: "xl", lg: "2xl" }}
          my="20px"
          display="flex"
          alignItems="center"
          gap="4"
        >
          <CiLogout />
          Logout
        </Text>
      </Box>
    </>
  );
};

export default SidebarLeft;
