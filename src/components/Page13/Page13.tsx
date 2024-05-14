import FrameComponent1 from "./FrameComponent1";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent from "./FrameComponent";
import AsideNav from "./AsideNav";

const Page13 = () => {
  return (
    <div className="w-[1492px] max-w-full flex flex-col items-start justify-start py-[46px] px-4 box-border gap-[36.5px] tracking-[normal] leading-[normal] text-left text-base text-white font-inter mq750:gap-[18px]">
      <div className="mt-[-55.5px] flex flex-row items-start justify-start py-0 px-4">
        <div className="rounded bg-darkslateblue flex flex-row items-start justify-start min-w-[100px] min-h-[30px] max-h-[60px] whitespace-nowrap">
          <div className="relative inline-block min-w-[121px]">
            eBIZ: Showcase
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-md bg-white overflow-hidden flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full shrink-0 text-center text-sm">
        <div className="rounded bg-cornflowerblue h-10 hidden flex-row items-center justify-center py-2 px-4 box-border min-h-[30px] max-h-[60px]">
          <div className="h-[17px] relative uppercase inline-block shrink-0">
            RESETEAR
          </div>
        </div>
        <div className="flex-1 overflow-x-auto flex flex-col items-start justify-start gap-[30.3px] max-w-full text-left text-base mq675:gap-[15px]">
          <FrameComponent1 />
          <div className="w-[307px] rounded bg-darkslateblue flex flex-row items-start justify-start py-[20.5px] px-4 box-border min-w-[100px] min-h-[30px] max-h-[60px] whitespace-nowrap">
            <div className="relative">Todos los productos de Proveedor 5</div>
          </div>
          <FrameComponent2
            cardFrameAlignSelf="stretch"
            cardFrameWidth="unset"
            labelTitleMinWidth="unset"
            propMinWidth="unset"
            labelTitleHeight="unset"
            labelHeight="unset"
            labelWidth="unset"
            labelDisplay="unset"
            frameDivAlignSelf="stretch"
            frameDivGap="10px"
            cardFrameFlex="1"
            cardFrameWidth1="unset"
            frameDivFlex="unset"
            frameDivFlexDirection="row"
            cardFrameAlignSelf1="unset"
            cardFrameFlex1="1"
            cardFrameAlignSelf2="unset"
            frameDivFlexWrap="wrap"
            buttonFlex="1"
            labelFlex="1"
            buttonFlex1="1"
            labelFlex1="1"
          />
          <FrameComponent />
        </div>
        <AsideNav />
      </div>
    </div>
  );
};

export default Page13;
