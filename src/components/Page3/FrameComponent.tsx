import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0.5 pb-2 box-border shrink-0 max-w-full text-left text-13xl text-white font-inter">
      <div className="flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full">
        <div className="flex-1 shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.23)] rounded bg-white box-border flex flex-col items-start justify-start pt-[50px] px-[29px] pb-[30px] relative min-w-[328px] min-h-[123px] max-w-full text-base text-black border-[0.5px] border-solid border-darkgray-200 mq1050:pt-[50px] mq1050:box-border">
          <div className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full">
            <input
              className="[outline:none] bg-white flex-1 rounded box-border flex flex-row items-center justify-start py-[9px] px-4 font-inter text-base text-black min-w-[226px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
              placeholder="Texto"
              type="text"
            />
          </div>
          <div className="self-stretch overflow-hidden hidden flex-row items-start justify-start max-w-full z-[1]">
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
          <div className="!m-[0] absolute top-[-20px] left-[30px] rounded bg-darkslateblue-200 flex flex-col items-start justify-center py-[11.5px] pr-5 pl-6 box-border min-h-[30px] max-h-[60px] whitespace-nowrap text-sm text-white">
            <div className="relative">Breve descripción de la empresa</div>
          </div>
        </div>
        <div className="flex-1 shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.23)] rounded bg-white box-border flex flex-col items-start justify-start pt-[50px] px-[29px] pb-[30px] relative gap-[20px] min-w-[328px] min-h-[278px] max-w-full border-[0.5px] border-solid border-darkgray-200 mq1225:pt-[50px] mq1225:box-border mq1050:pt-[50px] mq1050:box-border">
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-[67.3px] pl-0 gap-[10px] text-center mq750:flex-wrap mq450:pr-5 mq450:box-border">
            <FormControl
              className="h-[43px] flex-1 font-inter text-base text-black min-w-[175px] min-h-[30px] max-h-[60px]"
              variant="outlined"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: "270px",
                height: "43px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "43px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "43px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "43px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "43px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select color="primary" disableUnderline displayEmpty />
              <FormHelperText />
            </FormControl>
            <button className="cursor-pointer [border:none] py-0 px-1 bg-darkslateblue-200 h-[30px] w-[30px] rounded-81xl flex flex-col items-center justify-center box-border hover:bg-darkslateblue-100">
              <div className="self-stretch relative text-13xl font-inter text-white text-center mq750:text-7xl mq450:text-lgi">
                +
              </div>
            </button>
          </div>
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[10px] text-base text-cornflowerblue">
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
          <div className="!m-[0] absolute top-[-20px] left-[30px] rounded bg-darkslateblue-200 flex flex-col items-start justify-center py-[11.5px] pr-5 pl-6 box-border min-h-[30px] max-h-[60px] whitespace-nowrap text-sm">
            <div className="relative">Categorías CIIU en las que participa</div>
          </div>
        </div>
        <div className="flex-1 shadow-[0px_0px_4px_2px_rgba(124,_124,_124,_0.23)] rounded bg-white box-border flex flex-col items-start justify-start pt-[50px] px-[29px] pb-[30px] relative gap-[20px] min-w-[328px] min-h-[268px] max-w-full border-[0.5px] border-solid border-darkgray-200 mq1050:pl-[30px] mq1050:pt-[50px] mq1050:pr-[30px] mq1050:box-border mq1050:max-w-[500]">
          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-[68px] pl-0 gap-[10px] text-center mq750:flex-wrap mq450:pr-5 mq450:box-border">
            <FormControl
              className="h-[43px] flex-1 font-inter text-base text-black min-w-[175px] min-h-[30px] max-h-[60px]"
              variant="outlined"
              sx={{
                borderRadius: "0px 0px 0px 0px",
                width: "270px",
                height: "43px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "43px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "43px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "43px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "43px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select color="primary" disableUnderline displayEmpty />
              <FormHelperText />
            </FormControl>
            <button className="cursor-pointer [border:none] py-0 px-1 bg-darkslateblue-200 h-[30px] w-[30px] rounded-81xl flex flex-col items-center justify-center box-border hover:bg-darkslateblue-100">
              <div className="self-stretch relative text-13xl font-inter text-white text-center mq750:text-7xl mq450:text-lgi">
                +
              </div>
            </button>
          </div>
          <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-start gap-[10px_17.2px] min-h-[125px] text-base text-cornflowerblue mq1050:self-stretch mq1050:w-auto mq1050:items-center mq1050:justify-center">
            <div className="bg-white flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="relative inline-block min-w-[11px]">X</div>
              </div>
            </div>
            <div className="bg-white flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="relative inline-block min-w-[11px]">X</div>
              </div>
            </div>
            <div className="bg-white flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="relative inline-block min-w-[11px]">X</div>
              </div>
            </div>
            <div className="bg-white flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="relative inline-block min-w-[11px]">X</div>
              </div>
            </div>
            <div className="bg-white flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center">
                <div className="relative text-base font-inter text-cornflowerblue text-center inline-block min-w-[11px]">
                  X
                </div>
              </button>
            </div>
            <div className="bg-white flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center">
                <div className="relative text-base font-inter text-cornflowerblue text-center inline-block min-w-[11px]">
                  X
                </div>
              </button>
            </div>
            <div className="bg-white flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center">
                <div className="relative text-base font-inter text-cornflowerblue text-center inline-block min-w-[11px]">
                  X
                </div>
              </button>
            </div>
            <div className="bg-white flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center">
                <div className="relative text-base font-inter text-cornflowerblue text-center inline-block min-w-[11px]">
                  X
                </div>
              </button>
            </div>
            <div className="bg-white flex flex-row items-center justify-start py-1.5 px-[9px] gap-[10px] border-[1px] border-solid border-darkgray-100">
              <div className="relative font-medium inline-block min-w-[72px]">
                Tag1Tag1
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center">
                <div className="relative text-base font-inter text-cornflowerblue text-center inline-block min-w-[11px]">
                  X
                </div>
              </button>
            </div>
          </div>
          <div className="w-20 !m-[0] absolute top-[-20px] left-[30px] rounded bg-darkslateblue-200 flex flex-col items-start justify-center py-[11.5px] pr-5 pl-6 box-border min-h-[30px] max-h-[60px] text-sm">
            <div className="relative inline-block min-w-[32px]">Tags</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
