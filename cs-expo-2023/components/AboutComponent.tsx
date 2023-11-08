interface AboutComponentProps {
  customText: string;
  sampleText: string;
}

const AboutComponent: React.FC<AboutComponentProps> = ({ customText, sampleText }) => {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col ml-28 items-center sm:flex-row">
      <div className="max-w-2xl p-4 sm:p-12 mb-14 text-center sm:text-left">
        <h1 className="font-black text-5xl sm:text-8xl mb-20">ABOUT</h1>
        <p className="font-medium text-base sm:text-1xl text-justify-center w-2xl">
          {customText}
        </p>
      </div>
      <div className="max-w-full sm:max-w-4xl p-8 sm:p-64 bg-timberwolf mt-8 sm:ml-40">
        <img src="/samplePhoto.png" alt="SamplePhoto2" className="max-w-full" />
      </div>
    </div>
  );
};

export default AboutComponent;