import Hero from '@/ui/client/home/hero/Hero';
import KlüpŞeridi from '@/ui/client/home/kulup_seridi';
import Landing from '@/ui/client/home/landing/index';
import TanıtımFormu from '@/ui/global/tanıtım_formu';

export default function Page() {
  return (
    <div>
      <Landing />
      <KlüpŞeridi />
      <Hero />
      <TanıtımFormu/>
    </div>
  );
}
