import { easeIn, motion } from "framer-motion";

const TextAnimation = () => {
  return <motion.h1
  initial={{ y: 25, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  >Hi, I am</motion.h1>
}

export default TextAnimation;
