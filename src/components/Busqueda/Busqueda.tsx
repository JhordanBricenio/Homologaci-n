import { TextField, InputAdornment} from "@mui/material";

import iconsmorevert from "../../assets/images/evalaucion/iconsmore-vert-24px.svg";
import SearchIcon from "@mui/icons-material/Search";
import TableBusqueda from "./Table";

export function Busqueda() {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[100px] px-[118px] pb-[281px] box-border tracking-[normal] leading-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border mq725:pl-[59px] mq725:pr-[59px] mq725:box-border">
      <section className="w-[1180px] h-40 flex flex-row items-start justify-start relative text-left text-sm text-white-color font-typography-caption">
        <div className="h-[643px] w-[1203px] absolute !m-[0] bottom-[-518px] left-[-12px] rounded-[10px] bg-white-color" />
        <div className="h-40 w-[1180px] flex flex-col items-start justify-start gap-[41px] z-[1]">
          <div className="w-[1180px] h-[63px] flex flex-row items-start justify-start gap-[793px]">
            <div className="h-[63px] w-[222px] relative">
              <div className="absolute h-[74.6%] w-[94.14%] top-[25.4%] right-[0%] bottom-[0%] left-[5.86%] flex flex-row items-start justify-start pt-3.5 px-[27px] pb-[17px] box-border">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs bg-darkslateblue" />
                <div className="h-4 w-[137px] relative inline-block z-[1]">
                  Búsqueda: Evaluación
                </div>
              </div>
              <div className="absolute h-[47.62%] w-[18.02%] top-[0%] right-[81.98%] bottom-[52.38%] left-[0%] z-[2]">
                <div className="absolute h-[98%] w-[70%] top-[0%] right-[13.5%] bottom-[2%] left-[16.5%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-white-color" />
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-col items-center justify-center py-0 px-0 box-border z-[1]">
                  <div className="w-10 h-10 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
                    <div className="h-10 w-10 flex flex-row items-center justify-center p-2 box-border">
                      <img
                        className="h-6 w-6 relative"
                        loading="lazy"
                        alt=""
                        src={iconsmorevert}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[55px] w-[165px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
              <div className="w-[165px] h-[47px] flex flex-row items-start justify-start pt-[15px] px-[27px] pb-4 box-border relative">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs  bg-cornflowerblue-100" />
                <div className="h-4 w-[111px] relative inline-block shrink-0 z-[1]">
                  CONFIGURACIÓN
                </div>
              </div>
            </div>
          </div>
          <div className="w-[495px] h-14 flex flex-row items-start justify-start">
            <TextField
              className="[border:none] bg-[transparent] h-14 w-[495px]"
              color="primary"
              label="Search"
              required={true}
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
      </section>
      <section className="w-[1167px] h-[448px] flex flex-row items-start justify-end py-0 pr-2.5 pl-0 box-border text-left text-sm text-white-color font-typography-caption">
        <div className="h-[448px] w-[1157px] flex flex-row items-start justify-start gap-[19px]">
          <div className="h-[448px] w-[732px] flex flex-col items-start justify-start gap-[17px]">
            <div className="w-[723px] h-[193px] relative">
              <div className="absolute top-[0px] left-[0px] w-[723px] h-[193px] z-[1]">
                <div className="absolute h-[89.12%] w-[100.28%] top-[11.92%] right-[-0.28%] bottom-[-1.04%] left-[0%] shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border border-[1px] border-solid border-gray-100" />
                <div className="absolute h-[23.32%] w-[21.3%] top-[0%] right-[74.14%] bottom-[76.68%] left-[4.56%] flex flex-row items-start justify-start pt-3.5 px-[26px] pb-[15px] box-border z-[1]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs bg-darkslateblue" />
                  <div className="h-4 w-[102px] relative inline-block z-[1]">
                    Por proveedores
                  </div>
                </div>
              </div>
              <div className="absolute top-[67px] left-[33px] w-[669px] h-[100px] flex flex-col items-start justify-start z-[2] text-text-primary">
                <TableBusqueda />
              </div>
            </div>
            <div className="w-[732px] h-[238px] flex flex-row items-start justify-start py-0 pr-0 pl-[9px] box-border text-text-primary">
              <div className="h-[238px] w-[723px] relative">
                <div className="absolute top-[0px] left-[0px] w-[723px] h-[238px] z-[1]">
                  <div className="absolute h-[86.97%] w-[100.28%] top-[13.87%] right-[-0.28%] bottom-[-0.84%] left-[0%] shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border border-[1px] border-solid border-gray-100" />
                  <div className="text-white absolute h-[23.32%] w-[21.3%] top-[0%] right-[74.14%] bottom-[76.68%] left-[4.56%] flex flex-row items-start justify-start pt-3.5 px-[26px] pb-[15px] box-border z-[1]">
                    <div className="h-[40px] w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs bg-darkslateblue" />
                    <div className="h-4 w-[102px] relative inline-block z-[1]">
                      Por procesos
                    </div>
                  </div>
                </div>
                <div className="absolute top-[59px] left-[22px] w-[669px] h-[160px] flex flex-col items-start justify-start z-[2]">
                  <TableBusqueda />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[333px] w-[406px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <div className="w-[406px] h-[331px] relative">
              <div className="absolute top-[0px] left-[0px] w-[406px] h-[331px] z-[1]">
                <div className="absolute h-[93.66%] w-[100.49%] top-[6.95%] right-[-0.49%] bottom-[-0.6%] left-[0%] shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border border-[1px] border-solid border-gray-100" />
                <div className="absolute h-[13.6%] w-[40.39%] top-[0%] right-[54.93%] bottom-[86.4%] left-[4.68%] flex flex-row items-start justify-start pt-3.5 px-[27px] pb-[15px] box-border z-[1]">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs bg-darkslateblue" />
                  <div className="h-4 w-[110px] relative inline-block z-[1]">
                    Últimos procesos
                  </div>
                </div>
              </div>
              <div className="absolute top-[71px] left-[12px] bg-white-color w-[382px] h-[211px] flex flex-col items-start justify-start z-[2] text-text-primary">
                <TableBusqueda />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Busqueda;
