import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', label: t('Home', 'መነሻ ገጽ') },
    { path: '/about', label: t('About', 'ስለ እኛ') },
    { path: '/classes', label: t('Classes', 'ክፍሎች') },
    { path: '/teachers', label: t('Teachers', 'መምህራን') },
    { path: '/admissions', label: t('Admissions', 'ምዝገባ') },
    { path: '/contact', label: t('Contact', 'አግኙን') },
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="የአሜን Kindergarten Logo" className="h-14 w-14" />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-primary">የአሜን</span>
              <span className="text-sm text-muted-foreground">{t('Kindergarten', 'ማሳደጊያ')}</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-4 py-2 rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-full"
              title={t('Switch to Amharic', 'ወደ እንግሊዘኛ ይቀይሩ')}
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2 text-xs">{language === 'en' ? 'አማ' : 'EN'}</span>
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
