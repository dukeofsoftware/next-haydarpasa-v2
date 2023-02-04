'use client';
import { useState, useEffect } from 'react';
import SmallMenu from '../sidebar/SmallMenu';
import Haberler from '../haberler';
import NavbarLogos from './NavbarLogos';
import NavbarButton from './NavbarButton';
import Sidebar from '@/ui/client/global/navbar/sidebar/Sidebar';

interface NavProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}
function Navbar({ isOpen, setIsOpen }: NavProps) {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    await fetch(`/api/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data = data.posts;
        setPosts(data);
      });
  };
  useEffect(() => {
    getPosts();

  }, []);
  return (
    <>
      <div>
        <div className=" absolute z-30 flex max-h-[90px] w-full items-center justify-between  px-[4%] py-4 lg:px-[7%]">
          <NavbarLogos isOpen={isOpen} />
          <NavbarButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      {isOpen && (
        <div className="h-full w-full">
          <Haberler posts={posts} />
          <Sidebar setIsOpen={setIsOpen} />
        </div>
      )}

      <SmallMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;

/*   const navbar = (
   <>
     <AnimatePresence>
       {!isOpen && (
         <motion.nav
           variants={navVariants}
           initial="hidden"
           animate="show"
           exit="exit"
           className="sticky py-4   flex items-center z-10 h-20  justify-between  w-full   px-[10%] "
         >
           <div className=" w-[300px] relative h-full ">
             <Link href="/">
               {!isMobile ? (
                 <Image
                   src={logolar.okulLogo}
                   alt="Haydarpaşa lisesi Logoso"
                   fill
                 />
               ) : (
                 <Image
                   src={logolar.okulLogoTrans}
                   alt="Haydarpaşa lisesi Logoso"
                   width={50}
                   height={60}
                 />
               )}
             </Link>
           </div>
           <div>
             <button
               type="button"
               className="p-2 bg-red-800 rounded-full"
               onClick={() => setIsOpen(true)}
             >
               <Image src={menu} alt="menu" width={30} height={30} />
             </button>
           </div>
         </motion.nav>
       )}
     </AnimatePresence>
     <AnimatePresence>
       {isOpen && (
         <motion.div
           variants={navVariants}
           exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
           transition={{
             delay: 0.4,
           }}
           initial="hidden"
           animate="show"
           className="sticky top-0 z-20 bg-secondary h-[100vh] overflow-y-auto"
         >
           <div className="flex flex-col px-[10%]">
             <nav className=" flex h-20 items-center justify-between py-4  top-0  z-20">
               <div
                 className={`${isMobile ? "w-auto" : "w-[300px]"
                   }  relative h-full`}
               >
                 <Link href="/">
                   {!isMobile ? (
                     <Image
                       src={logolar.okulLogo}
                       alt="Haydarpaşa lisesi Logoso"
                       fill
                     />
                   ) : (
                     <Image
                       src={logolar.okulLogoTrans}
                       alt="Haydarpaşa lisesi Logoso"
                       width={50}
                       height={60}
                     />
                   )}
                 </Link>
               </div>
               <motion.button
                 exit={{ y: -50, opacity: 0 }}
                 onClick={() => setIsOpen(false)}
                 type="button"
               >
                 <Image src={close} alt="menu" width={30} height={30} />
               </motion.button>
             </nav>

             <section className="sticky flex flex-col md:flex-row  justify-around h-[100vh] gap-3 bg-primary2">
               <div className="  flex flex-col p-5   md:w-[420px] md:h-[40%] text-white mt-[25px] lg:mt-[100px]">
                 <h1 className="text-4xl pb-5 underline underline-offset-8 mb-3	">
                   Haydarpaşa'yı keşfet
                 </h1>
                 <motion.div
                   className="flex flex-col gap-6 "
                   show={{ opacity: 1 }}
                   transition={{ staggerChildren: 0.4, delayChildren: 0.5 }}
                 >
                   {navigation.map((item, index) => (
                     <motion.div
                       key={index}
                       variants={linkVariants}
                       initial="hidden"
                       animate="show"
                       whileHover="hover"
                       style={{ originX: 0 }}
                     >
                       <Link
                         onClick={() => setIsOpen(false)}
                         href={item.link}
                         className="text-[26px] lg:text-[21px] font-bold"
                       >
                         {item.name}
                       </Link>
                       <Divider />
                     </motion.div>
                   ))}
                 </motion.div>
               </div>
   
               <nav className="  md:w-[620px] h-[80%] flex flex-col p-5 gap-5 mt-[25px] lg:mt-[100px]  text-white">
                 {nav2.map((item, index) => (
                   <motion.div
                     style={{ originX: 0 }}
                     variants={linkVariants}
                     initial="hidden"
                     animate="show"
                     whileHover="hover"
                     key={index + 100}
                   >
                     <Link
                       href={item.href}
                       onClick={() => setIsOpen(false)}
                       className="text-[21px] font-bold  lg:text-[21px]"
                     >
                       {item.name}
                     </Link>
                     <Divider />
                   </motion.div>
                 ))}
               </nav>
             </section>
           </div>
         </motion.div>
       )}
     </AnimatePresence>
   </>
 ); */
