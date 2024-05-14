const AsideNav = () => {
    return (
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[10px] min-w-[198px] max-w-[304px] text-left text-xs text-cornflowerblue font-inter">
        <div className="w-[270px] h-[150px] relative bg-black" />
        <h1 className="m-0 relative text-7xl font-normal font-inherit text-darkslateblue mq450:text-2xl">
          PROVEEDOR 5
        </h1>
        <div className="relative text-base text-black">RUC 0123456789</div>
        <div className="self-stretch h-[397px] relative text-base tracking-[-0.03px] text-black inline-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </div>
        <div className="relative text-sm uppercase font-medium">
          Productos Relacionados
        </div>
        <div className="w-[230px] h-[119px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[4px]">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[10px]">
            <div className="self-stretch flex-1 relative bg-black" />
            <div className="self-stretch flex-1 relative bg-black" />
          </div>
          <div className="w-[178px] flex flex-row items-start justify-between gap-[20px]">
            <div className="relative font-medium inline-block min-w-[68px]">
              Proveedor 1
            </div>
            <div className="relative font-medium inline-block min-w-[68px]">
              Proveedor 1
            </div>
          </div>
        </div>
        <div className="w-[100px] hidden flex-col items-start justify-center gap-[4px]">
          <div className="self-stretch flex-1 relative bg-black" />
          <div className="h-[15px] relative font-medium flex items-center">
            Proveedor 1
          </div>
        </div>
        <div className="w-[100px] hidden flex-col items-start justify-center gap-[4px]">
          <div className="self-stretch flex-1 relative bg-black" />
          <div className="h-[15px] relative font-medium flex items-center">
            Proveedor 1
          </div>
        </div>
        <div className="w-[100px] hidden flex-col items-start justify-center gap-[4px]">
          <div className="self-stretch flex-1 relative bg-black" />
          <div className="h-[15px] relative font-medium flex items-center">
            Proveedor 1
          </div>
        </div>
        <div className="w-[100px] hidden flex-col items-start justify-center gap-[4px]">
          <div className="self-stretch flex-1 relative bg-black" />
          <div className="h-[15px] relative font-medium flex items-center">
            Proveedor 1
          </div>
        </div>
        <div className="w-[100px] hidden flex-col items-start justify-center gap-[4px]">
          <div className="self-stretch flex-1 relative bg-black" />
          <div className="h-[15px] relative font-medium flex items-center">
            Proveedor 1
          </div>
        </div>
      </div>
    );
  };
  
  export default AsideNav;
  