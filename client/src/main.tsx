import { createRoot } from "react-dom/client";
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
import App from "./App";
import "./index.css";

// Report web vitals metrics
function reportWebVitals(metric: any) {
  // Log metrics to console in development
  if (process.env.NODE_ENV !== 'production') {
    console.log(metric);
  }

  // In production, you could send to your analytics service
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to your analytics endpoint
    const analyticsData = {
      name: metric.name,
      value: metric.value,
      id: metric.id,
    };
    console.log('Production metric:', analyticsData);
  }
}

// Initialize web vitals monitoring
getCLS(reportWebVitals);
getFID(reportWebVitals);
getFCP(reportWebVitals);
getLCP(reportWebVitals);
getTTFB(reportWebVitals);

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