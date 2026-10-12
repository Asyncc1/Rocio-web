import * as React from "react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/1-hero.jpg.asset.json";

export const WA = "https://wa.me/525540485826";
export const MAPS = "https://maps.app.goo.gl/TqVaz9kupu3mxo2H6?g_st=ic";
export const SITE = "https://rocioordonez.com";
export const OG_IMAGE = `${SITE}${heroImg.url}`;
export const TEL = "+52 55 4048 5826";
export const TEL_URI = "+525540485826";
export const DIRECCION = "Calzada de La Viga, Retorno 509 #3, Col. Unidad Modelo, Iztapalapa, CDMX";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.470 0 1.45 1.06 2.86 1.21 3.06.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.02h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.17 8.17 0 0 1-1.26-4.37c0-4.53 3.7-8.22 8.25-8.22 2.2 0 4.27.86 5.83 2.41a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.24 8.23z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.18A6.66 6.66 0 1 0 18.66 12 6.66 6.66 0 0 0 12 5.34zm0 10.99A4.33 4.33 0 1 1 16.33 12 4.33 4.33 0 0 1 12 16.33zm6.92-11.2a1.56 1.56 0 1 1-1.56-1.55 1.56 1.56 0 0 1 1.56 1.55z" />
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

export function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.86-2.49v-3.14a5.7 5.7 0 1 0 4.95 5.65V9.01a7.35 7.35 0 0 0 4.29 1.38V7.3a4.29 4.29 0 0 1-3.23-1.48z" />
    </svg>
  );
}

export const SOCIALS = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@psicologarocio.ordonez?_r=1&_t=ZS-98v7jP6oT90",
    Icon: TikTokIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/psicologarocio.ordonez?igsh=NTgxYzR0eDlvYnNp&utm_source=qr",
    Icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593317734127",
    Icon: FacebookIcon,
  },
];

export function WaButton({
  children,
  size = "lg",
  iconOnly = false,
  text,
}: {
  children?: React.ReactNode;
  size?: "lg" | "sm";
  iconOnly?: boolean;
  text?: string;
}) {
  const href = text ? `${WA}?text=${encodeURIComponent(text)}` : WA;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={iconOnly ? "Agendar una sesión por WhatsApp" : undefined}
      title={iconOnly ? "Agendar una sesión por WhatsApp" : undefined}
      className={`inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay hover:shadow-xl ${
        iconOnly ? "p-3" : size === "lg" ? "px-8 py-4 text-base" : "px-5 py-3 text-sm"
      }`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {!iconOnly && <span className="font-medium tracking-wide">{children}</span>}
    </a>
  );
}

export type ServicePath =
  | "/terapia-individual"
  | "/terapia-de-pareja"
  | "/terapia-duelo"
  | "/terapia-ansiedad"
  | "/terapia-adolescentes"
  | "/terapia-depresion";

export type ServiceDef = {
  path: ServicePath;
  nav: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  areaTitle: string;
  areaDesc: string;
  quees: string[];
  comoTrabajo: string[];
  cuando: string[];
  faq: { q: string; a: string }[];
};

