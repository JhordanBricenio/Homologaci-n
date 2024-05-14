import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent1Type = {
  group23?: string;
  porProveedores?: string;

  /** Style props */
  arrowDownwardFilledIconAlignSelf?: CSSProperties["alignSelf"];
  arrowDownwardFilledIconFlex?: CSSProperties["flex"];
  headWidth?: CSSProperties["width"];
  arrowDownwardFilledIconPadding?: CSSProperties["padding"];
  arrowDownwardFilledIconMarginTop?: CSSProperties["marginTop"];
  arrowDownwardFilledIconMinHeight?: CSSProperties["minHeight"];
  tableHeadHeight?: CSSProperties["height"];
  maskOverflowX?: CSSProperties["overflowX"];
  arrowDownwardFilledIconWidth?: CSSProperties["width"];
  arrowDownwardFilledIconAlignSelf1?: CSSProperties["alignSelf"];
  arrowDownwardFilledIconRowGap?: CSSProperties["rowGap"];
  headMinWidth?: CSSProperties["minWidth"];
  typographyMinWidth?: CSSProperties["minWidth"];
  typographyWidth?: CSSProperties["width"];
  typographyAlignSelf?: CSSProperties["alignSelf"];
  typographyRowGap?: CSSProperties["rowGap"];
  body2MinWidth?: CSSProperties["minWidth"];
  typographyMinWidth1?: CSSProperties["minWidth"];
  typographyWidth1?: CSSProperties["width"];
  typographyAlignSelf1?: CSSProperties["alignSelf"];
  typographyRowGap1?: CSSProperties["rowGap"];
  body2MinWidth1?: CSSProperties["minWidth"];
  typographyMinWidth2?: CSSProperties["minWidth"];
  groupDivHeight?: CSSProperties["height"];
  rectangleDivWidth?: CSSProperties["width"];
  porProveedoresMinWidth?: CSSProperties["minWidth"];
  porProveedoresHeight?: CSSProperties["height"];
  porProveedoresWidth?: CSSProperties["width"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  group23,
  arrowDownwardFilledIconAlignSelf,
  arrowDownwardFilledIconFlex,
  headWidth,
  arrowDownwardFilledIconPadding,
  arrowDownwardFilledIconMarginTop,
  arrowDownwardFilledIconMinHeight,
  tableHeadHeight,
  maskOverflowX,
  arrowDownwardFilledIconWidth,
  arrowDownwardFilledIconAlignSelf1,
  arrowDownwardFilledIconRowGap,
  headMinWidth,
  typographyMinWidth,
  typographyWidth,
  typographyAlignSelf,
  typographyRowGap,
  body2MinWidth,
  typographyMinWidth1,
  typographyWidth1,
  typographyAlignSelf1,
  typographyRowGap1,
  body2MinWidth1,
  typographyMinWidth2,
  porProveedores,
  groupDivHeight,
  rectangleDivWidth,
  porProveedoresMinWidth,
  porProveedoresHeight,
  porProveedoresWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: arrowDownwardFilledIconAlignSelf,
      flex: arrowDownwardFilledIconFlex,
    };
  }, [arrowDownwardFilledIconAlignSelf, arrowDownwardFilledIconFlex]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: headWidth,
    };
  }, [headWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: arrowDownwardFilledIconPadding,
      marginTop: arrowDownwardFilledIconMarginTop,
      minHeight: arrowDownwardFilledIconMinHeight,
    };
  }, [
    arrowDownwardFilledIconPadding,
    arrowDownwardFilledIconMarginTop,
    arrowDownwardFilledIconMinHeight,
  ]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      height: tableHeadHeight,
    };
  }, [tableHeadHeight]);

  const tableStyle: CSSProperties = useMemo(() => {
    return {
      overflowX: maskOverflowX,
    };
  }, [maskOverflowX]);

  const tableHeadRowStyle: CSSProperties = useMemo(() => {
    return {
      width: arrowDownwardFilledIconWidth,
      alignSelf: arrowDownwardFilledIconAlignSelf1,
      rowGap: arrowDownwardFilledIconRowGap,
    };
  }, [
    arrowDownwardFilledIconWidth,
    arrowDownwardFilledIconAlignSelf1,
    arrowDownwardFilledIconRowGap,
  ]);

  const tableHeadStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: headMinWidth,
    };
  }, [headMinWidth]);

  const tableHead1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: typographyMinWidth,
    };
  }, [typographyMinWidth]);

  const row1Style: CSSProperties = useMemo(() => {
    return {
      width: typographyWidth,
      alignSelf: typographyAlignSelf,
      rowGap: typographyRowGap,
    };
  }, [typographyWidth, typographyAlignSelf, typographyRowGap]);

  const cell1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: body2MinWidth,
    };
  }, [body2MinWidth]);

  const cell5Style: CSSProperties = useMemo(() => {
    return {
      minWidth: typographyMinWidth1,
    };
  }, [typographyMinWidth1]);

  const row2Style: CSSProperties = useMemo(() => {
    return {
      width: typographyWidth1,
      alignSelf: typographyAlignSelf1,
      rowGap: typographyRowGap1,
    };
  }, [typographyWidth1, typographyAlignSelf1, typographyRowGap1]);

  const cell11Style: CSSProperties = useMemo(() => {
    return {
      minWidth: body2MinWidth1,
    };
  }, [body2MinWidth1]);

  const cell51Style: CSSProperties = useMemo(() => {
    return {
      minWidth: typographyMinWidth2,
    };
  }, [typographyMinWidth2]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      height: groupDivHeight,
    };
  }, [groupDivHeight]);

  const rectangleDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: rectangleDivWidth,
    };
  }, [rectangleDivWidth]);

  const porProveedoresStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: porProveedoresMinWidth,
      height: porProveedoresHeight,
      width: porProveedoresWidth,
    };
  }, [porProveedoresMinWidth, porProveedoresHeight, porProveedoresWidth]);

  return (
    <div
      className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-sm text-white-color font-typography-caption"
      style={frameDivStyle}
    >
      <div
        className="w-[220px] flex flex-row items-start justify-start py-0 px-[33px] box-border"
        style={frameDiv1Style}
      >
        <div
          className="h-[45px] flex-1 rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-3.5 px-[26px] pb-[15px] box-border z-[2]"
          style={groupDivStyle}
        >
          {group23}
        </div>
      </div>
      <div
        className="self-stretch shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border flex flex-row items-start justify-start pt-[42px] pb-6 pr-5 pl-8 max-w-full z-[1] mt-[-22px] text-text-primary border-[1px] border-solid border-gray-300"
        style={frameDiv2Style}
      >
        <div
          className="h-[172px] w-[725px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden max-w-full border-[1px] border-solid border-gray-300"
          style={rectangleDivStyle}
        />
        <div
          className="flex-1 overflow-x-auto flex flex-col items-start justify-start max-w-full z-[2]"
          style={tableStyle}
        >
          <div
            className="w-[669px] bg-darkslateblue box-border flex flex-row items-center justify-start border-b-[1px] border-solid border-divider"
            style={tableHeadRowStyle}
          >
            <div
              className="flex-1 bg-gray-200 flex flex-row items-center justify-start py-1.5 px-4 box-border max-w-full text-white-color"
              style={tableHeadStyle}
            >
              <div className="hidden flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowdownwardfilled.svg"
                />
              </div>
              <div className="relative tracking-[0.17px] leading-[24px] font-medium inline-block min-w-[28px]">
                RUC
              </div>
              <div className="hidden flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowdownwardfilled.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-[120px] bg-gray-200 hidden flex-row items-center justify-start py-1.5 px-4 box-border">
              <div className="hidden flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowdownwardfilled.svg"
                />
              </div>
              <div className="self-stretch relative tracking-[0.17px] leading-[24px] font-medium">
                Head
              </div>
              <div className="hidden flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowdownwardfilled.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-[120px] bg-gray-200 hidden flex-row items-center justify-start py-1.5 px-4 box-border">
              <div className="hidden flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowdownwardfilled.svg"
                />
              </div>
              <div className="self-stretch relative tracking-[0.17px] leading-[24px] font-medium">
                Head
              </div>
              <div className="hidden flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowdownwardfilled.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-[120px] bg-gray-200 hidden flex-row items-center justify-start py-1.5 px-4 box-border">
              <div className="hidden flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowdownwardfilled.svg"
                />
              </div>
              <div className="self-stretch relative tracking-[0.17px] leading-[24px] font-medium">
                Head
              </div>
              <div className="hidden flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowdownwardfilled.svg"
                />
              </div>
            </div>
            <div
              className="flex-1 bg-gray-200 flex flex-row items-center justify-start py-1.5 px-4 box-border max-w-full text-white-color"
              style={tableHead1Style}
            >
              <div className="hidden flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowdownwardfilled.svg"
                />
              </div>
              <div className="relative tracking-[0.17px] leading-[24px] font-medium inline-block min-w-[52px]">
                Nombre
              </div>
              <div className="hidden flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowdownwardfilled.svg"
                />
              </div>
            </div>
          </div>
          <div
            className="w-[669px] box-border flex flex-row items-center justify-start border-b-[1px] border-solid border-divider"
            style={row1Style}
          >
            <div
              className="flex-1 bg-gray-200 flex flex-row items-center justify-start py-1.5 px-4 box-border max-w-full"
              style={cell1Style}
            >
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[0.17px] leading-[143%] inline-block min-w-[89px]">
                    01223330330
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[120px] bg-gray-200 hidden flex-row items-center justify-start py-1.5 px-4 box-border">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[120px] bg-gray-200 hidden flex-row items-center justify-start py-1.5 px-4 box-border">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[120px] bg-gray-200 hidden flex-row items-center justify-start py-1.5 px-4 box-border">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-1 bg-gray-200 flex flex-row items-center justify-start py-1.5 px-4 box-border max-w-full"
              style={cell5Style}
            >
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[0.17px] leading-[143%] inline-block min-w-[63px]">
                    Nombre 1
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[669px] box-border flex flex-row items-center justify-start border-b-[1px] border-solid border-divider"
            style={row2Style}
          >
            <div
              className="flex-1 bg-gray-200 flex flex-row items-center justify-start py-1.5 px-4 box-border max-w-full"
              style={cell11Style}
            >
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[0.17px] leading-[143%] inline-block min-w-[89px]">
                    01223330330
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[120px] bg-gray-200 hidden flex-row items-center justify-start py-1.5 px-4 box-border">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[120px] bg-gray-200 hidden flex-row items-center justify-start py-1.5 px-4 box-border">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[120px] bg-gray-200 hidden flex-row items-center justify-start py-1.5 px-4 box-border">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-1 bg-gray-200 flex flex-row items-center justify-start py-1.5 px-4 box-border max-w-full"
              style={cell51Style}
            >
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[0.17px] leading-[143%] inline-block min-w-[63px]">
                    Nombre 1
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[600px] box-border overflow-x-auto hidden flex-row items-center justify-start max-w-full border-b-[1px] border-solid border-divider">
            <div className="flex-1 bg-gray-200 flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-200 flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[120px] bg-gray-200 hidden flex-row items-center justify-start p-4 box-border">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[120px] bg-gray-200 hidden flex-row items-center justify-start p-4 box-border">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-200 flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[600px] box-border overflow-x-auto hidden flex-row items-center justify-start max-w-full border-b-[1px] border-solid border-divider">
            <div className="flex-1 bg-gray-200 flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-200 flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[120px] bg-gray-200 hidden flex-row items-center justify-start p-4 box-border">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[120px] bg-gray-200 hidden flex-row items-center justify-start p-4 box-border">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-200 flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[600px] box-border overflow-x-auto hidden flex-row items-center justify-start max-w-full border-b-[1px] border-solid border-divider">
            <div className="flex-1 bg-gray-200 flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-200 flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[120px] bg-gray-200 hidden flex-row items-center justify-start p-4 box-border">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[120px] bg-gray-200 hidden flex-row items-center justify-start p-4 box-border">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-gray-200 flex flex-row items-center justify-start p-4">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="w-[25px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Cell
                  </div>
                </div>
                <div className="w-[75px] hidden flex-col items-start justify-start">
                  <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                    Typography
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[600px] hidden flex-row items-center justify-end py-0.5 px-0 box-border gap-[26px] text-xs text-text-secondary">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="relative tracking-[0.4px] leading-[166%]">
                Rows per page:
              </div>
              <div className="h-6 w-[38px] relative text-text-primary">
                <div className="absolute top-[calc(50%_-_9px)] right-[23px] tracking-[0.4px] leading-[20px]">
                  10
                </div>
                <img
                  className="absolute top-[calc(50%_-_12px)] right-[0px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/arrowdropdownfilled.svg"
                />
              </div>
            </div>
            <div className="relative tracking-[0.4px] leading-[166%] text-text-primary">
              1-5 of 13
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="h-10 w-10 rounded-81xl overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/chevronleftfilled.svg"
                  />
                </div>
              </div>
              <div className="h-10 w-10 rounded-81xl overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/chevronrightfilled.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;