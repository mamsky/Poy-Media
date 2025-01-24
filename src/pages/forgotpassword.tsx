import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react";
import { RiMailLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

interface inputForm {
  email: string;
}

const ForgotPassowrd = () => {
  const [input, setInput] = useState<inputForm>({
    email: "",
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
            Forgot password Poy Media
          </Text>
          <Box w={{ base: "100%", md: "50%", xl: "30%" }}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Input
                placeholder="Email*"
                borderRadius="10px"
                my="8px"
                type="email"
                name="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInput({ ...input, email: e.target.value })
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
                Send Intruction <RiMailLine />
              </Button>
              <div style={{ display: "flex" }}>
                <Text textStyle="sm" textAlign="left" color="white">
                  Already have account?{" "}
                  <Link to="/login" style={{ color: "green" }}>
                    Login
                  </Link>
                </Text>
              </div>
            </form>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default ForgotPassowrd;
