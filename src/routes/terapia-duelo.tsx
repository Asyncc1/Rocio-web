import { createFileRoute } from "@tanstack/react-router";
import { SERVICES, ServicePage, serviceHead } from "@/lib/site";

const service = SERVICES.find((s) => s.path === "/terapia-duelo")!;

export const Route = createFileRoute("/terapia-duelo")({
  head: () => serviceHead(service),
  component: () => <ServicePage service={service} />,
});
