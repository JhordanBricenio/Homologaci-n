import { FunctionComponent } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";

const Page7: FunctionComponent = () => {
  return (
    <div className="w-[1253px] max-w-full flex flex-col items-start justify-start pt-[58px] px-[23px] pb-[29px] box-border relative gap-[33px] leading-[normal] tracking-[normal] text-center text-sm text-white font-cabin mq750:gap-[16px]">
      <section className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-white" />
      <div className="mt-[-83px] w-60 rounded bg-darkslateblue overflow-hidden flex flex-row items-start justify-start py-[16.5px] px-[18px] box-border whitespace-nowrap z-[1]">
        <div className="flex-1 relative">
          {`Proceso Nª 123456: `}
          <span className="[text-decoration:underline]">Proveedor 5</span>
        </div>
      </div>
      <section className="self-stretch h-[154px] relative max-w-full shrink-0 z-[1] text-center text-sm text-white font-cabin mq1050:h-auto mq1050:min-h-[154]">
        <div className="absolute top-[17px] left-[0px] shadow-[0px_0px_4px_2px_rgba(0,_0,_0,_0.25)] rounded bg-white box-border w-full overflow-hidden flex flex-row items-center justify-center py-7 px-11 max-w-full border-[1px] border-solid border-gainsboro-200 lg:pl-[22px] lg:pr-[22px] lg:box-border">
          <div className="flex-1 flex flex-col items-center justify-center max-w-full">
            <div className="self-stretch bg-darkslateblue flex flex-row flex-wrap items-center justify-start py-[7.5px] px-0 gap-[10px]">
              <div className="flex-1 relative leading-[25px] inline-block min-w-[54px] max-w-[269px]">
                Variables
              </div>
              <div className="flex-1 relative leading-[25px] inline-block min-w-[54px] max-w-[269px]">
                Descripciòn
              </div>
              <div className="flex-1 relative leading-[25px] inline-block min-w-[54px] max-w-[269px]">
                Valoraciòn
              </div>
              <div className="flex-1 relative leading-[25px] inline-block min-w-[54px] max-w-[269px]">
                Descripciòn
              </div>
            </div>
            <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-center py-1.5 px-0 text-black">
              <div className="self-stretch flex flex-row items-center justify-start [row-gap:20px] mq1050:flex-wrap">
                <div className="flex-1 relative leading-[25px] inline-block min-w-[152px] max-w-[277px]">
                  Variable 1
                </div>
                <div className="flex-1 relative leading-[25px] inline-block min-w-[152px] max-w-[277px]">
                  Lorem ipsum dolor Lorem ipsum
                </div>
                <div className="flex-[0.8556] flex flex-row items-center justify-center py-0 px-5 box-border min-w-[152px] max-w-[277px] mq450:flex-1">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill.svg"
                  />
                  <img
                    className="h-6 w-6 relative hidden min-h-[24px]"
                    alt=""
                    src="/star-fill.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[25px] inline-block min-w-[152px] max-w-[277px]">
                  Lorem ipsum dolor Lorem ipsum
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="absolute top-[0px] left-[21px] z-[1]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "12",
            background: "#1b3e85",
            borderRadius: "4px",
            "&:hover": { background: "#1b3e85" },
            width: 134,
            height: 35,
          }}
        >
          Responsable 1
        </Button>
      </section>
      <section className="self-stretch h-[234px] relative max-w-full shrink-0 z-[1] text-center text-sm text-black font-cabin mq1050:h-auto mq1050:min-h-[234]">
        <div className="absolute top-[17px] left-[0px] shadow-[0px_0px_4px_2px_rgba(0,_0,_0,_0.25)] rounded bg-white box-border w-full overflow-hidden flex flex-row items-center justify-center py-7 px-11 max-w-full border-[1px] border-solid border-gainsboro-200 lg:pl-[22px] lg:pr-[22px] lg:box-border">
          <div className="flex-1 flex flex-col items-center justify-center max-w-full">
            <div className="self-stretch bg-darkslateblue flex flex-row flex-wrap items-center justify-start gap-[10px] min-h-[40px] text-white">
              <div className="flex-1 relative leading-[25px] inline-block min-w-[93px]">
                Variables
              </div>
              <div className="flex-1 relative leading-[25px] inline-block min-w-[93px]">
                Descripciòn
              </div>
              <div className="flex-1 relative leading-[25px] inline-block min-w-[93px]">
                Valoraciòn
              </div>
              <div className="flex-1 relative leading-[25px] inline-block min-w-[93px]">
                Razón de valoración
              </div>
              <div className="h-[25px] w-[127px] relative leading-[25px] whitespace-pre-wrap inline-block shrink-0">{`   `}</div>
            </div>
            <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-center min-h-[39px]">
              <div className="self-stretch flex flex-row items-center justify-start [row-gap:20px] mq1050:flex-wrap">
                <div className="flex-1 relative leading-[25px] inline-block min-w-[240px]">
                  Variable 2
                </div>
                <div className="flex-1 relative leading-[25px] inline-block min-w-[240px]">
                  Lorem ipsum dolor Lorem ipsum
                </div>
                <div className="flex-[0.4863] flex flex-row items-center justify-center py-0 px-[63px] box-border min-w-[240px] mq450:flex-1">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star.svg"
                  />
                </div>
                <TextField
                  className="[border:none] bg-[transparent] h-[30px] flex-1 font-cabin text-sm text-black min-w-[159px]"
                  placeholder="Lorem ipsum dolor Lorem ipsum"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#000" },
                    "& .MuiInputBase-root": {
                      height: "30px",
                      backgroundColor: "#fff",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <div className="w-[127px] flex flex-col items-center justify-center py-0 px-5 box-border z-[1]">
                  <button className="cursor-pointer [border:none] py-[15px] px-[11px] bg-cornflowerblue self-stretch h-8 rounded overflow-hidden shrink-0 flex flex-row items-center justify-center box-border hover:bg-deepskyblue">
                    <div className="flex-1 relative text-xs font-cabin text-white text-center inline-block min-w-[65px]">
                      GUARDAR
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-center min-h-[39px]">
              <div className="self-stretch flex flex-row items-center justify-start [row-gap:20px] mq1050:flex-wrap">
                <div className="flex-1 relative leading-[25px] inline-block min-w-[240px]">
                  Variable 3
                </div>
                <div className="flex-1 relative leading-[25px] inline-block min-w-[240px]">
                  Lorem ipsum dolor Lorem ipsum
                </div>
                <div className="flex-[0.3885] flex flex-row items-center justify-center py-0 px-[75px] box-border min-w-[240px] lg:w-auto lg:[align-self:unset] mq450:flex-1">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill-4.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill-4.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill-4.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill-4.svg"
                  />
                  <img
                    className="h-6 w-6 relative hidden min-h-[24px]"
                    alt=""
                    src="/star-fill-4.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[25px] inline-block min-w-[240px]">
                  Lorem ipsum dolor Lorem ipsum
                </div>
                <div className="w-[127px] flex flex-col items-center justify-center py-0 px-5 box-border">
                  <button className="cursor-pointer [border:none] py-[15px] px-[11px] bg-cornflowerblue self-stretch h-8 rounded overflow-hidden shrink-0 flex flex-row items-center justify-center box-border hover:bg-deepskyblue">
                    <div className="flex-1 relative text-xs font-cabin text-white text-center">
                      EDITAR
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-center min-h-[39px]">
              <div className="self-stretch flex flex-row items-center justify-start [row-gap:20px] mq1050:flex-wrap">
                <div className="flex-1 relative leading-[25px] inline-block min-w-[240px]">
                  Variable 4
                </div>
                <div className="flex-1 relative leading-[25px] inline-block min-w-[240px]">
                  Lorem ipsum dolor Lorem ipsum
                </div>
                <div className="flex-[0.2907] flex flex-row items-center justify-center py-0 px-[87px] box-border min-w-[240px] mq450:flex-1">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill-4.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill-4.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill-4.svg"
                  />
                  <img
                    className="h-6 w-6 relative hidden min-h-[24px]"
                    alt=""
                    src="/star-fill-4.svg"
                  />
                  <img
                    className="h-6 w-6 relative hidden min-h-[24px]"
                    alt=""
                    src="/star-fill-4.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[25px] inline-block min-w-[240px]">
                  Lorem ipsum dolor Lorem ipsum
                </div>
                <div className="w-[127px] flex flex-col items-center justify-center py-0 px-5 box-border">
                  <button className="cursor-pointer [border:none] py-[15px] px-[11px] bg-cornflowerblue self-stretch h-8 rounded overflow-hidden shrink-0 flex flex-row items-center justify-center box-border hover:bg-deepskyblue">
                    <div className="flex-1 relative text-xs font-cabin text-white text-center">
                      EDITAR
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="absolute top-[0px] left-[21px] z-[1]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "12",
            background: "#1b3e85",
            borderRadius: "4px",
            "&:hover": { background: "#1b3e85" },
            width: 134,
            height: 35,
          }}
        >
          Responsable 2
        </Button>
      </section>
      <section className="self-stretch h-[189px] relative max-w-full shrink-0 z-[1] text-center text-sm text-white font-cabin mq1050:h-auto mq1050:min-h-[189]">
        <div className="absolute top-[17px] left-[0px] shadow-[0px_0px_4px_2px_rgba(0,_0,_0,_0.25)] rounded bg-white box-border w-full overflow-hidden flex flex-row items-center justify-center py-7 px-11 max-w-full border-[1px] border-solid border-gainsboro-200 lg:pl-[22px] lg:pr-[22px] lg:box-border">
          <div className="flex-1 flex flex-col items-center justify-center max-w-full">
            <div className="self-stretch bg-darkslateblue flex flex-row flex-wrap items-center justify-start gap-[10px] min-h-[40px]">
              <div className="flex-1 relative leading-[25px] inline-block min-w-[54px] max-w-[269px]">
                Variables
              </div>
              <div className="flex-1 relative leading-[25px] inline-block min-w-[54px] max-w-[269px]">
                Descripciòn
              </div>
              <div className="flex-1 relative leading-[25px] inline-block min-w-[54px] max-w-[269px]">
                Valoraciòn
              </div>
              <div className="flex-1 relative leading-[25px] inline-block min-w-[54px] max-w-[269px]">
                Descripciòn
              </div>
            </div>
            <div className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-center gap-[10px] text-black">
              <div className="self-stretch flex flex-row items-center justify-start min-h-[31px] [row-gap:20px] mq1050:flex-wrap">
                <div className="flex-1 relative leading-[25px] inline-block min-w-[152px]">
                  Variable S 4
                </div>
                <div className="flex-1 relative leading-[25px] inline-block min-w-[152px]">
                  Lorem ipsum dolor Lorem ipsum
                </div>
                <div className="flex flex-row items-center justify-center py-0 px-[102px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill.svg"
                  />
                  <img
                    className="h-6 w-6 relative hidden min-h-[24px]"
                    alt=""
                    src="/star-fill.svg"
                  />
                  <img
                    className="h-6 w-6 relative hidden min-h-[24px]"
                    alt=""
                    src="/star-fill.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[25px] inline-block min-w-[152px]">
                  Lorem ipsum dolor Lorem ipsum
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start min-h-[31px] [row-gap:20px] mq1050:flex-wrap">
                <div className="flex-1 relative leading-[25px] inline-block min-w-[152px]">
                  Variable S 4
                </div>
                <div className="flex-1 relative leading-[25px] inline-block min-w-[152px]">
                  Lorem ipsum dolor Lorem ipsum
                </div>
                <div className="flex flex-row items-center justify-center py-0 px-[78px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill.svg"
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/star-fill.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[25px] inline-block min-w-[152px]">
                  Lorem ipsum dolor Lorem ipsum
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="absolute top-[0px] left-[21px] z-[1]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "12",
            background: "#1b3e85",
            borderRadius: "4px",
            "&:hover": { background: "#1b3e85" },
            width: 134,
            height: 35,
          }}
        >
          Responsable 3
        </Button>
      </section>
    </div>
  );
};

export default Page7;
