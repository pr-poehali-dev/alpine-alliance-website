import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-accent/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent flex items-center justify-center">
                <span className="text-black font-bold text-xl">AA</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Alpine Alliance</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Главная', 'Инновации', 'Услуги', 'О компании', 'Партнёры', 'Проекты', 'Контакты'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-gray-300 hover:text-accent transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 text-accent text-sm font-medium">
                  Innovation for Tomorrow
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Перестраиваем
                  <span className="block text-accent">будущее Цюриха</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Alpine Alliance for Innovation — лидер в области инновационных решений для банковского сектора, промышленности и технологий
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-accent text-black hover:bg-accent/90 font-semibold">
                  Наши проекты
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black">
                  Связаться с нами
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/ac809579-4bb2-4174-8112-87d1acd58fb0/files/380ecb96-9613-4625-bf33-7ed301d64061.jpg" 
                alt="Zurich Innovation" 
                className="rounded-sm shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent rounded-sm"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="инновации" className="py-24 px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Инновационные решения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создаём технологии, которые трансформируют отрасли
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Sparkles', title: 'AI & Автоматизация', desc: 'Интеллектуальные системы для оптимизации бизнес-процессов' },
              { icon: 'Database', title: 'Большие данные', desc: 'Анализ и обработка данных для принятия решений' },
              { icon: 'Network', title: 'Цифровая трансформация', desc: 'Комплексная модернизация инфраструктуры' }
            ].map((item, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all hover:border-accent group">
                <div className="w-14 h-14 bg-accent/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <Icon name={item.icon} className="text-accent group-hover:text-black transition-colors" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-24 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">Наши услуги</h2>
              <div className="space-y-6">
                {[
                  { icon: 'Building2', title: 'Банковский сектор', desc: 'Цифровые решения для финансовых институтов' },
                  { icon: 'Factory', title: 'Промышленность', desc: 'Автоматизация производственных процессов' },
                  { icon: 'Boxes', title: 'Производство', desc: 'Оптимизация цепочек поставок' },
                  { icon: 'Code2', title: 'Программирование', desc: 'Разработка корпоративного ПО' }
                ].map((service, idx) => (
                  <div key={idx} className="flex gap-4 p-6 rounded-sm border border-gray-800 hover:border-accent transition-all group">
                    <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                      <Icon name={service.icon} className="text-accent group-hover:text-black" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{service.title}</h3>
                      <p className="text-gray-400">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/ac809579-4bb2-4174-8112-87d1acd58fb0/files/8f32b266-a527-47c3-9bd2-22d213064ecd.jpg" 
                alt="Innovation Abstract" 
                className="rounded-sm shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="о компании" className="py-24 px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/ac809579-4bb2-4174-8112-87d1acd58fb0/files/f381e4f0-0707-4952-ae18-9265cc33d782.jpg" 
                alt="Team" 
                className="rounded-sm shadow-xl"
              />
            </div>
            
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">О компании</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Alpine Alliance for Innovation — швейцарская инновационная компания, специализирующаяся на комплексной трансформации городской инфраструктуры Цюриха.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы объединяем экспертизу в банковском секторе, промышленности, производстве и программировании для создания устойчивого и технологичного будущего.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { value: '150+', label: 'Проектов' },
                  { value: '25+', label: 'Лет опыта' },
                  { value: '500+', label: 'Специалистов' },
                  { value: '40+', label: 'Партнёров' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-6 border border-border rounded-sm">
                    <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="партнёры" className="py-24 px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Наши партнёры</h2>
            <p className="text-xl text-muted-foreground">Сотрудничаем с ведущими организациями Швейцарии</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['UBS', 'Credit Suisse', 'ABB', 'Nestlé', 'Roche', 'Novartis', 'Zurich Insurance', 'Swiss Re'].map((partner, idx) => (
              <div key={idx} className="flex items-center justify-center p-8 bg-background rounded-sm border border-border hover:border-accent transition-all group">
                <span className="text-xl font-bold text-muted-foreground group-hover:text-accent transition-colors">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="проекты" className="py-24 px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Ключевые проекты</h2>
            <p className="text-xl text-gray-400">Проекты, меняющие Цюрих</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Smart Banking Platform', category: 'Финтех', year: '2024' },
              { title: 'Industrial IoT Network', category: 'Промышленность', year: '2024' },
              { title: 'Green Production System', category: 'Производство', year: '2023' },
              { title: 'City Infrastructure AI', category: 'Умный город', year: '2024' },
              { title: 'Supply Chain Automation', category: 'Логистика', year: '2023' },
              { title: 'Digital Twin Platform', category: 'Технологии', year: '2024' }
            ].map((project, idx) => (
              <Card key={idx} className="bg-gray-900 border-gray-800 hover:border-accent transition-all group overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-transparent"></div>
                <div className="p-6">
                  <div className="text-accent text-sm font-medium mb-2">{project.category} • {project.year}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-24 px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Готовы обсудить ваш проект? Наша команда всегда на связи
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: 'Mail', title: 'Email', value: 'info@alpinealliance.ch' },
              { icon: 'Phone', title: 'Телефон', value: '+41 44 123 45 67' },
              { icon: 'MapPin', title: 'Адрес', value: 'Bahnhofstrasse 1, Zürich' }
            ].map((contact, idx) => (
              <div key={idx} className="p-6 border border-border rounded-sm hover:border-accent transition-all group">
                <Icon name={contact.icon} className="mx-auto mb-4 text-accent" size={32} />
                <div className="text-sm text-muted-foreground mb-2">{contact.title}</div>
                <div className="font-semibold group-hover:text-accent transition-colors">{contact.value}</div>
              </div>
            ))}
          </div>
          
          <Button size="lg" className="bg-accent text-black hover:bg-accent/90 font-semibold px-8">
            Отправить сообщение
            <Icon name="Send" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent flex items-center justify-center">
                <span className="text-black font-bold text-xl">AA</span>
              </div>
              <span className="text-white font-bold text-xl">Alpine Alliance</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              © 2024 Alpine Alliance for Innovation. All rights reserved.
            </div>
            
            <div className="flex gap-4">
              {['Linkedin', 'Twitter', 'Github'].map((social, idx) => (
                <button key={idx} className="w-10 h-10 border border-gray-700 rounded-sm hover:border-accent hover:bg-accent/10 transition-all flex items-center justify-center">
                  <Icon name={social} size={18} className="text-gray-400 hover:text-accent" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
