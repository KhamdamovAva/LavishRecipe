import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow_icon.svg"

function Ingredients() {
  const [meal, setMeal] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    if (search.trim() !== "") {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`)
        .then(response => response.json())
        .then(result => {
          if (result.meals) {
            setMeal(result.meals);
          } else {
            setMeal([]);
          }
        });
    } else {
      setMeal([]);
    }
  }, [search]);


  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleMealClick = (id) => {
    navigate(`/meal/${id}`);
  };

  return (
    <div className="main__container">
      <div className="w-[100%] flex">
        <div className="w-[50%] py-[30px] pr-[20px]">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search by Category"
            className="bg-[#fdf9f2] rounded text-[#8a5d0f] text-[14px] py-[0.5rem] px-[1rem] w-[100%] border border-[#8a5d0f]"
          />
          {meal.length > 0 && (
            <p className="text-[#8a5d0f] text-[16px] mt-[10px]">
              {meal[0].strMeal}
            </p>
          )}
        </div>
        <div className="bg-[#fdf9f2] min-h-[100vh] w-[50%] text-[#8a5d0f] block px-[20px] border border-l-[#8a5d0f]">
          <p className="text-center pt-[30px]">
            Meals cooked in this category will display here
          </p>
          <div className="">
            {meal.length > 0 ? (
              meal.map((item) => (
                <div key={item.idMeal} className="flex bg-[#f3ecdf] rounded  my-[20px] border border-[#8a5d0f]">
                    <img src={item.strMealThumb} alt={item.strMeal} className="w-[200px] rounded  " />
                  <div className="p-[20px] w-[70%]">
                    <p className="text-[#8a5d0f] text-[1.1rem] font-semibold">{item.strMeal}</p>
                      <button className="bg-[#c28419] py-[7px] px-[17px]  rounded-3xl ml-[290px] mt-[100px]" onClick={() => handleMealClick(item.idMeal)}>
                         <img src={arrow} alt="arrow" />
                      </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center mt-[400px]">No meals found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
