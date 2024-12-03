import { motion } from 'framer-motion';
import EventItem from '../EventItem';

export default function ShowsView() {
  const showItems = [
    {
      label: 'Wizard of Oz',
      img: '/img/events/sports/basketball-min.jpg',
    },
    {
      label: 'Hamilton',
      img: '/img/events/sports/basketball-min.jpg',
    },
    {
      label: 'The Lion King',
      img: '/img/events/sports/basketball-min.jpg',
    },
    {
      label: 'The Phantom of the Opera',
      img: '/img/events/sports/basketball-min.jpg',
    },
    {
      label: 'The Book of Mormon',
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
      {showItems.map((item, i) => (
        <EventItem key={item.label} index={i} category="shows" {...item} />
      ))}
    </motion.div>
  );
}
