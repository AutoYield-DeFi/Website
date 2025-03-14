import { Metric } from 'web-vitals';

// Store performance metrics
const metrics: Record<string, number> = {};

// Format metric value for display
function formatMetric(value: number): string {
  return value.toFixed(2);
}

export function storeMetric(metric: Metric) {
  // Only store metrics in production for 10% of users
  if (process.env.NODE_ENV === 'production') {
    // Random sampling of users (10%)
    if (Math.random() > 0.1) return;
  }

  metrics[metric.name] = metric.value;

  // Log formatted metrics in development only
  if (process.env.NODE_ENV !== 'production') {
    console.table({
      'Metric Name': metric.name,
      'Value': formatMetric(metric.value),
      'Rating': metric.rating,
    });
  }
}

// Get current metrics
export function getMetrics() {
  return metrics;
}