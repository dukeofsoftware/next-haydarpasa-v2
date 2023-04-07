import Image from 'next/image';
import FooterLogo from './FooterLogo';
import { footer } from './constants';
import { socialLinks } from '@/constants/social_links';
const Footer = () => {
  return (
    <footer className="relative flex w-full  flex-col items-center justify-center gap-10 bg-red-900   px-[3%] text-white sm:px-[4%] md:flex-row md:items-start md:justify-center md:px-[5%] lg:px-[6%] xl:px-[7%] ">
      {/* Okul logo */}

      <div className=" bottom-0 flex w-full flex-col items-center justify-center gap-4 sm:min-w-[300px] md:w-auto">
        <FooterLogo src={footer.FOOTER_LOGO} alt={footer.FOOTER_ALT} />
        {/* Sosyal medya */}
        <div className="flex flex-none flex-col gap-4   ">
          <div>
            <h3 className="text-xl font-bold">Haydarpaşa&apos;yı takip et</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap">
            {socialLinks.map((item) => (
              <a
                href={item.href}
                key={item.name}
                className="hover:bg-primary/25 flex h-[42px]	w-[42px] items-center justify-center rounded-full duration-500 ease-in-out hover:scale-125"
              >
                <Image src={item.src} alt={item.name} width={33} height={33} />
              </a>
            ))}
          </div>
        </div>
        {/* Sosyal medya bitiş */}
      </div>
      {/* Lokasyon */}
      <div className=" flex w-full flex-col flex-wrap justify-center gap-3 py-6 md:flex-row  lg:gap-[53px] lg:py-[40px]">
        <div className="justfy-center flex w-full flex-col gap-2 md:max-w-[200px]">
          <h4 className="text-xl font-bold ">Telefon</h4>
          <p className="mb-6 text-lg font-bold">
            <a href={footer.TEL_LINK}>{footer.TEL}</a>
          </p>

          <h4 className="text-xl font-bold">Adres</h4>
          <address className="w-full text-lg font-bold underline">
            <a href={footer.ADRES_LINK}>{footer.ADRES}</a>
          </address>
        </div>
        <div className=" flex w-full flex-none flex-col gap-4 md:max-w-[200px]">
          <h4 className="text-xl font-bold">Ulaşım</h4>
          <p
            className=" leading-relaxed
"
          >
            {footer.ULASIM}
          </p>
          <p
            className="leading-relaxed
"
          >
            {footer.ULASIM_2}
          </p>
          <p
            className="leading-relaxed
"
          >
            {footer.ULASIM_3}
          </p>
        </div>
      </div>
      {/* Harita */}
    </footer>
  );
};

export default Footer;
