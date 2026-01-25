interface SkillListProps {
  src: string;
  skill: string;
}

function SkillList({ src, skill }: SkillListProps) {
  return (
    <span className="skillItem">
      <img src={src} alt={skill} />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
