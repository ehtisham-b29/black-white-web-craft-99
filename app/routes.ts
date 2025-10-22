import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("about", "routes/about.tsx"),
  route("services", "routes/services.tsx"),
  route("projects", "routes/projects.tsx"),
  route("team", "routes/team.tsx"),
  route("contact", "routes/contact.tsx"),
  route("sitemap", "routes/sitemap.tsx"),
  route("services/web-development", "routes/services.web-development.tsx"),
  route("services/custom-software-development", "routes/services.custom-software-development.tsx"),
  route("services/mobile-app-development", "routes/services.mobile-app-development.tsx"),
  route("services/database-solutions", "routes/services.database-solutions.tsx"),
  route("services/cloud-services", "routes/services.cloud-services.tsx"),
  route("services/security-maintenance", "routes/services.security-maintenance.tsx"),
  route("blog/:id", "routes/blog.$id.tsx"),
  route("terms-of-service", "routes/terms-of-service.tsx"),
  route("privacy-policy", "routes/privacy-policy.tsx"),
  route("cookie-policy", "routes/cookie-policy.tsx"),
  route("*", "routes/$.tsx"),
] satisfies RouteConfig;
