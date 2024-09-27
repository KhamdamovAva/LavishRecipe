import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import meal from "../assets/meal_icon.webp";
import pizza from "../assets/pizza_icon.webp";

function Home   () {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then(response => response.json())
      .then(result => {
        console.log(result);
        setData(result.meals);
      });
  }, []);

  const handleMealClick = (id) => {
    navigate(`/meal/${id}`); 
  };

  return (
    <section className='meal min-h-[75vh]'>
      <div className='main__container'>
        <div className='meal__header flex justify-between pt-[24px] pb-[34px]'>
          <div className='flex items-center text-[14px] text-[#8a5d0f]'>
            <img src={meal} alt="img" className='w-[48px]'/>
            <p className='bg-[#f3ecdf;] py-[3px] px-[15px]  rounded-[20px] font-semibold'>{data.length} meals</p>
          </div>
          <div className='flex items-center text-[14px] text-[#8a5d0f]'>
            <img src={pizza} alt="img" className='w-[48px]'/>
            <p className='bg-[#f3ecdf;] py-[3px] px-[15px]  rounded-[20px] font-semibold'>1 categories</p>
          </div>
        </div>
        <div className='overflow-hidden rounded-[10px]'>
          <h2 className='bg-[#8a5d0f] text-[white] p-[15px] font-semibold'>Breakfast</h2>
          <div className='flex'>
            {data && data.map((item) => (
              <div key={item.idMeal} onClick={() => handleMealClick(item.idMeal)} className='cursor-pointer'>
                <img src={item.strMealThumb} alt={item.strMeal} />
                <p className='bg-[#f3ecdf] p-[7px]'>{item.strMeal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;