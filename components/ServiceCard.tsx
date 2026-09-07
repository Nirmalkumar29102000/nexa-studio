type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

export default function ServiceCard({
  number,
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.06]">
      
      {/* Background glow */}
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />

      {/* Top row */}
      <div className="relative flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
          {icon}
        </div>

        <span className="text-sm font-medium text-white/30">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="relative mt-8">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-white/50">
          {description}
        </p>
      </div>

      {/* Arrow */}
      <div className="relative mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition duration-300 group-hover:border-white/30 group-hover:text-white">
        ↗
      </div>
    </article>
  );
}