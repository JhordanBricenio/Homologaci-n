import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0.5 pb-2.5 box-border max-w-full shrink-0 text-left text-base text-black font-inter">
      <div className="flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full">
        <div className="flex-1 shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.23)] rounded bg-white box-border flex flex-col items-start justify-start pt-[50px] px-[30px] pb-[30px] relative min-w-[328px] min-h-[213px] max-w-full border-[0.5px] border-solid border-darkgray-200 mq1225:pt-[50px] mq1225:pr-[30px] mq1225:box-border">
          <div className="self-stretch overflow-hidden hidden flex-row items-start justify-start max-w-full z-[0]">
            <div className="flex-1 rounded bg-white box-border flex flex-row items-center justify-start py-[9px] px-4 min-h-[30px] max-h-[60px] shrink-0 max-w-[348%] border-[2px] border-solid border-black">
              <div className="h-[19px] flex-1 relative flex items-center max-w-full">
                Texto
              </div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full">
            <div className="h-[133px] flex-1 relative flex items-center max-w-full">
              <span>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore
                </p>
                <p className="m-0">
                  magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                  quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                  ut
                </p>
                <p className="m-0">aliquip ex ea commodo consequat.</p>
              </span>
            </div>
          </div>
          <div className="!m-[0] absolute top-[-20px] left-[30px] rounded bg-darkslateblue-200 flex flex-col items-start justify-center py-[11.5px] pr-5 pl-6 box-border min-h-[30px] max-h-[60px] whitespace-nowrap text-sm text-white hover:bg-darkslateblue-100">
            <div className="relative">Breve descripción de la empresa</div>
          </div>
        </div>
        <div className="flex-1 shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.23)] rounded bg-white box-border flex flex-col items-start justify-start pt-[50px] px-[30px] pb-[30px] relative gap-[20px] min-w-[328px] min-h-[215px] max-w-full border-[0.5px] border-solid border-darkgray-200 mq1050:pl-[30px] mq1050:pt-[50px] mq1050:pr-[30px] mq1050:box-border mq1225:pl-[30px] mq1225:pt-[50px] mq1225:pr-[30px] mq1225:box-border">
          <div className="self-stretch overflow-hidden hidden flex-row items-center justify-start gap-[10px] z-[0] mq750:flex-wrap">
            <div className="h-[43px] w-[270px] rounded bg-white box-border flex flex-row items-center justify-start py-3 px-4 gap-[10px] min-h-[30px] max-h-[60px] border-[2px] border-solid border-black">
              <div className="self-stretch flex-1 relative flex items-center">
                Texto
              </div>
              <div className="h-[px] flex flex-col items-center justify-center w-[px]">
                <img
                  className="w-2.5 h-[5px] relative"
                  alt=""
                  src="/polygon-1-5.svg"
                />
              </div>
            </div>
            <div className="w-[30px] rounded-81xl bg-darkslateblue-200 h-[30px] flex flex-col items-center justify-center text-center text-13xl text-white">
              <div className="relative mq450:text-lgi mq750:text-7xl">+</div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[10px] text-cornflowerblue">
            <div className="self-stretch relative">
              <span className="[text-decoration:underline] font-medium">
                Categoría 4
              </span>
              <span className="text-black"> - ...</span>
            </div>
            <div className="self-stretch relative">
              <span className="[text-decoration:underline] font-medium">
                Categoría 2
              </span>
              <span className="text-black"> - Subcategoría 6</span>
            </div>
            <div className="self-stretch relative">
              <span className="[text-decoration:underline] font-medium">
                Categoría 1
              </span>
              <span className="text-black">{` - `}</span>
              <span className="[text-decoration:underline] font-medium">
                Subcategoría 1
              </span>
              <span className="text-black"> - Nested 3</span>
            </div>
            <div className="self-stretch relative">
              <span className="[text-decoration:underline] font-medium">
                Categoría 7
              </span>
              <span className="text-black"> - ...</span>
            </div>
            <div className="self-stretch relative">
              <span className="[text-decoration:underline] font-medium">
                Categoría 2
              </span>
              <span className="text-black"> - Subcategoría 4</span>
            </div>
          </div>
          <div className="!m-[0] absolute top-[-20px] left-[30px] rounded bg-darkslateblue-200 flex flex-col items-start justify-center py-[11.5px] pr-5 pl-6 box-border min-h-[30px] max-h-[60px] whitespace-nowrap text-sm text-white hover:bg-darkslateblue-100">
            <div className="relative">Categorías CIIU en las que participa</div>
          </div>
        </div>
        <div className="flex-1 shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.23)] rounded bg-white box-border flex flex-col items-start justify-start pt-[50px] px-[30px] pb-[30px] relative gap-[20px] min-w-[328px] min-h-[205px] max-w-full border-[0.5px] border-solid border-darkgray-200">
          <div className="self-stretch overflow-hidden hidden flex-row items-center justify-start gap-[10px] z-[0] mq750:flex-wrap">
            <div className="h-[43px] w-[270px] rounded bg-white box-border flex flex-row items-center justify-start py-3 px-4 gap-[10px] min-h-[30px] max-h-[60px] border-[2px] border-solid border-black">
              <div className="self-stretch flex-1 relative flex items-center">
                Completar Tag
              </div>
              <div className="h-[px] flex flex-col items-center justify-center w-[px]">
                <img
                  className="w-2.5 h-[5px] relative"
                  alt=""
                  src="/polygon-1-5.svg"
                />
              </div>
            </div>
            <div className="w-[30px] rounded-81xl bg-darkslateblue-200 h-[30px] flex flex-col items-center justify-center text-center text-13xl text-white">
              <div className="relative mq450:text-lgi mq750:text-7xl">+</div>
            </div>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start py-0 pr-[30.7px] pl-[30.6px] box-border gap-[10px_18px] min-h-[125px] text-cornflowerblue">
            <div className="w-[92px] bg-white box-border flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <div className="hidden flex-col items-center justify-center text-center">
                <div className="relative">X</div>
              </div>
            </div>
            <div className="w-[92px] bg-white box-border flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <div className="hidden flex-col items-center justify-center text-center">
                <div className="relative">X</div>
              </div>
            </div>
            <div className="w-[92px] bg-white box-border flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <div className="hidden flex-col items-center justify-center text-center">
                <div className="relative">X</div>
              </div>
            </div>
            <div className="w-[92px] bg-white box-border flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <div className="hidden flex-col items-center justify-center text-center">
                <div className="relative">X</div>
              </div>
            </div>
            <div className="w-[92px] bg-white box-border flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <div className="hidden flex-col items-center justify-center text-center">
                <div className="relative">X</div>
              </div>
            </div>
            <div className="w-[92px] bg-white box-border flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <div className="hidden flex-col items-center justify-center text-center">
                <div className="relative">X</div>
              </div>
            </div>
            <div className="w-[92px] bg-white box-border flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <div className="hidden flex-col items-center justify-center text-center">
                <div className="relative">X</div>
              </div>
            </div>
            <div className="w-[92px] bg-white box-border flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <div className="hidden flex-col items-center justify-center text-center">
                <div className="relative">X</div>
              </div>
            </div>
            <div className="w-[92px] bg-white box-border flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <div className="hidden flex-col items-center justify-center text-center">
                <div className="relative">X</div>
              </div>
            </div>
          </div>
          <div className="w-20 !m-[0] absolute top-[-20px] left-[30px] rounded bg-darkslateblue-200 flex flex-col items-start justify-center py-[11.5px] pr-5 pl-6 box-border min-h-[30px] max-h-[60px] text-sm text-white hover:bg-darkslateblue-100">
            <div className="relative inline-block min-w-[32px]">Tags</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
