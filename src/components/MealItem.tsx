import { Meal } from "../Types/Types";

function MealItem({ meal }: { meal: Meal }) {
  return (
    <>
      <li className="flex gap-[3px] font-medium text-[14px] pl-[9px] pt-[10px]">
        <p>{meal.quantity}</p>
        <p>x</p>
        <p className="pl-[3.9px] tracking-[0.4px] leading-[22px]">{meal.title}</p>
      </li>
      {meal.preferences && (
        <ul>
          {meal.preferences.map((meal) => {
            return (
              <li key={Math.random() + 7} className="font-thin text-[14px] text-left pl-8 leading-[18px]">
                {meal}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default MealItem;
