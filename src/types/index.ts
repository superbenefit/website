// Global type definitions for the SuperBenefit project

export interface BaseProps {
  className?: string;
}

export interface LayoutProps extends BaseProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
}

export interface ComponentProps extends BaseProps {
  children?: any; // Will be typed properly when React components are added
}

// Content types for future Content Layer API integration
export interface ContentMeta {
  title: string;
  description?: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags?: string[];
  author?: string;
  featured?: boolean;
}

export interface BlogPost extends ContentMeta {
  slug: string;
  content: string;
  excerpt?: string;
}

// Web3 related types (prepared for future use)
export interface Web3Config {
  chainId: number;
  rpcUrl: string;
  contractAddress?: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}
