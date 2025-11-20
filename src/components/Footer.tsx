import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">የአሜን {t('Kindergarten', 'ማሳደጊያ')}</h3>
            <p className="text-primary-foreground/90">
              {t(
                'Nurturing young minds with love, care, and quality education in Akaki Kality, Addis Ababa.',
                'በአቃቂ ቃሊቲ፣ አዲስ አበባ ውስጥ ወጣት አእምሮዎችን በፍቅር፣ በእንክብካቤ እና በጥራት ትምህርት እንንከባከባለን።'
              )}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('Quick Links', 'አጭር አገናኞች')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-secondary transition-colors">
                  {t('About Us', 'ስለ እኛ')}
                </a>
              </li>
              <li>
                <a href="/classes" className="hover:text-secondary transition-colors">
                  {t('Our Classes', 'ክፍሎቻችን')}
                </a>
              </li>
              <li>
                <a href="/admissions" className="hover:text-secondary transition-colors">
                  {t('Admissions', 'ምዝገባ')}
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-secondary transition-colors">
                  {t('Contact', 'አግኙን')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('Contact Info', 'የእውቂያ መረጃ')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>{t('Akaki Kality, Addis Ababa, Ethiopia', 'አቃቂ ቃሊቲ፣ አዲስ አበባ፣ ኢትዮጵያ')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+251 11 234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@yamenkindergarten.edu.et</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>
            &copy; {new Date().getFullYear()} የአሜን {t('Kindergarten', 'ማሳደጊያ')}.{' '}
            {t('All rights reserved.', 'መብቶች የተጠበቁ ናቸው።')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
