import { useEffect, useRef } from "react";
import styles from "./Timeline.module.css";
import { TimelineItem } from "./TimelineItem";

export function Timeline({ events }) {
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;
    if (!container) return;

    function handleWheel(event) {
      // Alleen op bredere schermen en wanneer er horizontale overflow is
      const isDesktop = window.innerWidth >= 768;
      const hasHorizontalScroll = container.scrollWidth > container.clientWidth;

      if (!isDesktop || !hasHorizontalScroll) return;

      // Als de gebruiker al horizontaal (bijv. via trackpad) scrollt, laat het met rust
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      }
    }

    // { passive: false } is nodig zodat event.preventDefault() werkt
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      ref={timelineRef}
      className={styles.timeline}
      aria-label="Holocene tijdlijn"
    >
      {events.map((event) => (
        <TimelineItem key={event.id} event={event} />
      ))}
    </section>
  );
}