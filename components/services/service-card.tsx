import { ServiceType } from "../../hooks/useServiceData";
import Image from "next/image";

const ServiceCard: React.FC<ServiceType> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <>
      <div className=" flex flex-col items-start justify-start px-4 py-6 bg-whitesmoke-200 dark:bg-white text-black rounded-lg laptop:max-w-[200px] laptop:min-w-[150px]">
        <Image
          src={imageUrl}
          alt={`images of ${title}`}
          width={40}
          height={40}
          className=" object-cover h-[2.5rem] w-[2.5rem]"
        />
        <h1 className="mt-4 text-sm text-start">{title}</h1>
        <p className="mt-2 text-sm text-center text-gray-700 dark:text-gray-400 line-clamp-2">
          {description}
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
