// Imports libraries
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

// Imports utils
import {
  headContainerAnimation,
  headTextAnimation,
  slideAnimation,
} from "../utils/motion";
import { state } from "../store";

// Imports styles
import { Logo, BreakLine, HeadHeading, HeadParagraph } from "./styled";
import { Button } from "../shared/styled";

export const Index = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <Logo src="./dressmakers.png" alt="logo" />
          </motion.header>

          <motion.div {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <HeadHeading>
                Let's <BreakLine /> draw it.
              </HeadHeading>
            </motion.div>
          </motion.div>

          <motion.div {...headContainerAnimation}>
            <HeadParagraph>
              Створіть свою унікальну та ексклюзивну сорочку за допомогою нашого
              новітнього інструменту для персоналізації в 3D. Наша інноваційна
              технологія дає можливість налаштовувати сорочки з урахуванням усіх
              ваших уподобань.{" "}
              <strong>Відкрийте для себе потужність власної уяви</strong> та
              визначте свій стайл.
            </HeadParagraph>
            <Button
              variant="filled"
              bgColor={snap.color}
              onClick={() => (state.intro = false)}
            >
              Customize it.
            </Button>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
