import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

interface inputForm {
  password: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const [input, setInput] = useState<inputForm>({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <>
      <Container h="100vh">
        <Flex justify="center" direction="column" align="center" h="100%">
          <Text
            textStyle="5xl"
            textAlign="left"
            w={{ base: "100%", md: "50%", xl: "30%" }}
            color="green"
            fontFamily="serif"
          >
            Poy Media
          </Text>
          <Text
            textStyle="2xl"
            textAlign="left"
            p="1"
            w={{ base: "100%", md: "50%", xl: "30%" }}
            color="white"
          >
            Reset Password
          </Text>
          <Box w={{ base: "100%", md: "50%", xl: "30%" }}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <PasswordInput
                placeholder=" New Password"
                borderRadius="10px"
                my="4px"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInput({ ...input, password: e.target.value })
                }
              />
              <PasswordInput
                placeholder="Confirm New Password"
                borderRadius="10px"
                my="4px"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInput({ ...input, confirmPassword: e.target.value })
                }
              />
              <Button
                colorPalette="green"
                borderRadius="10px"
                variant="outline"
                my="4px"
                w="100%"
                type="submit"
              >
                Create New Password <RiArrowRightLine />
              </Button>
            </form>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default ResetPassword;
