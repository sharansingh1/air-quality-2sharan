import Welcome from "@/components/Welcome";
import Footer from "@/components/Footer";
import { getMarkers } from "@/utils/api";
import { ArcGIS } from "@/components/Map/Map";

const Page = async () => {
  const { items } = await getMarkers();

  return (
    <div className="flex flex-col justify-center items-center relative">
      <Welcome />
      <div className="my-10 w-11/12" id="public-view-section">
        <p className="my-4 font-bold text-5xl">Public View</p>
        <ArcGIS height="h-[500px]" width="w-full" markers={items} />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
