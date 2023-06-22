import styles from "./Tags.module.css";

interface TagsProps {
  tags: string[];
}

export default function Tags({ tags }: TagsProps) {
  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <div className={styles.tag}>{tag}</div>
      ))}
    </div>
  );
}
