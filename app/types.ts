export type MenuItem = {
  href: string;
  icon: string;
  submenu?: { href: string; title: string }[];
};
