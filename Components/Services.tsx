import ServiceCard from "./ServiceCard";

const services = [
  {
    number: "01",
    icon: "✦",
    title: "UI/UX Design",
    description:
      "We design intuitive and engaging digital experiences that make products easy and enjoyable to use.",
  },
  {
    number: "02",
    icon: "⌘",
    title: "Web Development",
    description:
      "We build fast, responsive and scalable websites using modern technologies and clean development practices.",
  },
  {
    number: "03",
    icon: "◈",
    title: "Branding",
    description:
      "We create distinctive visual identities that help brands communicate clearly and stand out from the competition.",
  },
  {
    number: "04",
    icon: "↗",
    title: "Digital Marketing",
    description:
      "We help businesses reach the right audience through thoughtful digital strategies and engaging campaigns.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#08080c] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            What we do
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Everything you need to build a{" "}
            <span className="text-white/40">
              remarkable brand.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
            From the first idea to the final product, we combine strategy,
            design and technology to create meaningful digital experiences.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}