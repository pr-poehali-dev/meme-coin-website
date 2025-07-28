import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const PriceCounter: React.FC = () => {
  const [price, setPrice] = useState(0.00001234);
  const [change24h, setChange24h] = useState(0);
  const [volume, setVolume] = useState(1250000);
  const [marketCap, setMarketCap] = useState(12340000);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChange = (Math.random() - 0.5) * 0.000001;
      const newPrice = Math.max(0.00000001, price + randomChange);
      const percentChange = ((newPrice - price) / price) * 100;
      
      setPrice(newPrice);
      setChange24h(prev => prev + percentChange);
      setVolume(prev => prev + Math.random() * 10000 - 5000);
      setMarketCap(prev => prev + Math.random() * 100000 - 50000);
    }, 2000);

    return () => clearInterval(interval);
  }, [price]);

  const formatPrice = (value: number) => {
    return value.toFixed(8);
  };

  const formatNumber = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    }
    return `$${value.toFixed(0)}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Цена AI SOL</span>
            <Icon name="TrendingUp" className="text-neon-cyan" size={16} />
          </div>
          <div className="text-2xl font-bold text-neon-cyan animate-pulse">
            ${formatPrice(price)}
          </div>
          <div className={`text-sm ${change24h >= 0 ? 'text-neon-green' : 'text-red-500'}`}>
            {change24h >= 0 ? '+' : ''}{change24h.toFixed(2)}% за 24ч
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-neon-pink/30 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Объем 24ч</span>
            <Icon name="BarChart3" className="text-neon-pink" size={16} />
          </div>
          <div className="text-2xl font-bold text-neon-pink animate-pulse">
            {formatNumber(volume)}
          </div>
          <div className="text-sm text-neon-green">
            +12.5% от вчера
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-neon-green/30 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Рыночная кап</span>
            <Icon name="PieChart" className="text-neon-green" size={16} />
          </div>
          <div className="text-2xl font-bold text-neon-green animate-pulse">
            {formatNumber(marketCap)}
          </div>
          <div className="text-sm text-neon-cyan">
            Ранг #247
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-neon-purple/30 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">AI Торговля</span>
            <Icon name="Bot" className="text-neon-purple animate-pulse" size={16} />
          </div>
          <div className="text-2xl font-bold text-neon-purple">
            АКТИВНА
          </div>
          <div className="text-sm text-neon-cyan">
            +127 сделок/ч
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PriceCounter;