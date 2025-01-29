import ProfileLayout from "@/components/profile-layout";
import { Grid, GridItem, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const Media = () => {
  const location = useParams();

  return (
    <Layout hide="hidden" page="profile">
      <ProfileLayout params={location.snail} />

      <Grid templateColumns="repeat(3, 1fr)" gap="3">
        <GridItem colSpan={1}>
          <Image minH="100%" src="https://i.pravatar.cc/400?u=1" />
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            minH="100%"
            src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            minH="100%"
            src="https://thumbs.dreamstime.com/b/chameleon-full-body-frame-shot-colorful-aligned-right-blue-background-ai-created-content-chameleon-full-body-frame-323142324.jpg"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            minH="100%"
            src="https://img.freepik.com/free-photo/amazing-ants-carry-fruit-heavier-than-their-bodies-amazing-strong-ant_488145-2669.jpg"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            minH="100%"
            src="https://thumbs.dreamstime.com/b/un-cam%C3%A9l%C3%A9on-du-y%C3%A9men-34896912.jpg"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            minH="100%"
            src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Image
            minH="100%"
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Media;
