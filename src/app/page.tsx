import PortfolioBody from "@/components/toppage/Body";
import { createClient } from "../../contentful";
import { Document } from "@contentful/rich-text-types";
import { ITopPage, ITopPageFields } from "../../@types/generated/contentful";

const TopPage = async () => {
  const contentfulClient = createClient();
  const content = await contentfulClient.getEntries({
    content_type: "topPage",
  });
  console.log(content.items[0].fields);
  return (
    <>
      <PortfolioBody
        message={content.items[0].fields.message as Document}
        awards={content.items[0].fields.awards as string[]}
        jobs={content.items[0].fields.jobs as string[]}
      />
    </>
  );
};

export default TopPage;
