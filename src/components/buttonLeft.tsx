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

const ButtonLeft = () => {
  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button variant="outline" _light={{ bg: "black/20" }} size="sm">
          L
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerContext>
          {() => (
            <DrawerBody>
              <SidebarLeft />
            </DrawerBody>
          )}
        </DrawerContext>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default ButtonLeft;
