"use client";
import { useState } from "react";

type SkillData = { name: string; iconPath: string; description: string };

type SkillIconsProps = {
  skills: SkillData[];
};

export const SkillIcons = ({ skills }: SkillIconsProps) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillData | null>(null);
  const handleSkillClick = (skill: SkillData | null) => {
    setSelectedSkill(skill);
  };
  return (
    <>
      {skills.map((skill) => (
        <SkillIcon
          key={skill.name}
          skill={skill}
          isSelected={selectedSkill === skill}
          onClick={handleSkillClick}
        />
      ))}
    </>
  );
};
type SkillIconProps = {
  skill: SkillData;
  isSelected: boolean;
  onClick: (skill: SkillData | null) => void;
};
const SkillIcon = ({ skill, isSelected, onClick }: SkillIconProps) => {
  return (
    <div
      className="relative group"
      onClick={() => {
        onClick(isSelected ? null : skill);
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
