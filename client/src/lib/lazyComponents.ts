import { lazy } from 'react';

// Lazy load page components
export const About = lazy(() => import('../pages/about'));
export const Features = lazy(() => import('../pages/features'));
export const Documentation = lazy(() => import('../pages/docs'));
export const Blog = lazy(() => import('../pages/blog'));
export const Glossary = lazy(() => import('../pages/glossary'));

// Lazy load heavy components
export const Chart = lazy(() => import('../components/ui/chart'));
export const Team = lazy(() => import('../components/sections/team'));
