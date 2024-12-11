'use client';

import { motion } from 'framer-motion';
import { DatePickerDemo } from '../ui/datepicker';
import LocationPicker from './LocationPicker';

export default function SearchResults() {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-10">
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
      <div className="container flex flex-col gap-10">
        {/* Filters */}
        <div className="flex flex-row gap-4">
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
          <div className="flex w-full flex-row items-center"></div>
        </div>
      </div>
    </div>
  );
}
