/* eslint-disable @next/next/no-img-element */
import profilePic from "@/assets/image.jpeg";

const Header = () => {
  return (
    <div className="flex-col w-full">
      <div className="flex-col bg-secondary w-full text-text pt-[9.5%] pb-[10%]">
        <div className="flex items-center justify-center">
          <img
            src={profilePic.src}
            alt="Profile"
            className="ethan-hover w-[18%] h-[18%] rounded-full ml-6 border-accent border-8"
          />
        </div>
        <div className="flex mt-[5%] items-center justify-center px-[20%]">
          <div className="flex-row text-5xl font-sans font-extrabold">
            <span className="text-text">Hey, I&apos;m </span>
            <span className="text-accent"> Ethan Bonsall. </span>
            <span className="text-text">
              Here, you can check out what I&apos;m working on and more about
              me. i &lt;3 coding and web dev.
            </span>
          </div>
        </div>
      </div>
      <div className="h-6 flex w-full bg-accent"></div>
    </div>
  );
};

export default Header;
