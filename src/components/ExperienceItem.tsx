import Image from "next/image";
import ImageCollection from "./ImageCollection";

export default function ExperienceItem({
  isSchool,
  name,
  year,
  description,
  techs,
}: {
  isSchool: boolean;
  name: string;
  year: string;
  description: string;
  techs?: string[];
}) {
  return (
    <div className="mb-12">
      <div className="flex flex-row items-center mb-2">
        {isSchool ? (
          <Image
            src={ImageCollection.schoolLogo}
            alt="school logo"
            width={32}
            height={32}
            className="mr-3"
          />
        ) : (
          <Image
            src={ImageCollection.workLogo}
            alt="work logo"
            width={32}
            height={32}
            className="mr-3"
          />
        )}
        <h3 className="text-xl font-bold mr-auto text-white">{name}</h3>
        <p className="text-sm text-grey">{year}</p>
      </div>
      <p className="mb-4 text-grey">{description}</p>
      {!!techs && techs.length > 0 && (
        <div className="flex flex-row flex-wrap gap-2 mt-2">
          {techs.map((tech) => (
            <span
              key={tech}
              className="bg-secondary text-primary text-xs rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
