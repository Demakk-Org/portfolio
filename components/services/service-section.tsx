"use client";

import useFirestore from "../../hooks/useFirestore";
import ServiceCard from "./service-card";

const ServiceSection = () => {
  const {data, isLoading, error} = useFirestore("services")

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center dark:text-white px-[5%] tablet:px-[10%] desktop:px-[17%]"
    >
      <h1 className="text-3xl tablet:text-6xl mb-0">Services</h1>
      <p className=" tablet:px-[100px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
        a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
        fugit eos similique quasi odio quo laudantium, minus sunt.
      </p>
      <div className="flex flex-col gap-3 tablet:flex-row">
        {isLoading
          ? "Loading"
          : error
          ? "getting error when fetching the data"
          : data.map((service: any) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
      </div>
    </section>
  );
};

export default ServiceSection;
