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
import { Box, Button, Flex, Image, Text, Textarea } from "@chakra-ui/react";
import { CiImageOn } from "react-icons/ci";
import Layout from "../components/Layout";
import { FaHeart } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";

const Dashboard = () => {
  const image: boolean = true;
  return (
    <>
      <Layout>
        <Text textStyle="2xl">Home</Text>
        <Box display="flex" gap={2} p={2} border="1px solid">
          <Box>
            <Avatar name="Paste Prosmana" src="" />
          </Box>
          <Box w="100%">
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
          </Box>
        </Box>
        <Box display="flex" gap={2} p={2} border="1px solid">
          <Box>
            <Avatar name="Paste Prosmana" src="" />
          </Box>
          <Box>
            <Flex gap={2}>
              <Text>Paste Prosmana </Text>
              <Text color="gray"> @paste</Text>
              <Text color="gray">.</Text>
              <Text color="gray"> 4h</Text>
            </Flex>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              error praesentium, quibusdam illo mollitia iste sapiente odio?
              Quos commodi id nostrum recusandae quasi magnam ad quidem ex et
              error dolor sunt eius sequi sint minima eum quibusdam quae esse
              totam quis, molestias atque ipsa! Quam.
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
        {/* content 2 */}
        <Box display="flex" gap={2} p={2} border="1px solid">
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
              error praesentium, quibusdam illo mollitia iste sapiente odio?
              Quos commodi id nostrum recusandae quasi magnam ad quidem ex et
              error dolor sunt atque ipsa! Quam.
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
        <Box display="flex" gap={2} p={2} border="1px solid">
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
              error praesentium, quibusdam illo mollitia iste sapiente odio?
              Quos commodi id nostrum recusandae quasi magnam ad quidem ex et
              error dolor sunt atque ipsa! Quam.
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
    </>
  );
};

export default Dashboard;
