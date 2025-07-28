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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-white text-gray-900 border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Цена AI SOL</span>
            <Icon name="TrendingUp" className="text-green-accent" size={16} />
          </div>
          <div className="text-2xl font-bold text-green-accent">
            ${formatPrice(price)}
          </div>
          <div className={`text-sm ${change24h >= 0 ? 'text-green-600' : 'text-red-500'}`}>
            {change24h >= 0 ? '+' : ''}{change24h.toFixed(2)}% за 24ч
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white text-gray-900 border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Объем 24ч</span>
            <Icon name="BarChart3" className="text-green-accent" size={16} />
          </div>
          <div className="text-2xl font-bold text-green-accent">
            {formatNumber(volume)}
          </div>
          <div className="text-sm text-green-600">
            +12.5% от вчера
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white text-gray-900 border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Рыночная кап</span>
            <Icon name="PieChart" className="text-green-accent" size={16} />
          </div>
          <div className="text-2xl font-bold text-green-accent">
            {formatNumber(marketCap)}
          </div>
          <div className="text-sm text-gray-600">
            Ранг #247
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white text-gray-900 border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">AI Торговля</span>
            <Icon name="Bot" className="text-green-accent" size={16} />
          </div>
          <div className="text-2xl font-bold text-green-accent">
            АКТИВНА
          </div>
          <div className="text-sm text-gray-600">
            +127 сделок/ч
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PriceCounter;