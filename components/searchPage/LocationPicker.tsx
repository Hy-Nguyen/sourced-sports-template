import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function LocationPicker() {
  const [location, setLocation] = useState<string>('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(location);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn('w-fit justify-start border-none bg-[#F6F6F6] text-left font-normal text-black')}
        >
          <MapPin className="mr-2 h-4 w-4" />
          <h1>{location.length > 0 ? location : 'Current Location'}</h1>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="flex w-auto flex-col p-2">
        <form onSubmit={handleSubmit} className="flex min-w-fit flex-col items-start gap-2 p-1">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter state, city, or zip code"
            className="border-b border-gray p-1 focus:outline-none"
          />
          <div className="flex w-full flex-row items-center gap-2">
            <button type="reset" className="w-1/2 rounded-md border border-highlight-2 bg-inherit py-1 text-gray">
              Clear
            </button>
            <button type="submit" className="w-1/2 rounded-md bg-highlight-2 py-1 text-white">
              Search
            </button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
