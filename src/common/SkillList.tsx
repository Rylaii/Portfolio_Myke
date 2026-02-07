interface SkillListProps {
  src: string;
  skill: string;
  itemClassName: string;
  iconClassName: string;
  labelClassName: string;
}

export default function SkillList({
  src,
  skill,
  itemClassName,
  iconClassName,
  labelClassName,
}: SkillListProps) {
  return (
    <div className={itemClassName}>
      <img className={iconClassName} src={src} alt={skill} loading="lazy" />
      <p className={labelClassName}>{skill}</p>
    </div>
  );
}
