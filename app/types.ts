export type MenuItem = {
  href: string;
  icon: string;
  submenu?: { href: string; title: string }[];
};

export type Post = {
  title: string;
  author: string;
  likes: number;
  shares: number;
  content?: string;
  images?: string[];
};
