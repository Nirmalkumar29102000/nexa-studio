import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Luma Finance",
    category: "Digital Product · UI/UX",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Aether Spaces",
    category: "Branding · Web Design",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Mono Architecture",
    category: "Website · Development",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Nori Coffee",
    category: "Brand Identity · Packaging",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Forma Studio",
    category: "Creative Direction · Web",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Orbit Mobility",
    category: "Product Design · Strategy",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="bg-[#08080c] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
              Selected work
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ideas brought{" "}
              <span className="text-white/40">
                to life.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
              A selection of digital experiences, identities and products
              created with ambitious teams around the world.
            </p>
          </div>

          <p className="text-sm text-white/30">
            06 — Projects
          </p>
        </div>

        {/* Project grid */}
        <div className="mt-16 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}