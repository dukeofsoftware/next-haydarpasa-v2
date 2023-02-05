import LandingTitle from './LandingTitle';
import { okulFotografları } from '@/constants/okul_fotografları';
import LandingBody from './LandingBody';
import LandingButton from './LandingButton';
import  Image from 'next/image';
const Landing = () => {
  return (
    <section className="relative h-[80vw] max-h-[95vh] min-h-[69vh] w-full pt-[5rem] sm:h-[70vw] sm:min-h-[59vh]   ">
   
      <div className="z-20 mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center px-4 text-center lg:py-16 lg:px-12">
        <LandingTitle>Biz öğrencileri geliştiriyoruz.</LandingTitle>
        <LandingBody>
          Haydarpaşa Lisesi&apos;nde biz kişisel gelişime, akademik başarıya ve
          sosyal etkinliklere önem veririz. Öğrencilerimizin hayata
          hazırlanmalarına yardım ederiz.
        </LandingBody>
        <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mb-16">
          <LandingButton href="/kesfet/kisaca">
            Haydarpaşa&apos;yı keşfet
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </LandingButton>
          <LandingButton href="/hakkimizda/video">
            <svg
              className="mr-2 -ml-1 h-5 w-5 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>{' '}
            Videoyu izle
          </LandingButton>
        </div>
     
      </div>
      
    </section>
  );
};

export default Landing;
