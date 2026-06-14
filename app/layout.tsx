import { type PropsWithChildren } from "react";

export default function RootLayout(props: Readonly<PropsWithChildren>) {
  return props.children;
}
