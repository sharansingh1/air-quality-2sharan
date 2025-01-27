import Welcome from "@/components/Welcome";
import Footer from "@/components/Footer";

const Page = async () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <Welcome />
      <div className="my-10 w-11/12" id="public-view-section">
        <p className="my-4 font-bold text-5xl">Public View</p>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
