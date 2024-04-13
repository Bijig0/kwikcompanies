import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import dynamic from "next/dynamic";

const ProjectsIsotope = dynamic(
  () => import("@/components/isotope/ProjectsIsotope"),
  {
    ssr: false,
  }
);
const page = () => {
  return (
    <AkpagerLayout>
      <PageBanner pageName={"Project Grid"} />
      <ProjectsIsotope />
    </AkpagerLayout>
  );
};
export default page;
