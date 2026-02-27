import React from "react";
import styles from "@/styles/Title.module.css";

type TitleVariant = "h1" | "h2" | "h3";

interface TitleProps {
  children: React.ReactNode;
  variant?: TitleVariant;
  className?: string;
  style?: React.CSSProperties;
}

export default function Title({
  children,
  variant = "h1",
  className = "",
  style,
}: TitleProps) {
  const Tag = variant;
  return (
    <Tag
      className={`${styles[variant]} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
