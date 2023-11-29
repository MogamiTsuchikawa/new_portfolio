"use client";
import useOnScreen from "../../hooks/useOnScreen";
import { SkillData, SkillIcons } from "@/components/toppage/SkillIcon";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";

type PortfolioBodyProps = {
  message: Document;
  jobs: string[];
  awards: string[];
  skills: SkillData[];
  contacts: any[];
};

const PortfolioBody = ({
  message,
  jobs,
  awards,
  skills,
  contacts,
}: PortfolioBodyProps) => {
  const [ref1, isVisible1] = useOnScreen({ rootMargin: "-100px" });
  const [ref2, isVisible2] = useOnScreen({ rootMargin: "-100px" });
  const [ref3, isVisible3] = useOnScreen({ rootMargin: "-100px" });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400 p-6">
      <div
        className="bg-white p-8 rounded-lg shadow-xl space-y-6"
        style={{ maxWidth: "36rem" }}
      >
        <div className="flex justify-center">
          <Image
            src="icon_400x400.webp"
            alt="最上土川のアイコン"
            className="rounded-full border-4 border-gray-300"
            width={160}
            height={160}
          />
        </div>

        <h1 className="text-3xl text-center font-extrabold text-blue-700">
          最上土川
        </h1>
        <p
          className="text-xl text-center text-blue-700"
          style={{ marginTop: 0 }}
        >
          MogamiTsuchikawa
        </p>
        <p className="text-center text-gray-600 leading-relaxed">
          {message.toString()}
        </p>
        <div className="text-center space-y-2">
          <h2 className="font-bold text-blue-600">所属</h2>
          <ul className="list-disc pl-5 text-gray-700 list-none">
            {jobs.map((job) => (
              <li key={job}>{job}</li>
            ))}
          </ul>
        </div>
        <div
          ref={ref1}
          className={`transition-opacity duration-1000 ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center space-y-2">
            <h2 className="font-bold text-blue-600">受賞履歴</h2>
            <ul className="list-disc pl-5 text-gray-700 list-none">
              {awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          ref={ref3}
          className={`transition-opacity duration-1000 ${
            isVisible3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center space-y-4 mt-6">
            <h2 className="font-bold text-blue-600">スキル</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <SkillIcons skills={skills} />
            </div>
          </div>
        </div>
        <div
          ref={ref2}
          className={`transition-opacity duration-1000 ${
            isVisible2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center space-y-2">
            <h2 className="font-bold text-blue-600">連絡先</h2>
            <div className="flex justify-center space-x-6 mt-3">
              {contacts.map((c) => (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={c.name}
                >
                  <img src={c.imageUrl} alt={c.name} width={64} height={64} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBody;
