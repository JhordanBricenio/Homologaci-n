import { FunctionComponent, useMemo, type CSSProperties } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl
} from "@mui/material";

import arrowdownwardfilled from '../../assets/images/evalaucion/arrowdropdownfilled.svg'
import chevronleftfilled from '../../assets/images/evalaucion/chevronleftfilled.svg'
import chevronrigthfilled from '../../assets/images/evalaucion/chevronrightfilled.svg'

export type TableType = {
  tableHead?: string;

  /** Style props */
  body2Flex?: CSSProperties["flex"];
  body2Width?: CSSProperties["width"];
};

const Table: FunctionComponent<TableType> = ({
  tableHead,
  body2Flex,
  body2Width,
}) => {
  const tableStyle: CSSProperties = useMemo(() => {
    return {
      flex: body2Flex,
      width: body2Width,
    };
  }, [body2Flex, body2Width]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start max-w-full z-[2] text-left text-sm text-text-primary font-typography-body2"
      style={tableStyle}
    >
      <div className="self-stretch h-9 bg-darkslateblue box-border overflow-x-auto shrink-0 flex flex-row items-start justify-start text-white-color border-b-[1px] border-solid border-divider">
        <Button
          className="self-stretch flex-1"
          startIcon={<img width="20px" height="20px" src="/-hidden.svg" />}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "rgba(0, 0, 0, 0)",
            borderRadius: "0px 0px 0px 0px",
            "&:hover": { background: "rgba(0, 0, 0, 0)" },
          }}
        >
          {tableHead}
        </Button>
        <div className="flex-1 bg-gray-100 flex flex-row items-start justify-start py-1.5 px-4">
          <div className="hidden flex-row items-start justify-start py-0 px-1">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              alt=""
              src={arrowdownwardfilled}
            />
          </div>
          <div className="relative tracking-[0.17px] leading-[24px] font-medium inline-block min-w-[28px]">
            RUC
          </div>
          <div className="hidden flex-row items-start justify-start py-0 px-1">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              alt=""
              src={arrowdownwardfilled}
            />
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-start justify-start py-1.5 px-4">
          <div className="hidden flex-row items-start justify-start py-0 px-1">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              alt=""
              src={arrowdownwardfilled}
            />
          </div>
          <div className="relative tracking-[0.17px] leading-[24px] font-medium inline-block min-w-[50px]">
            HOMOL
          </div>
          <div className="hidden flex-row items-start justify-start py-0 px-1">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              alt=""
              src={arrowdownwardfilled}
            />
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-start justify-start py-1.5 px-4">
          <div className="hidden flex-row items-start justify-start py-0 px-1">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              alt=""
              src={arrowdownwardfilled}
            />
          </div>
          <div className="relative tracking-[0.17px] leading-[24px] font-medium inline-block min-w-[84px]">
            REFERENCIA
          </div>
          <div className="hidden flex-row items-start justify-start py-0 px-1">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              alt=""
              src={arrowdownwardfilled}
            />
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-start justify-start py-1.5 px-4">
          <div className="hidden flex-row items-start justify-start py-0 px-1">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              alt={arrowdownwardfilled}
            />
          </div>
          <div className="relative tracking-[0.17px] leading-[24px] font-medium inline-block min-w-[102px]">
            VER CATÁLOGO
          </div>
          <div className="hidden flex-row items-start justify-start py-0 px-1">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
              alt=""
              src="/arrowdownwardfilled-2.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[600px] box-border overflow-x-auto hidden flex-row items-center justify-start max-w-full border-b-[1px] border-solid border-divider">
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="w-[76px] flex flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Variable S 1
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4 text-cornflowerblue-100">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="w-9 flex flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                1 año
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start text-text-primary">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="w-[175px] flex flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Lorem ipsomn dolor ipsons
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="w-[9px] flex flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                1
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="h-[52px] w-[120px] overflow-hidden shrink-0 hidden flex-row items-center justify-start">
          <div className="h-[42px] w-[42px] rounded-81xl hidden flex-row items-center justify-start p-[9px] box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/-hidden.svg"
            />
          </div>
        </div>
        <div className="h-[52px] flex-1 bg-gray-100 flex flex-row items-center justify-start p-4 box-border text-base">
          <div className="h-5 w-[88px] hidden flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/-hidden-1.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch h-6 relative tracking-[0.15px] leading-[150%] inline-block">
                  Label
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/-hidden-1.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch h-6 relative tracking-[0.15px] leading-[150%] inline-block">
                  Label
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[600px] h-[52px] box-border overflow-x-auto shrink-0 hidden flex-row items-center justify-start max-w-full border-b-[1px] border-solid border-divider">
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="w-[76px] flex flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Variable S 2
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4 text-cornflowerblue-100">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="w-[72px] flex flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                1 semestre
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start text-text-primary">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="w-[175px] flex flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Lorem ipsomn dolor ipsons
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="w-[9px] flex flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                4
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4 text-base">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-center">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/-hidden-1.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch h-6 relative tracking-[0.15px] leading-[150%] inline-block">
                  Área 1
                </div>
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start text-sm">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start [row-gap:20px] border-b-[1px] border-solid border-divider">
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start py-1.5 px-4 box-border min-w-[170px] max-w-[173px] text-base">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-start">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-start justify-start p-[9px] box-border">
                  <input
                    className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
                    type="checkbox"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.15px] leading-[150%] inline-block min-w-[40px]">
                  Label
                </div>
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start text-sm">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4 box-border min-w-[170px] max-w-[173px]">
          <div className="flex-1 flex flex-col items-start justify-start">
            <img
              className="w-6 h-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/staroutlinefilled.svg"
            />
            <div className="w-[75px] hidden flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4 box-border min-w-[170px] max-w-[173px] text-cornflowerblue-200">
          <div className="flex-1 flex flex-col items-start justify-start py-0 px-0">
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[0.17px] leading-[143%] whitespace-nowrap">
                Lorem ipsomn dolor ipsons
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start text-text-primary">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start py-1.5 px-4 box-border min-w-[170px] max-w-[173px]">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-start">
              <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/-hidden-1.svg"
                />
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
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start [row-gap:20px] border-b-[1px] border-solid border-divider">
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start py-1.5 px-4 box-border min-w-[170px] max-w-[173px] text-base">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-start">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-start justify-start p-[9px] box-border">
                  <input
                    className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
                    type="checkbox"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.15px] leading-[150%] inline-block min-w-[40px]">
                  Label
                </div>
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start text-sm">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4 box-border min-w-[170px] max-w-[173px]">
          <div className="flex-1 flex flex-col items-start justify-start">
            <img
              className="w-6 h-5 relative overflow-hidden shrink-0"
              alt=""
              src="/starsharp.svg"
            />
            <div className="w-[75px] hidden flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4 box-border min-w-[170px] max-w-[173px] text-cornflowerblue-200">
          <div className="flex-1 flex flex-col items-start justify-start py-0 px-0">
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[0.17px] leading-[143%] whitespace-nowrap">
                Lorem ipsomn dolor ipsons
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start text-text-primary">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start py-1.5 px-4 box-border min-w-[170px] max-w-[173px]">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-start">
              <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/-hidden-1.svg"
                />
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
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start [row-gap:20px] border-b-[1px] border-solid border-divider">
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start py-1.5 px-4 box-border min-w-[170px] max-w-[173px] text-base">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-start">
              <div className="overflow-hidden flex flex-row items-center justify-start">
                <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-start justify-start p-[9px] box-border">
                  <input
                    className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
                    type="checkbox"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.15px] leading-[150%] inline-block min-w-[40px]">
                  Label
                </div>
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start text-sm">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4 box-border min-w-[170px] max-w-[173px]">
          <div className="flex-1 flex flex-col items-start justify-start">
            <img
              className="w-6 h-5 relative overflow-hidden shrink-0"
              alt=""
              src="/starsharp.svg"
            />
            <div className="w-[75px] hidden flex-col items-start justify-start">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start p-4 box-border min-w-[170px] max-w-[173px] text-cornflowerblue-200">
          <div className="flex-1 flex flex-col items-start justify-start py-0 px-0">
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[0.17px] leading-[143%] whitespace-nowrap">
                Lorem ipsomn dolor ipsons
              </div>
            </div>
            <div className="w-[75px] hidden flex-col items-start justify-start text-text-primary">
              <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                Typography
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex flex-row items-center justify-start py-1.5 px-4 box-border min-w-[170px] max-w-[173px]">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="overflow-hidden flex flex-row items-center justify-start">
              <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/-hidden-1.svg"
                />
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
      <div className="self-stretch flex flex-row items-start justify-end py-0.5 px-0 gap-[26px] text-xs text-text-secondary mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="relative tracking-[0.4px] leading-[20px] inline-block min-w-[88px]">
                Rows per page:
              </div>
            </div>
            <FormControl
              className="h-6 w-[38px] font-typography-body2 text-xs text-text-primary"
              variant="standard"
              sx={{
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderRadius: "0px 0px 0px 0px",
                width: "38px",
                height: "24px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "24px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "24px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "24px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "24px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "rgba(0, 0, 0, 0.87)",
                  fontSize: 12,
                  fontWeight: "Regular",
                  fontFamily: "Roboto",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="24px"
                    height="24px"
                    src={arrowdownwardfilled}
                    style={{}}
                  />
                )}
              >
                <MenuItem>10</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-text-primary">
          <div className="relative tracking-[0.4px] leading-[20px] inline-block min-w-[51px]">
            1-5 of 13
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="h-10 w-10 rounded-81xl overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
            <div className="flex flex-row items-start justify-start">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={chevronleftfilled}
              />
            </div>
          </div>
          <div className="h-10 w-10 rounded-81xl overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
            <div className="flex flex-row items-start justify-start">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src={chevronrigthfilled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

