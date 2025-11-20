import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

interface Teacher {
  id: string;
  name: string;
  name_am: string;
  subject: string;
  subject_am: string;
  experience: number;
  contact: string | null;
  photo_url: string | null;
}

const Teachers = () => {
  const { t, language } = useLanguage();
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const { data, error } = await supabase
        .from('teachers')
        .select('*')
        .order('name');

      if (error) throw error;
      setTeachers(data || []);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8 text-primary">
          {t('Our Teachers', 'መምህራናችን')}
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          {t(
            'Meet our dedicated and experienced team of educators who are passionate about early childhood development.',
            'ስለቅድመ ትምህርት ልማት ቁርጠኞች የሆኑ እና ልምድ ያላቸው አስተማሪዎቻችንን ያግኙ።'
          )}
        </p>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t('Loading teachers...', 'መምህራንን በመጫን ላይ...')}</p>
          </div>
        ) : teachers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <Card
                key={teacher.id}
                className="overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105 bg-card"
              >
                <div className="h-64 bg-gradient-playful flex items-center justify-center">
                  {teacher.photo_url ? (
                    <img
                      src={teacher.photo_url}
                      alt={language === 'en' ? teacher.name : teacher.name_am}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-6xl text-white">
                        {(language === 'en' ? teacher.name : teacher.name_am).charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground">
                    {language === 'en' ? teacher.name : teacher.name_am}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {language === 'en' ? teacher.subject : teacher.subject_am}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Award className="h-4 w-4" />
                    <span>
                      {teacher.experience} {t('years of experience', 'ዓመት ልምድ')}
                    </span>
                  </div>
                  {teacher.contact && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">{teacher.contact}</span>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Card className="p-12 max-w-2xl mx-auto bg-muted/50">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                {t('Coming Soon!', 'በቅርቡ!')}
              </h3>
              <p className="text-muted-foreground">
                {t(
                  'We are currently updating our teacher profiles. Please check back soon to meet our wonderful team!',
                  'አሁን የመምህራን መገለጫዎቻችንን እያዘመንን ነው። እባክዎ በቅርቡ ይመልሱ እና አስደናቂ ቡድናችንን ያግኙ!'
                )}
              </p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Teachers;
