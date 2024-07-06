import localBigImage from "@/images/local-big-image.jpg";
// console.log(localBigImage); // object
import Image from "next/image";

const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>id: {params.id}</h1>
      <section className="flex gap-4 mt-4">
        <div>
          <Image priority src={localBigImage} alt="local-big-image" width={192} height={192} className="w-48 h-48 object-cover rounded" />
        </div>
        <div data-name="remote-image">
          <Image priority src={url} alt="remote-image" width={192} height={192} className="w-48 h-48 object-cover rounded" />
        </div>
      </section>
    </div>
  );
}

export default page;
