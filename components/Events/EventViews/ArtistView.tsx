import { motion } from 'framer-motion';
import EventItem from '../EventItem';

export default function ArtistView() {
  const artistItems = [
    {
      label: 'Taylor Swift',
      img: '/img/events/sports/basketball-min.jpg',
    },
    {
      label: 'Ed Sheeran',
      img: '/img/events/sports/basketball-min.jpg',
    },
    {
      label: 'Coldplay',
      img: '/img/events/sports/basketball-min.jpg',
    },
    {
      label: 'Beyonce',
      img: '/img/events/sports/basketball-min.jpg',
    },
    {
      label: 'Dua Lipa',
      img: '/img/events/sports/basketball-min.jpg',
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col pb-24"
    >
      {artistItems.map((item, i) => (
        <EventItem key={item.label} index={i} category="artists" {...item} />
      ))}
    </motion.div>
  );
}
