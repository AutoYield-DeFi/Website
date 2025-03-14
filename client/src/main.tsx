import { createRoot } from "react-dom/client";
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';
import { storeMetric } from './lib/performance';
import App from "./App";
import "./index.css";

// Report and store web vitals metrics
function reportWebVitals(metric: any) {
  // Store and analyze the metric
  storeMetric(metric);
}

// Initialize web vitals monitoring
onCLS(reportWebVitals);
onFID(reportWebVitals);
onFCP(reportWebVitals);
onLCP(reportWebVitals);
onTTFB(reportWebVitals);

// Create React root and render app
createRoot(document.getElementById("root")!).render(<App />);

// Register service worker for production
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}