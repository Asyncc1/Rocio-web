import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroW1000 from "@/assets/1-hero-1000.webp.asset.json";
import heroW600 from "@/assets/1-hero-600.webp.asset.json";
import sobreMiW1000 from "@/assets/2-sobre-mi-1000.webp.asset.json";
import sobreMiW600 from "@/assets/2-sobre-mi-600.webp.asset.json";
import amb1W1000 from "@/assets/3-ambiente-1-1000.webp.asset.json";
import amb1W600 from "@/assets/3-ambiente-1-600.webp.asset.json";
import amb2W1000 from "@/assets/4-ambiente-2-1000.webp.asset.json";
import amb2W600 from "@/assets/4-ambiente-2-600.webp.asset.json";
import entradaW1000 from "@/assets/entrada-consultorios-1000.webp.asset.json";
import entradaW600 from "@/assets/entrada-consultorios-600.webp.asset.json";

import { Link } from "@tanstack/react-router";
import {
  WA,
  MAPS,
  SITE,
  OG_IMAGE,
  TEL,
  TEL_URI,
  DIRECCION,
  SOCIALS,
  SERVICES,
  HOME_FAQ,
  WaButton,
  WhatsAppIcon,
  SiteFooter,
  faqSchema,
  localBusinessSchema,
  personSchema,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rocío Ordóñez | Psicóloga, Psicoterapeuta en Unidad Modelo, CDMX" },
      {
        name: "description",
        content:
          "Psicóloga clínica en Iztapalapa CDMX y en línea. Terapia individual, de pareja y duelo. 16 años de experiencia, enfoque humanista. Agenda por WhatsApp.",
      },
      {
        name: "keywords",
        content:
          "psicóloga Iztapalapa, terapia CDMX, psicoterapia Unidad Modelo, terapia humanista, psicóloga CDMX, terapia individual, terapia de pareja, terapia de duelo, terapia para la ansiedad, terapia en línea México",
      },
      {
        property: "og:title",
        content: "Rocío Ordóñez | Psicóloga, Psicoterapeuta en Unidad Modelo, CDMX",
      },
      {
        property: "og:description",
        content:
          "Terapia individual, de pareja y acompañamiento en duelo. Atención presencial en Unidad Modelo, CDMX y en línea.",
      },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Rocío Ordóñez, psicóloga clínica" },
      {
        name: "twitter:title",
        content: "Rocío Ordóñez | Psicóloga, Psicoterapeuta en Unidad Modelo, CDMX",
      },
      {
        name: "twitter:description",
        content: "Terapia individual, de pareja y acompañamiento en duelo en CDMX y en línea.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema()) },
      { type: "application/ld+json", children: JSON.stringify(personSchema()) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(HOME_FAQ)) },
    ],
  }),
  component: Index,
});

const areas = SERVICES.map((s) => ({
  title: s.areaTitle,
  desc: s.areaDesc,
  path: s.path,
}));

const DIAS = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];
const MESES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

function nextDays(n: number) {
  const base = new Date();
  base.setHours(0, 0, 0, 0);
  const out: Date[] = [];
  let i = 0;
  while (out.length < n) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    if (d.getDay() !== 0) out.push(d);
    i++;
  }
  return out;
}

function formatoLargo(d: Date) {
  return `${DIAS[d.getDay()]} ${d.getDate()} de ${MESES[d.getMonth()]} de ${d.getFullYear()}`;
}

