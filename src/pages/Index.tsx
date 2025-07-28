import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const tokenomicsData = [
    { label: 'Публичная продажа', percentage: 40, color: 'neon-cyan' },
    { label: 'Ликвидность', percentage: 25, color: 'neon-pink' },
    { label: 'Команда', percentage: 15, color: 'neon-green' },
    { label: 'Маркетинг', percentage: 10, color: 'neon-purple' },
    { label: 'Резерв', percentage: 10, color: 'accent' }
  ];

  const roadmapItems = [
    { quarter: 'Q1 2025', title: 'Запуск токена', status: 'completed', items: ['Создание токена', 'Листинг на DEX', 'Сообщество 10K'] },
    { quarter: 'Q2 2025', title: 'Развитие', status: 'in-progress', items: ['NFT коллекция', 'Стейкинг', 'Партнерства'] },
    { quarter: 'Q3 2025', title: 'Экспансия', status: 'upcoming', items: ['CEX листинги', 'Мобильное приложение', 'DAO запуск'] },
    { quarter: 'Q4 2025', title: 'Будущее', status: 'upcoming', items: ['Метавселенная', 'Игровая интеграция', 'Глобальная экспансия'] }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-orbitron overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-neon-cyan animate-neon-pulse">
            MEMECOIN
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-foreground hover:text-neon-cyan transition-colors">Главная</a>
            <a href="#tokenomics" className="text-foreground hover:text-neon-pink transition-colors">Токеномика</a>
            <a href="#roadmap" className="text-foreground hover:text-neon-green transition-colors">Роадмап</a>
            <a href="#community" className="text-foreground hover:text-neon-purple transition-colors">Сообщество</a>
          </div>
          <Button className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-bold animate-neon-pulse">
            Купить токен
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/20 to-background"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-float mb-8">
            <img 
              src="/img/d4285656-80b7-453d-a393-519f27a7c18e.jpg" 
              alt="MEMECOIN Logo" 
              className="w-32 h-32 mx-auto rounded-full border-4 border-neon-cyan animate-neon-pulse"
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green bg-clip-text text-transparent animate-pulse">
            MEMECOIN
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neon-cyan max-w-3xl mx-auto">
            🚀 Революционный мемкоин будущего с неоновым стилем и космическими амбициями
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-neon-cyan to-neon-pink text-black font-bold text-lg px-8 py-4 animate-neon-pulse">
              <Icon name="Rocket" className="mr-2" />
              Купить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-bold text-lg px-8 py-4">
              <Icon name="FileText" className="mr-2" />
              Whitepaper
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-neon-cyan">1B</div>
                <div className="text-sm text-muted-foreground">Общее предложение</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-neon-pink/30 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-neon-pink">50K+</div>
                <div className="text-sm text-muted-foreground">Держатели</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-neon-green/30 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-neon-green">$2M</div>
                <div className="text-sm text-muted-foreground">Рыночная кап</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-neon-purple/30 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-neon-purple">24/7</div>
                <div className="text-sm text-muted-foreground">Торговля</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 to-neon-purple/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-neon-pink">
            Токеномика
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-neon-cyan">Распределение токенов</h3>
                  <div className="space-y-4">
                    {tokenomicsData.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{item.label}</span>
                          <Badge variant="outline" className={`text-${item.color} border-${item.color}/50`}>
                            {item.percentage}%
                          </Badge>
                        </div>
                        <Progress 
                          value={item.percentage} 
                          className="h-3"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="bg-card/50 border-neon-pink/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-neon-pink">Детали токена</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Название:</span>
                      <span className="text-neon-cyan font-bold">MEMECOIN</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Символ:</span>
                      <span className="text-neon-pink font-bold">MEME</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Блокчейн:</span>
                      <span className="text-neon-green font-bold">Ethereum</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Тип:</span>
                      <span className="text-neon-purple font-bold">ERC-20</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Общее предложение:</span>
                      <span className="text-neon-cyan font-bold">1,000,000,000</span>
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
                      <span>Подключите MetaMask кошелек</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neon-pink/20 flex items-center justify-center text-neon-pink font-bold">2</div>
                      <span>Купите ETH на бирже</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-neon-green/20 flex items-center justify-center text-neon-green font-bold">3</div>
                      <span>Обменяйте ETH на MEME</span>
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
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-neon-green">
            Роадмап
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
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-neon-purple">
            Присоединяйся к сообществу
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="MessageCircle" className="text-neon-cyan mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2 text-neon-cyan">Telegram</h3>
                <p className="text-sm text-muted-foreground mb-4">Общайся с комьюнити</p>
                <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black">
                  Присоединиться
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-neon-pink/30 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="Twitter" className="text-neon-pink mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2 text-neon-pink">Twitter</h3>
                <p className="text-sm text-muted-foreground mb-4">Следи за новостями</p>
                <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black">
                  Подписаться
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-neon-green/30 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="Github" className="text-neon-green mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2 text-neon-green">GitHub</h3>
                <p className="text-sm text-muted-foreground mb-4">Открытый код</p>
                <Button variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black">
                  Изучить код
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-neon-purple/30 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon name="Users" className="text-neon-purple mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold mb-2 text-neon-purple">Discord</h3>
                <p className="text-sm text-muted-foreground mb-4">Голосовые чаты</p>
                <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black">
                  Войти в чат
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Memes Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">
            Мемы & NFT
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 border-neon-cyan/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2 text-neon-cyan">To the Moon!</h3>
                <p className="text-sm text-muted-foreground">Классический мем криптосообщества</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-neon-pink/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-2 text-neon-pink">Diamond Hands</h3>
                <p className="text-sm text-muted-foreground">Держим до конца!</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-neon-green/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">🌕</div>
                <h3 className="text-xl font-bold mb-2 text-neon-green">Moon Soon</h3>
                <p className="text-sm text-muted-foreground">Скоро на луне!</p>
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
              MEMECOIN
            </div>
            <p className="text-muted-foreground mb-6">
              Революционный мемкоин будущего 🚀
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <Icon name="MessageCircle" className="text-neon-cyan hover:scale-110 transition-transform cursor-pointer" size={24} />
              <Icon name="Twitter" className="text-neon-pink hover:scale-110 transition-transform cursor-pointer" size={24} />
              <Icon name="Github" className="text-neon-green hover:scale-110 transition-transform cursor-pointer" size={24} />
              <Icon name="Users" className="text-neon-purple hover:scale-110 transition-transform cursor-pointer" size={24} />
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 MEMECOIN. Все права защищены. 
              <br />
              Это не финансовый совет. Инвестируйте ответственно.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;