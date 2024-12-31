export interface MenuCategory {
    title?: string;
    items?: MenuSubItem[];
    imageUrl?: string;
    imageAlt?: string;
  }
  
  export interface MenuSubItem {
    label: string;
    href: string;
  }