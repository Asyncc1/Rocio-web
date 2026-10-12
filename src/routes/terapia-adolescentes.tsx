import { createFileRoute } from "@tanstack/react-router";
import { SERVICES, ServicePage, serviceHead } from "@/lib/site";

const service = SERVICES.find((s) => s.path === "/terapia-adolescentes")!;

export const Route = createFileRoute("/terapia-adolescentes")({
  head: () => serviceHead(service),
  component: () => <ServicePage service={service} />,
});
