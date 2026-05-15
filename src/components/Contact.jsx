import assets from "../assets/assets";

export default function Contact({ contactRef }) {
  return (
    <section
      ref={contactRef}
      id="contactUs"
      className="scroll-mt-20 flex flex-col items-center gap-10"
    >
      <h1
        className="
        text-center
          text-5xl text-gray-600
        "
      >
        Reach out to us
      </h1>
      <p
        className="
        text-center
          max-w-2xl
          text-xl text-gray-500
        "
      >
        From strategy to execution, we craft digital solutions that move your
        business forward.
      </p>

      <form action="" className="flex flex-col  items-start gap-5">
        <div className="flex md:flex-row flex-col gap-5">
          <div>
            <label
              htmlFor="name"
              className="text-gray-700 font-medium mb-1 inline-block"
            >
              Your name
            </label>
            <div className="flex gap-3 border px-4 border-gray-300 rounded-xl">
              <img src={assets.person_icon} alt="" />
              <input
                type="text"
                name="name"
                id="name"
                className="py-2 sm:w-3xs outline-none"
                placeholder="Enter your name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="text-gray-700 font-medium mb-1 inline-block"
            >
              Email id
            </label>
            <div className="flex gap-3 border px-4 border-gray-300 rounded-xl">
              <img src={assets.email_icon} alt="" />
              <input
                type="text"
                name="name"
                id="name"
                className="py-2 sm:w-3xs outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>

        <div
          className="flex flex-col gap-1 text-gray-700 font-medium w-full
        "
        >
          <label htmlFor="message">Message</label>
          <div className="border px-4 py-2 border-gray-300 rounded-xl">
            <textarea
              rows={7}
              name="message"
              placeholder="Enter your message"
              className="outline-none w-full"
              id="message"
            ></textarea>
          </div>
        </div>

        <div
          className="
            px-4 py-2
            text-white
            bg-blue-500
            rounded-xl
            gap-5
            inline-flex"
        >
          <input type="submit" value="Sumbit" />
          <img src={assets.arrow_icon} alt="" />
        </div>
      </form>
    </section>
  );
}
