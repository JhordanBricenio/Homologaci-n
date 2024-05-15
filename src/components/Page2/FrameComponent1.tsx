import { FunctionComponent } from "react";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className="mt-[-344px] self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full shrink-0 text-left text-base text-white font-inter">
      <div className="rounded bg-darkslateblue-200 flex flex-row items-start justify-start py-[20.5px] px-6 box-border min-h-[30px] max-h-[60px] whitespace-nowrap hover:bg-darkslateblue-100">
        <div className="relative inline-block min-w-[62px]">Mi Perfil</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-13xl text-darkslateblue-200">
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="relative inline-block max-w-full mq450:text-lgi mq750:text-7xl">
            RAZON SOCIAL - 0123456789
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full text-black">
            <div className="h-[150px] w-[150px] bg-black overflow-hidden shrink-0 flex flex-row items-start justify-start">
              <div className="self-stretch w-[150px] relative bg-black hidden" />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[775px] max-w-full mq1050:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
                <div className="flex flex-row items-start justify-start gap-[30px]">
                  <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                    <div className="relative inline-block min-w-[123px] mq450:text-lgi mq750:text-7xl">
                      Mi perfil
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-[14.5px] px-6 bg-cornflowerblue rounded flex flex-row items-start justify-start box-border min-h-[30px] max-h-[60px] hover:bg-deepskyblue">
                    <div className="relative text-sm uppercase font-inter text-white text-center inline-block min-w-[49px]">
                      Editar
                    </div>
                  </button>
                </div>
                <button className="cursor-pointer [border:none] py-[14.5px] px-6 bg-cornflowerblue rounded flex flex-row items-start justify-start box-border min-h-[30px] max-h-[60px] whitespace-nowrap hover:bg-deepskyblue">
                  <div className="relative text-sm uppercase font-inter text-white text-center">
                    IR AL CATÁLOgO DE PRODUCTOS
                  </div>
                </button>
              </div>
              <div className="self-stretch relative text-sm uppercase">
                <p className="m-0">
                  Completa todos los datos para mejorar nuestro servicio contigo
                </p>
                <p className="m-0">
                  Los campos marcados con * son obligatorios para usar B2M
                </p>
                <p className="m-0">
                  Los logotipos indican requisito de homologación previa para
                  algunos compradores
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
