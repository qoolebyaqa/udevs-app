import { IOrder } from "../Types/Types";
import SVGComponent from "../svg/SVGComponent";
import OrderCard from "./OrderCard";
import avatar from '/Avatar.png';

function OrdersStage({ orders }: { orders: IOrder[] }) {
  const newStagedOrders = orders.filter((order) => order.stage === "new");
  const preparingStagedOrders = orders.filter(
    (order) => order.stage === "prepare"
  );
  const readyStagedOrders = orders.filter((order) => order.stage === "ready");
  const courierStagedOrders = orders.filter(
    (order) => order.stage === "courier"
  );
  return (
    <section className="flex">
      <div className="self-end">
        <div className="bg-white m-[9.5px] w-[37px] h-[36px] flex justify-center items-center">
          <SVGComponent id="settings"/>
        </div>
        <div className="flex justify-center border border-t-slate-300 border-b-0 border-x-0">
          <img src={avatar} alt="userAvatar" className="w-[32px] h-[32px] m-[12px]"/>
        </div>
      </div>
      <div className="flex border border-l-slate-300 border-y-0 border-r-0 mb-[28px]">
        {newStagedOrders.length > 0 && (
          <div className="w-[342px] py-4 pl-4">
            <h4 className="leading-6 bg-[#0E73F7] text-white text-left rounded-t-md h-[47px] pl-[10px] flex items-center font-bold tracking-tight">
              НОВЫЙ ({newStagedOrders.length})
            </h4>
            <ul className="list-none bg-[#EFF0F2] pt-[8px] pb-[2px]">
              {newStagedOrders.map((order) => {
                return <OrderCard order={order} key={Math.random() + 2} />;
              })}
            </ul>
          </div>
        )}
        {preparingStagedOrders.length > 0 && (
          <div className="w-[342px] py-4 pl-4">
            <h4 className="leading-6 bg-[#F8C51A] text-white text-left rounded-t-md h-[47px] pl-[10px] flex items-center font-bold tracking-normal">
              ЗАГОТОВКА ({preparingStagedOrders.length})
            </h4>
            <ul className="list-none bg-[#EFF0F2] pt-[8px] pb-[2px]">
              {preparingStagedOrders.map((order) => {
                return <OrderCard order={order} key={Math.random() + 3} />;
              })}
            </ul>
          </div>
        )}
        {readyStagedOrders.length > 0 && (
          <div className="w-[344px] py-4 pl-4">
            <h4 className="leading-6 bg-[#23C349] text-white text-left rounded-t-md h-[47px] pl-[10px] flex items-center font-bold tracking-tight">
              ГОТОВ ({readyStagedOrders.length})
            </h4>
            <ul className="list-none bg-[#EFF0F2] pt-[9px] pb-[2px]">
              {readyStagedOrders.map((order) => {
                return <OrderCard order={order} key={Math.random() + 4} />;
              })}
            </ul>
          </div>
        )}
        {courierStagedOrders.length > 0 && (
          <div className="w-[358px] p-4">
            <h4 className="leading-6 bg-[#19C19D] text-white text-left rounded-t-md h-[47px] pl-[10px] flex items-center font-bold tracking-tight">
              КУРЬЕР В ПУТИ ({courierStagedOrders.length})
            </h4>
            <ul className="list-none bg-[#EFF0F2] pt-[8px] pb-[2px]">
              {courierStagedOrders.map((order) => {
                return <OrderCard order={order} key={Math.random() + 5} />;
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default OrdersStage;
