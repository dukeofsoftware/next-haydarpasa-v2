import ContainerComp from '@/ui/global/Container';

const page = () => {
  return (
    <ContainerComp classNames="min-w-screen  min-h-screen relative pb-[56.25%] pt-24 bg-primary-5">
      <h1 className="my-6 text-3xl font-extrabold text-white">
        Haydarpaşa Lisesi Tanıtım Filmi
      </h1>
      <iframe
        width="560"
        height="315"
        className="aspect-video   h-full w-full"
        src="https://www.youtube.com/embed/kVSlNDy9cwo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </ContainerComp>
  );
};

export default page;
