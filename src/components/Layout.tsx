import ButtonLeft from "@/components/buttonLeft";
import ButtonRight from "@/components/buttonRight";
import SidebarLeft from "@/components/sidebarLeft";
import SidebaRight from "@/components/sidebarRight";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

interface childProps {
  page?: string;
  hide?: string;
  children: React.ReactNode;
}
const Dashboard = ({ page, hide, children }: childProps) => {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" minHeight="120vh" h="auto">
        <GridItem colSpan={1} p="6" hideBelow="md">
          <SidebarLeft page={page} />
        </GridItem>
        <GridItem colSpan={{ base: 5, md: 3 }} p="6">
          {children}
        </GridItem>
        <GridItem colSpan={1} p="6" hideBelow="md">
          <SidebaRight hide={hide} />
        </GridItem>
      </Grid>
      <Box
        bg={{ _light: "black", _dark: "gray" }}
        display="flex"
        py={2}
        px={4}
        borderRadius={10}
        justifyContent="space-between"
        visibility={{ base: "block", md: "hidden" }}
        position="sticky"
        left="30%"
        right="30%"
        bottom="5"
        w={{ base: "40%" }}
      >
        <Box>
          <ButtonLeft page={page} />
        </Box>
        <Box>
          <ButtonRight />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
