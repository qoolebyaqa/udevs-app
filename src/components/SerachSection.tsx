import SVGComponent from "../svg/SVGComponent";

function SearchSection() {
  return (
    <section className="flex items-center">
      <div className="flex items-center">
        <div className="border border-slate-300 border-y-0 border-l-white">
          <div className="bg-[#0E73F7] m-[9.5px] w-[36px] h-[36px] flex justify-center items-center rounded-md">
            <SVGComponent id="details" />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <input
          className="border border-slate-300 h-[36px] w-[240px] rounded-md pl-10 ml-[16px] tracking-tighter bg-[url('/search.png')] bg-no-repeat"
          type="text"
          placeholder="Поиск по ID"
        />
        <div className="flex">
          <div className="border border-slate-300 h-[36px] flex w-[149px] rounded-md mr-[16px] items-center justify-around px-[6px]">
            <SVGComponent id="totalItems" />
            <p className="flex items-center tracking-[-0.5px] pl-[5px]">Всего: 115</p>
            <SVGComponent id="arrowBlue"/>
          </div>
          <div className="border border-slate-300 h-[36px] flex justify-around w-[92px] rounded-md mr-[16px] px-2">
            <SVGComponent id="totaltimer" />
            <p className="flex items-center tracking-wide">45:08</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
