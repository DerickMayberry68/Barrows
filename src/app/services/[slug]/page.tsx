import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BARROWS_SERVICES, getBarrowsService } from "@/lib/barrowsServices";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return BARROWS_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getBarrowsService(slug);

  if (!service) {
    return {
      title: "Service Not Found | Barrows Excavation",
    };
  }

  return {
    title: `${service.title} | Barrows Excavation`,
    description: service.headline,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getBarrowsService(slug);

  if (!service) notFound();

  const relatedServices = BARROWS_SERVICES.filter((item) => item.slug !== service.slug);
  const galleryImages = service.galleryImages.length > 0 ? service.galleryImages : [service.image];

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100">
      <header className="border-b border-stone-800 bg-stone-950/95">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5">
          <Link href="/" className="leading-tight">
            <div className="font-display text-lg font-black uppercase tracking-wider text-stone-50">Barrows</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">Excavation / Berryville, AR</div>
          </Link>
          <Link href="/#services" className="font-mono text-xs uppercase tracking-widest text-red-500 hover:text-red-400">
            All services -&gt;
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0">
          <img src={service.image} alt="" className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-[1500px] gap-12 px-6 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <div className="section-label">{service.n} / {service.eyebrow}</div>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.5rem)] font-black uppercase leading-[0.9] tracking-tight">
              {service.title}
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-8 text-stone-200">
              {service.headline}
            </p>
          </div>

          <aside className="border border-stone-700 bg-stone-950/85 p-6 lg:col-span-5 lg:self-end">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-red-500">Service readiness</div>
            <p className="mt-4 text-sm leading-6 text-stone-300">
              Barrows brings field-tested crews, specialized equipment, and utility-focused safety practices to every phase of this work.
            </p>
            <div className="mt-6 grid gap-3">
              {service.proofPoints.slice(0, 2).map((point) => (
                <div key={point} className="border-t border-stone-800 pt-3 font-mono text-[10px] uppercase tracking-widest text-stone-400">
                  {point}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-b border-stone-800 bg-stone-950 py-20">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="section-label">Scope</div>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight">
              What Barrows handles.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-stone-400">
              {service.intro}
            </p>
          </div>

          <div className="grid gap-3 lg:col-span-7 md:grid-cols-2">
            {service.capabilities.map((capability, index) => (
              <div key={capability} className="border border-stone-800 bg-stone-900/60 p-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-red-500">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-4 text-lg font-semibold leading-6 text-stone-100">{capability}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-800 bg-stone-950 py-20">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="section-label">Field media</div>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight">
                Service-specific work in the field.
              </h2>
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-stone-500">
              Field-proven service capability
            </div>
          </div>

          <div className="mt-12 grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image}
                className={`group relative overflow-hidden border border-stone-800 bg-stone-900 ${
                  index === 0 && galleryImages.length > 1 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img src={image} alt={`${service.title} field work ${index + 1}`} className="h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-stone-200">
                  {service.title} / {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-stone-800 bg-stone-900 py-20">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="section-label">Detail</div>
            <div className="mt-6 space-y-6 text-lg leading-8 text-stone-300">
              {service.detail.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="border border-stone-700 bg-stone-950 p-6 lg:col-span-5">
            <div className="font-display text-2xl font-black uppercase tracking-tight text-stone-50">Project confidence</div>
            <div className="mt-6 space-y-4">
              {service.proofPoints.map((point) => (
                <div key={point} className="flex items-start gap-4 border-t border-stone-800 pt-4">
                  <span className="mt-1 h-2 w-2 shrink-0 bg-red-600" aria-hidden="true" />
                  <span className="text-sm leading-6 text-stone-300">{point}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-stone-950 py-20">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="section-label">Other disciplines</div>
              <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3rem)] font-black uppercase leading-[0.95] tracking-tight">
                Built to work together.
              </h2>
            </div>
            <Link href="/#contact" className="barrows-btn">How can we be of service? <span aria-hidden="true">-&gt;</span></Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {relatedServices.map((item) => (
              <Link key={item.slug} href={`/services/${item.slug}`} className="group border border-stone-800 bg-stone-900 p-5 hover:border-red-700">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-red-500">{item.n}</div>
                <div className="mt-4 font-display text-xl font-black uppercase tracking-tight text-stone-50">{item.title}</div>
                <p className="mt-3 text-sm leading-6 text-stone-400">{item.blurb}</p>
                <div className="mt-5 font-mono text-[10px] uppercase tracking-widest text-stone-500 group-hover:text-red-500">View details -&gt;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
