import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import PieChart from '@/components/PieChart';
import PriceCounter from '@/components/PriceCounter';

const Index = () => {
  const tokenomicsData = [
    { label: 'AI Алгоритм', percentage: 30, color: 'neon-cyan' },
    { label: 'Ликвидность', percentage: 25, color: 'neon-pink' },
    { label: 'Стейкинг', percentage: 20, color: 'neon-green' },
    { label: 'Команда', percentage: 15, color: 'neon-purple' },
    { label: 'Маркетинг', percentage: 10, color: 'accent' }
  ];

  const roadmapItems = [
    { quarter: 'Q1 2025', title: 'Запуск AI бота', status: 'completed', items: ['Алгоритм машинного обучения', 'Интеграция с letsbonk.fun', 'Бета-тестирование'] },
    { quarter: 'Q2 2025', title: 'Расширение функций', status: 'in-progress', items: ['Автоматическое управление рисками', 'Многовалютная торговля', 'Мобильное приложение'] },
    { quarter: 'Q3 2025', title: 'Масштабирование', status: 'upcoming', items: ['ИИ-аналитика трендов', 'Социальная торговля', 'Интеграция с CEX'] },
    { quarter: 'Q4 2025', title: 'AI Экосистема', status: 'upcoming', items: ['Предиктивные модели', 'DAO управление', 'Кросс-чейн торговля'] }
  ];

  const aiFeatures = [
    {
      icon: 'Brain',
      title: 'Машинное обучение',
      description: 'Алгоритм анализирует миллионы данных для поиска выгодных мемкоинов',
      color: 'neon-cyan'
    },
    {
      icon: 'TrendingUp',
      title: 'Высокая доходность',
      description: 'Торгует только токенами с потенциалом роста более 100%',
      color: 'neon-pink'
    },
    {
      icon: 'Shield',
      title: 'Управление рисками',
      description: 'Автоматические стоп-лоссы и защита от rug-pull проектов',
      color: 'neon-green'
    },
    {
      icon: 'Zap',
      title: 'Молниеносная скорость',
      description: 'Выполнение сделок за миллисекунды до конкурентов',
      color: 'neon-purple'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-orbitron overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-neon-cyan animate-neon-pulse">
            AI SOL TRADE
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-foreground hover:text-neon-cyan transition-colors">Главная</a>
            <a href="#ai-features" className="text-foreground hover:text-neon-pink transition-colors">AI Торговля</a>
            <a href="#tokenomics" className="text-foreground hover:text-neon-green transition-colors">Токеномика</a>
            <a href="#roadmap" className="text-foreground hover:text-neon-purple transition-colors">Роадмап</a>
          </div>
          <Button className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-bold animate-neon-pulse">
            Купить на letsbonk.fun
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/20 to-background"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-float mb-8">
            <img 
              src="/img/56f4f98f-4e5a-47d4-a99d-b65f1869e48d.jpg" 
              alt="AI SOL TRADE Logo" 
              className="w-32 h-32 mx-auto rounded-full border-4 border-neon-cyan animate-neon-pulse"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green bg-clip-text text-transparent animate-pulse">
            AI SOL TRADE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neon-cyan max-w-3xl mx-auto">
            🤖 Инновационный ИИ-бот для автоматической торговли высокодоходными мемкоинами на Solana
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-bold text-lg px-8 py-4 animate-neon-pulse">
              <Icon name="Bot" className="mr-2" />
              Запустить AI торговлю
            </Button>
            <Button size="lg" variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold text-lg px-8 py-4">
              <Icon name="ExternalLink" className="mr-2" />
              letsbonk.fun
            </Button>
          </div>
          <PriceCounter />
        </div>
      </section>

      {/* AI Features Section */}
      <section id="ai-features" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-neon-pink">
            Возможности ИИ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className={`bg-card/50 border-${feature.color}/30 backdrop-blur-sm hover:scale-105 transition-transform`}>
                <CardContent className="p-6 text-center">
                  <Icon name={feature.icon as any} className={`text-${feature.color} mx-auto mb-4 animate-pulse`} size={48} />
                  <h3 className={`text-xl font-bold mb-3 text-${feature.color}`}>{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 to-neon-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-neon-green">
            Токеномика
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <PieChart data={tokenomicsData} />
            </div>
            <div className="space-y-6">
              <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Детали токена AI SOL</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Название:</span>
                      <span className="text-neon-cyan font-bold">AI SOL TRADE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Символ:</span>
                      <span className="text-neon-pink font-bold">AISOL</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Блокчейн:</span>
                      <span className="text-neon-green font-bold">Solana</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Стандарт:</span>
                      <span className="text-neon-purple font-bold">SPL Token</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Общее предложение:</span>
                      <span className="text-neon-cyan font-bold">100,000,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border-neon-green/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-neon-green">Как купить</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan font-bold">1</div>
                      <span>Подключите Phantom кошелек</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neon-pink/20 flex items-center justify-center text-neon-pink font-bold">2</div>
                      <span>Перейдите на letsbonk.fun</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neon-green/20 flex items-center justify-center text-neon-green font-bold">3</div>
                      <span>Обменяйте SOL на AISOL</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-neon-green/10 to-neon-cyan/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-neon-purple">
            Роадмап развития
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {roadmapItems.map((item, index) => (
                <Card key={index} className={`bg-card/50 backdrop-blur-sm border-2 ${
                  item.status === 'completed' ? 'border-neon-green/50' :
                  item.status === 'in-progress' ? 'border-neon-pink/50' :
                  'border-neon-purple/30'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="flex-shrink-0">
                        <Badge variant="outline" className={`text-lg px-4 py-2 ${
                          item.status === 'completed' ? 'text-neon-green border-neon-green/50' :
                          item.status === 'in-progress' ? 'text-neon-pink border-neon-pink/50' :
                          'text-neon-purple border-neon-purple/50'
                        }`}>
                          {item.quarter}
                        </Badge>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold">{item.title}</h3>
                          {item.status === 'completed' && (
                            <Icon name="CheckCircle" className="text-neon-green" size={24} />
                          )}
                          {item.status === 'in-progress' && (
                            <Icon name="Clock" className="text-neon-pink animate-pulse" size={24} />
                          )}
                        </div>
                        <ul className="space-y-2">
                          {item.items.map((subItem, subIndex) => (
                            <li key={subIndex} className="flex items-center gap-2">
                              <Icon name="ArrowRight" className="text-primary" size={16} />
                              <span>{subItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/20 to-background"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-neon-cyan">
            Присоединяйся к AI сообществу
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="MessageCircle" className="text-neon-cyan mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2 text-neon-cyan">Telegram</h3>
                <p className="text-sm text-muted-foreground mb-4">Обсуждай стратегии с AI трейдерами</p>
                <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black">
                  Присоединиться
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-neon-pink/30 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="Twitter" className="text-neon-pink mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2 text-neon-pink">Twitter</h3>
                <p className="text-sm text-muted-foreground mb-4">Получай сигналы от ИИ</p>
                <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black">
                  Подписаться
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-neon-green/30 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="Github" className="text-neon-green mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2 text-neon-green">GitHub</h3>
                <p className="text-sm text-muted-foreground mb-4">Изучай алгоритмы</p>
                <Button variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black">
                  Смотреть код
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-neon-purple/30 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="Users" className="text-neon-purple mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2 text-neon-purple">Discord</h3>
                <p className="text-sm text-muted-foreground mb-4">Живые торговые сессии</p>
                <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black">
                  Войти в чат
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Trading Stats */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">
            Статистика AI торговли
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-2 text-neon-cyan">+2,847%</h3>
                <p className="text-sm text-muted-foreground">Средняя доходность за месяц</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-neon-pink/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2 text-neon-pink">0.003 сек</h3>
                <p className="text-sm text-muted-foreground">Скорость исполнения сделок</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-neon-green/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2 text-neon-green">98.7%</h3>
                <p className="text-sm text-muted-foreground">Точность предсказаний</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-cyan mb-4 animate-neon-pulse">
              AI SOL TRADE
            </div>
            <p className="text-muted-foreground mb-6">
              Будущее торговли мемкоинами уже здесь 🤖
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <Icon name="MessageCircle" className="text-neon-cyan hover:scale-110 transition-transform cursor-pointer" size={24} />
              <Icon name="Twitter" className="text-neon-pink hover:scale-110 transition-transform cursor-pointer" size={24} />
              <Icon name="Github" className="text-neon-green hover:scale-110 transition-transform cursor-pointer" size={24} />
              <Icon name="Users" className="text-neon-purple hover:scale-110 transition-transform cursor-pointer" size={24} />
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 AI SOL TRADE. Все права защищены. 
              <br />
              Торговля криптовалютами сопряжена с рисками. Используйте только те средства, потерю которых можете себе позволить.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;