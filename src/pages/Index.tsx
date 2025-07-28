import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PriceCounter from '@/components/PriceCounter';

gsap.registerPlugin(ScrollTrigger);

const Index: React.FC = () => {
  useEffect(() => {
    // Hero animations
    gsap.fromTo(".hero-title", 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
    
    gsap.fromTo(".hero-subtitle", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.8 }
    );

    gsap.fromTo(".hero-buttons", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, delay: 1.1 }
    );

    // Feature cards animation
    gsap.fromTo(".feature-card", 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

    // Stats animation
    gsap.fromTo(".stat-item", 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        }
      }
    );

    // Process steps animation
    gsap.fromTo(".process-step", 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-text-light">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-green-accent">
            AI SOL TRADE
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-text-dim hover:text-green-accent transition-colors">Возможности</a>
            <a href="#process" className="text-text-dim hover:text-green-accent transition-colors">Процесс</a>
            <a href="#stats" className="text-text-dim hover:text-green-accent transition-colors">Статистика</a>
            <a href="#team" className="text-text-dim hover:text-green-accent transition-colors">Команда</a>
          </nav>
          <Button className="bg-green-accent text-dark-bg hover:bg-green-bright">
            Начать торговлю
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                AI ТОРГОВЛЯ МЕМКОИНАМИ
                <span className="block text-green-accent">КОТОРАЯ РАБОТАЕТ</span>
              </h1>
              <p className="hero-subtitle text-lg md:text-xl text-text-dim mb-8 max-w-2xl">
                Наш ИИ анализирует тысячи мемкоинов в реальном времени, 
                находя лучшие возможности для максимальной прибыли
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-green-accent text-dark-bg hover:bg-green-bright font-semibold px-8">
                  Подключить кошелёк
                </Button>
                <Button size="lg" variant="outline" className="border-green-accent text-green-accent hover:bg-green-accent hover:text-dark-bg">
                  Смотреть демо
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <PriceCounter />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            УМНАЯ ТОРГОВЛЯ ДЛЯ ВСЕХ
          </h2>
          <p className="text-center text-text-dim mb-16 max-w-2xl mx-auto">
            Передовые алгоритмы машинного обучения для максимизации вашей прибыли
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="feature-card bg-white text-gray-900 hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-accent rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Brain" size={24} className="text-dark-bg" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Анализ в реальном времени</h3>
                <p className="text-gray-600">
                  Анализируем поведение рынка, социальные сети и торговые паттерны 24/7
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card bg-white text-gray-900 hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-accent rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Zap" size={24} className="text-dark-bg" />
                </div>
                <h3 className="text-xl font-bold mb-4">Молниеносное исполнение</h3>
                <p className="text-gray-600">
                  Сделки исполняются за миллисекунды, опережая обычных трейдеров
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card bg-white text-gray-900 hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-accent rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Shield" size={24} className="text-dark-bg" />
                </div>
                <h3 className="text-xl font-bold mb-4">Управление рисками</h3>
                <p className="text-gray-600">
                  Автоматические стоп-лоссы и тейк-профиты защищают ваш капитал
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card bg-white text-gray-900 hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-accent rounded-lg flex items-center justify-center mb-6">
                  <Icon name="TrendingUp" size={24} className="text-dark-bg" />
                </div>
                <h3 className="text-xl font-bold mb-4">Предсказание трендов</h3>
                <p className="text-gray-600">
                  Определяем потенциальные 100x-1000x мемкоины до их взлёта
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card bg-white text-gray-900 hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-accent rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Users" size={24} className="text-dark-bg" />
                </div>
                <h3 className="text-xl font-bold mb-4">Анализ сообщества</h3>
                <p className="text-gray-600">
                  Отслеживаем активность влиятельных трейдеров и крупных кошельков
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card bg-white text-gray-900 hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-accent rounded-lg flex items-center justify-center mb-6">
                  <Icon name="BarChart3" size={24} className="text-dark-bg" />
                </div>
                <h3 className="text-xl font-bold mb-4">Подробная аналитика</h3>
                <p className="text-gray-600">
                  Полная статистика ваших сделок и производительности стратегий
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process-section py-20 px-4 bg-dark-card/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            ПРОСТОЙ ПРОЦЕСС
            <span className="block text-green-accent">МОЩНЫЕ РЕЗУЛЬТАТЫ</span>
          </h2>
          
          <div className="space-y-8">
            <div className="process-step flex items-start gap-6">
              <div className="w-12 h-12 bg-green-accent text-dark-bg rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Подключите кошелёк</h3>
                <p className="text-text-dim">Безопасное подключение через WalletConnect. Ваши приватные ключи остаются у вас</p>
              </div>
            </div>

            <div className="process-step flex items-start gap-6">
              <div className="w-12 h-12 bg-green-accent text-dark-bg rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Настройте стратегию</h3>
                <p className="text-text-dim">Выберите уровень риска, размер позиций и целевую доходность</p>
              </div>
            </div>

            <div className="process-step flex items-start gap-6">
              <div className="w-12 h-12 bg-green-accent text-dark-bg rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">ИИ начинает работу</h3>
                <p className="text-text-dim">Наш алгоритм анализирует рынок и автоматически совершает выгодные сделки</p>
              </div>
            </div>

            <div className="process-step flex items-start gap-6">
              <div className="w-12 h-12 bg-green-accent text-dark-bg rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                4  
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Получайте прибыль</h3>
                <p className="text-text-dim">Отслеживайте результаты в реальном времени и выводите прибыль когда угодно</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats-section py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            СТАТИСТИКА КОТОРАЯ ГОВОРИТ САМА ЗА СЕБЯ
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-item text-center">
              <div className="text-4xl md:text-6xl font-bold text-green-accent mb-2">2,847%</div>
              <p className="text-text-dim">Средняя доходность за месяц</p>
            </div>
            
            <div className="stat-item text-center">
              <div className="text-4xl md:text-6xl font-bold text-green-accent mb-2">0.003с</div>
              <p className="text-text-dim">Скорость исполнения сделок</p>
            </div>
            
            <div className="stat-item text-center">
              <div className="text-4xl md:text-6xl font-bold text-green-accent mb-2">98.7%</div>
              <p className="text-text-dim">Точность предсказаний</p>
            </div>
            
            <div className="stat-item text-center">
              <div className="text-4xl md:text-6xl font-bold text-green-accent mb-2">50M+</div>
              <p className="text-text-dim">Объём торгов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-dark-card/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            ВСТРЕЧАЙТЕ КОМАНДУ
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white text-gray-900 text-center border-0">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold mb-1">Алексей Иванов</h3>
                <p className="text-sm text-gray-600 mb-2">CEO & Основатель</p>
                <p className="text-xs text-gray-500">15+ лет в крипто и ИИ</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-gray-900 text-center border-0">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold mb-1">Мария Петрова</h3>
                <p className="text-sm text-gray-600 mb-2">CTO</p>
                <p className="text-xs text-gray-500">Эксперт по машинному обучению</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-gray-900 text-center border-0">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold mb-1">Дмитрий Козлов</h3>
                <p className="text-sm text-gray-600 mb-2">Lead Developer</p>
                <p className="text-xs text-gray-500">Blockchain архитектор</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-gray-900 text-center border-0">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold mb-1">Анна Смирнова</h3>
                <p className="text-sm text-gray-600 mb-2">Head of Analytics</p>
                <p className="text-xs text-gray-500">Финансовый аналитик</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
          </h2>
          
          <div className="space-y-6">
            <Card className="bg-white text-gray-900 border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Как работает ваш AI?</h3>
                <p className="text-gray-600">
                  Наш ИИ использует комбинацию машинного обучения, анализа настроений и технического анализа 
                  для выявления прибыльных торговых возможностей в экосистеме мемкоинов.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-gray-900 border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Безопасны ли мои средства?</h3>
                <p className="text-gray-600">
                  Да, мы используем децентрализованную архитектуру. Ваши приватные ключи остаются у вас, 
                  мы получаем только разрешения на торговлю через смарт-контракты.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-gray-900 border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Какая минимальная сумма для начала?</h3>
                <p className="text-gray-600">
                  Минимальная сумма для начала торговли составляет 0.1 SOL (~$20). 
                  Рекомендуем начинать с небольших сумм для тестирования стратегии.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white text-gray-900 border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Можно ли остановить торговлю в любой момент?</h3>
                <p className="text-gray-600">
                  Конечно! Вы можете в любой момент приостановить автоматическую торговлю 
                  и вывести свои средства без каких-либо ограничений.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-accent/10 to-green-bright/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ГОТОВЫ НАЧАТЬ ЗАРАБАТЫВАТЬ?
          </h2>
          <p className="text-xl text-text-dim mb-8">
            Присоединяйтесь к тысячам успешных трейдеров уже сегодня
          </p>
          <Button size="lg" className="bg-green-accent text-dark-bg hover:bg-green-bright font-semibold px-12 py-4 text-lg">
            Подключить кошелёк и начать
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold text-green-accent mb-4">AI SOL TRADE</div>
              <p className="text-text-dim text-sm">
                Будущее торговли мемкоинами уже здесь
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-text-dim">
                <li><a href="#" className="hover:text-green-accent">Возможности</a></li>
                <li><a href="#" className="hover:text-green-accent">Цены</a></li>
                <li><a href="#" className="hover:text-green-accent">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-text-dim">
                <li><a href="#" className="hover:text-green-accent">О нас</a></li>
                <li><a href="#" className="hover:text-green-accent">Команда</a></li>
                <li><a href="#" className="hover:text-green-accent">Карьера</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-text-dim">
                <li><a href="#" className="hover:text-green-accent">Помощь</a></li>
                <li><a href="#" className="hover:text-green-accent">Документация</a></li>
                <li><a href="#" className="hover:text-green-accent">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-text-dim">
            <p>&copy; 2024 AI SOL TRADE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;