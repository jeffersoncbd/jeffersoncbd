import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type HTMLPropertiesFrom<T> = DetailedHTMLProps<
  ButtonHTMLAttributes<T>,
  T
>;
