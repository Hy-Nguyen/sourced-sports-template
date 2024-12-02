export default function AboutUsCards({ icon, label, text }: { icon: React.ReactNode; label: string; text: string }) {
  return (
    <div className="group flex w-[calc(33.33%-1rem)] cursor-pointer flex-col gap-4 rounded-lg bg-[#F9F9F9] p-4 transition-colors duration-300 ease-in-out hover:bg-[#161616]">
      <div className="flex flex-row items-center gap-2">
        {icon}
        <h1 className="text-[28px] font-bold text-inherit transition-colors duration-300 ease-in-out group-hover:text-white">
          {label}
        </h1>
      </div>

      <p className="text-gray/60 text-[18px] font-medium transition-colors duration-300 ease-in-out group-hover:text-white/60">
        {text}
      </p>
    </div>
  );
}
