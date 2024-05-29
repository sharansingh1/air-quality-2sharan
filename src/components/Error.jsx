import Image from "next/image";
import Waves from "@/public/svg/errorWaves.svg";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

const Error = ({ status, name, message }) => {
  return (
    <div className="relative flex flex-col items-center justify-between h-screen w-full overflow-hidden">
      <Image
        src={Waves}
        className="absolute top-64 -z-10 w-screen h-screen object-cover"
        alt="Blue Waves"
      />

      <div className="h-full w-11/12 flex flex-col items-center justify-center text-center">
        <p
          className="text-center text-8xl font-semibold italic text-air-blue-200 m-0"
          data-cy="error-status"
        >
          {status}
        </p>
        <p
          className="text-center text-xl md:text-2xl font-light italic text-air-blue-200 m-0 mt-2"
          data-cy="error-name"
        >
          {name}
        </p>
        <p
          className="text-center text-sm md:text-base text-air-blue-200 mt-1"
          data-cy="error-message"
        >
          {message}
        </p>

        <div className="mt-16">
          <Link
            href="/"
            className="flex items-center rounded-xl px-4 py-2.5 text-air-blue-200 border border-air-blue-200 text-xl hover:bg-air-blue-200 hover:bg-opacity-25 transition-colors duration-300"
          >
            <LuArrowLeft className="text-air-blue text-2xl font-bold" />
            <p className="text-air-blue-200 text-lg font-normal ml-2 ">
              BACK TO HOMEPAGE
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