export const SERVICES: ServiceDef[] = [
  {
    path: "/terapia-individual",
    nav: "Terapia individual",
    h1: "Terapia individual en CDMX y en línea",
    title: "Terapia individual en CDMX | Rocío Ordóñez, Psicóloga Clínica",
    description:
      "Terapia individual para adolescentes y adultos en Unidad Modelo, Iztapalapa CDMX y en línea. Enfoque humanista, 16 años de experiencia. Sesiones de 50 a 60 min.",
    intro:
      "Un espacio propio para hablar de lo que estás viviendo, comprenderlo con calma y encontrar nuevas formas de afrontarlo.",
    areaTitle: "Terapia individual",
    areaDesc:
      "Para adolescentes y adultos que están atravesando dificultades emocionales, cambios importantes o situaciones que desean comprender y trabajar.",
    quees: [
      "La terapia individual es un proceso de acompañamiento personal en el que trabajamos, sesión a sesión, aquello que hoy te preocupa: emociones, relaciones, decisiones o situaciones que se sienten difíciles de sostener en soledad.",
      "No es un espacio de consejos ni de juicios: es un lugar donde puedes hablar con libertad y ser escuchado con respeto.",
    ],
    comoTrabajo: [
      "Trabajo desde un enfoque humanista-experiencial, centrado en la persona, con herramientas de Gestalt y terapia existencial-humanista.",
      "En las primeras sesiones conocemos tu historia y aquello que te trae a terapia. Después vamos construyendo, a tu ritmo, una comprensión más clara de lo que estás viviendo y de los recursos con los que ya cuentas.",
    ],
    cuando: [
      "Te sientes desbordado, triste o irritable la mayor parte del tiempo.",
      "Atraviesas un cambio importante: mudanza, ruptura, trabajo, salud.",
      "Repites patrones que te hacen daño y no logras salir de ellos.",
      "Sientes que necesitas hablar con alguien fuera de tu círculo cercano.",
    ],
    faq: [
      {
        q: "¿Cuánto dura una sesión de terapia individual?",
        a: "Cada sesión dura entre 50 y 60 minutos.",
      },
      {
        q: "¿Cuánto cuesta la terapia individual?",
        a: "$600 MXN por sesión presencial y $500 MXN por sesión en línea.",
      },
      {
        q: "¿Cuántas sesiones voy a necesitar?",
        a: "Depende de cada persona y de lo que quieras trabajar. La terapia es un proceso y cada quien tiene su propio ritmo; lo revisamos juntos durante el acompañamiento.",
      },
    ],
  },
  {
    path: "/terapia-de-pareja",
    nav: "Terapia de pareja",
    h1: "Terapia de pareja en CDMX y en línea",
    title: "Terapia de pareja en CDMX | Rocío Ordóñez, Psicóloga Clínica",
    description:
      "Terapia de pareja en Unidad Modelo, Iztapalapa CDMX y en línea. Comunicación, conflictos y crisis de pareja con enfoque humanista. Agenda por WhatsApp.",
    intro:
      "Un espacio para comprender qué está ocurriendo entre ustedes y encontrar nuevas formas de relacionarse.",
    areaTitle: "Terapia de pareja",
    areaDesc:
      "Un espacio para comprender lo que está sucediendo en la relación, mejorar la comunicación y trabajar los conflictos que están generando malestar.",
    quees: [
      "La terapia de pareja es un espacio compartido donde ambos pueden expresar lo que sienten y necesitan, con una escucha neutral que no toma partido.",
      "El objetivo no es decidir quién tiene la razón, sino comprender la dinámica que hoy les está generando malestar.",
    ],
    comoTrabajo: [
      "Trabajamos la comunicación, los acuerdos y las expectativas de cada uno, junto con las heridas y los momentos que marcaron la relación.",
      "En ocasiones combinamos sesiones de pareja con alguna sesión individual, cuando el proceso lo requiere.",
    ],
    cuando: [
      "Las discusiones se repiten sin llegar a ningún acuerdo.",
      "Sienten distancia, desgaste o falta de comunicación.",
      "Atraviesan una crisis de confianza o una infidelidad.",
      "Están evaluando continuar o separarse y quieren decidirlo con claridad.",
    ],
    faq: [
      {
        q: "¿Tienen que asistir los dos a la sesión?",
        a: "Lo ideal es que asistan ambos, aunque también es posible iniciar de forma individual para trabajar lo que te corresponde dentro de la relación.",
      },
      {
        q: "¿Cuánto cuesta una sesión de pareja?",
        a: "$600 MXN presencial y $500 MXN en línea, con una duración de 50 a 60 minutos.",
      },
      {
        q: "¿Se puede tomar terapia de pareja en línea?",
        a: "Sí. Las sesiones por videollamada funcionan bien, incluso si cada uno se conecta desde un lugar distinto.",
      },
    ],
  },
  {
    path: "/terapia-duelo",
    nav: "Terapia de duelo",
    h1: "Terapia de duelo en CDMX y en línea",
    title: "Terapia de duelo en CDMX | Rocío Ordóñez, Psicóloga Clínica",
    description:
      "Acompañamiento psicológico en duelo por fallecimiento, separación o pérdidas significativas. Presencial en Iztapalapa CDMX y en línea, enfoque humanista.",
    intro:
      "Acompañamiento respetuoso durante una pérdida, a tu ritmo y sin prisas por “superarlo”.",
    areaTitle: "Duelo",
    areaDesc:
      "Acompañamiento durante procesos de pérdida, ya sea por el fallecimiento de una persona, una separación, cambios importantes u otras pérdidas significativas.",
    quees: [
      "El duelo es la respuesta natural ante una pérdida: el fallecimiento de alguien querido, una separación, la pérdida de la salud, del trabajo o de un proyecto de vida.",
      "No existe una manera correcta de vivirlo ni un tiempo definido para atravesarlo.",
    ],
    comoTrabajo: [
      "Te acompaño a dar lugar a lo que sientes —tristeza, enojo, culpa, alivio— sin exigirte que lo resuelvas rápido.",
      "Trabajamos también los recuerdos, los pendientes y la manera de reorganizar tu vida cotidiana después de la pérdida.",
    ],
    cuando: [
      "Sientes que el dolor no disminuye con el paso del tiempo.",
      "Evitas lugares, personas o recuerdos ligados a la pérdida.",
      "Te cuesta retomar tu rutina, dormir o concentrarte.",
      "Sientes culpa o enojo que no puedes hablar con nadie más.",
    ],
    faq: [
      {
        q: "¿Cuándo es buen momento para pedir ayuda en un duelo?",
        a: "En cualquier momento. No necesitas esperar a que el malestar sea insoportable para buscar acompañamiento.",
      },
      {
        q: "¿Cuánto cuesta una sesión?",
        a: "$600 MXN presencial y $500 MXN en línea, de 50 a 60 minutos.",
      },
      {
        q: "¿El duelo solo aplica cuando alguien fallece?",
        a: "No. También acompaño duelos por separaciones, migración, pérdida de empleo, salud o proyectos de vida.",
      },
    ],
  },
  {
    path: "/terapia-ansiedad",
    nav: "Terapia para la ansiedad",
    h1: "Terapia para la ansiedad en CDMX y en línea",
    title: "Terapia para la ansiedad en CDMX | Rocío Ordóñez, Psicóloga Clínica",
    description:
      "Terapia para ansiedad, estrés y ataques de pánico en Unidad Modelo, Iztapalapa CDMX y en línea. Enfoque humanista, 16 años de experiencia.",
    intro: "Comprender qué sostiene tu ansiedad y aprender formas más amables de acompañarla.",
    areaTitle: "Ansiedad",
    areaDesc:
      "Un espacio para comprender las emociones, pensamientos y situaciones que pueden estar generando preocupación, miedo, tensión o sensación de desbordamiento.",
    quees: [
      "La ansiedad es una respuesta del cuerpo ante algo que percibimos como amenaza. Se vuelve un problema cuando aparece de forma constante y empieza a limitar tu vida diaria.",
      "Puede sentirse como preocupación continua, tensión física, insomnio, opresión en el pecho o episodios de pánico.",
    ],
    comoTrabajo: [
      "Trabajamos en comprender qué situaciones, pensamientos y emociones sostienen la ansiedad, en lugar de pelear contra los síntomas.",
      "Sumamos recursos concretos para los momentos de mayor activación y revisamos las exigencias o miedos que están detrás.",
    ],
    cuando: [
      "Vives con preocupación constante que no logras detener.",
      "Tienes episodios de pánico, taquicardia o falta de aire.",
      "Evitas situaciones sociales, laborales o escolares por miedo.",
      "Duermes mal o sientes tensión física la mayor parte del día.",
    ],
    faq: [
      {
        q: "¿La terapia para la ansiedad funciona en línea?",
        a: "Sí. Las sesiones por videollamada permiten el mismo trabajo terapéutico desde donde te encuentres.",
      },
      {
        q: "¿Necesito medicamento para la ansiedad?",
        a: "No siempre. La psicoterapia puede ser suficiente en muchos casos; cuando conviene una valoración médica, lo comentamos y te oriento sobre cómo buscarla.",
      },
      {
        q: "¿Cuánto cuesta una sesión?",
        a: "$600 MXN presencial y $500 MXN en línea, de 50 a 60 minutos.",
      },
    ],
  },
  {
    path: "/terapia-adolescentes",
    nav: "Terapia para adolescentes",
    h1: "Terapia para adolescentes en CDMX y en línea",
    title: "Terapia para adolescentes en CDMX | Rocío Ordóñez, Psicóloga Clínica",
    description:
      "Terapia psicológica para adolescentes en Unidad Modelo, Iztapalapa CDMX y en línea: autoestima, ansiedad, familia y escuela. Enfoque humanista y respetuoso.",
    intro:
      "Un lugar donde el adolescente puede expresarse y ser escuchado con respeto, sin sentirse juzgado.",
    areaTitle: "Adolescentes y autoestima",
    areaDesc:
      "Para trabajar la relación que tienes contigo mismo, la seguridad personal, los pensamientos negativos sobre ti y la manera en que te valoras.",
    quees: [
      "Durante la adolescencia pueden aparecer cambios emocionales, dificultades familiares, problemas de autoestima, ansiedad, tristeza, inseguridad o conflictos en las relaciones.",
      "La terapia ofrece un espacio propio, distinto al de casa y la escuela, donde el adolescente puede poner en palabras lo que le pasa.",
    ],
    comoTrabajo: [
      "Cuido especialmente el vínculo y la confianza: sin esa base, el proceso no avanza.",
      "Cuando es necesario, incluyo a la familia en algunas sesiones, siempre cuidando la privacidad de lo que se habla en el espacio individual.",
    ],
    cuando: [
      "Notas aislamiento, irritabilidad o cambios importantes de ánimo.",
      "Hay bajo rendimiento escolar o rechazo a la escuela.",
      "Aparecen problemas de autoestima, imagen corporal o comparación constante.",
      "Los conflictos en casa se repiten y la comunicación se rompió.",
    ],
    faq: [
      {
        q: "¿A partir de qué edad atiendes adolescentes?",
        a: "Trabajo con adolescentes y adultos. Si tienes dudas sobre la edad, podemos comentarlo por WhatsApp antes de agendar.",
      },
      {
        q: "¿Los padres participan en el proceso?",
        a: "Sí, en momentos puntuales y cuidando siempre la confidencialidad de lo que el adolescente comparte en sesión.",
      },
      {
        q: "¿Cuánto cuesta una sesión?",
        a: "$600 MXN presencial y $500 MXN en línea, de 50 a 60 minutos.",
      },
    ],
  },
  {
    path: "/terapia-depresion",
    nav: "Terapia para la depresión",
    h1: "Terapia para la depresión en CDMX y en línea",
    title: "Terapia para la depresión en CDMX | Rocío Ordóñez, Psicóloga Clínica",
    description:
      "Terapia para la depresión, tristeza profunda y crisis emocionales en Iztapalapa CDMX y en línea. Acompañamiento humanista con 16 años de experiencia.",
    intro: "Acompañamiento cercano en momentos de tristeza profunda, desánimo o crisis.",
    areaTitle: "Depresión y crisis emocionales",
    areaDesc:
      "Acompañamiento profesional durante momentos de tristeza profunda, desánimo, confusión o crisis.",
    quees: [
      "La depresión no es solo estar triste: suele venir acompañada de falta de energía, pérdida de interés, dificultad para dormir o concentrarse y una sensación de vacío que se sostiene en el tiempo.",
      "Pedir ayuda no significa que algo esté mal en ti; muchas veces significa reconocer que no tienes por qué atravesarlo en soledad.",
    ],
    comoTrabajo: [
      "Vamos con calma, respetando tu energía disponible, para recuperar poco a poco tu rutina y tus vínculos.",
      "Trabajamos las emociones, la autoexigencia y las situaciones de vida que están sosteniendo el malestar.",
    ],
    cuando: [
      "Llevas semanas con tristeza, desánimo o llanto frecuente.",
      "Perdiste el interés en actividades que antes disfrutabas.",
      "Duermes o comes mucho más o mucho menos de lo habitual.",
      "Sientes que ya no le encuentras sentido a lo cotidiano.",
    ],
    faq: [
      {
        q: "¿La terapia sirve si ya tomo medicamento?",
        a: "Sí. La psicoterapia complementa muy bien el tratamiento médico cuando existe.",
      },
      {
        q: "¿Cuánto cuesta una sesión?",
        a: "$600 MXN presencial y $500 MXN en línea, de 50 a 60 minutos.",
      },
      {
        q: "¿Qué hago si estoy en una crisis?",
        a: "Escríbeme por WhatsApp para buscar el espacio más cercano. Si existe riesgo inmediato para tu vida, acude a urgencias o marca al 911.",
      },
    ],
  },
];

