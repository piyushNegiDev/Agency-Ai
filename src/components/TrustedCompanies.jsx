import { company_logos } from "../assets/assets";

export default function TrustedCompanies() {
  return (
    <section
      className="
          flex flex-col
          gap-10 justify-center items-center
        "
    >
      <p
        className="
            text-xl text-gray-500
          "
      >
        Trusted by Leading Companies
      </p>
      <div
        className="
            flex flex-wrap
            gap-10 justify-center
          "
      >
        {company_logos.map((image) => (
          <img
            src={image}
            alt=""
            className="
                h-5
                md:h-7
              "
          />
        ))}
      </div>
    </section>
  );
}
