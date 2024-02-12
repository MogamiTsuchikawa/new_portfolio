import PortfolioBody from "@/components/toppage/Body";
import { createClient } from "../../contentful";
import {
  TypeSkillSkeleton as ISkillFields,
  TypeTopPageSkeleton as ITopPageFields,
} from "../../@types/generated/contentful";

const TopPage = async () => {
  const contentfulClient = createClient();
  const content = await contentfulClient.getEntries<ITopPageFields>({
    content_type: "topPage",
  });
  const skills = await contentfulClient.getEntries<ISkillFields>({
    content_type: "skill",
  });
  return (
    <>
      <PortfolioBody
        message={content.items[0].fields.message}
        awards={content.items[0].fields.awards!}
        jobs={content.items[0].fields.jobs!}
        skills={skills.items.map((sk) => {
          return {
            name: sk.fields.name,
            iconPath: sk.fields.imageUrl!,
            description: sk.fields.description!,
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
