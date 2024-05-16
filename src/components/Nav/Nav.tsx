import { Button } from "@mui/material";
import b2mining from "../../assets/images/b2mining.png";
const Nav = () => {
  return (
    <div className="w-[281px] bg-steelblue-100 flex flex-col items-start justify-start pt-0 px-0 pb-60 box-border gap-[55px] text-center text-base text-white font-roboto mq450:gap-[27px] mq450:pb-[157px] mq450:box-border mq825:pb-[242px] mq825:box-border">
        <div className="self-stretch h-[1024px] relative bg-steelblue-100 hidden" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch bg-steelblue-300 flex flex-row items-start justify-start pt-[11px] pb-[8.6px] pr-[13px] pl-7 gap-[29px] z-[1]">
            <div className="h-14 w-[281px] relative bg-steelblue-300 hidden" />
            <img
              className="h-[36.4px] w-[39px] relative object-contain min-h-[36px] z-[2]"
              loading="lazy"
              alt=""
              src={b2mining}
            />
            <Button
              className="h-[34px] flex-1 z-[2]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "16",
                background: "#fff",
                borderRadius: "5px",
                "&:hover": { background: "#fff" },
                height: 34,
              }}
            >
              PE7777777777
            </Button>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[31px]">
            <div className="flex flex-row items-start justify-start gap-[5px]">
              <div className="h-9 w-9 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-steelblue-200 z-[1]" />
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <div className="relative font-light inline-block min-w-[67px] z-[1]">
                  Usuario 2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[19px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[33px]">
            <Button
              className="self-stretch h-[49px] z-[1]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#4a94c0",
                borderRadius: "5px",
                "&:hover": { background: "#4a94c0" },
                height: 49,
              }}
            >
              Comprador
            </Button>
            <nav className="m-0 self-stretch flex flex-col items-start justify-start gap-[40px] text-center text-base text-white font-roboto">
              <div className="relative font-light whitespace-pre-wrap z-[1]">
                RB Requerimiento
              </div>
              <div className="w-[209px] relative font-light whitespace-pre-wrap inline-block z-[1]">
                CP Comprobante de pago
              </div>
              <div className="relative font-light whitespace-pre-wrap z-[1]">
                OC Orden de compra
              </div>
              <div className="relative font-light whitespace-pre-wrap inline-block min-w-[125px] z-[1]">
                C Cotizaciones
              </div>
              <div className="relative font-light whitespace-pre-wrap inline-block min-w-[109px] z-[1]">
                E Evaluación
              </div>
              <Button
                className="self-stretch h-[49px] z-[1]"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "16",
                  background: "#fff",
                  borderRadius: "5px",
                  "&:hover": { background: "#fff" },
                  height: 49,
                }}
              >
                Homologación
              </Button>
            </nav>
          </div>
        </div>
      </div>
  );
};

export default Nav;
