import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import earth from "../assets/earth.webp";
import arrow from "../assets/arrow_icon.svg"

function Areas() {
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
    <div className='min-h-[75vh]'>
      <div className="main__container">
            <div className="flex items-center py-[30px]">
                <img src={earth} alt=""  className="w-[48px]"/>
                <p className="bg-[#f3ecdf] text-[#8a5d0f] py-[4px] px-[1rem] text-[14px] rounded-[14px]">2 areas</p>
            </div>
       {data.map((item) => (
           <div key={item.id}>
            <div className="w-[100%] bg-[#fdf9f2] rounded py-[1rem] px-[1.25rem] mb-[20px] border border-[#8a5d0f] text-[#8a5d0f] font-semibold flex justify-between items-center">
                <p className="font-[1.25rem]">{item.strArea}, {item.strMeal}</p>
                <button className="bg-[#c28419] py-[7px] px-[17px]  rounded-3xl " onClick={() => handleMealClick(item.idMeal)}>
                         <img src={arrow} alt="arrow" />
                </button>
            </div>
        </div>
       ))}
      </div>
    </div>
  )
}

export default Areas