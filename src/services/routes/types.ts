// Packages
import { ElementType } from 'react';

export interface AppRouterProps {
  key: string;
  title: string;
  path: string;
  component?: ElementType;
  childrenRoutes?: AppRouterProps[];
  index?: boolean;
  isProtected?: boolean;
}