function AgendaForm() {
  const dias = React.useMemo(() => nextDays(30), []);
  const [abierto, setAbierto] = React.useState(false);
  const [fecha, setFecha] = React.useState<Date | null>(null);
  const [modalidad, setModalidad] = React.useState<"Presencial" | "En línea" | null>(null);
  const [nombre, setNombre] = React.useState("");
  const [errores, setErrores] = React.useState<string[]>([]);
  const [enviando, setEnviando] = React.useState(false);
  const [enviado, setEnviado] = React.useState(false);

  const mensaje =
    fecha && modalidad
      ? `Hola, soy ${nombre.trim()}, me gustaría agendar una cita en modalidad ${modalidad} para el día ${formatoLargo(fecha)}.`
      : "";
  const href = `${WA}?text=${encodeURIComponent(mensaje)}`;

  function validar() {
    const errs: string[] = [];
    if (!nombre.trim()) errs.push("Escribe tu nombre para poder identificarte.");
    if (!fecha) errs.push("Elige el día que prefieres para tu cita.");
    if (!modalidad) errs.push("Selecciona la modalidad: presencial o en línea.");
    return errs;
  }

  function enviar() {
    const errs = validar();
    setErrores(errs);
    if (errs.length > 0) return;
    setEnviando(true);
    window.setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
      setEnviando(false);
      setEnviado(true);
    }, 600);
  }

  if (!abierto) {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <button
          type="button"
          onClick={() => setAbierto(true)}
          className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay hover:shadow-xl"
        >
          <span className="font-medium tracking-wide">Ver calendario</span>
        </button>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Esta solicitud no confirma tu cita de forma automática — te contactaré por WhatsApp para
          confirmar disponibilidad.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl text-left">
      {/* Fecha */}
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">1 · Elige un día</p>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
        {dias.map((d) => {
          const activo = fecha?.toDateString() === d.toDateString();
          return (
            <button
              key={d.toISOString()}
              type="button"
              onClick={() => setFecha(d)}
              aria-pressed={activo}
              className={`rounded-2xl border px-2 py-3 text-center transition-colors ${
                activo
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background/70 hover:border-primary/50"
              }`}
            >
              <span className="block text-[0.65rem] uppercase tracking-widest opacity-70">
                {DIAS[d.getDay()]}
              </span>
              <span className="block font-serif text-xl leading-tight">{d.getDate()}</span>
              <span className="block text-[0.65rem] opacity-70">
                {(MESES[d.getMonth()] ?? "").slice(0, 3)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Modalidad */}
      <p className="mt-10 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        2 · Modalidad
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {(["Presencial", "En línea"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setModalidad(m)}
            aria-pressed={modalidad === m}
            className={`rounded-full border px-6 py-3 text-sm transition-colors ${
              modalidad === m
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background/70 hover:border-primary/50"
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Nombre */}
      <label
        htmlFor="nombre"
        className="mt-10 block text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        3 · Tu nombre
      </label>
      <input
        id="nombre"
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre"
        className="mt-4 w-full rounded-2xl border border-border bg-background/70 px-5 py-4 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
      />

      {/* Enviar */}
      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        {errores.length > 0 && (
          <div
            role="alert"
            className="w-full max-w-md rounded-2xl border border-destructive/40 bg-destructive/10 px-5 py-4 text-left text-sm text-destructive"
          >
            <ul className="space-y-1">
              {errores.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        )}

        {enviado && (
          <div
            role="status"
            className="w-full max-w-md rounded-2xl border border-primary/40 bg-primary/10 px-5 py-4 text-sm leading-relaxed text-foreground"
          >
            Tu solicitud fue enviada, te contactaremos por WhatsApp para confirmar.
          </div>
        )}

        <button
          type="button"
          onClick={enviar}
          disabled={enviando}
          aria-busy={enviando}
          className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay hover:shadow-xl disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {enviando ? (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
          ) : (
            <WhatsAppIcon className="h-5 w-5" />
          )}
          <span className="font-medium tracking-wide">
            {enviando ? "Enviando solicitud…" : "Enviar solicitud por WhatsApp"}
          </span>
        </button>

        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Esta solicitud no confirma tu cita de forma automática — te contactaré por WhatsApp para
          confirmar disponibilidad.
        </p>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          Al enviar aceptas el{" "}
          <a href="#privacidad" className="underline underline-offset-4 hover:text-foreground">
            aviso de privacidad
          </a>
          : tu nombre y la fecha elegida se usan únicamente para contactarte y agendar tu cita.
        </p>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="shrink-0 leading-none">
            <span className="block whitespace-nowrap font-serif text-lg sm:text-xl">
              Rocío Ordóñez
            </span>
            <span className="block whitespace-nowrap text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
              Psicóloga
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#sobre-mi" className="transition-colors hover:text-foreground">
              Sobre mí
            </a>
            <a href="#areas" className="transition-colors hover:text-foreground">
              Áreas
            </a>
            <a href="#servicios" className="transition-colors hover:text-foreground">
              Servicios
            </a>
            <a href="#ubicacion" className="transition-colors hover:text-foreground">
              Ubicación
            </a>
            <a href="#agenda" className="transition-colors hover:text-foreground">
              Agenda
            </a>
          </nav>
          <div className="hidden sm:block">
            <WaButton size="sm" iconOnly>
              Agendar una sesión
            </WaButton>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-sand/60 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 top-64 h-96 w-96 rounded-full bg-sage/25 blur-3xl" />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-16 text-center md:py-24">
            <div className="fade-up w-full">
              <p className="mb-5 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Ciudad de México · En línea
              </p>
              <h1 className="text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
                Rocío <span className="italic text-clay">Ordóñez</span>
              </h1>
              <p className="mt-4 text-base tracking-[0.2em] text-muted-foreground uppercase sm:text-lg">
                Psicóloga · Psicoterapeuta
              </p>
            </div>

            <div className="fade-up relative mt-10 w-full max-w-sm">
              <div className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-[2.5rem] border border-clay/30 sm:block" />
              <img
                src={heroW1000.url}
                srcSet={`${heroW600.url} 600w, ${heroW1000.url} 1000w`}
                sizes="(max-width: 768px) 88vw, 384px"
                width={1000}
                height={1250}
                fetchPriority="high"
                decoding="async"
                alt="Rocío Ordóñez, psicóloga clínica UNAM con 16 años de experiencia en terapia humanista, Iztapalapa CDMX"
                className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover object-top shadow-xl"
              />
            </div>

            <div className="fade-up mt-12 w-full">
              <p className="mx-auto max-w-xl text-xl leading-relaxed text-foreground">
                Acompañamiento profesional, cálido y sin juicios.
              </p>
              <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Un espacio para escucharte, comprender lo que estás viviendo y encontrar nuevas
                formas de afrontar aquello que hoy te preocupa.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
                <span className="rounded-full border border-clay/40 px-4 py-2 text-muted-foreground">
                  Adolescentes · Adultos · Parejas
                </span>
                <span className="rounded-full border border-clay/40 px-4 py-2 text-muted-foreground">
                  Terapia presencial y en línea
                </span>
                <span className="rounded-full bg-clay/15 px-4 py-2 font-medium text-clay">
                  16 años de experiencia
                </span>
              </div>
              <div className="mt-10">
                <a
                  href="#agenda"
                  className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay hover:shadow-xl"
                >
                  <span className="font-medium tracking-wide">Agendar una sesión</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre mí */}
        <section id="sobre-mi" className="bg-secondary/40 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1fr_1fr]">
            <div className="relative order-2 md:order-none">
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-sand" />
              <img
                src={sobreMiW1000.url}
                srcSet={`${sobreMiW600.url} 600w, ${sobreMiW1000.url} 1000w`}
                sizes="(max-width: 768px) 92vw, 480px"
                width={750}
                height={938}
                loading="lazy"
                decoding="async"
                alt="Rocío Ordóñez, psicóloga clínica y psicoterapeuta humanista, durante una sesión de terapia en su consultorio de Unidad Modelo, CDMX"
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-none">
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Sobre mí
              </p>
              <h2 className="text-4xl leading-tight sm:text-5xl">
                Un espacio de escucha, respeto y acompañamiento
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Soy Rocío Ordóñez, psicóloga y psicoterapeuta. Desde hace 16 años acompaño a
                  adolescentes, adultos y parejas en diferentes momentos de sus vidas.
                </p>
                <p>
                  Para mí, acudir a terapia no significa que haya algo malo en ti. Muchas veces
                  significa reconocer que estás atravesando una situación que necesitas comprender y
                  que no tienes por qué hacerlo en soledad.
                </p>
                <p>
                  Mi trabajo parte de la escucha, el respeto y la comprensión de cada persona. No
                  busco darte respuestas hechas, sino acompañarte a encontrar las que tengan sentido
                  para ti.
                </p>
              </div>
              <p className="mt-8 border-l-2 border-clay/50 pl-5 font-serif text-2xl italic leading-snug text-foreground">
                Más que darte respuestas, te acompaño a encontrar las tuyas.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2 text-sm text-muted-foreground">
                {[
                  "Licenciada en Psicología por la UNAM",
                  "Formación en Psicología Clínica",
                  "Enfoque humanista-experiencial",
                  "Centrado en la persona",
                  "Gestalt",
                  "Existencial-humanista",
                ].map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-background/60 px-4 py-2"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Experiencia destacada */}
          <div className="mx-auto mt-16 grid max-w-6xl gap-5 px-6 sm:grid-cols-3">
            {[
              { big: "16 años", small: "de experiencia" },
              { big: "UNAM", small: "Licenciada en Psicología" },
              { big: "Adolescentes · Adultos · Parejas", small: "A quiénes acompaño" },
            ].map((e) => (
              <div
                key={e.small}
                className="rounded-[2rem] border border-border bg-card px-7 py-8 text-center"
              >
                <p className="font-serif text-3xl leading-tight text-clay">{e.big}</p>
                <p className="mt-2 text-sm text-muted-foreground">{e.small}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cómo trabajaremos */}
        <section id="como-trabajamos" className="py-24">
          <div className="mx-auto max-w-3xl px-6">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
              El proceso
            </p>
            <h2 className="text-4xl leading-tight sm:text-5xl">¿Cómo trabajaremos?</h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Cada persona llega a terapia con una historia diferente. Por eso no trabajo con
                soluciones iguales para todos.
              </p>
              <p>
                En las sesiones encontrarás un espacio de escucha y respeto, donde podrás hablar de
                lo que estás viviendo sin sentirte juzgado.
              </p>
              <p>
                Iremos comprendiendo juntos aquello que te preocupa, tus emociones, tus relaciones y
                las situaciones que hoy están afectando tu bienestar.
              </p>
              <p>La terapia es un proceso, y cada persona tiene su propio ritmo.</p>
            </div>
          </div>
        </section>

        {/* Áreas */}
        <section id="areas" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Áreas de atención
              </p>
              <h2 className="text-4xl leading-tight sm:text-5xl">En qué puedo acompañarte</h2>
            </div>
            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <li key={area.title}>
                  <Link
                    to={area.path}
                    className="group block h-full rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-clay/40 hover:shadow-lg"
                  >
                    <h3 className="text-xl leading-snug">{area.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{area.desc}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-clay">
                      Conocer más →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-clay/30 bg-sand/40 p-8">
                <h3 className="text-2xl leading-snug">Sobre la terapia con adolescentes</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Durante la adolescencia pueden aparecer cambios emocionales, dificultades
                  familiares, problemas de autoestima, ansiedad, tristeza, inseguridad o conflictos
                  en las relaciones.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  La terapia ofrece un espacio donde el adolescente puede expresarse y ser escuchado
                  con respeto, mientras aprende a comprender mejor lo que está viviendo.
                </p>
              </div>
              <div className="rounded-[2rem] border border-clay/30 bg-sand/40 p-8">
                <h3 className="text-2xl leading-snug">Sobre la terapia de pareja</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Una relación puede atravesar momentos de distancia, conflictos, cambios o
                  dificultades para comunicarse.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  La terapia de pareja puede ayudarles a comprender qué está ocurriendo entre
                  ustedes, expresar lo que necesitan y encontrar nuevas formas de relacionarse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="bg-secondary/40 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Modalidad y servicios
              </p>
              <h2 className="text-4xl leading-tight sm:text-5xl">
                Elige la forma que te resulte más cómoda
              </h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Terapia presencial",
                  price: "$600",
                  desc: "Sesión en el consultorio en Unidad Modelo, Ciudad de México.",
                },
                {
                  title: "Terapia en línea",
                  price: "$500",
                  desc: "Sesión por videollamada, desde donde te encuentres.",
                },
              ].map((s) => (
                <div
                  key={s.title}
                  className="rounded-[2rem] border border-border bg-card p-10 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <h3 className="text-3xl">{s.title}</h3>
                  <p className="mt-4 font-serif text-5xl text-clay">
                    {s.price}
                    <span className="ml-2 font-sans text-sm tracking-widest text-muted-foreground">
                      MXN / SESIÓN
                    </span>
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Duración de sesión de 50 a 60 minutos.
                  </p>
                  <p className="mt-5 text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <a
                href="#agenda"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay hover:shadow-xl"
              >
                <span className="font-medium tracking-wide">Agendar una sesión</span>
              </a>
            </div>
          </div>
        </section>

        {/* Ubicación */}
        <section id="ubicacion" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Ubicación
                </p>
                <h2 className="text-4xl leading-tight sm:text-5xl">
                  Un espacio tranquilo para tus sesiones
                </h2>
                <address className="mt-7 not-italic text-lg leading-relaxed text-muted-foreground">
                  <span className="block font-medium text-foreground">
                    Rocío Ordóñez · Psicóloga, Psicoterapeuta
                  </span>
                  <span className="block">{DIRECCION}</span>
                  <a
                    href={`tel:${TEL_URI}`}
                    className="mt-1 inline-block transition-colors hover:text-foreground"
                  >
                    {TEL}
                  </a>
                </address>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Horario de atención: lunes a viernes de 9:00 a 20:00 h y sábados de 9:00 a 14:00
                  h.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Si te queda lejos o tu tiempo es limitado, también ofrezco atención en línea con
                  la misma cercanía.
                </p>

                <div className="mt-9">
                  <a
                    href={MAPS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-primary px-6 py-3 text-sm text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                  >
                    <span className="font-medium tracking-wide">Ver en Google Maps</span>
                  </a>
                </div>

                <div className="mt-10 rounded-[2rem] border border-border/60 bg-sand/50 p-6 sm:p-8">
                  <h3 className="text-2xl leading-tight">¿Cómo identificar la entrada?</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Los consultorios se encuentran dentro de Med Avance, junto a Dormimundo. Al
                    llegar, busca esta entrada para acceder a los consultorios.
                  </p>
                  <img
                    src={entradaW1000.url}
                    srcSet={`${entradaW600.url} 600w, ${entradaW1000.url} 1000w`}
                    sizes="(max-width: 768px) 88vw, 460px"
                    width={584}
                    height={1141}
                    alt="Fachada del edificio Med Avance junto a Dormimundo, entrada a los consultorios en Calzada de La Viga, Iztapalapa"
                    className="mt-6 block w-full max-w-md rounded-[1.5rem] object-cover shadow-md"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="mt-3 text-sm text-muted-foreground">
                    Referencia: letrero de “Renta de consultorios” y la tienda Dormimundo sobre la
                    calle.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <img
                  src={amb1W1000.url}
                  srcSet={`${amb1W600.url} 600w, ${amb1W1000.url} 1000w`}
                  sizes="(max-width: 640px) 92vw, 300px"
                  width={1000}
                  height={1250}
                  alt="Consultorio de psicología con ambiente cálido en Unidad Modelo, Iztapalapa"
                  className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-md"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={amb2W1000.url}
                  srcSet={`${amb2W600.url} 600w, ${amb2W1000.url} 1000w`}
                  sizes="(max-width: 640px) 92vw, 300px"
                  width={1000}
                  height={1250}
                  alt="Consultorio de psicología con ambiente cálido en Unidad Modelo, Iztapalapa: sillones cómodos para sesiones presenciales"
                  className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-md sm:mt-10"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Agenda */}
        <section id="agenda" className="px-6 pb-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-sand/70 px-6 py-16 sm:px-10 sm:py-20">
            <div className="text-center">
              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Agenda tu cita
              </p>
              <h2 className="mx-auto max-w-2xl text-4xl leading-tight sm:text-5xl">
                Elige el día que mejor te acomode
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Elige el día y la modalidad que te acomoden, y me llegará tu solicitud por WhatsApp
                para confirmar contigo.
              </p>
            </div>
            <div className="mt-12">
              <AgendaForm />
            </div>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <section id="faq" className="px-6 pb-24">
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Preguntas frecuentes
            </p>
            <h2 className="text-4xl leading-tight sm:text-5xl">
              Lo que suelen preguntarme antes de empezar
            </h2>
            <dl className="mt-10 space-y-5">
              {HOME_FAQ.map((f) => (
                <div key={f.q} className="rounded-3xl border border-border bg-card p-6">
                  <dt className="text-xl leading-snug">{f.q}</dt>
                  <dd className="mt-2 leading-relaxed text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="px-6 pb-24">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-border px-8 py-16 text-center">
            <h2 className="mx-auto max-w-2xl text-4xl leading-tight sm:text-5xl">
              Dar el primer paso también es una forma de cuidarte.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Si estás atravesando un momento difícil y sientes que necesitas un espacio para
              hablar, comprender lo que estás viviendo y comenzar a trabajar en ello, puedes ponerte
              en contacto conmigo.
            </p>
            <div className="mt-10 flex justify-center">
              <WaButton>Agendar una sesión</WaButton>
            </div>
            <div className="mt-8 flex justify-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <s.Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Aviso de privacidad */}
        <section id="privacidad" className="px-6 pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-2xl leading-tight">Aviso de privacidad</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Rocío Ordóñez, con consultorio en {DIRECCION}, es responsable del tratamiento de tus
              datos personales. Los datos que compartes en el formulario de agenda (nombre, fecha y
              modalidad elegidas) se usan únicamente para contactarte por WhatsApp y confirmar tu
              cita; no se almacenan en este sitio ni se comparten con terceros con fines
              comerciales. Puedes ejercer tus derechos de acceso, rectificación, cancelación u
              oposición (ARCO) escribiendo al {TEL}, conforme a la Ley Federal de Protección de
              Datos Personales en Posesión de los Particulares.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
