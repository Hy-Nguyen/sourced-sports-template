import { motion } from 'framer-motion';
import EventItem from '../EventItem';

export default function SportsView() {
  const sportItems = [
    {
      label: 'NFL Football',
      img: '/img/events/sports/basketball-min.jpg',
    },
    {
      label: 'NBA Basketball',
      img: '/img/events/sports/basketball-min.jpg',
    },
    {
      label: 'NHL Hockey',
      img: '/img/events/sports/basketball-min.jpg',
    },
    {
      label: 'MLB Baseball',
      img: '/img/events/sports/basketball-min.jpg',
    },
    {
      label: 'NCAA Football',
      img: '/img/events/sports/basketball-min.jpg',
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-full flex-col lg:pb-24"
    >
      {sportItems.map((item, i) => (
        <EventItem key={item.label} index={i} category="sports" {...item} />
      ))}
    </motion.div>
  );
}
