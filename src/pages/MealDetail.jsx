import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import pizza from "../assets/pizza_icon.webp";
import earth from "../assets/earth.webp";
import youTube from "../assets/you_tube_icon.svg"
import book from "../assets/book_icon.svg"


function MealDetail() {
   const { id } = useParams();
   const [meal, setMeal] = useState(null);

   useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
         .then(response => response.json())
         .then(result => {
            setMeal(result.meals[0]);
         });
   }, [id]);

   if (!meal) return <div className='text-center mt-[15%]'>Loading...</div>;

   return (
      <div>
         <div className='bg-[#fdf9f2]' style={{ borderBottom: "1px solid #ac8b52" }}>
            <div className='main__container'>
               <h1 className='text-[#8a5d0f] text-[1.75rem] font-bold pt-[15px]'>{meal.strMeal}</h1>
               <div className='meal__header flex justify-between pb-[15px]'>
                  <div className='flex items-center text-[14px] text-[#fdf9f2]'>
                     <img src={earth} alt="img" className='w-[48px]' />
                     <p className='bg-[#c28419] py-[5px] px-[15px]  rounded-[20px] font-semibold'>{meal.strArea}</p>
                  </div>
                  <div className='flex items-center text-[14px] text-[#fdf9f2]'>
                     <img src={pizza} alt="img" className='w-[48px]' />
                     <p className='bg-[#c28419] py-[5px] px-[15px]  rounded-[20px] font-semibold'>{meal.strCategory}</p>
                  </div>
               </div>
            </div>
         </div>
         <div className='main__container'>
            <h3 className='text-[#8a5d0f] text-[1.25rem] font-semibold py-[20px]'>Requirements</h3>
            <table className='w-[100%] rounded text-[#ac8b52]'>
               <tr>
                  <th>Ingredient</th>
                  <th>Measurement</th>
               </tr>
               <tr>
                  <td>{meal.strIngredient1}</td>
                  <td>{meal.strMeasure1}</td>
               </tr>
               <tr>
                  <td>{meal.strIngredient2}</td>
                  <td>{meal.strMeasure2}</td>
               </tr>
               <tr>
                  <td>{meal.strIngredient3}</td>
                  <td>{meal.strMeasure3}</td>
               </tr>
               <tr>
                  <td>{meal.strIngredient4}</td>
                  <td>{meal.strMeasure4}</td>
               </tr>
               <tr>
                  <td>{meal.strIngredient5}</td>
                  <td>{meal.strMeasure5}</td>
               </tr>
               <tr>
                  <td>{meal.strIngredient6}</td>
                  <td>{meal.strMeasure6}</td>
               </tr>
               <tr>
                  <td>{meal.strIngredient7}</td>
                  <td>{meal.strMeasure7}</td>
               </tr>
               <tr>
                  <td>{meal.strIngredient8}</td>
                  <td>{meal.strMeasure8}</td>
               </tr>
               <tr>
                  <td>{meal.strIngredient9}</td>
                  <td>{meal.strMeasure9}</td>
               </tr>
            </table>

            <h3 className='text-[#8a5d0f] text-[1.25rem] font-semibold py-[20px]'>Preparation</h3>
            <div className='bg-[#fdf9f2] p-[20px] rounded instruction'>
               <p>{meal.strInstructions}</p>
            </div>

            <h3 className='text-[#8a5d0f] text-[1.25rem] font-semibold py-[20px]'>Sources</h3>
            <div className='flex space-x-[20px] mb-[50px]'>
               <a href={meal.strYoutube} className='flex bg-[#f3ecdf]  w-[115px] justify-center py-[4px] px-[1rem] underline text-[#c28419]'>
                  <img src={youTube} alt="youtube" className='pr-2' />
                  Youtube
               </a>
               <a href={meal.strSource} className='flex bg-[#f3ecdf]  w-[115px] justify-center py-[4px] px-[1rem] underline text-[#c28419]'>
                  <img src={book} alt="youtube" className='pr-2' />
                  Cookbook
               </a>
            </div>
         </div>
      </div>
   );
}

export default MealDetail;
