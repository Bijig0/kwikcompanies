import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import dynamic from "next/dynamic";
const ProjectMasonryIsotope = dynamic(
  () => import("@/components/isotope/ProjectMasonryIsotope"),
  {
    ssr: false,
  }
);
const page = () => {
  return (
    <AkpagerLayout>
      <PageBanner pageName={"Project Masonry"} />
      <ProjectMasonryIsotope />
    </AkpagerLayout>
  );
};
export default page;
