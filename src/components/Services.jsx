import assets from "../assets/assets";

export default function Services() {
  const cardData = [
    {
      heading: "Advertising",
      image: assets.ads_icon,
      para: `We turn bold ideas into powerful digital solutions that connect, engage...`,
    },
    {
      heading: "Content Marketing",
      image: assets.marketing_icon,
      para: `We help you execute your plan and deliver results.`,
    },
    {
      heading: "Content Writing",
      image: assets.content_icon,
      para: `We help you create a marketing strategy that drives results.`,
    },
    {
      heading: "Socia Media",
      image: assets.social_icon,
      para: `We help you build a strong social media presence and engage with your audience.`,
    },
  ];

  return (
    <section
      id="services"
      className="
        flex flex-col
        text-center
        gap-10 items-center
        scroll-mt-20
      "
    >
      <h1
        className="
          text-5xl text-gray-600
        "
      >
        How can we help?
      </h1>
      <p
        className="
          max-w-2xl
          text-xl text-gray-500
        "
      >
        From strategy to execution, we craft digital solutions that move your
        business forward.
      </p>

      <div
        className="
          grid
          mt-20
          text-start
          gap-10
          lg:grid-cols-2
        "
      >
        {cardData.map((data) => (
          <div
            className="
              flex
              px-5 py-7
              border border-gray-300 rounded-2xl
              shadow-lg
              gap-5 items-center
              sm:px-10 sm:gap-10
            "
          >
            <img
              src={data.image}
              alt=""
              className="
                border-5 border-gray-300 rounded-full
              "
            />
            <div>
              <h3
                className="
                  mb-3
                  text-lg text-gray-700
                "
              >
                {data.heading}
              </h3>
              <p
                className="
                  text-sm leading-4 text-gray-700
                  sm:text-base sm:leading-5
                "
              >
                {data.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
