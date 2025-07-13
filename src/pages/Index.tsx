import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            ContentPro
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">Обо мне</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Обсудить проект</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Коммерческий редактор и контент-маркетолог</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Превращаю идеи в 
                <span className="text-primary"> продающие тексты</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Разрабатываю контент-стратегии и создаю коммерческие тексты, 
                которые увеличивают продажи и укрепляют репутацию бренда.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg">
                  Заказать консультацию
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  Смотреть портфолио
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-gray-600">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5 лет</div>
                  <div className="text-gray-600">Опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/ffb8a3de-b6cc-455b-be6c-e099eb2f1991.jpg"
                alt="Профессиональное рабочее место контент-маркетолога"
                className="w-full h-96 object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр услуг по созданию и редактированию коммерческого контента
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" size={24} className="text-primary" />
                </div>
                <CardTitle>Коммерческие тексты</CardTitle>
                <CardDescription>
                  Продающие лендинги, описания товаров, рекламные объявления
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Лендинги и продающие страницы</li>
                  <li>• Описания товаров и услуг</li>
                  <li>• Рекламные тексты для соцсетей</li>
                  <li>• Email-рассылки</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Edit3" size={24} className="text-primary" />
                </div>
                <CardTitle>Редактирование</CardTitle>
                <CardDescription>
                  Литературное и техническое редактирование любых текстов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Корректура и стилистика</li>
                  <li>• Адаптация под целевую аудиторию</li>
                  <li>• SEO-оптимизация текстов</li>
                  <li>• Фактчекинг и верификация</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                </div>
                <CardTitle>Контент-стратегии</CardTitle>
                <CardDescription>
                  Разработка комплексных стратегий контент-маркетинга
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Анализ конкурентов</li>
                  <li>• Планирование контента</li>
                  <li>• Создание контент-планов</li>
                  <li>• Аналитика и оптимизация</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle>Корпоративные тексты</CardTitle>
                <CardDescription>
                  Внутренняя и внешняя корпоративная коммуникация
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Презентации и предложения</li>
                  <li>• Корпоративные блоги</li>
                  <li>• Пресс-релизы</li>
                  <li>• Регламенты и инструкции</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" size={24} className="text-primary" />
                </div>
                <CardTitle>Блоги и статьи</CardTitle>
                <CardDescription>
                  Экспертный контент для продвижения бренда
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Экспертные статьи</li>
                  <li>• Гайды и инструкции</li>
                  <li>• Интервью и кейсы</li>
                  <li>• Новостные сводки</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <CardTitle>Срочные проекты</CardTitle>
                <CardDescription>
                  Быстрое создание качественного контента под дедлайн
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Тексты за 24-48 часов</li>
                  <li>• Экспресс-редактура</li>
                  <li>• Антикризисные материалы</li>
                  <li>• Поддержка запусков</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Обо мне
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Привет! Меня зовут Анна, и я профессиональный коммерческий редактор 
                с 5-летним опытом в создании продающего контента.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Специализируюсь на разработке контент-стратегий и создании текстов, 
                которые не просто информируют, а мотивируют к действию и увеличивают продажи.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-600" />
                  <span className="text-gray-700">Филологическое образование МГУ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-600" />
                  <span className="text-gray-700">Сертификат Google по контент-маркетингу</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-600" />
                  <span className="text-gray-700">Опыт работы с B2B и B2C сегментами</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-600" />
                  <span className="text-gray-700">Постоянное обучение новым трендам</span>
                </div>
              </div>
              <Button size="lg">
                Связаться со мной
                <Icon name="MessageCircle" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center">
                <Icon name="User" size={120} className="text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Портфолио
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Успешные кейсы по созданию и редактированию коммерческого контента
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">E-commerce</Badge>
                <CardTitle>Интернет-магазин электроники</CardTitle>
                <CardDescription>
                  Переписали описания для 500+ товаров. Увеличили конверсию на 35%.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Конверсия</span>
                    <span className="text-green-600 font-semibold">+35%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Время на проект</span>
                    <span className="font-semibold">2 месяца</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Товаров описано</span>
                    <span className="font-semibold">500+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">SaaS</Badge>
                <CardTitle>Стартап финтех-платформы</CardTitle>
                <CardDescription>
                  Разработали контент-стратегию и создали 50+ статей для блога.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Органический трафик</span>
                    <span className="text-green-600 font-semibold">+120%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Лиды из блога</span>
                    <span className="text-green-600 font-semibold">+80%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Статей написано</span>
                    <span className="font-semibold">50+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Образование</Badge>
                <CardTitle>Онлайн-школа языков</CardTitle>
                <CardDescription>
                  Создали серию лендингов для разных курсов и настроили email-воронки.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Продажи курсов</span>
                    <span className="text-green-600 font-semibold">+60%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Open rate писем</span>
                    <span className="text-green-600 font-semibold">28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Лендингов создано</span>
                    <span className="font-semibold">8</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">B2B</Badge>
                <CardTitle>Консалтинговая компания</CardTitle>
                <CardDescription>
                  Редактировали презентации и создали серию экспертных статей.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Конверсия с презентаций</span>
                    <span className="text-green-600 font-semibold">+45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Экспертность бренда</span>
                    <span className="text-green-600 font-semibold">Значительно выросла</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Материалов создано</span>
                    <span className="font-semibold">30+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Обсудим ваш проект?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Расскажите о своих задачах, и я предложу решение
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Отправить сообщение</CardTitle>
                  <CardDescription>
                    Заполните форму, и я отвечу в течение 24 часов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Имя
                      </label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Email
                      </label>
                      <Input type="email" placeholder="email@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Тип проекта
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Выберите тип проекта</option>
                      <option>Коммерческие тексты</option>
                      <option>Редактирование</option>
                      <option>Контент-стратегия</option>
                      <option>Корпоративные тексты</option>
                      <option>Блог и статьи</option>
                      <option>Срочный проект</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Описание проекта
                    </label>
                    <Textarea 
                      placeholder="Расскажите подробнее о ваших задачах, целях и ожиданиях..."
                      rows={4}
                    />
                  </div>
                  <Button size="lg" className="w-full">
                    Отправить заявку
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span className="text-gray-700">hello@contentpro.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span className="text-gray-700">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MessageCircle" size={20} className="text-primary" />
                    <span className="text-gray-700">@contentpro_writer</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Условия работы
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p>• Предоплата 50% от стоимости проекта</p>
                  <p>• 2 раунда бесплатных правок</p>
                  <p>• Сдача работы строго в оговоренные сроки</p>
                  <p>• Конфиденциальность гарантирована</p>
                  <p>• Возможность срочных проектов (+50% к стоимости)</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Время работы
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Пн-Пт: 10:00 - 19:00 (МСК)</p>
                  <p>Сб-Вс: По договоренности</p>
                  <p>Срочные проекты: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">ContentPro</div>
              <p className="text-gray-400">
                Коммерческое редактирование и контент-маркетинг 
                для роста вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Коммерческие тексты</li>
                <li>Редактирование</li>
                <li>Контент-стратегии</li>
                <li>Корпоративные тексты</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@contentpro.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>@contentpro_writer</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ContentPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;