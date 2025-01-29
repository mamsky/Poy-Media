import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button, DrawerContext } from "@chakra-ui/react";
import SidebarLeft from "./sidebarLeft";

interface props {
  page?: string | undefined;
}

const ButtonLeft = ({ page }: props) => {
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          _light={{ bg: "black/20" }}
          color={{ _light: "white", _dark: "black" }}
          size="sm"
        >
          L
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerContext>
          {() => (
            <DrawerBody>
              <SidebarLeft page={page} />
            </DrawerBody>
          )}
        </DrawerContext>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default ButtonLeft;
