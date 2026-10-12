import { createFileRoute } from "@tanstack/react-router";
import { SERVICES, ServicePage, serviceHead } from "@/lib/site";

const service = SERVICES.find((s) => s.path === "/terapia-de-pareja")!;

export const Route = createFileRoute("/terapia-de-pareja")({
  head: () => serviceHead(service),
  component: () => <ServicePage service={service} />,
});
