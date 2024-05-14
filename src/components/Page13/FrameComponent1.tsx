import FrameComponent2 from "./FrameComponent2";

const FrameComponent1 = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-left text-base text-white font-inter">
      <div className="flex flex-row items-end justify-start py-0 pr-5 pl-0 box-border gap-[40px] max-w-full">
        <div className="rounded bg-darkslateblue flex flex-row items-start justify-start py-[20.5px] px-4 box-border min-w-[100px] min-h-[30px] max-h-[60px] whitespace-nowrap max-w-full">
          <div className="relative">
            Producto(s) que coinciden con la búsqueda
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[11.5px] px-4 bg-cornflowerblue rounded flex flex-row items-start justify-start box-border min-h-[30px] max-h-[60px] hover:bg-deepskyblue">
          <div className="relative text-sm uppercase font-inter text-white text-center inline-block min-w-[71px]">
            RESETEAR
          </div>
        </button>
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
      labelFlex1="1" />
    </div>
  );
};

export default FrameComponent1;
