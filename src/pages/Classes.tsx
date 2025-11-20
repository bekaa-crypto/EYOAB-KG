import { Card } from '@/components/ui/card';
import { Baby, BookOpen, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Classes = () => {
  const { t } = useLanguage();

  const classes = [
    {
      icon: Baby,
      name: 'KG1',
      age: t('3-4 years old', '3-4 ዓመት'),
      description: t(
        'Introduction to basic concepts, colors, shapes, and social skills. Children learn through play and interactive activities.',
        'ለመሰረታዊ ፅንሰ-ሀሳቦች፣ ቀለሞች፣ ቅርጾች እና ማህበራዊ ክህሎቶች መግቢያ። ልጆች በጨዋታ እና በይነተገናኝ እንቅስቃሴዎች ይማራሉ።'
      ),
      color: 'bg-primary',
    },
    {
      icon: BookOpen,
      name: 'KG2',
      age: t('4-5 years old', '4-5 ዓመት'),
      description: t(
        'Building literacy and numeracy skills. Focus on alphabet recognition, counting, and basic reading preparation.',
        'የማንበብና መጻፍ እና የቁጥር ክህሎቶችን መገንባት። በፊደል ማወቅ፣ መቁጠር እና መሰረታዊ የማንበብ ዝግጅት ላይ አተኩር።'
      ),
      color: 'bg-secondary',
    },
    {
      icon: Sparkles,
      name: 'KG3',
      age: t('5-6 years old', '5-6 ዓመት'),
      description: t(
        'Advanced preparation for primary school. Reading, writing, mathematics, and critical thinking skills development.',
        'ለመጀመሪያ ደረጃ ትምህርት ቤት የላቀ ዝግጅት። የማንበብ፣ የመጻፍ፣ ሂሳብ እና ትችት አስተሳሰብ ክህሎቶች ልማት።'
      ),
      color: 'bg-gradient-playful',
    },
  ];

  const subjects = [
    {
      title: t('Language & Literacy', 'ቋንቋ እና ማንበብና መጻፍ'),
      description: t('English and Amharic', 'እንግሊዘኛ እና አማርኛ'),
    },
    {
      title: t('Mathematics', 'ሂሳብ'),
      description: t('Numbers, counting, and basic operations', 'ቁጥሮች፣ መቁጠር እና መሰረታዊ ስራዎች'),
    },
    {
      title: t('Arts & Crafts', 'ጥበባት እና እጅ ስራዎች'),
      description: t('Creative expression through art', 'በጥበብ በኩል የፈጠራ አገላለጽ'),
    },
    {
      title: t('Physical Education', 'የአካል ብቃት ትምህርት'),
      description: t('Motor skills and healthy habits', 'የሞተር ክህሎቶች እና ጤናማ ልማዶች'),
    },
    {
      title: t('Music & Movement', 'ሙዚቃ እና እንቅስቃሴ'),
      description: t('Rhythm, songs, and dance', 'ሪትም፣ ዘፈኖች እና ዳንስ'),
    },
    {
      title: t('Social Studies', 'ማህበራዊ ጥናቶች'),
      description: t('Community and environment', 'ማህበረሰብ እና አካባቢ'),
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8 text-primary">
          {t('Our Classes', 'ክፍሎቻችን')}
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          {t(
            'We offer three levels of kindergarten education, each designed to meet the developmental needs of children at different ages.',
            'የተለያዩ ዕድሜዎች ላሉ ልጆች የእድገት ፍላጎቶችን ለማሟላት የተነደፉ ሶስት ደረጃዎችን የማሳደጊያ ትምህርት እናቀርባለን።'
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {classes.map((classItem, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-card transition-all duration-300 hover:scale-105 bg-card"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${classItem.color} flex items-center justify-center`}>
                <classItem.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2 text-card-foreground">{classItem.name}</h3>
              <p className="text-center text-primary font-semibold mb-4">{classItem.age}</p>
              <p className="text-muted-foreground text-center leading-relaxed">{classItem.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-3xl p-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            {t('Subjects We Teach', 'የምናስተምራቸው ትምህርቶች')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="p-6 bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-foreground">{subject.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90">{subject.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
