export type MenuItem = {
  id: string;
  title: string;
  path: string;
  subItem?: Array<{
    id: string;
    title: string;
    path: string;
  }>;
};

