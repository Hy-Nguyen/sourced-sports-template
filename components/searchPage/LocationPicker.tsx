import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function LocationPicker() {
  const [location, setLocation] = useState<string | null>(null);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn('w-fit justify-start border-none bg-[#D9D9D9] text-left font-normal text-black')}
        >
          <MapPin className="mr-2 h-4 w-4" />
          <h1>{location ?? 'Select a location'}</h1>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="flex w-auto flex-col p-2">
        <input type="text" placeholder="Search for a location" />
        <button>current location</button>
      </PopoverContent>
    </Popover>
  );
}
