import './style.css';
import { klupSeridiAlt, klupSeridiUst } from './constants';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/ui/client/global/SectionTitle';
const KlüpŞeridi = () => {
  return (
    <section className="relative">
      <SectionTitle>Kulüplerimiz</SectionTitle>

      <article className="wrapper">
        <div className="marquee">
          {klupSeridiUst.map((kulupler, idx) => (
            <div key={idx} className="marquee__group">
              {kulupler.map((kulup) => (
                <Link key={kulup.alt} className="img-con " href={kulup.href}>
                  <Image
                    src={kulup.src}
                    alt={kulup.alt}
                    width={150}
                    height={150}
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="marquee marquee--reverse">
          {klupSeridiAlt.map((kulupler) => (
            <div key="" className="marquee__group">
              {kulupler.map((kulup) => (
                <Link key={kulup.alt} className="img-con " href={kulup.href}>
                  <Image
                    src={kulup.src}
                    alt={kulup.alt}
                    width={150}
                    height={150}
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default KlüpŞeridi;
