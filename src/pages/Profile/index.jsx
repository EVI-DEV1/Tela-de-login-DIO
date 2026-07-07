import Header from "../../components/Header";
import { ProfileHeader } from "../../components/ProfileHeader";
import { ProfileStats } from "../../components/ProfileStats";
import { ProfileSkills } from "../../components/ProfileSkills";
import { ProfileProjects } from "../../components/ProfileProjects";
import { ProfileCourses } from "../../components/ProfileCourses";

import { Container } from "./styles";

const Profile = () => {
  return (
    <>
      <Header autenticado={true} />

      <Container>
        <ProfileHeader />

        <ProfileStats />

        <ProfileSkills />

        <ProfileProjects />

        <ProfileCourses />
      </Container>
    </>
  );
};

export default Profile;