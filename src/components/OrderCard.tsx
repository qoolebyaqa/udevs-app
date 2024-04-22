import { useState } from "react";
import { IOrder } from "../Types/Types";
import SVGComponent from "../svg/SVGComponent";
import MealItem from "./MealItem";

function OrderCard({ order }: { order: IOrder }) {
  const [focusReady, setFocusReady] = useState(false);
  const [focusFinish, setFocusFinish] = useState(false);

  function handleVisibleReady() {
    setFocusReady(true);
  }
  function handleHiddenReady() {
    setFocusReady(false);
  }
  function handleVisibleFinish() {
    setFocusFinish(true);
  }
  function handleHiddenFinish() {
    setFocusFinish(false);
  }
  return (
    <li className="mx-2 my-[9px]" onMouseEnter={order.stage ==='prepare' ? handleVisibleReady : handleVisibleFinish} onMouseLeave={order.stage ==='prepare' ? handleHiddenReady : handleHiddenFinish}>
      <div className="flex justify-between bg-white my-[1px] h-[42px] items-center pl-[10px]">
        <div className="flex">
          <p className="font-bold sm:text-[22px] text-[12px] tracking-[-1.5px] mr-[8px]">ID: {order.id}</p>
          <SVGComponent id="info" />
        </div>
        <div className="flex gap-[8px] pr-4">
          <p className="text-[14px] text-[#6E8BB7]">{`${order.TotalSum} сум`}</p>
          <SVGComponent id={order.paymentType} />
          <SVGComponent id={order.deliveryType} />
        </div>
      </div>
      <ul className="bg-white">
        {order.meals.map((meal) => {
          return <MealItem meal={meal} key={Math.random() + 1} />;
        })}
      </ul>
      <div className="flex justify-end bg-white pt-[10px] pr-2 gap-2 mb-[1px] pb-[6px]">
        <SVGComponent id="time" />
        <p className="text-[12px] text-[#6E8BB7]">{order.dateCreation}</p>
      </div>
      {order.comments && (
        <div className="flex justify-between bg-white">
          <div className="flex gap-[2px] ml-[10px] items-center">
            <p className="text-[#6E8BB7] py-[22px] text-[14px] tracking-[-0.2px]">Комментарии(1)</p>
            <p className="bg-[#0E73F7] rounded-full w-[24px] h-[20px] text-white text-[14px]">
              +{order.comments.length}
            </p>
          </div>
          <button className="mr-[20px]">
            <SVGComponent id="arrowGrey"/>
          </button>
        </div>
      )}
      {(order.stage === 'prepare' && focusReady) && (<div className="bg-white">
        <button className="sm:w-[288px] w-11/12 text-[#0E73F7] rounded-md h-[36px] bg-white border border-[#0E73F7] mb-[8px]">
          <p className="flex align-middle justify-center">
            <SVGComponent id="acceptBlue"/>
            Готово
          </p>
          </button>
      </div>)}
      {(order.stage === 'ready' && focusFinish) && (<div className="bg-white">
        <button className="w-11/12 text-[#0E73F7] rounded-md h-[36px] bg-white border border-[#0E73F7]">
          <p className="flex align-middle justify-center">
            Завершить
          </p>
          </button>
      </div>)}
      {order.stage === "new" && (
        <div className="flex p-[14px] justify-between bg-white">
          <button className="w-[140px] border border-slate-300 rounded-md text-[#e47671]">
          <p className="flex align-middle justify-center">
            <SVGComponent id="decline"/>
            Отменить
          </p>
          </button>
          <button className="w-[140px] bg-[#0E73F7] rounded-md h-[34px] text-white">
          <p className="flex align-middle justify-center">
            <SVGComponent id="acceptWhite"/>
            Принять
          </p>
          </button>
        </div>
      )}
    </li>
  );
}

export default OrderCard;
