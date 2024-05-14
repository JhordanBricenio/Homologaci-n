import {
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl
  } from "@mui/material";

import star from '../../assets/images/evalaucion/star-fill.svg'
import poligon from '../../assets/images/evalaucion/polygon-1.svg'
import arrowdownwardfilled from '../../assets/images/evalaucion/arrowdropdownfilled.svg'
import iconsmorevert from '../../assets/images/evalaucion/iconsmore-vert-24px.svg'
import chevronleftfilled from '../../assets/images/evalaucion/chevronleftfilled.svg'
import chevronrigthfilled from '../../assets/images/evalaucion/chevronrightfilled.svg'
import hiddensvg from '../../assets/images/evalaucion/-hidden-1.svg'

function Evaluacion () {
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
        <div className="w-[1150px] bg-darkslateblue box-border overflow-x-auto flex flex-row items-start justify-start text-white-color border-b-[1px] border-solid border-divider">
          <div className="flex-1 bg-gray flex flex-row items-start justify-start py-1.5 px-4 gap-[11px]">
            <div className="flex flex-row items-start justify-start">
              <div className="overflow-hidden flex flex-row items-start justify-start">
                <div className="h-6 w-6 rounded-81xl flex flex-row items-start justify-start p-0.5 box-border">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src={hiddensvg}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="hidden flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src={arrowdownwardfilled}
                />
              </div>
              <div className="relative tracking-[0.17px] leading-[24px] font-medium inline-block min-w-[61px]">
                Variables
              </div>
              <div className="hidden flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                  src={arrowdownwardfilled}
                />
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-start justify-start py-1.5 px-4">
            <div className="hidden flex-row items-start justify-start py-0 px-1">
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                alt=""
                src={arrowdownwardfilled}
              />
            </div>
            <div className="relative tracking-[0.17px] leading-[24px] font-medium inline-block min-w-[81px]">
              Vencimiento
            </div>
            <div className="hidden flex-row items-start justify-start py-0 px-1">
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                alt=""
                src={arrowdownwardfilled}
              />
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-start justify-start py-1.5 px-[15px]">
            <div className="hidden flex-row items-start justify-start py-0 px-1">
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                alt=""
                src={arrowdownwardfilled}
              />
            </div>
            <div className="relative tracking-[0.17px] leading-[24px] font-medium inline-block min-w-[77px]">
              Descripción
            </div>
            <div className="hidden flex-row items-start justify-start py-0 px-1">
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/arrowdownwardfilled.svg"
              />
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-start justify-start py-1.5 px-4">
            <div className="hidden flex-row items-start justify-start py-0 px-1">
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/arrowdownwardfilled.svg"
              />
            </div>
            <div className="relative tracking-[0.17px] leading-[24px] font-medium inline-block min-w-[41px]">
              Factor
            </div>
            <div className="hidden flex-row items-start justify-start py-0 px-1">
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/arrowdownwardfilled.svg"
              />
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-start justify-start py-1.5 px-4">
            <div className="hidden flex-row items-start justify-start py-0 px-1">
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/arrowdownwardfilled.svg"
              />
            </div>
            <div className="relative tracking-[0.17px] leading-[24px] font-medium inline-block min-w-[113px]">
              Área responsable
            </div>
            <div className="hidden flex-row items-start justify-start py-0 px-1">
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                alt=""
                src="/arrowdownwardfilled.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[600px] box-border overflow-x-auto hidden flex-row items-center justify-start max-w-full border-b-[1px] border-solid border-divider">
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="w-[76px] flex flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Variable S 1
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4 text-cornflowerblue">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="w-9 flex flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  1 año
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start text-text-primary">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="w-[175px] flex flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Lorem ipsomn dolor ipsons
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="w-[9px] flex flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  1
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="h-[52px] w-[120px] overflow-hidden shrink-0 hidden flex-row items-center justify-start">
            <div className="h-[42px] w-[42px] rounded-81xl hidden flex-row items-center justify-start p-[9px] box-border">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/-hidden1.svg"
              />
            </div>
          </div>
          <div className="h-[52px] flex-1 bg-gray flex flex-row items-center justify-start p-4 box-border text-base">
            <div className="h-5 w-[88px] hidden flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/-hidden-1.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch h-6 relative tracking-[0.15px] leading-[150%] inline-block">
                    Label
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/-hidden-1.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch h-6 relative tracking-[0.15px] leading-[150%] inline-block">
                    Label
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[600px] h-[52px] box-border overflow-x-auto shrink-0 hidden flex-row items-center justify-start max-w-full border-b-[1px] border-solid border-divider">
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="w-[76px] flex flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Variable S 2
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4 text-cornflowerblue">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="w-[72px] flex flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  1 semestre
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start text-text-primary">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="w-[175px] flex flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Lorem ipsomn dolor ipsons
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="w-[9px] flex flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  4
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4 text-base">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-row items-start justify-center">
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/-hidden-1.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start">
                  <div className="self-stretch h-6 relative tracking-[0.15px] leading-[150%] inline-block">
                    Área 1
                  </div>
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start text-sm">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1150px] box-border overflow-x-auto flex flex-row items-center justify-start border-b-[1px] border-solid border-divider">
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.17px] leading-[143%] inline-block min-w-[76px]">
                  Variable S 3
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4 text-cornflowerblue">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.17px] leading-[143%] inline-block min-w-[36px]">
                  1 año
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start text-text-primary">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex flex-col items-start justify-start py-0 pr-[23px] pl-0">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.17px] leading-[143%]">
                  Lorem ipsomn dolor ipsons
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.17px] leading-[143%] inline-block min-w-[9px]">
                  4
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start py-1.5 px-4 text-base">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-start">
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                    <input
                      className="cursor-pointer m-0 h-6 w-6 relative overflow-hidden shrink-0"
                      type="radio"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[0.15px] leading-[150%] inline-block min-w-[47px]">
                    Área 1
                  </div>
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start text-sm">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1150px] box-border flex flex-row items-center justify-start border-b-[1px] border-solid border-divider">
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.17px] leading-[143%] inline-block min-w-[76px]">
                  Variable S 4
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4 text-cornflowerblue">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.17px] leading-[143%] inline-block min-w-[36px]">
                  1 año
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start text-text-primary">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex flex-col items-start justify-start py-0 pr-[23px] pl-0">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.17px] leading-[143%]">
                  Lorem ipsomn dolor ipsons
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.17px] leading-[143%] inline-block min-w-[9px]">
                  4
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start py-1.5 px-4 text-base">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-start">
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                    <input
                      className="cursor-pointer m-0 h-6 w-6 relative overflow-hidden shrink-0"
                      type="radio"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[0.15px] leading-[150%] inline-block min-w-[47px]">
                    Área 1
                  </div>
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start text-sm">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1150px] box-border overflow-x-auto flex flex-row items-center justify-start border-b-[1px] border-solid border-divider">
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.17px] leading-[143%] inline-block min-w-[76px]">
                  Variable S 5
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4 text-cornflowerblue">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.17px] leading-[143%] inline-block min-w-[36px]">
                  1 año
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start text-text-primary">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex flex-col items-start justify-start py-0 pr-[23px] pl-0">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.17px] leading-[143%]">
                  Lorem ipsomn dolor ipsons
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start p-4">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start">
                <div className="relative tracking-[0.17px] leading-[143%] inline-block min-w-[9px]">
                  4
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray flex flex-row items-center justify-start py-1.5 px-4 text-base">
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-start">
                <div className="overflow-hidden flex flex-row items-center justify-start">
                  <div className="h-[42px] w-[42px] rounded-81xl flex flex-row items-center justify-start p-[9px] box-border">
                    <input
                      className="cursor-pointer m-0 h-6 w-6 relative overflow-hidden shrink-0"
                      type="radio"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="relative tracking-[0.15px] leading-[150%] inline-block min-w-[47px]">
                    Área 1
                  </div>
                </div>
              </div>
              <div className="w-[75px] hidden flex-col items-start justify-start text-sm">
                <div className="self-stretch h-5 relative tracking-[0.17px] leading-[143%] inline-block">
                  Typography
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1150px] flex flex-row items-start justify-end py-0.5 px-0 box-border gap-[26px] text-xs text-text-secondary">
          <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <div className="relative tracking-[0.4px] leading-[20px] inline-block min-w-[88px]">
                  Rows per page:
                </div>
              </div>
              <FormControl
                className="h-6 w-[38px] font-typography-body2 text-xs text-text-primary"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "38px",
                  height: "24px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "24px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "24px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "24px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "24px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "rgba(0, 0, 0, 0.87)",
                    fontSize: 12,
                    fontWeight: "Regular",
                    fontFamily: "Roboto",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="24px"
                      height="24px"
                      src={arrowdownwardfilled}
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>10</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0 text-text-primary">
            <div className="relative tracking-[0.4px] leading-[20px] inline-block min-w-[51px]">
              1-5 of 13
            </div>
          </div>
          <div className="flex flex-row items-start justify-start">
            <div className="h-10 w-10 rounded-81xl overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
              <div className="flex flex-row items-start justify-start">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={chevronleftfilled}
                />
              </div>
            </div>
            <div className="h-10 w-10 rounded-81xl overflow-hidden shrink-0 flex flex-col items-center justify-center p-2 box-border">
              <div className="flex flex-row items-start justify-start">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={chevronrigthfilled}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-[3px] text-white-color">
        <div className="rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-1 pb-[5px] pr-[18px] pl-[38px] gap-[6.5px] z-[1]">
          <div className="h-[47px] w-[209px] relative rounded-8xs bg-darkslateblue hidden" />
          <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
            <div className="relative inline-block min-w-[20px] z-[2]">{`19: `}</div>
          </div>
          <div className="flex flex-row items-end justify-start">
            <img
              className="h-6 w-6 relative z-[4]"
              alt=""
              src={star}
            />
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
};

export default Evaluacion;