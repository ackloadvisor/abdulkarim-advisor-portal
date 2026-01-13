export type PortalRole = 'advisor' | 'investor';

export interface DeploymentCase {
  region: string;
  location: string;
  impact: string;
  metrics: string[];
}

export interface MetricItem {
  label: string;
  value: string;
  trend: string;
}
