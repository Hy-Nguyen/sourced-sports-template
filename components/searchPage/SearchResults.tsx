'use client';

import { motion } from 'framer-motion';
import { DatePickerDemo } from '../ui/datepicker';
import LocationPicker from './LocationPicker';
import { format } from 'date-fns';

export default function SearchResults() {
  const sampleData = [
    {
      id: 1,
      date: new Date(),
      location: {
        city: 'New York',
        state: 'NY',
      },
      title: 'Cowboys at Giants',
      stadium: 'MetLife Stadium',
      price: 100,
    },
    {
      id: 2,
      date: new Date(),
      location: {
        city: 'New York',
        state: 'NY',
      },
      title: 'Cowboys at Giants',
      stadium: 'MetLife Stadium',
      price: 100,
    },
    {
      id: 3,
      date: new Date(),
      location: {
        city: 'New York',
        state: 'NY',
      },
      title: 'Cowboys at Giants',
      stadium: 'MetLife Stadium',
      price: 100,
    },
  ];
  return (
    <div className="flex w-full flex-col items-start justify-start gap-10 pb-24">
      <div className="flex w-full items-center justify-center border-b border-gray/35 py-4">
        <div className="container relative flex items-start justify-start">
          <div className="relative">
            <h1 className="text-[24px] font-semibold text-highlight-2">Tickets</h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 top-full mt-3.5 h-1 bg-highlight-2"
            />
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-4 lg:gap-10">
        {/* Filters */}
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-col gap-2">
            <label htmlFor="date-picker" className="text-[18px] font-semibold">
              Date
            </label>
            <DatePickerDemo />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="location-picker" className="text-[18px] font-semibold">
              Location
            </label>
            <LocationPicker />
          </div>
        </div>
        <div className="gap-4- flex flex-row"></div>
        {/* Results */}
        <div className="flex flex-col gap-4">
          {sampleData.map((item) => (
            <div
              key={item.id}
              className="group relative flex w-full flex-col items-center gap-4 rounded-lg bg-[#F6F6F6] p-2 px-4 lg:flex-row lg:gap-0"
            >
              <div className="flex w-full grow flex-col gap-2 lg:flex-row lg:gap-0">
                <article className="flex w-full min-w-fit flex-row items-start justify-center gap-2 border-b border-[#C2C2C2] px-2 py-2 lg:w-1/12 lg:flex-col lg:border-r lg:py-0">
                  <h2 className="text-[16px] font-normal text-gray">{format(item.date, 'eee')}</h2>
                  <h2 className="text-[16px] font-extrabold text-highlight-2">{format(item.date, 'MMM d')}</h2>
                  <h2 className="text-[16px] font-normal text-gray">{format(item.date, 'p')}</h2>
                </article>
                <article className="flex w-full grow flex-col items-start justify-center gap-2 px-2 lg:w-1/6 lg:min-w-fit">
                  <h2 className="text-[16px] font-semibold text-gray">{item.title}</h2>
                  <h2 className="text-[16px] font-normal text-gray">{item.stadium + ', ' + item.location.state}</h2>
                </article>
              </div>
              <button className="z-10 w-full whitespace-nowrap rounded-md bg-highlight-2 px-4 py-2 font-black text-white hover:bg-highlight-2/50 lg:w-fit">
                Find Tickets
              </button>
              <img
                src="/img/events/sports/basketball-min.jpg"
                alt={item.title}
                className="absolute right-0 top-0 z-0 hidden h-full w-1/2 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block"
              />
              <div className="absolute right-0 top-0 z-[5] hidden h-full w-1/2 bg-gradient-to-r from-[#F6F6F6] to-[#F6F6F6] transition-all duration-300 group-hover:to-transparent lg:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
