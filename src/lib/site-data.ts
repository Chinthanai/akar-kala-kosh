import residence from "@/assets/pyar-residence.jpg.asset.json";
import interior from "@/assets/pyar-interior.jpg.asset.json";
import courtyard from "@/assets/pyar-courtyard.jpg.asset.json";
import commercial from "@/assets/pyar-commercial.jpg.asset.json";

export const images = {
  residence: residence.url,
  interior: interior.url,
  courtyard: courtyard.url,
  commercial: commercial.url,
};

export const projects = [
  { title: "Proposed 40×60 at Nagarbhavi", location: "Nagarbhavi, Bangalore", category: "Residential", image: images.residence },
  { title: "Proposed 30×40 at Kengeri", location: "Kengeri, Bangalore", category: "Residential", image: images.courtyard },
  { title: "One at Chitradurga Renovation", location: "Chitradurga, Karnataka", category: "Renovation", image: images.commercial },
  { title: "FF — Guest Bedroom", location: "Sakleshpura, Karnataka", category: "Interior", image: images.interior },
  { title: "FF — Master Bedroom", location: "Sakleshpura, Karnataka", category: "Interior", image: images.interior },
  { title: "FF — Home Theatre", location: "Sakleshpura, Karnataka", category: "Interior", image: images.commercial },
  { title: "GF — Common Areas", location: "Sakleshpura, Karnataka", category: "Interior", image: images.courtyard },
  { title: "R01 — Elevation", location: "Sakleshpura, Karnataka", category: "Commercial", image: images.residence },
] as const;

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/our-story", label: "Our Story" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact Us" },
] as const;