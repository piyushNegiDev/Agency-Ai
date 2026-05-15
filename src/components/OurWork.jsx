import assets from "../assets/assets";

export default function OurWork() {
  const ourWorkData = [
    {
      heading: "Mobile app marketing",
      image: assets.work_mobile_app,
      para: `We turn bold ideas into powerful digital solutions that connect,
              engage...`,
    },
    {
      heading: "Dashboard management",
      image: assets.work_dashboard_management,
      para: `We help you execute your plan and deliver results.`,
    },
    {
      heading: "Fitness app promotion",
      image: assets.work_fitness_app,
      para: `We help you create a marketing strategy that drives results.`,
    },
  ];

  return (
    <section
      id="ourWork"
      className="
        flex flex-col
        text-center
        items-center gap-10
        scroll-mt-20
      "
    >
      <h1
        className="
          text-5xl text-gray-600
        "
      >
        Our latest work
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
          grid grid-cols-1
          w-full
          gap-x-10 gap-y-15
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        {ourWorkData.map((data) => (
          <div
            className="
              flex flex-col
              text-start
              gap-3
            "
          >
            <img src={data.image} alt="" />
            <h2
              className="
                text-xl text-gray-700
              "
            >
              {data.heading}
            </h2>
            <p
              className="
                leading-5 text-gray-500
              "
            >
              We turn bold ideas into powerful digital solutions that connect,
              engage
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
