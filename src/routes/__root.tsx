import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Página no encontrada
        </p>
        <h1 className="mt-6 font-serif text-6xl leading-none text-clay sm:text-7xl">404</h1>
        <h2 className="mt-6 font-serif text-3xl leading-tight">
          Esta página no existe o fue movida
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Puede que el enlace haya cambiado. Regresa al inicio para conocer los
          servicios de terapia y agendar tu cita.
        </p>
        <div className="mt-9">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium tracking-wide text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay hover:shadow-xl"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}


function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl leading-tight">
          Esta página no se pudo cargar
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Algo salió mal de nuestro lado. Puedes intentar de nuevo o volver al inicio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-clay"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-primary px-7 py-3 text-sm font-medium tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );

}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Rocío Ordóñez Jarillo" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Rocío Ordóñez Jarillo · Psicóloga Clínica" },
      { property: "og:locale", content: "es_MX" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Karla:wght@300;400;500;600&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es-MX">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
