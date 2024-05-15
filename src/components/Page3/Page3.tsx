import { FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";

const Page3: FunctionComponent = () => {
  return (
    <div className="w-[1492px] bg-whitesmoke max-w-full overflow-y-auto flex flex-row items-start justify-start py-[60px] px-[30px] box-border tracking-[normal] leading-[normal] text-left text-base text-black font-inter">
      <div className="h-[1092px] flex-1 rounded-lg bg-white flex flex-col items-start justify-start pt-[314px] px-7 pb-[60px] box-border gap-[50px] max-w-full mq1225:h-auto mq1225:pt-[204px] mq1225:pb-[39px] mq1225:box-border mq750:gap-[25px] mq750:pt-[133px] mq750:pb-[25px] mq750:box-border">
        <div className="w-[97px] h-[46px] rounded bg-cornflowerblue hidden flex-row items-center justify-center py-2 px-6 box-border min-h-[30px] max-h-[60px] text-center text-sm text-white">
          <div className="h-[17px] flex-1 relative uppercase inline-block">
            Editar
          </div>
        </div>
        <div className="w-[275px] hidden flex-col items-end justify-center text-center text-sm text-white">
          <div className="self-stretch h-[46px] rounded bg-cornflowerblue flex flex-row items-center justify-center py-2 px-6 box-border min-h-[30px] max-h-[60px] whitespace-nowrap">
            <div className="h-[17px] flex-1 relative uppercase inline-block">
              IR AL CATÁLOgO DE PRODUCTOS
            </div>
          </div>
        </div>
        <FrameComponent1 />
        <div className="w-[140px] hidden flex-row items-center justify-start py-0 pr-[34px] pl-0 box-border gap-[10px]">
          <div className="h-[19px] flex-1 relative inline-block whitespace-nowrap">
            aaa@aaa.com
          </div>
          <img
            className="h-6 w-6 relative hidden"
            alt=""
            src="/paper-clip-light.svg"
          />
        </div>
        <div className="w-[73px] hidden flex-row items-center justify-start py-0 pr-[34px] pl-0 box-border gap-[10px]">
          <div className="h-[19px] flex-1 relative inline-block">input</div>
          <img
            className="h-6 w-6 relative hidden"
            alt=""
            src="/paper-clip-light.svg"
          />
        </div>
        <div className="w-[187px] hidden flex-row items-center justify-start py-0 pr-[34px] pl-0 box-border gap-[10px]">
          <div className="h-[19px] flex-1 relative inline-block">
            alternativa escogida
          </div>
          <img
            className="h-6 w-6 relative hidden"
            alt=""
            src="/paper-clip-light.svg"
          />
        </div>
        <div className="w-[73px] hidden flex-row items-center justify-start py-0 pr-[34px] pl-0 box-border gap-[10px]">
          <div className="h-[19px] flex-1 relative inline-block">input</div>
          <img
            className="h-6 w-6 relative hidden"
            alt=""
            src="/paper-clip-light.svg"
          />
        </div>
        <div className="w-[163px] relative [text-decoration:underline] text-cornflowerblue hidden">
          archivo de reemplazo
        </div>
        <div className="w-[73px] hidden flex-row items-center justify-start py-0 pr-[34px] pl-0 box-border gap-[10px]">
          <div className="h-[19px] flex-1 relative inline-block">input</div>
          <img
            className="h-6 w-6 relative hidden"
            alt=""
            src="/paper-clip-light.svg"
          />
        </div>
        <FrameComponent />
        <div className="w-[746px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[18px] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full">
              <div className="w-[120px] flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border">
                <div className="self-stretch relative">Variable S 1 *</div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start py-0 pr-8 pl-0 box-border gap-[10px] min-w-[313px] max-w-full text-cornflowerblue mq750:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[136px]">
                  <div className="relative [text-decoration:underline]">
                    archivo actualmente subido
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/paper-clip-light.svg"
                />
                <img
                  className="h-6 w-6 relative min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/trash-duotone-line.svg"
                />
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                  <div className="relative [text-decoration:underline]">
                    archivo de reemplazo
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                  <div className="h-5 w-5 relative rounded bg-limegreen" />
                  <div className="h-5 w-5 relative rounded bg-limegreen" />
                  <div className="h-5 w-5 relative rounded bg-gold" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full">
              <div className="w-[120px] flex flex-col items-start justify-start pt-[10.5px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[31px]">
                  <div className="self-stretch relative">Variable S 2 *</div>
                  <div className="self-stretch relative">Variable S 3 *</div>
                  <div className="self-stretch relative">Variable S 4 *</div>
                  <div className="self-stretch relative">Variable S 5 *</div>
                  <div className="self-stretch relative">Variable S 6 *</div>
                  <div className="self-stretch relative">Variable P 1 *</div>
                  <div className="self-stretch relative">Variable P 2 *</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[385px] max-w-full mq750:min-w-full">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                  <div className="w-[250px] flex flex-col items-start justify-start gap-[10px]">
                    <FormControl
                      className="self-stretch h-10 font-inter text-base text-black min-h-[30px] max-h-[60px]"
                      variant="outlined"
                      sx={{
                        borderRadius: "0px 0px 0px 0px",
                        width: "250px",
                        height: "40px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "40px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "40px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "40px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "40px",
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
                      <Select
                        color="primary"
                        defaultValue="aaa@aaa.com"
                        disableUnderline
                        displayEmpty
                      />
                      <FormHelperText />
                    </FormControl>
                    <FormControl
                      className="self-stretch h-10 font-inter text-base text-black min-h-[30px] max-h-[60px]"
                      variant="outlined"
                      sx={{
                        borderRadius: "0px 0px 0px 0px",
                        width: "250px",
                        height: "40px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "40px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "40px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "40px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "40px",
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
                      <Select
                        color="primary"
                        defaultValue="input"
                        disableUnderline
                        displayEmpty
                      />
                      <FormHelperText />
                    </FormControl>
                  </div>
                  <div className="h-20 w-20 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                    <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start gap-[30px_8px]">
                      <div className="h-5 w-5 relative rounded bg-limegreen" />
                      <div className="h-5 w-5 relative rounded bg-limegreen" />
                      <div className="h-5 w-5 relative rounded bg-gold" />
                      <div className="h-5 w-5 relative rounded bg-limegreen" />
                      <div className="h-5 w-5 relative rounded bg-limegreen" />
                      <div className="h-5 w-5 relative rounded bg-gold" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full mq750:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[313px] max-w-full">
                    <FormControl
                      className="w-[250px] h-10 font-inter text-base text-black min-h-[30px] max-h-[60px]"
                      variant="outlined"
                      sx={{
                        borderRadius: "0px 0px 0px 0px",
                        width: "250px",
                        height: "40px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "40px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "40px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "40px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "40px",
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
                      <Select
                        color="primary"
                        defaultValue="alternativa escogida"
                        disableUnderline
                        displayEmpty
                      />
                      <FormHelperText />
                    </FormControl>
                    <div className="self-stretch h-10 overflow-hidden flex flex-row items-center justify-start gap-[10px]">
                      <div className="h-6 hidden flex-row items-center justify-start py-0 pr-[34px] pl-0 box-border gap-[10px]">
                        <div className="relative">07/07/2020</div>
                        <img
                          className="h-6 w-6 relative hidden"
                          alt=""
                          src="/paper-clip-light.svg"
                        />
                      </div>
                      <TextField
                        className="w-[250px] min-h-[30px] max-h-[60px]"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        color="primary"
                        size="small"
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <div className="h-20 w-20 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                    <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start gap-[30px_8px]">
                      <div className="h-5 w-5 relative rounded bg-limegreen" />
                      <div className="h-5 w-5 relative rounded bg-limegreen" />
                      <div className="h-5 w-5 relative rounded bg-gold" />
                      <div className="h-5 w-5 relative rounded bg-limegreen" />
                      <div className="h-5 w-5 relative rounded bg-limegreen" />
                      <div className="h-5 w-5 relative rounded bg-gold" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[3px] text-cornflowerblue mq750:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[18px] min-w-[162px]">
                    <FormControl
                      className="self-stretch h-10 font-inter text-base text-black min-h-[30px] max-h-[60px]"
                      variant="outlined"
                      sx={{
                        borderRadius: "0px 0px 0px 0px",
                        width: "250px",
                        height: "40px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "40px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "40px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "40px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "40px",
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
                      <Select
                        color="primary"
                        defaultValue="input"
                        disableUnderline
                        displayEmpty
                      />
                      <FormHelperText />
                    </FormControl>
                    <div className="flex flex-row items-start justify-start gap-[10px]">
                      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                        <div className="relative [text-decoration:underline]">
                          archivo actualmente subido
                        </div>
                      </div>
                      <img
                        className="h-6 w-6 relative min-h-[24px]"
                        loading="lazy"
                        alt=""
                        src="/paper-clip-light.svg"
                      />
                    </div>
                    <FormControl
                      className="self-stretch h-10 font-inter text-base text-black min-h-[30px] max-h-[60px]"
                      variant="outlined"
                      sx={{
                        borderRadius: "0px 0px 0px 0px",
                        width: "250px",
                        height: "40px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "40px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "40px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "40px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "40px",
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
                      <Select
                        color="primary"
                        defaultValue="input"
                        disableUnderline
                        displayEmpty
                      />
                      <FormHelperText />
                    </FormControl>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[58px] px-0 pb-0 box-border min-w-[166px]">
                    <img
                      className="w-6 h-6 relative"
                      loading="lazy"
                      alt=""
                      src="/trash-duotone-line.svg"
                    />
                  </div>
                  <div className="h-[130px] w-20 flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
                    <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start gap-[30px_8px]">
                      <div className="h-5 w-5 relative rounded bg-red" />
                      <div className="h-5 w-5 relative rounded bg-red" />
                      <div className="h-5 w-5 relative rounded bg-gold" />
                      <div className="h-5 w-5 relative rounded bg-red" />
                      <div className="h-5 w-5 relative rounded bg-red" />
                      <div className="h-5 w-5 relative rounded bg-gold" />
                      <div className="h-5 w-5 relative rounded bg-red" />
                      <div className="h-5 w-5 relative rounded bg-red" />
                      <div className="h-5 w-5 relative rounded bg-gold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
