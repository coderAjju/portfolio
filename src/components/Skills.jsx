import { SKILLS } from "../constants";
import { motion } from "framer-motion";
const Skills = () => {
  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.5 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Skills</h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariant}
        viewport={{ once: true }}
        className="mx-2 flex gap-4 flex-col rounded-3xl px-4 py-2 lg:px-20 border borston50/30"
      >
        {SKILLS.map((skill, index) => {
          return (
            <motion.div
              variants={itemVariant}
              key={index}
              className={`flex py-4 item-center justify-between ${
                index !== SKILLS.length - 1
                  ? "border-b  border-stone-50/30"
                  : ""
              }`}
            >
              <div className="flex items-center">
                {skill.icon}
                <h3 className="px-6 text-lg lg:text-2xl">{skill.name}</h3>
              </div>
              <div className="text-md font-semibold lg:text-xl">
                <span>{skill.experience}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
