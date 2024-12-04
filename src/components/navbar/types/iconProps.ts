import { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  width?: number;
  height?: number;
  fill?: string;
}
