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
  console.log(
    (content.items[0].fields.contacts as any[]).map((c) => {
      return {
        name: c.fields.name as string,
        imageUrl: ("https:" + c.fields.image.fields.file.url) as string,
        url: c.fields.url as string,
      };
    })
  );
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
        contacts={(content.items[0].fields.contacts as any[]).map((c) => {
          return {
            name: c.fields.name as string,
            imageUrl: ("https:" + c.fields.image.fields.file.url) as string,
            url: c.fields.url as string,
          };
        })}
      />
    </>
  );
};

export default TopPage;
