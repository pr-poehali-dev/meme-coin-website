import React, { useState } from 'react';

interface PieChartProps {
  data: {
    label: string;
    percentage: number;
    color: string;
  }[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  
  let cumulativePercentage = 0;
  
  const createPath = (percentage: number, startAngle: number) => {
    const angle = (percentage / 100) * 360;
    const endAngle = startAngle + angle;
    
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const largeArcFlag = angle > 180 ? 1 : 0;
    
    const x1 = 50 + 45 * Math.cos(startAngleRad);
    const y1 = 50 + 45 * Math.sin(startAngleRad);
    const x2 = 50 + 45 * Math.cos(endAngleRad);
    const y2 = 50 + 45 * Math.sin(endAngleRad);
    
    return `M 50 50 L ${x1} ${y1} A 45 45 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
  };

  return (
    <div className="relative">
      <svg width="300" height="300" viewBox="0 0 100 100" className="transform -rotate-90">
        {data.map((segment, index) => {
          const startAngle = cumulativePercentage * 3.6;
          const path = createPath(segment.percentage, startAngle);
          cumulativePercentage += segment.percentage;
          
          const isHovered = hoveredSegment === index;
          const scale = isHovered ? 1.05 : 1;
          
          return (
            <g key={index}>
              <path
                d={path}
                className={`transition-all duration-300 cursor-pointer drop-shadow-lg`}
                fill={`hsl(var(--${segment.color}))`}
                stroke="hsl(var(--background))"
                strokeWidth="0.5"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: '50% 50%',
                  filter: isHovered ? 'brightness(1.2)' : 'none',
                }}
                onMouseEnter={() => setHoveredSegment(index)}
                onMouseLeave={() => setHoveredSegment(null)}
              />
            </g>
          );
        })}
        
        {/* Center circle */}
        <circle 
          cx="50" 
          cy="50" 
          r="20" 
          fill="hsl(var(--background))" 
          stroke="hsl(var(--neon-cyan))" 
          strokeWidth="2"
          className="animate-neon-pulse"
        />
        
        {/* Center text */}
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-[8px] font-bold fill-neon-cyan transform rotate-90"
          style={{ transformOrigin: '50% 50%' }}
        >
          AI SOL
        </text>
      </svg>
      
      {/* Tooltip */}
      {hoveredSegment !== null && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card/90 backdrop-blur-sm border border-neon-cyan/30 rounded-lg p-3 pointer-events-none z-10">
          <div className="text-center">
            <div className="text-sm font-bold text-neon-cyan">
              {data[hoveredSegment].label}
            </div>
            <div className="text-lg font-black text-neon-pink">
              {data[hoveredSegment].percentage}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PieChart;