export const HOME_FAQ = [
  {
    q: "¿Cuánto dura una sesión de terapia?",
    a: "Cada sesión dura entre 50 y 60 minutos.",
  },
  {
    q: "¿Cuánto cuesta una sesión?",
    a: "La sesión presencial cuesta $600 MXN y la sesión en línea $500 MXN.",
  },
  {
    q: "¿En qué modalidades atiende?",
    a: "Atiendo de forma presencial en el consultorio de Unidad Modelo, Iztapalapa, CDMX, y también en línea por videollamada.",
  },
  {
    q: "¿Con quiénes trabaja?",
    a: "Acompaño a adolescentes, adultos y parejas.",
  },
  {
    q: "¿Cuál es su enfoque terapéutico?",
    a: "Trabajo desde un enfoque humanista-experiencial, centrado en la persona, con herramientas de Gestalt y terapia existencial-humanista.",
  },
  {
    q: "¿Cómo agendo una cita?",
    a: "Puedes agendar por WhatsApp al +52 55 4048 5826 o usando el calendario de la sección “Agenda tu cita” de este sitio.",
  },
];

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Psychologist", "ProfessionalService"],
    "@id": `${SITE}/#consultorio`,
    name: "Rocío Ordóñez Jarillo - Psicóloga Clínica",
    description:
      "Psicóloga clínica y psicoterapeuta con 16 años de experiencia. Terapia individual, de pareja, duelo, ansiedad, autoestima y depresión, presencial en Unidad Modelo, Iztapalapa, CDMX y en línea.",
    image: OG_IMAGE,
    url: `${SITE}/`,
    telephone: TEL_URI,
    priceRange: "$500-$600 MXN",
    currenciesAccepted: "MXN",
    knowsLanguage: "es-MX",
    hasMap: MAPS,
    areaServed: { "@type": "City", name: "Ciudad de México" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calzada de La Viga, Retorno 509 #3, Col. Unidad Modelo",
      addressLocality: "Iztapalapa",
      addressRegion: "CDMX",
      postalCode: "09089",
      addressCountry: "MX",
    },
    geo: { "@type": "GeoCoordinates", latitude: 19.3568, longitude: -99.094 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    serviceType: [
      "Terapia individual",
      "Terapia de pareja",
      "Duelo",
      "Ansiedad",
      "Autoestima",
      "Depresión",
    ],
    sameAs: SOCIALS.map((s) => s.href),
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/#rocio`,
    name: "Rocío Ordóñez Jarillo",
    jobTitle: "Psicóloga Clínica y Psicoterapeuta",
    image: OG_IMAGE,
    url: `${SITE}/`,
    telephone: TEL_URI,
    alumniOf: { "@type": "CollegeOrUniversity", name: "UNAM" },
    knowsAbout: [
      "Psicología Humanista",
      "Gestalt",
      "Terapia Existencial-Humanista",
      "Terapia de Pareja",
      "Duelo",
    ],
    worksFor: { "@id": `${SITE}/#consultorio` },
    sameAs: SOCIALS.map((s) => s.href),
  };
}

