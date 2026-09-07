import Image from "next/image";

type ProjectCardProps = {
  title: string;
  category: string;
  image: string;
};

export default function ProjectCard({
  title,
  category,
  image,
}: ProjectCardProps) {
  return (
    <article className="group">
      {/* Project image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

        {/* View button */}
        <div className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-black opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          ↗
        </div>
      </div>

      {/* Project information */}
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm text-white/40">
            {category}
          </p>
        </div>

        <span className="pt-1 text-sm text-white/30">
          2026
        </span>
      </div>
    </article>
  );
}