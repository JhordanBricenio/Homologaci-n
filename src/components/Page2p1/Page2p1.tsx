import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const Page2p1: FunctionComponent = () => {
  return (
    <div className="w-[1253px] max-w-full flex flex-row items-start justify-start tracking-[normal] leading-[normal]">
      <section className="flex-1 flex flex-col items-start justify-start pt-0 px-[22px] pb-[25px] box-border relative gap-[50px] max-w-full text-left text-sm text-white font-cabin mq725:gap-[25px]">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded bg-white" />
        <div className="self-stretch h-[399px] flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border gap-[11px] max-w-full mq1000:h-auto">
          <div className="mt-[-52px] rounded bg-darkslateblue overflow-hidden flex flex-row items-start justify-start py-[11.5px] px-[20.5px] shrink-0 [debug_commit:1de1738] whitespace-nowrap z-[1]">
            <div className="relative inline-block min-w-[48px]">Mi Perfil</div>
          </div>
          <div className="relative text-[20px] text-darkslateblue shrink-0 [debug_commit:1de1738] z-[1] mq450:text-base">
            RAZON SOCIAL - 0123456789
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[25px] shrink-0 [debug_commit:1de1738] max-w-full text-base text-dimgray mq1000:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full mq725:min-w-full">
              <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq725:flex-wrap">
                <div className="h-[105px] w-[100px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                  <div className="self-stretch flex-1 relative bg-black z-[1]" />
                </div>
                <div className="flex flex-col items-start justify-start gap-[10px] max-w-full">
                  <div className="w-[156px] flex flex-row items-start justify-start gap-[15px]">
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                      <div className="relative font-medium inline-block min-w-[56px] z-[1]">
                        Mi perfil
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] py-[6.5px] px-2.5 bg-cornflowerblue flex-1 rounded overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-deepskyblue">
                      <div className="flex-1 relative text-xs font-cabin text-white text-center">
                        Editar
                      </div>
                    </button>
                  </div>
                  <div className="relative text-xs z-[1]">
                    <p className="m-0">
                      Completa todos los datos para mejorar nuestros servicios
                      contigo
                    </p>
                    <p className="m-0">
                      Los campos marcados con * son obligatorios para usar B2M
                    </p>
                    <p className="m-0">
                      Los logotipos indican requisito de homologación previa
                      para algunos compradores
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[30px] max-w-full text-sm text-black mq725:flex-wrap">
                <div className="w-[399px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[399px] max-w-full mq725:flex-1 mq725:min-w-full">
                  <div className="self-stretch h-[201px] relative z-[1]">
                    <div className="absolute top-[17px] left-[0px] shadow-[0px_0px_4px_2px_rgba(0,_0,_0,_0.25)] rounded bg-white box-border w-[399px] overflow-hidden flex flex-row items-start justify-start py-7 px-11 border-[1px] border-solid border-gainsboro-300">
                      <div className="flex-1 relative leading-[25px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </div>
                    </div>
                    <div className="absolute top-[0px] left-[21px] rounded bg-darkslateblue overflow-hidden flex flex-row items-start justify-start py-2.5 px-[25px] whitespace-nowrap z-[1] text-xs text-white">
                      <div className="relative">
                        Breve descripción de la empresa
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[203px] flex-1 relative min-w-[269px] max-w-full z-[1] text-cornflowerblue">
                  <div className="absolute top-[17px] left-[0px] shadow-[0px_0px_4px_2px_rgba(0,_0,_0,_0.25)] rounded bg-white box-border w-[414px] overflow-hidden flex flex-row items-start justify-start py-7 px-11 max-w-full border-[1px] border-solid border-gainsboro-300">
                    <div className="flex-1 relative leading-[25px] inline-block max-w-full">
                      <p className="m-0">
                        <span className="[text-decoration:underline] font-medium">
                          Categoría 4
                        </span>
                        <span className="font-cabin text-black"> - ...</span>
                      </p>
                      <p className="m-0 text-black">
                        <span className="[text-decoration:underline] font-medium font-cabin text-cornflowerblue">
                          Categoría 2
                        </span>
                        <span> - Subcategoría 6</span>
                      </p>
                      <p className="m-0">
                        <span className="[text-decoration:underline] font-medium font-cabin text-cornflowerblue">
                          Categoría 1
                        </span>
                        <span className="font-cabin text-black">{` - `}</span>
                        <span className="[text-decoration:underline] font-medium">
                          Subcategoría 1
                        </span>
                        <span className="font-cabin text-black">
                          {" "}
                          - Nested 3
                        </span>
                      </p>
                      <p className="m-0">
                        <span className="[text-decoration:underline] font-medium">
                          Categoría 7
                        </span>
                        <span className="font-cabin text-black"> - ...</span>
                      </p>
                      <p className="m-0 text-black">
                        <span className="[text-decoration:underline] font-medium font-cabin text-cornflowerblue">
                          Categoría 2
                        </span>
                        <span> - Subcategoría 4</span>
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[21px] rounded bg-darkslateblue overflow-hidden flex flex-row items-start justify-start py-2.5 px-[17.5px] whitespace-nowrap z-[1] text-xs text-white">
                    <div className="relative">
                      Categorías CIIU en las que participa
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[339px] flex flex-col items-end justify-start gap-[101px] min-w-[339px] max-w-full text-sm text-cornflowerblue mq450:gap-[50px] mq450:min-w-full mq1000:flex-1">
              <div className="w-[225px] flex flex-row items-start justify-end py-0 px-px box-border">
                <Button
                  className="h-7 flex-1 z-[1] mq1000:flex-1"
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "12",
                    background: "#2299e4",
                    borderRadius: "4px",
                    "&:hover": { background: "#2299e4" },
                    height: 28,
                  }}
                >
                  IR AL CATÁLOGO DE PRODUCTOS
                </Button>
              </div>
              <div className="self-stretch h-[203px] relative z-[1]">
                <div className="absolute top-[17px] left-[0px] shadow-[0px_0px_4px_2px_rgba(0,_0,_0,_0.25)] rounded bg-white box-border w-full h-[186px] overflow-hidden flex flex-row flex-wrap items-center justify-center p-[30px] gap-[10px_9px] border-[1px] border-solid border-gainsboro-300">
                  <div className="w-[62px] !m-[0] absolute top-[45.5px] left-[30.5px] bg-gainsboro-200 box-border flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap border-[1px] border-solid border-lightgray">
                    <div className="relative leading-[25px] font-medium inline-block min-w-[54px]">
                      Tag 1Tag1
                    </div>
                  </div>
                  <div className="w-[62px] !m-[0] absolute top-[45.5px] left-[102.5px] bg-gainsboro-200 box-border flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap border-[1px] border-solid border-lightgray">
                    <div className="relative leading-[25px] font-medium inline-block min-w-[54px]">
                      Tag 1Tag1
                    </div>
                  </div>
                  <div className="w-[62px] !m-[0] absolute top-[45.5px] left-[174.5px] bg-gainsboro-200 box-border flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap border-[1px] border-solid border-lightgray">
                    <div className="relative leading-[25px] font-medium inline-block min-w-[54px]">
                      Tag 1Tag1
                    </div>
                  </div>
                  <div className="w-[62px] !m-[0] absolute top-[45.5px] left-[246.5px] bg-gainsboro-200 box-border flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap border-[1px] border-solid border-lightgray">
                    <div className="relative leading-[25px] font-medium inline-block min-w-[54px]">
                      Tag 1Tag1
                    </div>
                  </div>
                  <div className="w-[62px] !m-[0] absolute top-[80.5px] left-[30.5px] bg-gainsboro-200 box-border flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap border-[1px] border-solid border-lightgray">
                    <div className="relative leading-[25px] font-medium inline-block min-w-[54px]">
                      Tag 1Tag1
                    </div>
                  </div>
                  <div className="w-[62px] !m-[0] absolute top-[80.5px] left-[102.5px] bg-gainsboro-200 box-border flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap border-[1px] border-solid border-lightgray">
                    <div className="relative leading-[25px] font-medium inline-block min-w-[54px]">
                      Tag 1Tag1
                    </div>
                  </div>
                  <div className="w-[62px] !m-[0] absolute top-[80.5px] left-[174.5px] bg-gainsboro-200 box-border flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap border-[1px] border-solid border-lightgray">
                    <div className="relative leading-[25px] font-medium inline-block min-w-[54px]">
                      Tag 1Tag1
                    </div>
                  </div>
                  <div className="w-[62px] !m-[0] absolute top-[80.5px] left-[246.5px] bg-gainsboro-200 box-border flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap border-[1px] border-solid border-lightgray">
                    <div className="relative leading-[25px] font-medium inline-block min-w-[54px]">
                      Tag 1Tag1
                    </div>
                  </div>
                  <div className="w-[62px] !m-[0] absolute top-[115.5px] left-[66.5px] bg-white box-border flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap border-[1px] border-solid border-lightgray">
                    <div className="relative leading-[25px] font-medium inline-block min-w-[54px]">
                      Tag 1Tag1
                    </div>
                  </div>
                  <div className="w-[62px] !m-[0] absolute top-[115.5px] left-[138.5px] bg-white box-border flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap border-[1px] border-solid border-lightgray">
                    <div className="relative leading-[25px] font-medium inline-block min-w-[54px]">
                      Tag 1Tag1
                    </div>
                  </div>
                  <div className="w-[62px] !m-[0] absolute top-[115.5px] left-[210.5px] bg-white box-border flex flex-row items-start justify-start py-0 px-[3px] whitespace-nowrap border-[1px] border-solid border-lightgray">
                    <div className="relative leading-[25px] font-medium inline-block min-w-[54px]">
                      Tag 1Tag1
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[21px] rounded bg-darkslateblue overflow-hidden flex flex-row items-start justify-start py-2.5 px-[19px] z-[1] text-xs text-white">
                  <div className="relative inline-block min-w-[23px]">Tags</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[669px] flex flex-row items-start justify-start py-0 px-[45px] box-border max-w-full text-black mq725:pl-[22px] mq725:pr-[22px] mq725:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq725:flex-wrap">
              <div className="relative leading-[25px] font-medium inline-block min-w-[77px]">
                Variable S 1 *
              </div>
              <div className="w-[278px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                <div className="relative leading-[25px] font-medium">
                  archivo actualmente subido
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <div className="h-5 w-5 relative rounded bg-limegreen" />
                  <div className="h-5 w-5 relative rounded bg-limegreen" />
                  <div className="h-5 w-5 relative rounded bg-gold" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq725:flex-wrap">
              <div className="relative leading-[25px] font-medium inline-block min-w-[79px]">
                Variable S 2 *
              </div>
              <div className="w-[280px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                <div className="relative leading-[25px] font-medium inline-block min-w-[81px] whitespace-nowrap">
                  aaa@aaa.com
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <div className="h-5 w-5 relative rounded bg-limegreen" />
                  <div className="h-5 w-5 relative rounded bg-limegreen" />
                  <div className="h-5 w-5 relative rounded bg-gold" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq725:flex-wrap">
              <div className="relative leading-[25px] font-medium inline-block min-w-[79px]">
                Variable S 3 *
              </div>
              <div className="w-[280px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                <div className="relative leading-[25px] font-medium inline-block min-w-[32px]">
                  input
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <div className="h-5 w-5 relative rounded bg-limegreen" />
                  <div className="h-5 w-5 relative rounded bg-limegreen" />
                  <div className="h-5 w-5 relative rounded bg-gold" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq725:flex-wrap">
              <div className="relative leading-[25px] font-medium inline-block min-w-[80px]">
                Variable S 4 *
              </div>
              <div className="w-[281px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                <div className="relative leading-[25px] font-medium inline-block min-w-[119px]">
                  alternativa escogida
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <div className="h-5 w-5 relative rounded bg-limegreen" />
                  <div className="h-5 w-5 relative rounded bg-limegreen" />
                  <div className="h-5 w-5 relative rounded bg-gold" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq725:flex-wrap">
              <div className="relative leading-[25px] font-medium inline-block min-w-[79px]">
                Variable S 5 *
              </div>
              <div className="w-[280px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                <div className="relative leading-[25px] font-medium inline-block min-w-[33px]">
                  fecha
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <div className="h-5 w-5 relative rounded bg-limegreen" />
                  <div className="h-5 w-5 relative rounded bg-limegreen" />
                  <div className="h-5 w-5 relative rounded bg-gold" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq725:flex-wrap">
              <div className="relative leading-[25px] font-medium inline-block min-w-[80px]">
                Variable S 6 *
              </div>
              <div className="w-[281px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                <div className="relative leading-[25px] font-medium inline-block min-w-[32px]">
                  input
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <div className="h-5 w-5 relative rounded bg-red" />
                  <div className="h-5 w-5 relative rounded bg-red" />
                  <div className="h-5 w-5 relative rounded bg-gold" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq725:flex-wrap">
              <div className="relative leading-[25px] font-medium inline-block min-w-[77px]">
                Variable P 1 *
              </div>
              <div className="w-[278px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                <div className="relative leading-[25px] font-medium">
                  archivo actualmente subido
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <div className="h-5 w-5 relative rounded bg-red" />
                  <div className="h-5 w-5 relative rounded bg-red" />
                  <div className="h-5 w-5 relative rounded bg-gold" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[1] mq725:flex-wrap">
              <div className="relative leading-[25px] font-medium inline-block min-w-[79px]">
                Variable P 2 *
              </div>
              <div className="w-[280px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                <div className="relative leading-[25px] font-medium inline-block min-w-[32px]">
                  input
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[14px]">
                  <div className="h-5 w-5 relative rounded bg-red" />
                  <div className="h-5 w-5 relative rounded bg-red" />
                  <div className="h-5 w-5 relative rounded bg-gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page2p1;
