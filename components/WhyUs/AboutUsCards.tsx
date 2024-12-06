import { motion } from 'framer-motion';

export default function AboutUsCards({ icon, label, text }: { icon: React.ReactNode; label: string; text: string }) {
  return (
    <div className="group z-[1] flex w-full cursor-pointer flex-col gap-4 rounded-lg bg-[#F9F9F9] p-4 shadow-md transition-colors duration-300 ease-in-out hover:bg-[#161616] lg:w-[calc(33.33%-1rem)]">
      <div className="flex flex-row items-center gap-6">
        {icon}
        <h1 className="text-[26px] font-bold leading-snug text-inherit transition-colors duration-300 ease-in-out group-hover:text-white">
          {label}
        </h1>
      </div>

      <p className="text-[16px] font-medium text-gray/60 transition-colors duration-300 ease-in-out group-hover:text-white/60">
        {text}
      </p>
    </div>
  );
}

export function FeatureCard({ icon, label, text }: { icon: React.ReactNode; label: string; text: string }) {
  return (
    <motion.div
      initial={{ background: 'linear-gradient(to bottom right, #110A1D, #110A1D)' }}
      whileHover={{ background: 'linear-gradient(to bottom right, #8244EB, #4A2685)' }}
      transition={{ duration: 0.5 }}
      className="group z-[1] flex min-w-full cursor-pointer flex-col gap-10 rounded-lg p-4 text-[#F3F3F3] lg:min-w-[555px]"
    >
      <div className="flex flex-row items-center justify-between gap-2">
        <h1 className="text-[28px] font-bold text-inherit transition-colors duration-300 ease-in-out">{label}</h1>
        {icon}
      </div>

      <p className="transition-color g text-[18px] font-medium text-inherit duration-300 ease-in-out">{text}</p>
    </motion.div>
  );
}