export function serviceSchema(s: ServiceDef) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    serviceType: s.nav,
    description: s.description,
    url: `${SITE}${s.path}`,
    image: OG_IMAGE,
    areaServed: { "@type": "City", name: "Ciudad de México" },
    availableChannel: [
      {
        "@type": "ServiceChannel",
        name: "Presencial",
        serviceLocation: { "@id": `${SITE}/#consultorio` },
      },
      { "@type": "ServiceChannel", name: "En línea", serviceUrl: WA },
    ],
    provider: { "@id": `${SITE}/#consultorio` },
    offers: [
      { "@type": "Offer", name: "Sesión presencial", price: "600", priceCurrency: "MXN" },
      { "@type": "Offer", name: "Sesión en línea", price: "500", priceCurrency: "MXN" },
    ],
  };
}

export function breadcrumbSchema(s: ServiceDef) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: s.nav, item: `${SITE}${s.path}` },
    ],
  };
}

export function serviceHead(s: ServiceDef) {
  return {
    meta: [
      { title: s.title },
      { name: "description", content: s.description },
      { property: "og:title", content: s.title },
      { property: "og:description", content: s.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE}${s.path}` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: s.title },
      { name: "twitter:description", content: s.description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE}${s.path}` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceSchema(s)) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(s.faq)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema(s)) },
    ],
  };
}

