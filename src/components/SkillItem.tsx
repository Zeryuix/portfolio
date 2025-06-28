import Image from "next/image";
import { StaticImageData } from "next/image";

export default function SkillItem({
  skillImage,
  skill,
}: {
  skillImage: StaticImageData;
  skill: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-sm p-0.5 rounded-2xl relative bg-gradient-to-br from-primary to-secondary min-w-[150px]">
      <div className="flex flex-col items-center gap-2 h-full w-full rounded-[14px] bg-[#0c091c] p-3">
        <Image
          src={skillImage}
          alt={`${skill} logo`}
          className="w-12 h-12 object-contain"
          width={48}
          height={48}
        />
        <p>{skill}</p>
      </div>
    </div>
  );
}
