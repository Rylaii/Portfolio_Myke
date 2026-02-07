import type { FC } from "react";

interface ProjectCardProps {
  src: string;
  link: string;
  h3: string;
  p: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ src, link, h3, p }) => {
  const isExternal = Boolean(link);

  return (
    <a
      href={link || "#"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <img className="hover" src={src} alt={`${h3} logo`} loading="lazy" />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
};

export default ProjectCard;
