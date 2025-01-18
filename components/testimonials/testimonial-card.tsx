import Image from "next/image";
import { TestimonialType } from "../../hooks/useTestimonialData";

const TestimonialCard: React.FC<TestimonialType> = ({
  name,
  title,
  feedback,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-start justify-center gap-5 p-5 bg-whitesmoke-200 dark:bg-white rounded-lg tablet:flex-row">
      <div className="flex items-center gap-5 ">
        <Image
          src={imageUrl}
          alt={`${name}'s profile`}
          width={100}
          height={100}
          className="rounded-full object-cover h-[100px] w-[100px] tablet:h-[150px] tablet:w-[150px]"
        />
        <div className=" tablet:hidden">
          <h1 className="text-black text-xl mb-1">{name}</h1>
          <h3 className="text-black mt-0 text-md">{title}</h3>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center relative tablet:items-start">
        <svg
          width={30}
          height={20}
          viewBox="0 0 50 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mil-mb-30 mil-up tablet:absolute tablet:left-20 tablet:-top-4"
        >
          <path
            d="M13.0425 9.59881C13.734 7.27646 15.0099 5.16456 16.7515 3.45982C17.0962 3.11455 17.2958 2.65336 17.31 2.16891C17.3243 1.68445 17.1523 1.2126 16.8285 0.848135L16.6225 0.619235C16.3552 0.313531 15.9908 0.106228 15.5887 0.0311485C15.1866 -0.0439312 14.7706 0.0176452 14.4085 0.205827C-0.299477 8.01918 -0.116489 18.6169 0.0295105 20.4165C0.0195105 20.6139 -0.000488281 20.8112 -0.000488281 21.0085C0.0518962 23.1543 0.724816 25.2405 1.93898 27.0214C3.15314 28.8023 4.85796 30.2037 6.85252 31.0604C8.84709 31.9171 11.0483 32.1935 13.1967 31.8569C15.3452 31.5203 17.3514 30.5848 18.9788 29.1606C20.6063 27.7364 21.7873 25.8829 22.3826 23.8185C22.9779 21.7541 22.9627 19.5648 22.3389 17.5086C21.715 15.4524 20.5085 13.615 18.8614 12.2129C17.2144 10.8108 15.1954 9.90246 13.0425 9.59487V9.59881Z"
            fill="lightblue"
          />
          <path
            d="M40.2255 9.59881C40.9171 7.27648 42.193 5.16459 43.9345 3.45982C44.2793 3.11455 44.4788 2.65336 44.4931 2.16891C44.5074 1.68445 44.3353 1.2126 44.0115 0.848135L43.8055 0.619235C43.5382 0.313531 43.1738 0.106228 42.7717 0.0311485C42.3696 -0.0439312 41.9536 0.0176452 41.5915 0.205827C26.8835 8.01918 27.0665 18.6169 27.2115 20.4165C27.2015 20.6139 27.1815 20.8112 27.1815 21.0085C27.2332 23.1544 27.9055 25.241 29.1191 27.0224C30.3328 28.8038 32.0373 30.2057 34.0318 31.063C36.0262 31.9203 38.2274 32.1972 40.3761 31.8611C42.5248 31.525 44.5313 30.5899 46.1591 29.166C47.787 27.742 48.9684 25.8887 49.5641 23.8242C50.1599 21.7598 50.1451 19.5704 49.5215 17.514C48.8979 15.4576 47.6915 13.6199 46.0445 12.2176C44.3975 10.8152 42.3785 9.90659 40.2255 9.59881Z"
            fill="lightblue"
          />
        </svg>
        <p className="text-black mt-3 text-sm relative line-clamp-3">
          {feedback}
        </p>
        <div className="hidden tablet:block">
          <h1 className="text-black text-xl mb-1">{name}</h1>
          <h3 className="text-black mt-0 text-md">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
