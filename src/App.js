import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLodading] = useState(true);
  const [term, setTerm] = useState("mew"); //검색어

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json()) //요청결과를 js로 변환
      .then((data) => setImages(data.hits)) //데이터 출력
      .catch((err) => console.log(err)); //에러발생시 에러출력
  }, []);

  return (
    <div className="container mx-auto my-7">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}
export default App;
