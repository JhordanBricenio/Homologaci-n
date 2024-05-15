import star from "../../assets/images/evalaucion/star-fill.svg";
import poligon from "../../assets/images/evalaucion/polygon-1.svg";
import iconsmorevert from "../../assets/images/evalaucion/iconsmore-vert-24px.svg";
import TableEval from "./TableEvaluacion";

function Evaluacion() {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[100px] px-[118px] pb-[281px] box-border tracking-[normal] leading-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border mq725:pl-[59px] mq725:pr-[59px] mq725:box-border">
      <div className="w-10 h-[30px] absolute !m-[0] top-[65px] left-[130px] z-[2]">
        <div className="absolute top-[0px] left-[6.6px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-white-color w-7 h-[29.4px]" />
        <div className="absolute top-[0px] left-[0px] h-full flex flex-col items-center justify-center py-0 px-0 box-border w-full z-[1]">
          <div className="w-10 h-10 rounded-81xl overflow-hidden shrink-0 flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center p-2">
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
      <section className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-sm text-white-color font-typography-body2">
        <div className="!m-[0] absolute top-[-19px] left-[25px] rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-3.5 pb-[17px] pr-5 pl-[27px] whitespace-nowrap z-[1]">
          <div className="h-[47px] w-[209px] relative rounded-8xs bg-darkslateblue hidden" />
          <div className="relative z-[2]">Evaluación. Configuración</div>
        </div>
        <div className="!m-[0] absolute top-[-24px] right-[11px] rounded-8xs  bg-cornflowerblue-100 flex flex-row items-start justify-start pt-[15px] px-[26px] pb-4 z-[1]">
          <div className="h-[47px] w-[165px] relative rounded-8xs  bg-cornflowerblue-100 hidden" />
          <div className="relative inline-block min-w-[110px] z-[2]">
            CONFIGURACIÓN
          </div>
        </div>

        <div className="flex-1 rounded-3xs bg-white-color flex flex-col items-end justify-start pt-[173px] pb-[62px] pr-7 pl-[25px] box-border relative gap-[119px] max-w-full text-left text-sm text-text-primary font-typography-body2 mq450:gap-[30px] mq650:gap-[59px] mq650:pt-28 mq650:pb-10 mq650:box-border">
          <div className="w-[1203px] h-[643px] relative rounded-3xs bg-white-color hidden max-w-full z-[0]" />
          <div className="w-[1150px] overflow-x-auto flex flex-col items-start justify-start max-w-full z-[1]">
            <TableEval />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[3px] text-white-color">
            <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-1 pb-[5px] pr-[18px] pl-[38px] gap-[6.5px] z-[1]">
              <div className="h-[47px] w-[209px] relative rounded-8xs bg-darkslateblue hidden" />
              <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
                <div className="relative inline-block min-w-[20px] z-[2]">{`19: `}</div>
              </div>
              <div className="flex flex-row items-end justify-start">
                <img className="h-6 w-6 relative z-[4]" alt="" src={star} />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative inline-block min-w-[32px] z-[3]">
                    Total
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[-2px]">
                    <img
                      className="h-6 w-6 relative min-h-[24px] z-[5]"
                      alt=""
                      src={star}
                    />
                    <img
                      className="h-6 w-6 relative min-h-[24px] z-[4]"
                      alt=""
                      src={star}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="h-6 w-6 relative min-h-[24px] z-[2]"
                    alt=""
                    src={star}
                  />
                  <img
                    className="h-6 w-6 relative min-h-[24px] z-[3]"
                    alt=""
                    src={star}
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[47px] h-[47px] absolute !m-[0] bottom-[82px] left-[calc(50%_-_23.5px)] rounded-sm z-[2]"
            alt=""
            src={poligon}
          />
        </div>
      </section>
    </div>
  );
}

export default Evaluacion;
