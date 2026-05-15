import assets from "../assets/assets";

export default function Footer() {
  return (
    <footer
      className="px-5 mx-auto
        sm:px-10
        md:px-30
        bg-slate-50
        py-5 mt-25 grid gap-10 md:grid-cols-2"
    >
      <div className="flex flex-col gap-4 items-start">
        <img
          className=" h-6
          sm:h-8
          
          "
          src={assets.logo}
          alt=""
        />
        <p className="text-gray-700">
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>

        <ul
          className="
          text-gray-700
          gap-3
          flex lg:gap-5
          lg:text-base font-bold text-xs
        "
        >
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Our work</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-gray-700 text-xl">Subscribe to our newsletter</h3>
        <p className="text-gray-700">
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="outline outline-gray-500 rounded-sm py-2 pl-2 w-full"
          />
          <button
            className=" 
            px-4 py-2
            text-white
            bg-blue-500
            rounded-sm
            "
          >
            Subscribe
          </button>
        </div>
      </div>

      <hr className="col-span-full text-gray-500" />

      <div className="col-span-full flex justify-between max-sm:flex-col items-center gap-2 text-center">
        <p className="text-gray-500">
          Copyright 2025 © piyushNegiDev - All Right Reserved.
        </p>

        <div className="flex gap-4">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
    </footer>
  );
}
