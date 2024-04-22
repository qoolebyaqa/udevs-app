function Header({userLetter}:{userLetter: string}) {
  return ( <header className="flex w-dvw items-center">
    <div className="border border-t-0 border-l-0 border-r-0 border-b-slate-300">
      <div className="rounded-full bg-[#2985EB] text-white w-[32px] h-[32px] mx-[12px] my-[11.5px] flex items-center justify-center">{userLetter}</div>
    </div>
    <h2 className="border border-t-0 border-r-0 border-l-slate-300 border-b-slate-300 text-left text-[22px] font-semibold flex items-center h-[56px] w-full p-[16px] tracking-[-0.6px]">Сегодняшние заказы</h2>
  </header> );
}

export default Header;