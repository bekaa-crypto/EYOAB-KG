import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Users, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';
import learningImage from '@/assets/learning.jpg';
import playingImage from '@/assets/playing.jpg';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t('Quality Education', 'ጥራት ያለው ትምህርት'),
      description: t(
        'Comprehensive curriculum for KG1-KG3 students',
        'ለKG1-KG3 ተማሪዎች አጠቃላይ የመማሪያ መርሃ ግብር'
      ),
    },
    {
      icon: Users,
      title: t('Experienced Teachers', 'ልምድ ያላቸው መምህራን'),
      description: t(
        'Dedicated and caring educators',
        'ቁርጠኛ እና ተጨባጭ አስተማሪዎች'
      ),
    },
    {
      icon: Heart,
      title: t('Safe Environment', 'ደህንነቱ የተጠበቀ አካባቢ'),
      description: t(
        'Nurturing and secure learning space',
        'አስተማማኝ እና ደህንነቱ የተጠበቀ የመማሪያ ቦታ'
      ),
    },
    {
      icon: Sparkles,
      title: t('Fun Learning', 'አዝናኝ ትምህርት'),
      description: t(
        'Interactive and engaging activities',
        'በይነተገናኝ እና አሳታፊ እንቅስቃሴዎች'
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            {t('Welcome to የአሜን Kindergarten', 'እንኳን ወደ የአሜን ማሳደጊያ በደህና መጡ')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
            {t(
              'Where Little Minds Grow Big Dreams',
              'ትንሽ አእምሮዎች ትልልቅ ህልሞችን የሚያሳድጉበት ቦታ'
            )}
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in">
            <Link to="/admissions">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                {t('Apply Now', 'አሁን ያመልክቱ')}
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white">
                {t('Learn More', 'ተጨማሪ ያንብቡ')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            {t('Why Choose Us', 'ለምን እኛን ይምረጡ')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-card transition-all duration-300 hover:scale-105 bg-card"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-playful flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            {t('Our Learning Environment', 'የእኛ የመማሪያ አካባቢ')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-card group">
              <img
                src={learningImage}
                alt="Children Learning"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <p className="text-white text-xl font-semibold">
                  {t('Interactive Learning', 'በይነተገናኝ ትምህርት')}
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-card group">
              <img
                src={playingImage}
                alt="Children Playing"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                <p className="text-white text-xl font-semibold">
                  {t('Outdoor Activities', 'የውጭ እንቅስቃሴዎች')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-playful text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('Ready to Join Us?', 'ከእኛ ጋር ለመቀላቀል ዝግጁ ነዎት?')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t(
              'Give your child the best start in their educational journey at የአሜን Kindergarten.',
              'ልጅዎን በየአሜን ማሳደጊያ ውስጥ በትምህርት ጉዞዋ ላይ ምርጡን ጅምር ይስጡት።'
            )}
          </p>
          <Link to="/admissions">
            <Button size="lg" variant="secondary" className="text-lg px-12">
              {t('Enroll Now', 'አሁን ይመዝገቡ')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
