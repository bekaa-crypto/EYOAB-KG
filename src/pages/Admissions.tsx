import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, FileText, UserCheck } from 'lucide-react';

const Admissions = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    parent_name: '',
    child_name: '',
    age: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('admissions').insert([
        {
          parent_name: formData.parent_name,
          child_name: formData.child_name,
          age: parseInt(formData.age),
          phone: formData.phone,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      toast({
        title: t('Application Submitted!', 'ማመልከቻ ገብቷል!'),
        description: t(
          'We will contact you soon to discuss the next steps.',
          'ቀጣዩን እርምጃዎች ለመወያየት በቅርቡ እናነጋግርዎታለን።'
        ),
      });

      setFormData({
        parent_name: '',
        child_name: '',
        age: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: t('Error', 'ስህተት'),
        description: t('Failed to submit application. Please try again.', 'ማመልከቻ ማስገባት አልተቻለም። እባክዎ እንደገና ይሞክሩ።'),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const steps = [
    {
      icon: FileText,
      title: t('Submit Application', 'ማመልከቻ ያስገቡ'),
      description: t('Fill out the online form below', 'ከታች ያለውን የመስመር ላይ ቅጽ ይሙሉ'),
    },
    {
      icon: UserCheck,
      title: t('Review Process', 'የግምገማ ሂደት'),
      description: t('We will review your application', 'ማመልከቻዎን እንገመግማለን'),
    },
    {
      icon: CheckCircle2,
      title: t('Enrollment', 'ምዝገባ'),
      description: t('Complete enrollment and join us!', 'ምዝገባን ይጨርሱ እና ከእኛ ጋር ይቀላቀሉ!'),
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-8 text-primary">
          {t('Admissions', 'ምዝገባ')}
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          {t(
            'Join our kindergarten family! Fill out the application form below and we will get back to you shortly.',
            'የእኛን የማሳደጊያ ቤተሰብ ይቀላቀሉ! ከታች ያለውን የማመልከቻ ቅጽ ይሙሉ እና በቅርቡ እናነጋግርዎታለን።'
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center bg-card hover:shadow-card transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary flex items-center justify-center">
                <step.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-card-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto p-8 bg-card">
          <h2 className="text-3xl font-bold mb-6 text-center text-card-foreground">
            {t('Application Form', 'የማመልከቻ ቅጽ')}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="parent_name">{t("Parent's Name", 'የወላጅ ስም')} *</Label>
              <Input
                id="parent_name"
                name="parent_name"
                value={formData.parent_name}
                onChange={handleChange}
                required
                className="mt-2"
                placeholder={t('Enter your full name', 'ሙሉ ስምዎን ያስገቡ')}
              />
            </div>

            <div>
              <Label htmlFor="child_name">{t("Child's Name", 'የልጅ ስም')} *</Label>
              <Input
                id="child_name"
                name="child_name"
                value={formData.child_name}
                onChange={handleChange}
                required
                className="mt-2"
                placeholder={t("Enter your child's name", 'የልጅዎን ስም ያስገቡ')}
              />
            </div>

            <div>
              <Label htmlFor="age">{t("Child's Age", 'የልጅ ዕድሜ')} *</Label>
              <Input
                id="age"
                name="age"
                type="number"
                min="3"
                max="6"
                value={formData.age}
                onChange={handleChange}
                required
                className="mt-2"
                placeholder={t('Enter age (3-6)', 'ዕድሜን ያስገቡ (3-6)')}
              />
            </div>

            <div>
              <Label htmlFor="phone">{t('Phone Number', 'ስልክ ቁጥር')} *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-2"
                placeholder={t('Enter your phone number', 'ስልክ ቁጥርዎን ያስገቡ')}
              />
            </div>

            <div>
              <Label htmlFor="message">{t('Additional Message', 'ተጨማሪ መልእክት')} ({t('Optional', 'አማራጭ')})</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2"
                rows={4}
                placeholder={t('Any additional information or questions...', 'ማንኛውም ተጨማሪ መረጃ ወይም ጥያቄዎች...')}
              />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={loading}>
              {loading ? t('Submitting...', 'በማስገባት ላይ...') : t('Submit Application', 'ማመልከቻ ያስገቡ')}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Admissions;
