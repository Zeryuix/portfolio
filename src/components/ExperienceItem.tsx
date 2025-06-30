import Image from "next/image";
import ImageCollection from "./ImageCollection";
import AnimatedElement from "./AnimatedElement";
import { motion } from "framer-motion";
import { colors } from "@/const/colors";

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
    <AnimatedElement variant="fadeIn">
      <motion.div
        className="mb-12"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex flex-row items-center mb-2">
          <AnimatedElement variant="scale" delay={0.1}>
            {isSchool ? (
              <motion.div whileHover={{ rotate: 5 }}>
                <Image
                  src={ImageCollection.schoolLogo}
                  alt="school logo"
                  className="mr-3"
                />
              </motion.div>
            ) : (
              <motion.div whileHover={{ rotate: 5 }}>
                <Image
                  src={ImageCollection.workLogo}
                  alt="work logo"
                  className="mr-3"
                />
              </motion.div>
            )}
          </AnimatedElement>
          <AnimatedElement variant="slideRight" delay={0.2}>
            <h3 className="text-xl font-bold mr-auto text-white">{name}</h3>
          </AnimatedElement>
          <AnimatedElement variant="fadeIn" delay={0.3}>
            <p className="text-sm text-grey ml-4">{year}</p>
          </AnimatedElement>
        </div>
        <AnimatedElement variant="slideUp" delay={0.4}>
          <p className="mb-4 text-grey">{description}</p>
        </AnimatedElement>
        {!!techs && techs.length > 0 && (
          <AnimatedElement variant="slideUp" delay={0.5}>
            <div className="flex flex-row flex-wrap gap-2 mt-2">
              {techs.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="bg-secondary text-primary text-xs rounded-full px-3 py-1"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: `${colors.grey}`,
                  }}
                  transition={{ delay: index * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </AnimatedElement>
        )}
      </motion.div>
    </AnimatedElement>
  );
}
