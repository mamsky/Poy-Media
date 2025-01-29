import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button, DrawerContext } from "@chakra-ui/react";
import SidebaRight from "./sidebarRight";

const ButtonRight = () => {
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
          R
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerContext>
          {() => (
            <DrawerBody>
              <SidebaRight />
            </DrawerBody>
          )}
        </DrawerContext>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default ButtonRight;
