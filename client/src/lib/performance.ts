import { Metric } from 'web-vitals';

// Store performance metrics
const metrics: Record<string, number> = {};

// Format metric value for display
function formatMetric(value: number): string {
  return value.toFixed(2);
}

export function storeMetric(metric: Metric) {
  metrics[metric.name] = metric.value;
  
  // Log formatted metrics in development
  if (process.env.NODE_ENV !== 'production') {
    console.table({
      'Metric Name': metric.name,
      'Value': formatMetric(metric.value),
      'Rating': metric.rating, // "good", "needs-improvement", or "poor"
      'Navigation Time': metric.navigationType,
    });
  }
  
  // In production, you could send this to your analytics service
  if (process.env.NODE_ENV === 'production') {
    // Example threshold checks based on Core Web Vitals recommendations
    const thresholds = {
      CLS: 0.1,   // Cumulative Layout Shift (lower is better)
      FID: 100,   // First Input Delay in ms
      LCP: 2500,  // Largest Contentful Paint in ms
      FCP: 1800,  // First Contentful Paint in ms
      TTFB: 600   // Time to First Byte in ms
    };

    const metricName = metric.name as keyof typeof thresholds;
    const threshold = thresholds[metricName];
    
    if (threshold && metric.value > threshold) {
      console.warn(`Performance metric ${metric.name} (${formatMetric(metric.value)}) exceeds recommended threshold (${threshold})`);
    }
  }
}

// Get current metrics
export function getMetrics() {
  return metrics;
}
