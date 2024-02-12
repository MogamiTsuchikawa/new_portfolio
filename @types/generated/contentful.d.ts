import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeContactFields {
  name: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  url: EntryFieldTypes.Symbol;
}

export type TypeContactSkeleton = EntrySkeletonType<
  TypeContactFields,
  "contact"
>;
export type TypeContact<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeContactSkeleton, Modifiers, Locales>;

export interface TypeSkillFields {
  name: EntryFieldTypes.Symbol;
  image?: EntryFieldTypes.AssetLink;
  imageUrl?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Symbol;
}

export type TypeSkillSkeleton = EntrySkeletonType<TypeSkillFields, "skill">;
export type TypeSkill<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeSkillSkeleton, Modifiers, Locales>;

export interface TypeTopPageFields {
  message: EntryFieldTypes.Text;
  jobs?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  awards?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  contacts?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<EntrySkeletonType>
  >;
}

export type TypeTopPageSkeleton = EntrySkeletonType<
  TypeTopPageFields,
  "topPage"
>;
export type TypeTopPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeTopPageSkeleton, Modifiers, Locales>;
