interface AboutComponentProps {
  customText: string;
  sampleText: string;
}

const AboutComponent: React.FC<AboutComponentProps> = ({ customText, sampleText }) => {
  return (
<<<<<<< HEAD
    <div className="max-w-screen-lg mx-auto flex flex-col ml-28 items-center sm:flex-row">
      <div className="max-w-2xl p-4 sm:p-12 mb-14 text-center sm:text-left">
        <h1 className="font-black text-5xl sm:text-8xl mb-20">ABOUT</h1>
        <p className="font-medium text-base sm:text-1xl text-justify-center w-2xl">
          {customText}
        </p>
      </div>
      <div className="max-w-full sm:max-w-4xl p-8 sm:p-64 bg-timberwolf mt-8 sm:ml-40">
        <img src="/samplePhoto.png" alt="SamplePhoto2" className="max-w-full" />
=======
    <div className="flex flex-col items-center sm:flex-row right-0 ml-auto lg:space-x-20">
      <div className="mb-2 mr-7 text-center ml-6">
        <h1 className="font-black text-5xl sm:text-8xl mb-8 custom-font">ABOUT</h1>
        <p className="font-medium text-base sm:text-2xl text-justify mx-10 ">
          {customText}
        </p>
      </div>
      <div className="p-20 sm:p-44 bg-timberwolf mt-3 mb-12">
        <img src="/samplePhoto.png" alt="SamplePhoto2" className="right-0 self-end" />
>>>>>>> f675e18bcc7bff0dc5d605c99d8f0019755b0804
      </div>
    </div>
  );
};

export default AboutComponent;
