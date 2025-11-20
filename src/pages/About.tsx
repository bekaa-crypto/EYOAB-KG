import { Card } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8 text-primary">
            {t('About Us', 'ስለ እኛ')}
          </h1>
          
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-muted-foreground text-center leading-relaxed">
              {t(
                'የአሜን Kindergarten is a bilingual learning center located in Akaki Kality, Addis Ababa, Ethiopia. We are dedicated to providing quality early childhood education for children aged 3-6 years in KG1, KG2, and KG3 classes.',
                'የአሜን መዋለ-ህፃናት በአቃቂ ቃሊቲ፣ አዲስ አበባ፣ ኢትዮጵያ ውስጥ የሚገኝ ባለሁለት ቋንቋ የመማሪያ ማዕከል ነው። ለዕድሜያቸው ከ3-6 ዓመት ባለው ልጆች በKG1፣ KG2 እና KG3 ክፍሎች ውስጥ ጥራት ያለው የቅድመ ትምህርት ትምህርት ለመስጠት ተቆርጠናል።'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-card transition-all duration-300 bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{t('Our Mission', 'ተልዕኮአችን')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  'To nurture young minds through quality education, fostering creativity, critical thinking, and character development in a safe and loving environment.',
                  'በጥራት ትምህርት፣ በፈጠራ፣ አስተሳሰብ እና በባህርይ ልማት በደህንነት እና በፍቅር አካባቢ ውስጥ ወጣት አእምሮዎችን ማሳደግ።'
                )}
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-card transition-all duration-300 bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <Eye className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{t('Our Vision', 'ራዕያችን')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  'To be the leading kindergarten in Akaki Kality, known for excellence in early childhood education and holistic child development.',
                  'በአቃቂ ቃሊቲ ውስጥ በቅድመ ትምህርት ትምህርት እና በአጠቃላይ የልጅ ልማት ላይ በላቀ ሁኔታ የሚታወቅ ግንባር ቀደም ማሳደጊያ መሆን።'
                )}
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-card transition-all duration-300 bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-playful flex items-center justify-center">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{t('Our Values', 'እሴቶቻችን')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  'Love, respect, excellence, creativity, and community are at the heart of everything we do at የአሜን Kindergarten.',
                  'ፍቅር፣ አክብሮት፣ ልቀት፣ ፈጠራ እና ማህበረሰብ በየአሜን ማሳደጊያ ውስጥ በምናደርገው ሁሉ ውስጥ ልብ ናቸው።'
                )}
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-muted/50">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">
              {t('Our Story', 'ታሪካችን')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t(
                'Founded with a passion for early childhood education, የአሜን Kindergarten has been serving the Akaki Kality community with dedication and love. Our bilingual approach ensures that children develop strong foundations in both English and Amharic.',
                'በቅድመ ትምህርት ትምህርት ላይ በፍቅር የተመሰረተ፣ የአሜን ማሳደጊያ በአቃቂ ቃሊቲ ማህበረሰብ በቁርጠኝነት እና በፍቅር እያገለገለ ነው። የእኛ ባለሁለት ቋንቋ አቀራረብ ልጆች በሁለቱም በእንግሊዘኛ እና በአማርኛ ጠንካራ መሰረት እንዲያድጉ ያረጋግጣል።'
              )}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                'We believe that every child is unique and deserves a learning environment that celebrates their individuality while preparing them for future success. Our experienced teachers and modern facilities create the perfect setting for young learners to thrive.',
                'እያንዳንዱ ልጅ ልዩ እና ለወደፊቱ ስኬት እያዘጋጀው ግላዊነቱን የሚያከብር የመማሪያ አካባቢ እንደሚገባው እናምናለን። ልምድ ያላቸው መምህራናችን እና ዘመናዊ መገልገያዎቻችን ወጣት ተማሪዎች እንዲበለጽጉ ፍጹም ቦታ ይፈጥራሉ።'
              )}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
