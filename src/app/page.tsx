import PortfolioBody from "@/components/toppage/Body";
import { createClient } from "../../contentful";
import { Document } from "@contentful/rich-text-types";
import { ITopPage, ITopPageFields } from "../../@types/generated/contentful";
import { SkillData } from "@/components/toppage/SkillIcon";

const TopPage = async () => {
  const contentfulClient = createClient();
  const content = await contentfulClient.getEntries({
    content_type: "topPage",
  });
  const skills = await contentfulClient.getEntries({ content_type: "skill" });
  console.log(skills.items);
  return (
    <>
      <PortfolioBody
        message={content.items[0].fields.message as Document}
        awards={content.items[0].fields.awards as string[]}
        jobs={content.items[0].fields.jobs as string[]}
        skills={skills.items.map((sk) => {
          return {
            name: sk.fields.name as string,
            iconPath: sk.fields.imageUrl as string,
            description: sk.fields.description as string,
          };
        })}
      />
    </>
  );
};

export default TopPage;
