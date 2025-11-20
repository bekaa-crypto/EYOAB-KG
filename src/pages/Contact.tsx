import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('Address', 'አድራሻ'),
      content: t('Akaki Kality, Addis Ababa, Ethiopia', 'አቃቂ ቃሊቲ፣ አዲስ አበባ፣ ኢትዮጵያ'),
    },
    {
      icon: Phone,
      title: t('Phone', 'ስልክ'),
      content: '+251 11 234 5678',
    },
    {
      icon: Mail,
      title: t('Email', 'ኢሜይል'),
      content: 'info@yamenkindergarten.edu.et',
    },
    {
      icon: Clock,
      title: t('Working Hours', 'የስራ ሰዓቶች'),
      content: t('Monday - Friday: 7:30 AM - 5:00 PM', 'ሰኞ - አርብ: 7:30 ጠዋት - 5:00 ከሰዓት'),
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8 text-primary">
          {t('Contact Us', 'አግኙን')}
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          {t(
            'Have questions? We would love to hear from you. Visit us or get in touch!',
            'ጥያቄዎች አለዎት? ከእርስዎ መስማት እንወዳለን። ይጎብኙን ወይም ያግኙን!'
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-playful flex items-center justify-center">
                <info.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-card-foreground">{info.title}</h3>
              <p className="text-muted-foreground">{info.content}</p>
            </Card>
          ))}
        </div>

        <Card className="overflow-hidden shadow-card">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.3743934893246!2d38.7468!3d8.9091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTQnMzIuOCJOIDM4wrA0NCc0OC41IkU!5e0!3m2!1sen!2set!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('የአሜን Kindergarten Location', 'የአሜን ማሳደጊያ አካባቢ')}
            ></iframe>
          </div>
        </Card>

        <div className="mt-16 text-center">
          <Card className="p-12 bg-gradient-playful text-white max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              {t('Visit Our Campus', 'ካምፓስዎን ይጎብኙ')}
            </h2>
            <p className="text-xl mb-6">
              {t(
                'Schedule a tour to see our facilities and meet our wonderful staff!',
                'መገልገያዎቻችንን ለማየት እና አስደናቂ ሰራተኞቻችንን ለማግኘት ጉብኝት ያስይዙ!'
              )}
            </p>
            <a href="tel:+251112345678">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                {t('Call to Schedule', 'ለማስይዝ ይደውሉ')}
              </button>
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
