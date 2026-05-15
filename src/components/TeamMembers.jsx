import { teamData } from "../assets/assets";

export default function TeamMembers() {
  return (
    <section
      className="
          flex flex-col
          gap-10 items-center
          text-center
        "
    >
      <h1
        className="
            text-5xl text-gray-600
          "
      >
        Meet the team
      </h1>

      <p
        className="
            max-w-2xl
            text-xl text-gray-500
          "
      >
        A passionate team of digital experts dedicated to your brands success.
      </p>

      <div
        className="w-full justify-center grid gap-5 grid-cols-2 sm:grid-cols-[repeat(auto-fit,240px)]
        "
      >
        {teamData.map((data) => (
          <div className="sm:text-start flex flex-col text-center sm:flex-row gap-2 items-center border border-gray-300 rounded-2xl shadow-lg px-2 sm:px-5 py-2">
            <img className="h-13 rounded-full" src={data.image} alt="" />
            <div>
              <h3>{data.name}</h3>
              <span className="text-sm text-gray-500">{data.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
