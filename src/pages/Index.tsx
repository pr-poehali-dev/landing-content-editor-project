import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-900">
            Контент-маркетолог
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Обо мне
            </a>
            <a
              href="#portfolio"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Связаться</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                Контент-стратегии для{" "}
                <span className="text-blue-600">роста бизнеса</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                От декомпозиции целей до анализа эффективности. Email-рассылки,
                коммерческие предложения, контент-сопровождение на русском и
                английском языках.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Обсудить проект
                </Button>
                <Button variant="outline" size="lg">
                  Посмотреть портфолио
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/ffb8a3de-b6cc-455b-be6c-e099eb2f1991.jpg"
                alt="Профессиональное рабочее место контент-маркетолога"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Target" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Стратегия</h3>
              <p className="text-gray-600">
                Декомпозиция целей и построение контент-стратегии
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Edit3" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Создание</h3>
              <p className="text-gray-600">
                Коммерческие тексты и email-рассылки
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="BarChart3" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Анализ</h3>
              <p className="text-gray-600">
                Оценка эффективности и оптимизация
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Обо мне</h2>
            <p className="text-xl text-gray-600">
              Системный подход к контент-маркетингу
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Специализируюсь на полном цикле контент-сопровождения бизнеса —
                от стратегического планирования до детального анализа
                результатов.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Работаю с компаниями разного масштаба, создавая контент, который
                не просто информирует, а решает бизнес-задачи и приводит к
                конкретным результатам.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
                  Русский язык
                </span>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
                  English
                </span>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
                  B2B/B2C
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Icon name="Users" className="text-blue-600" size={24} />
                  <span className="text-gray-700">50+ довольных клиентов</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Globe" className="text-blue-600" size={24} />
                  <span className="text-gray-700">Работа на двух языках</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Award" className="text-blue-600" size={24} />
                  <span className="text-gray-700">5+ лет опыта</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Портфолио
            </h2>
            <p className="text-xl text-gray-600">
              Примеры решения бизнес-задач через контент
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow bg-white border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="Mail" size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email-маркетинг</h3>
              <p className="text-gray-600 mb-4">
                Автоматические последовательности и рассылки для увеличения
                продаж
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Посмотреть кейсы
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow bg-white border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="FileText" size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Коммерческие предложения
              </h3>
              <p className="text-gray-600 mb-4">
                Продающие тексты для B2B и B2C сегментов
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Посмотреть кейсы
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow bg-white border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="TrendingUp" size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Контент-стратегии</h3>
              <p className="text-gray-600 mb-4">
                Долгосрочное планирование и системы контента
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Посмотреть кейсы
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow bg-white border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Icon name="BarChart" size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Аналитика эффективности
              </h3>
              <p className="text-gray-600 mb-4">
                Измерение результатов и оптимизация контента
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Посмотреть кейсы
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Готовы обсудить проект?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Расскажите о своих задачах, и я предложу оптимальное решение
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Icon
                  name="MessageCircle"
                  size={32}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-lg font-semibold">Telegram</h3>
              <p className="text-gray-600">
                Быстрая связь для обсуждения проектов
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Mail" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-600">Подробное техническое задание</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Calendar" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Консультация</h3>
              <p className="text-gray-600">Бесплатный звонок 30 минут</p>
            </div>
          </div>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Send" size={20} className="mr-2" />
            Написать сейчас
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-white text-center">
        <p className="text-gray-400">
          © 2024 Контент-маркетолог. Помогаю бизнесу расти через качественный
          контент.
        </p>
      </footer>
    </div>
  );
};

export default Index;
