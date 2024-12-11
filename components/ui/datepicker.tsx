'use client';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState } from 'react';

export function DatePickerDemo() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <Popover >
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          id="date-picker"
          className={cn(
            'w-fit justify-start text-left font-normal border-none bg-[#D9D9D9] text-black',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar mode="single" selected={date} onSelect={(day) => day && setDate(day)} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
