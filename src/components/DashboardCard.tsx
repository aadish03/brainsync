import { Card } from './ui/card';
import { ReactNode } from 'react';

interface DashboardCardProps {
  children: ReactNode;
  className?: string;
}

export function DashboardCard({ children, className = '' }: DashboardCardProps) {
  return (
    <Card className={`bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 ${className}`}>
      {children}
    </Card>
  );
}