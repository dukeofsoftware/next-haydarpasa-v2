import './style.css';
import { klupSeridiAlt, klupSeridiUst } from './constants';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/ui/client/global/SectionTitle';
const KlüpŞeridi = () => {
  return (
    <section>
      <SectionTitle>Kulüplerimiz</SectionTitle>

      <article className="wrapper">
        <div className="marquee">
          {klupSeridiUst.map((klupler, idx) => (
            <div key={idx} className="marquee__group">
              {klupler.map((klup) => (
                <Link key={klup.alt} className="img-con " href={klup.href}>
                  <Image
                    src={klup.src}
                    alt={klup.alt}
                    width={150}
                    height={150}
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="marquee marquee--reverse">
          {klupSeridiAlt.map((klupler) => (
            <div className="marquee__group">
              {klupler.map((klup) => (
                <Link key={klup.alt} className="img-con " href={klup.href}>
                  <Image
                    src={klup.src}
                    alt={klup.alt}
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
