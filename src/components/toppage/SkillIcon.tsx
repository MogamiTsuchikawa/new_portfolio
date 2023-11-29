"use client";
import { useState } from "react";

export type SkillData = { name: string; iconPath: string; description: string };

type SkillIconsProps = {
  skills: SkillData[];
};

export const SkillIcons = ({ skills }: SkillIconsProps) => {
  return (
    <>
      {skills.map((skill) => (
        <SkillIcon key={skill.name} skill={skill} />
      ))}
    </>
  );
};
type SkillIconProps = {
  skill: SkillData;
};
const SkillIcon = ({ skill }: SkillIconProps) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div
      className="relative group"
      onMouseEnter={() => {
        setIsSelected(true);
      }}
      onMouseOut={() => {
        setIsSelected(false);
      }}
    >
      <img
        src={skill.iconPath}
        alt="Skill Icon"
        className={`w-16 h-16 ${
          isSelected ? "scale-125 transform" : ""
        } transition-all duration-300 cursor-pointer`}
      />
      {isSelected && (
        <div
          className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 bg-white p-2 rounded shadow-lg text-sm w-48 text-gray-400"
          style={{ zIndex: 1 }}
        >
          {skill.description}
        </div>
      )}
    </div>
  );
};
