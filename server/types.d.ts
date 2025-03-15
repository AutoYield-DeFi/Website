// Type definitions for xss-clean
declare module 'xss-clean' {
  import { RequestHandler } from 'express';
  const xssClean: () => RequestHandler;
  export default xssClean;
}