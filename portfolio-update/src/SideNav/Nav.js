import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./Items";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Items = [
  { id: "0", text: "PROJECTS", to:'/Projects'},
  { id: "1", text: "BLOG"},
  { id: "2", text: "ABOUT" },
  { id: "3", text: "HOME"},
];

export const Navigation = () => (
  <motion.ul variants={variants}>
    {Items.map((item) => (
      <MenuItem id={item.id} key={item.id} text={item.text} />
    ))}
  </motion.ul>
);
