import { Box, LinearProgress } from "@mui/material";
import { FunctionComponent } from "react";
import foto from "../../assets/images/foto.jpg";
import fotoia from "../../assets/images/generative.jpg";

export type GroupComponentType = {
  line1?: string;
  line11?: string;
  line12?: string;
  line13?: string;
  line14?: string;
  line15?: string;
  line16?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = () => {
  return (
    <div className="w-[260px] flex flex-col items-start justify-start pt-4 pb-[17px] pr-2 pl-[19px] box-border relative gap-[8px] text-center text-sm text-black font-typography-caption">
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[-2px] bottom-[-2px] left-[0px] shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border border-[1px] border-solid border-gray-100" />
      <div className="self-stretch h-[120px] flex flex-row items-start justify-start gap-[17px]">
        <div className="self-stretch flex-1 relative bg-gainsboro z-[1]">
          <img className="w-full h-full" src={foto} alt="" />
        </div>
        <div className="self-stretch w-[106px] flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[6px]">
            <div className="self-stretch flex-1 relative bg-gainsboro z-[1]" >
              <img src={fotoia} alt="" />

            </div>
            <div className="self-stretch flex-1 relative bg-gainsboro z-[1]" >
            <img src={fotoia} alt="" />
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[6px]">
            <div className="self-stretch flex-1 relative bg-gainsboro z-[1]" >
            <img src={fotoia} alt="" />
            </div>
            <div className="self-stretch flex-1 relative bg-gainsboro z-[1]" >
            <img src={fotoia} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start gap-[10px] z-[1]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative font-light inline-block min-w-[56px]">
            Producto
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="relative font-light inline-block min-w-[39px]">
            Precio
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <div className="relative font-light inline-block min-w-[35px]">
              Stock
            </div>
          </div>
        </div>
        <div className="self-stretch h-[17px] relative">
          <div className="absolute top-[0px] left-[0px] font-light inline-block w-[82px] min-w-[82px]">
            Descripción
          </div>
        </div>
        <div className="self-stretch h-4 relative">
          <div className="absolute top-[0px] left-[0px] font-light inline-block min-w-[67px]">
            Categorías
          </div>
        </div>
        <div className="self-stretch h-[17px] relative">
          <div className="absolute top-[0px] left-[0px] font-light inline-block min-w-[23px]">
            Tag
          </div>
        </div>
        <div className="self-stretch h-[17px] relative">
          <div className="absolute top-[0px] left-[0px] font-light">
            Fecha de actualización
          </div>
        </div>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </div>
    </div>
  );
};

export default GroupComponent;
