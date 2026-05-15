import assets from "../assets/assets";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        flex flex-col
        text-center
        gap-10 items-center
        mt-25
        scroll-mt-20
      "
    >
      <div
        className="
          flex
          p-1.5 pr-3
          border border-gray-400 rounded-full
          gap-3 items-center
        "
      >
        <img
          src={assets.group_profile}
          alt=""
          className="
            h-6
          "
        />
        <span
          className="
            text-xs
            sm:text-sm
          "
        >
          {" "}
          Trusted by 10k+ people
        </span>
      </div>

      <h1
        className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-[90px] lg:leading-25
        "
      >
        Turning imagination into{" "}
        <span
          className="
            text-transparent
            bg-linear-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text
          "
        >
          digital
        </span>{" "}
        impact.
      </h1>

      <span
        className="
          max-w-sm
          text-sm text-gray-500
          sm:max-w-md sm:text-xl
          md:max-w-xl
        "
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </span>

      <img src={assets.hero_img} alt="" />
    </section>
  );
}
