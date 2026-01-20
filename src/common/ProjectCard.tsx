import type { FC } from 'react';

interface ProjectCardProps {
  src: string;
  link: string;
  h3: string;
  p: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ src, link, h3, p }) => {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
};

export default ProjectCard;
