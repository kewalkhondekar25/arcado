import React from "react";

interface TitleSectionProps {
  title: string;
  subheading?: string;
  pill: string
};

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subheading,
  pill
}) => {
  return (
    <React.Fragment>
      <section
        className="flex
        flex-col
        gap-4
        justify-center
        items-start
        md:items-center">
        <article
          className="rounded-full
            p-[1px]
            text-sm
            dark:bg-gradient-to-r
            dark:from-[#0560E8]
            dark:to-[#7000FF]">
          <div
            className="rounded-full 
            px-3
            py-2
            dark:bg-black
            dark:text-[#817EB5]
           ">
            {pill}
          </div>
        </article>
        <>
          <h2 
            className="text-left
            text-3xl
            sm:text-5xl
            sm:max-w-[750px]
            md:text-center
            dark:text-[#817EB5]
            font-semibold">
              {title}
          </h2>
          <p 
            className="dark:text-[#817EB5]
            sm:max-w-[450px]
            md:text-center">
              {subheading}
          </p>
        </>
      </section>
    </React.Fragment>
  )
};

export default TitleSection;