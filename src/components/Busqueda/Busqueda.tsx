import FrameComponent from "./Frane";
import {
  Button,
  TextField
} from "@mui/material";

export function Busqueda  ()  {
  return (
    <div className="w-full relative bg-native-scrollbar-bg overflow-hidden flex flex-col items-start justify-start pt-[98px] px-[105px] pb-[283px] box-border tracking-[normal] leading-[normal] lg:pl-[52px] lg:pr-[52px] lg:box-border mq750:pl-[26px] mq750:pr-[26px] mq750:box-border">
      <div className="w-10 h-[30px] absolute !m-[0] top-[63px] left-[117px] z-[2]">
        <div className="absolute top-[0px] left-[6.6px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-white-color w-7 h-[29.4px]" />
        <div className="absolute top-[0px] left-[0px] h-full flex flex-col items-center justify-center py-0 px-0 box-border w-full z-[1]">
          <div className="w-10 h-10 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center p-2">
              <img
                className="h-6 w-6 relative"
                loading="lazy"
                alt=""
                src="/iconsmore-vert-24px.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="w-[1203px] flex flex-row items-start justify-start relative max-w-full">
        <Button
          className="h-[47px] w-[209px] !m-[0] absolute top-[-19px] left-[25px] z-[1]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#1b3e85",
            borderRadius: "5px",
            "&:hover": { background: "#1b3e85" },
            width: 209,
            height: 47,
          }}
        >
          Búsqueda: Evaluación
        </Button>
        <Button
          className="h-[47px] w-[165px] !m-[0] absolute top-[-27px] right-[11px] z-[1]"
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#2299e4",
            borderRadius: "5px",
            "&:hover": { background: "#2299e4" },
            width: 165,
            height: 47,
          }}
        >
          CONFIGURACIÓN
        </Button>
        <div className="flex-1 rounded-3xs bg-white-color flex flex-col items-start justify-start pt-[69px] px-3 pb-[53px] box-border gap-[17px] max-w-full mq750:pt-[45px] mq750:pb-[34px] mq750:box-border">
          <div className="w-[1203px] h-[643px] relative rounded-3xs bg-white-color hidden max-w-full" />
          <div className="w-[495px] flex flex-row items-start justify-start max-w-full z-[1]">
            <TextField
              className="[border:none] bg-[transparent] h-14 flex-1 max-w-full"
              size="small"
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": { height: "56px" },
                width: "495px",
              }}
            />
          </div>
          <FrameComponent />
        </div>
      </section>
    </div>
  )
}

export default Busqueda