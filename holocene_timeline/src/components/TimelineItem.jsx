import styles from "./TimelineItem.module.css";
import { formatHoloceneYear } from "../utils/holocene";

export function TimelineItem({ event }) {
  return (
    <article className={styles.item}>
      <span className={styles.date}>
        {event.displayDate || formatHoloceneYear(event.holoceneYear)}
      </span>
      <h2 className={styles.title}>{event.title}</h2>
      <p className={styles.meta}>
        {event.personOrGroup} · {event.region}
      </p>
      <p className={styles.summary}>{event.summary}</p>
    </article>
  );
}