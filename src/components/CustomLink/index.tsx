import type * as React from "react";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  value: string;
}

export default function CustomLink({ href, value, className, target }: Props) {
  const letters = value.split("");

  return (
    <a href={href} className={"link " +className} target={target}>
      {letters.map((c, i) => (
        <span  className="link_letter" key={i} style={({'--_index':i})as React.CSSProperties}>{c}</span>
      ))}
    </a>
  );
}
