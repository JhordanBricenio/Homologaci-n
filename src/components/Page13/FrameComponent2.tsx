import { useMemo } from "react";
import { Button } from "@mui/material";

const FrameComponent2 = ({
  cardFrameAlignSelf,
  cardFrameWidth,
  labelTitleMinWidth,
  propMinWidth,
  labelTitleHeight,
  labelHeight,
  labelWidth,
  labelDisplay,
  frameDivAlignSelf,
  frameDivGap,
  cardFrameFlex,
  cardFrameWidth1,
  frameDivFlex,
  frameDivFlexDirection,
  cardFrameAlignSelf1,
  cardFrameFlex1,
  cardFrameAlignSelf2,
  frameDivFlexWrap,
  buttonFlex,
  labelFlex,
  buttonFlex1,
  labelFlex1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: cardFrameAlignSelf,
      width: cardFrameWidth,
      flex: frameDivFlex,
      flexDirection: frameDivFlexDirection,
      flexWrap: frameDivFlexWrap,
    };
  }, [
    cardFrameAlignSelf,
    cardFrameWidth,
    frameDivFlex,
    frameDivFlexDirection,
    frameDivFlexWrap,
  ]);

  const cardFrameStyle = useMemo(() => {
    return {
      minWidth: labelTitleMinWidth,
      flex: cardFrameFlex,
      width: cardFrameWidth1,
      alignSelf: cardFrameAlignSelf1,
    };
  }, [labelTitleMinWidth, cardFrameFlex, cardFrameWidth1, cardFrameAlignSelf1]);

  const cardFrame1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
      flex: cardFrameFlex1,
      alignSelf: cardFrameAlignSelf2,
    };
  }, [propMinWidth, cardFrameFlex1, cardFrameAlignSelf2]);

  const labelTitleStyle = useMemo(() => {
    return {
      height: labelTitleHeight,
    };
  }, [labelTitleHeight]);

  const labelStyle = useMemo(() => {
    return {
      height: labelHeight,
      width: labelWidth,
      display: labelDisplay,
    };
  }, [labelHeight, labelWidth, labelDisplay]);

  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      gap: frameDivGap,
    };
  }, [frameDivAlignSelf, frameDivGap]);

  const buttonStyle = useMemo(() => {
    return {
      flex: buttonFlex,
    };
  }, [buttonFlex]);

  const label1Style = useMemo(() => {
    return {
      flex: labelFlex,
    };
  }, [labelFlex]);

  const button1Style = useMemo(() => {
    return {
      flex: buttonFlex1,
    };
  }, [buttonFlex1]);

  const label2Style = useMemo(() => {
    return {
      flex: labelFlex1,
    };
  }, [labelFlex1]);

  return (
    <div
      className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full text-left text-sm text-white font-inter"
      style={frameDivStyle}
    >
      <div
        className="h-[198px] flex-1 rounded bg-white box-border flex flex-col items-start justify-start py-6 px-[22px] gap-[8px] max-w-full border-[2px] border-solid border-black mq675:h-auto"
        style={cardFrameStyle}
      >
        <div className="mt-[-42px] rounded bg-darkslateblue flex flex-row items-start justify-start py-[9.5px] px-4 box-border min-w-[100px] min-h-[30px] max-h-[60px] whitespace-nowrap">
          <div className="relative">Nombre del producto servicio 1</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[10px] shrink-0 max-w-full text-base text-black mq675:flex-wrap">
          <div className="h-[100px] w-[100px] relative bg-black" />
          <div className="flex-1 relative [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:5] [-webkit-box-orient:vertical] min-w-[265px] max-h-[100px] max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div
          className="self-stretch flex flex-row items-start justify-start gap-[9px] mq675:flex-wrap"
          style={frameDiv1Style}
        >
          <Button
            className="h-10 flex-1 min-w-[108px] min-h-[30px] max-h-[60px]"
            disableElevation={true}
            variant="contained"
            sx={{
              color: "#fff",
              fontSize: "12",
              background: "#2299e4",
              borderRadius: "4px",
              "&:hover": { background: "#2299e4" },
              height: 40,
            }}
          >
            DETALLES
          </Button>
          <button
            className="cursor-pointer py-[11px] pr-[7px] pl-[8.8px] bg-white flex-1 rounded box-border flex flex-row items-start justify-start min-h-[30px] max-h-[60px] whitespace-nowrap border-[1px] border-solid border-cornflowerblue hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-deepskyblue"
            style={buttonStyle}
          >
            <div
              className="flex-1 relative text-xs uppercase font-inter text-cornflowerblue text-center"
              style={label1Style}
            >
              CREAR REQUERIMIENTOS
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] py-[12.5px] pr-[13.3px] pl-[13.4px] bg-cornflowerblue flex-1 rounded flex flex-row items-start justify-start box-border min-h-[30px] max-h-[60px] whitespace-nowrap hover:bg-deepskyblue"
            style={button1Style}
          >
            <div
              className="flex-1 relative text-xs uppercase font-inter text-white text-center"
              style={label2Style}
            >
              solicitar cotización
            </div>
          </button>
        </div>
      </div>
      <div
        className="h-[198px] flex-1 rounded bg-white box-border flex flex-col items-start justify-start py-6 px-[22px] gap-[8px] min-w-[424px] max-w-full border-[2px] border-solid border-black mq675:h-auto"
        style={cardFrame1Style}
      >
        <div
          className="mt-[-42px] w-[239px] rounded bg-darkslateblue flex flex-row items-start justify-start py-[9.5px] px-4 box-border min-w-[100px] min-h-[30px] max-h-[60px] whitespace-nowrap shrink-0"
          style={labelTitleStyle}
        >
          <div className="relative" style={labelStyle}>
            Nombre del producto servicio 1
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[10px] shrink-0 max-w-full text-base text-black mq675:flex-wrap">
          <div className="h-[100px] w-[100px] relative bg-black" />
          <div className="flex-1 relative [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:5] [-webkit-box-orient:vertical] min-w-[265px] max-h-[100px] max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="w-[176.7px] h-10 rounded bg-cornflowerblue hidden flex-row items-center justify-center py-2 px-4 box-border min-h-[30px] max-h-[60px] text-center text-xs">
          <div className="relative uppercase">DETALLES</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[10px] mq675:flex-wrap">
          <Button
            className="h-10 flex-1 min-w-[164px] min-h-[30px] max-h-[60px]"
            disableElevation={true}
            variant="contained"
            sx={{
              color: "#2299e4",
              fontSize: "12",
              background: "#fff",
              border: "#2299e4 solid 1px",
              borderRadius: "4px",
              "&:hover": { background: "#fff" },
              height: 40,
            }}
          >
            CREAR REQUERIMIENTOS
          </Button>
          <Button
            className="h-10 flex-[0.9521] min-w-[164px] min-h-[30px] max-h-[60px] mq450:flex-1"
            disableElevation={true}
            variant="contained"
            sx={{
              color: "#fff",
              fontSize: "12",
              background: "#2299e4",
              borderRadius: "4px",
              "&:hover": { background: "#2299e4" },
              height: 40,
            }}
          >
            solicitar cotización
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
