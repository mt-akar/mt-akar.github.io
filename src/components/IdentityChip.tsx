interface IdentityChipProps {
  label: string;
}

export default function IdentityChip({ label }: IdentityChipProps) {
  return (
    <span
      className={`
        inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium
        backdrop-blur-xl border transition-all duration-300
        bg-white/5 dark:bg-white/5 border-white/10 text-gray-300 dark:text-gray-400 hover:bg-white/10 dark:hover:bg-white/10 hover:border-white/20
      `}
    >
      {label}
    </span>
  );
}