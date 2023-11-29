import * as cf from "contentful";
import { Document } from "@contentful/rich-text-types";

const config = {
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN!,
};

export const createClient = () => {
  return cf.createClient(config);
};
