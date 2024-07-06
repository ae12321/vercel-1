import Image from "next/image";
import Link from "next/link";

// const url = "https://www.course-api.com/react-tours-projectxxx";
const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(url);
  const tours: Tour[] = await response.json();
  return tours;
};

async function ToursPage() {
  // 解決されるまで画面が固まったように見える
  const tours = await fetchTours();

  //　Server componentなのでサーバログとして出力される
  console.log(tours);

  return (
    <div>
      <h1 className="text-3xl mb-4">ToursPage</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {tours.map((tour) => (
          <Link key={tour.id} href={`/tours/${tour.id}`} className="hover:text-blue-500 hover:underline">
            {/* relativeがいる、画像の高さ必須 */}
            <div className="relative h-48">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                // https://nextjs.org/docs/pages/api-reference/components/image#sizes
                // sizes="99vw"
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                priority
                className="object-cover rounded"
              />
              {/* {tour.image} */}
            </div>
            <p>{tour.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default ToursPage;
