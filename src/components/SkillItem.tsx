import Image from "next/image";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export default function SkillItem({
  skillImage,
  skill,
}: {
  skillImage: StaticImageData;
  skill: string;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 text-sm p-0.5 rounded-2xl relative bg-gradient-to-br from-primary to-secondary min-w-[150px]"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex flex-col items-center gap-2 h-full w-full rounded-[14px] bg-black p-3">
        <motion.div whileHover={{ rotate: 5 }} transition={{ duration: 0.2 }}>
          <Image
            src={skillImage}
            alt={`${skill} logo`}
            className="w-12 h-12 object-contain"
            width={48}
            height={48}
          />
        </motion.div>
        <p className="text-white">{skill}</p>
      </div>
    </motion.div>
  );
}
