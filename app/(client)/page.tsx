import Events from '@/ui/client/home/events/Events';
import Hakkinda from '@/ui/client/home/hakkinda/Hakkinda';
import Hero from '@/ui/client/home/hero/Hero';
import KlüpŞeridi from '@/ui/client/home/kulup_seridi';
import Landing from '@/ui/client/home/landing/index';
import TanıtımFormu from '@/ui/global/tanıtım_formu';
import Haberler from '@/ui/client/home/haberler/Haberler';

export default function Page() {
  return (
    <div>
      <Landing />
      <KlüpŞeridi />
      <Hero />
      {/* @ts-expect-error Server Component */}
      <Events/>
      <Hakkinda/>
      {/* @ts-expect-error Server Component */}
      <Haberler/>
      <TanıtımFormu />
      
    </div>
  );
}
