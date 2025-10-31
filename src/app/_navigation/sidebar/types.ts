export type NavItem = {
  separator?: boolean;
  label: string;
  icon: React.ReactElement<{ className?: string }>;
  href: string;
};
