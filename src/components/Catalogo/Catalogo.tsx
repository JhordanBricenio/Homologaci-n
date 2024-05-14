import GroupComponent from './Modal'
import iconsmorevert from "../../assets/images/evalaucion/iconsmore-vert-24px.svg";
import { Box, LinearProgress } from '@mui/material';
import foto from "../../assets/images/foto.jpg";
import fotoia from "../../assets/images/generative.jpg";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Catalogo () {
  return (
    <div className="bg-native-scrollbar-bg max-w-full overflow-hidden flex flex-col items-end justify-start pt-[29px] pb-36 pr-[169px] pl-[91px] box-border gap-[36px] tracking-[normal] leading-[normal] text-left text-sm text-white-color font-typography-caption mq450:pl-5 mq450:pr-5 mq450:box-border mq725:gap-[18px] mq725:pl-[45px] mq725:pr-[84px] mq725:box-border">
    <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq650:flex-wrap">
      <div className="flex flex-row items-start justify-start pt-0 pb-[17px] pr-[27px] pl-0 gap-[13px] z-[1]">
        <div className="h-[30px] w-10 relative z-[1]">
          <div className="absolute h-[98%] w-[70%] top-[0%] right-[13.5%] bottom-[2%] left-[16.5%] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-white-color" />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-col items-center justify-center py-0 px-0 box-border z-[1]">
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
        <div className="flex flex-col items-start justify-start pt-[30px] px-0 pb-0">
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-[47px] w-[209px] absolute !m-[0] bottom-[-17px] left-[-40px] rounded-8xs bg-darkslateblue" />
            <div className="relative z-[1]">Catalogo de productos</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
        <div className="flex flex-row items-start justify-start pt-[15px] px-[27px] pb-4 relative z-[1]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs bg-cornflowerblue-100" />
          <div className="relative inline-block min-w-[111px] z-[1]">
            CONFIGURACIÓN
          </div>
        </div>
      </div>
    </div>
    <section className="flex flex-row items-start justify-end py-0 px-[21px] box-border max-w-full text-center text-sm text-black font-typography-caption">
      <div className="w-[1114px] flex flex-row flex-wrap items-start justify-start gap-[56px_8.7px] min-h-[752px] max-w-full">
        <div className="w-[271px] flex flex-col items-start justify-start pt-4 pb-[17px] pr-2 pl-[19px] box-border relative gap-[8px]">
          <div className="w-[1203px] h-[926px] absolute !m-[0] right-[-887px] bottom-[-519px] rounded-8xs bg-white-color" />
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[-2px] bottom-[-2px] left-[0px] shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border border-[1px] border-solid border-gray-100" />
          <div className="self-stretch h-[120px] flex flex-row items-start justify-start gap-[17px]">
            <div className="self-stretch flex-1 relative bg-gainsboro z-[1]" >
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
            <div className="self-stretch flex flex-col  items-start justify-start gap-[3px]">
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
        <GroupComponent
          line1="pending_18:12949"
          line11="pending_18:12952"
          line12="pending_18:12955"
          line13="pending_18:12958"
          line14="pending_18:12961"
          line15="pending_18:12964"
          line16="pending_18:12967"
        />
        <GroupComponent
          line1="pending_18:12979"
          line11="pending_18:12982"
          line12="pending_18:12985"
          line13="pending_18:12988"
          line14="pending_18:12991"
          line15="pending_18:12994"
          line16="pending_18:12997"
        />
        <GroupComponent
          line1="pending_18:13008"
          line11="pending_18:13011"
          line12="pending_18:13014"
          line13="pending_18:13017"
          line14="pending_18:13020"
          line15="pending_18:13023"
          line16="pending_18:13026"
        />
        <GroupComponent
          line1="pending_18:13037"
          line11="pending_18:13040"
          line12="pending_18:13043"
          line13="pending_18:13046"
          line14="pending_18:13049"
          line15="pending_18:13052"
          line16="pending_18:13055"
        />
        <GroupComponent
          line1="pending_18:13066"
          line11="pending_18:13069"
          line12="pending_18:13072"
          line13="pending_18:13075"
          line14="pending_18:13078"
          line15="pending_18:13081"
          line16="pending_18:13084"
        />
        <GroupComponent
          line1="pending_18:13095"
          line11="pending_18:13098"
          line12="pending_18:13101"
          line13="pending_18:13104"
          line14="pending_18:13107"
          line15="pending_18:13110"
          line16="pending_18:13113"
        />
        <div className="h-[348px] w-[260px] flex flex-row items-start justify-center pt-[142px] pb-[126px] pr-5 pl-[21px] box-border relative">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[-2px] bottom-[-2px] left-[0px] shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border border-[1px] border-solid border-gray-100" />
          <div className="self-stretch w-20 relative overflow-hidden shrink-0 z-[1]">
  <AddCircleOutlineIcon style={{width: '100%', height: '100%', color: '#007DED'}} />
</div>

        </div>
      </div>
    </section>
  </div>
  )
}

export default Catalogo