export function ServicePage({ service }: { service: ServiceDef }) {
  const otros = SERVICES.filter((s) => s.path !== service.path);
  const waText = `Hola, me gustaría agendar una sesión de ${service.nav.toLowerCase()}.`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="shrink-0 leading-none">
            <span className="block whitespace-nowrap font-serif text-lg sm:text-xl">
              Rocío Ordóñez
            </span>
            <span className="block whitespace-nowrap text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
              Psicóloga
            </span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <Link to="/" className="transition-colors hover:text-foreground">
              Inicio
            </Link>
            <Link to="/" hash="areas" className="transition-colors hover:text-foreground">
              Áreas
            </Link>
            <Link to="/" hash="servicios" className="transition-colors hover:text-foreground">
              Servicios
            </Link>
            <Link to="/" hash="agenda" className="transition-colors hover:text-foreground">
              Agenda
            </Link>
          </nav>
          <div className="hidden sm:block">
            <WaButton size="sm" iconOnly />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        <nav aria-label="Ruta de navegación" className="text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="underline underline-offset-4 hover:text-foreground">
                Inicio
              </Link>
            </li>
            <li aria-hidden>·</li>
            <li aria-current="page" className="text-foreground">
              {service.nav}
            </li>
          </ol>
        </nav>

        <h1 className="mt-8 text-4xl leading-tight sm:text-5xl">{service.h1}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{service.intro}</p>

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full border border-clay/40 px-4 py-2 text-muted-foreground">
            Presencial en Unidad Modelo, CDMX
          </span>
          <span className="rounded-full border border-clay/40 px-4 py-2 text-muted-foreground">
            En línea por videollamada
          </span>
          <span className="rounded-full bg-clay/15 px-4 py-2 font-medium text-clay">
            Sesiones de 50 a 60 min
          </span>
        </div>

        <section className="mt-14">
          <h2 className="text-3xl leading-tight">¿En qué consiste?</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
            {service.quees.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl leading-tight">Cómo trabajamos</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
            {service.comoTrabajo.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl leading-tight">Cuándo buscar ayuda</h2>
          <ul className="mt-5 space-y-3 text-lg leading-relaxed text-muted-foreground">
            {service.cuando.map((c) => (
              <li key={c} className="border-l-2 border-clay/40 pl-4">
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl leading-tight">Formato y precios de las sesiones</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-border bg-card p-8">
              <h3 className="text-2xl">Presencial</h3>
              <p className="mt-3 font-serif text-4xl text-clay">
                $600
                <span className="ml-2 font-sans text-xs tracking-widest text-muted-foreground">
                  MXN / SESIÓN
                </span>
              </p>
              <p className="mt-3 text-muted-foreground">
                En el consultorio de Unidad Modelo, Ciudad de México. Duración de 50 a 60 minutos.
              </p>
            </div>
            <div className="rounded-[2rem] border border-border bg-card p-8">
              <h3 className="text-2xl">En línea</h3>
              <p className="mt-3 font-serif text-4xl text-clay">
                $500
                <span className="ml-2 font-sans text-xs tracking-widest text-muted-foreground">
                  MXN / SESIÓN
                </span>
              </p>
              <p className="mt-3 text-muted-foreground">
                Por videollamada, desde donde te encuentres. Duración de 50 a 60 minutos.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl leading-tight">Preguntas frecuentes</h2>
          <dl className="mt-6 space-y-5">
            {service.faq.map((f) => (
              <div key={f.q} className="rounded-3xl border border-border bg-card p-6">
                <dt className="text-xl leading-snug">{f.q}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-14 rounded-[2.5rem] bg-sand/70 px-6 py-12 text-center sm:px-10">
          <h2 className="mx-auto max-w-xl text-3xl leading-tight">
            Dar el primer paso también es una forma de cuidarte.
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted-foreground">
            Escríbeme por WhatsApp y buscamos juntos el horario que mejor te acomode.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <WaButton text={waText}>Agendar una sesión</WaButton>
            <Link
              to="/"
              hash="agenda"
              className="inline-flex items-center gap-3 rounded-full border border-primary px-8 py-4 text-base font-medium tracking-wide text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
            >
              Ver calendario
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl leading-tight">Otros servicios</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {otros.map((o) => (
              <li key={o.path}>
                <Link
                  to={o.path}
                  className="block rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-clay/40 hover:shadow-lg"
                >
                  <span className="block text-xl leading-snug">{o.nav}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                    {o.intro}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">Rocío Ordóñez</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Psicóloga, Psicoterapeuta — Cédula profesional UNAM
          </p>
          <address className="not-italic text-sm text-muted-foreground">
            <span className="block">{DIRECCION}</span>
            <a href={`tel:${TEL_URI}`} className="transition-colors hover:text-foreground">
              {TEL}
            </a>
          </address>
          <Link
            to="/"
            hash="privacidad"
            className="mt-2 inline-block text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            Aviso de privacidad
          </Link>
        </div>

        <nav aria-label="Servicios" className="text-sm text-muted-foreground">
          <p className="mb-3 text-xs uppercase tracking-[0.3em]">Servicios</p>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.path}>
                <Link to={s.path} className="transition-colors hover:text-foreground">
                  {s.nav}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm text-muted-foreground">
          <p className="mb-3 text-xs uppercase tracking-[0.3em]">Redes sociales</p>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <s.Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
