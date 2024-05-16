import {
    Button,
    TextField
  } from "@mui/material";

  
  import iconsmorevert from "../../assets/images/evalaucion/iconsmore-vert-24px.svg";
const EdicionCat = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-end justify-start pt-[69px] px-[83px] pb-28 box-border tracking-[normal] leading-[normal] mq750:pl-[41px] mq750:pr-[41px] mq750:box-border">
      <div className="w-10 h-[30px] absolute !m-[0] top-[35px] left-[100px] z-[2]">
        <div className="absolute top-[0px] left-[6.6px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-white-color w-7 h-[29.4px]" />
        <div className="absolute top-[0px] left-[0px] h-full flex flex-col items-center justify-center py-0 px-0 box-border w-full z-[1]">
          <div className="w-10 h-10 rounded-[100px] overflow-hidden shrink-0 flex flex-row items-center justify-center">
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
      <main className="w-[1257px] flex flex-row items-start justify-start relative max-w-full text-left text-sm text-white-color font-roboto">
        <div className="!m-[0] absolute top-[-18px] left-[13px] rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-3.5 pb-[17px] pr-[15px] pl-7 box-border whitespace-nowrap max-w-full z-[1]">
          <div className="h-[47px] w-[323px] relative rounded-8xs bg-darkslateblue hidden max-w-full" />
          <div className="relative z-[2]">
            Catálogo de productos: Edición de productos
          </div>
        </div>
        <form className="m-0 flex-1 rounded-8xs bg-white-color flex flex-row items-start justify-start pt-[91px] px-[13px] pb-[106px] box-border gap-[9px] max-w-full lg:flex-wrap lg:pt-[59px] lg:pb-[69px] lg:box-border mq750:pt-[38px] mq750:pb-[45px] mq750:box-border">
          <div className="h-[1152px] w-[1257px] relative rounded-8xs bg-white-color hidden max-w-full" />
          <div className="flex-1 flex flex-col items-start justify-start gap-[33px] max-w-full mq1050:min-w-full mq450:gap-[16px]">
            <nav className="m-0 flex flex-row items-start justify-start gap-[52px] max-w-full whitespace-nowrap mq750:flex-wrap mq750:gap-[26px]">
              <Button
                className="h-8 w-[143px] shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "12",
                  background: "#2299e4",
                  borderRadius: "5px",
                  "&:hover": { background: "#2299e4" },
                  width: 143,
                  height: 32,
                }}
              >
                GUARDAR CAMBIOS
              </Button>
              <div className="w-[217px] flex flex-col items-start justify-start">
                <Button
                  className="w-32 h-8 shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "12",
                    background: "#2299e4",
                    borderRadius: "5px",
                    "&:hover": { background: "#2299e4" },
                    width: 128,
                    height: 32,
                  }}
                >
                  DESCARTAR
                </Button>
              </div>
              <Button
                className="h-8 w-[98px] shadow-[0px_4px_9.7px_rgba(0,_0,_0,_0.25)] z-[1]"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "12",
                  background: "#2299e4",
                  borderRadius: "5px",
                  "&:hover": { background: "#2299e4" },
                  width: 98,
                  height: 32,
                }}
              >
                ELIMINAR
              </Button>
            </nav>
            <div className="self-stretch flex flex-row items-start justify-start gap-[23px] max-w-full mq1050:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[43px] max-w-full mq750:gap-[21px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[25px] max-w-full z-[1]">
                    <TextField
                      className="[border:none] bg-[transparent] self-stretch h-14"
                      placeholder="Todo"
                      size="small"
                      label="Nombre"

                      variant="outlined"
                      sx={{
                        "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                        "& .MuiInputBase-root": { height: "56px" },
                      }}
                    />
                    <TextField
                      className="[border:none] bg-[transparent] w-[390px] h-14 max-w-full"
                      placeholder="422.2"
                      size="small"
                      variant="outlined"
                      type="number"
                      label="Precio"
                      sx={{
                        "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                        "& .MuiInputBase-root": { height: "56px" },
                        width: "390px",
                      }}
                    />
                    <TextField
                      className="[border:none] bg-[transparent] w-[385px] h-14 max-w-full"
                      placeholder="2422.2"
                      size="small"
                      variant="outlined"
                      type="number"
                      label="Stock"
                      sx={{
                        "& fieldset": { borderColor: "rgba(0, 0, 0, 0.38)" },
                        "& .MuiInputBase-root": { height: "56px" },
                        width: "385px",
                      }}
                    />
                  </div>
                  <div className="w-[481px] flex flex-col items-start justify-start gap-[6px] max-w-full">
                    <div className="relative text-sm font-cabin text-cornflowerblue text-left inline-block min-w-[70px] z-[1]">
                      Descripción
                    </div>
                    <div className="self-stretch shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border flex flex-row items-start justify-start py-[21px] pr-4 pl-[17px] min-h-[184px] max-w-full z-[1] border-[1px] border-solid border-gray">
                      <div className="h-[186px] w-[483px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden max-w-full border-[1px] border-solid border-gray" />
                      <div className="flex-1 relative text-sm font-cabin text-black text-left inline-block max-w-full z-[2]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Sed tempus urna et pharetra pharetra.
                        Ultrices vitae auctor eu augue ut lectus arcu. Suscipit
                        adipiscing bibendum est ultricies integer quis auctor.
                        Hac habitasse platea dictumst vestibulum rhoncus est
                        pellentesque elit. Habitant morbi tristique senectus et
                        netus
                      </div>
                    </div>
                  </div>
                  <div className="w-[482px] flex flex-col items-start justify-start max-w-full">
                    <div className="w-[181px] flex flex-row items-start justify-start py-0 px-[18px] box-border">
                      <div className="flex-1 rounded-8xs bg-darkslateblue flex flex-row items-start justify-start pt-[11px] px-[31px] pb-3 z-[2]">
                        <div className="h-[39px] w-[145px] relative rounded-8xs bg-darkslateblue-200 hidden" />
                        <div className="relative text-sm font-semibold font-roboto text-white-color text-left inline-block min-w-[36px] z-[1]">
                          Fotos
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border flex flex-col items-start justify-start py-14 pr-[46px] pl-[54px] gap-[23px] max-w-full z-[1] mt-[-19px] border-[1px] border-solid border-gray mq750:pl-[27px] mq750:pr-[23px] mq750:box-border">
                      <div className="w-[484px] h-[341px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden max-w-full border-[1px] border-solid border-gray" />
                      <div className="self-stretch flex flex-row items-start justify-start gap-[40px] z-[2] mq450:flex-wrap mq450:gap-[20px]">
                        <div className="h-[100px] flex-1 relative bg-gainsboro min-w-[75px]" />
                        <div className="h-[100px] flex-1 relative bg-gainsboro min-w-[75px]" />
                        <div className="h-[100px] flex-1 relative bg-gainsboro min-w-[75px]" />
                      </div>
                      <div className="w-[238px] h-[100px] flex flex-row items-start justify-start gap-[38px] z-[2]">
                        <div className="self-stretch flex-1 relative bg-gainsboro" />
                        <div className="self-stretch flex-1 relative bg-gainsboro" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[336px] flex flex-col items-start justify-start min-w-[336px] max-w-full mq750:min-w-full mq1050:flex-1">
                <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                  <button className="cursor-pointer [border:none] pt-3 px-2.5 pb-[13px] bg-darkslateblue rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-darkslateblue-100">
                    <div className="h-[39px] w-[264px] relative rounded-8xs bg-darkslateblue hidden" />
                    <div className="relative text-[12px] font-semibold font-roboto text-white-color text-left z-[1]">
                      Categorías CIU que aplican a este productos
                    </div>
                  </button>
                </div>
                <div className="self-stretch shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border flex flex-col items-start justify-start pt-10 px-12 pb-[26px] gap-[19px] max-w-full z-[1] mt-[-19px] border-[1px] border-solid border-gray mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="w-[338px] h-[233px] relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden max-w-full border-[1px] border-solid border-gray" />
                  <div className="flex flex-row items-start justify-start gap-[11px]">
                    <div className="relative text-sm [text-decoration:underline] font-cabin text-cornflowerblue text-left inline-block min-w-[68px] z-[2]">
                      Categoría 4
                    </div>
                    <div className="relative text-sm [text-decoration:underline] font-cabin text-cornflowerblue text-left inline-block min-w-[68px] z-[2]">
                      Categoría 4
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[11px]">
                    <div className="relative text-sm [text-decoration:underline] font-cabin text-cornflowerblue text-left inline-block min-w-[68px] z-[2]">
                      Categoría 4
                    </div>
                    <div className="relative text-sm [text-decoration:underline] font-cabin text-cornflowerblue text-left inline-block min-w-[68px] z-[2]">
                      Categoría 4
                    </div>
                    <div className="relative text-sm [text-decoration:underline] font-cabin text-black text-left inline-block min-w-[68px] z-[2]">
                      Categoría 4
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[11px]">
                    <div className="relative text-sm [text-decoration:underline] font-cabin text-cornflowerblue text-left inline-block min-w-[68px] z-[2]">
                      Categoría 4
                    </div>
                    <div className="relative text-sm [text-decoration:underline] font-cabin text-cornflowerblue text-left inline-block min-w-[68px] z-[2]">
                      Categoría 4
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[11px]">
                    <div className="relative text-sm [text-decoration:underline] font-cabin text-cornflowerblue text-left inline-block min-w-[68px] z-[2]">
                      Categoría 4
                    </div>
                    <div className="relative text-sm [text-decoration:underline] font-cabin text-black text-left inline-block min-w-[68px] z-[2]">
                      Categoría 4
                    </div>
                    <div className="relative text-sm [text-decoration:underline] font-cabin text-cornflowerblue text-left inline-block min-w-[68px] z-[2]">
                      Categoría 4
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[11px]">
                    <div className="relative text-sm [text-decoration:underline] font-cabin text-cornflowerblue text-left inline-block min-w-[68px] z-[2]">
                      Categoría 4
                    </div>
                    <div className="relative text-sm [text-decoration:underline] font-cabin text-cornflowerblue text-left inline-block min-w-[68px] z-[2]">
                      Categoría 4
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[336px] flex flex-col items-start justify-start pt-[65px] px-0 pb-0 box-border min-w-[336px] max-w-full lg:flex-1 mq750:min-w-full mq450:pt-[42px] mq450:box-border">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="w-[98px] flex flex-row items-start justify-start py-0 px-[9px] box-border">
                <Button
                  className="h-[39px] flex-1 z-[2]"
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "12",
                    background: "#1b3e85",
                    borderRadius: "5px",
                    "&:hover": { background: "#1b3e85" },
                    height: 39,
                  }}
                >
                  Tags
                </Button>
              </div>
              <div className="self-stretch shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border flex flex-col items-start justify-start pt-[26px] pb-[87px] pr-[22px] pl-8 gap-[25px] max-w-full z-[1] mt-[-19px] border-[1px] border-solid border-gray">
                <div className="w-[338px] h-80 relative shadow-[0px_4px_7.6px_rgba(0,_0,_0,_0.25)] rounded-8xs bg-white-color box-border hidden max-w-full border-[1px] border-solid border-gray" />
                <div className="w-[197px] h-14 flex flex-row items-start justify-start z-[2]">
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch flex-1 min-w-[118px]"
                    variant="outlined"
                    placeholder="Tag"
                    sx={{
                      "& .MuiInputBase-root": { height: "56px" },
                      width: "197px",
                    }}
                  />
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[18px_15px] min-h-[120px] z-[2]">
                  <Button
                    className="h-7 w-[82px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "14",
                      background: "#fff",
                      border: "rgba(0, 0, 0, 0.5) solid 1px",
                      borderRadius: "5px",
                      "&:hover": { background: "#fff" },
                      width: 82,
                      height: 28,
                    }}
                  >
                    Tag 1
                  </Button>
                  <Button
                    className="h-7 w-[82px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "14",
                      background: "#fff",
                      border: "rgba(0, 0, 0, 0.5) solid 1px",
                      borderRadius: "5px",
                      "&:hover": { background: "#fff" },
                      width: 82,
                      height: 28,
                    }}
                  >
                    Tag 1
                  </Button>
                  <Button
                    className="h-7 w-[82px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "14",
                      background: "#fff",
                      border: "rgba(0, 0, 0, 0.5) solid 1px",
                      borderRadius: "5px",
                      "&:hover": { background: "#fff" },
                      width: 82,
                      height: 28,
                    }}
                  >
                    Tag 1
                  </Button>
                  <Button
                    className="h-7 w-[82px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "14",
                      background: "#fff",
                      border: "rgba(0, 0, 0, 0.5) solid 1px",
                      borderRadius: "5px",
                      "&:hover": { background: "#fff" },
                      width: 82,
                      height: 28,
                    }}
                  >
                    Tag 1
                  </Button>
                  <Button
                    className="h-7 w-[82px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#2299e4",
                      fontSize: "14",
                      background: "#fff",
                      border: "rgba(0, 0, 0, 0.5) solid 1px",
                      borderRadius: "5px",
                      "&:hover": { background: "#fff" },
                      width: 82,
                      height: 28,
                    }}
                  >
                    Tag 1
                  </Button>
                  <Button
                    className="h-7 w-[82px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#2299e4",
                      fontSize: "14",
                      background: "#fff",
                      border: "rgba(0, 0, 0, 0.5) solid 1px",
                      borderRadius: "5px",
                      "&:hover": { background: "#fff" },
                      width: 82,
                      height: 28,
                    }}
                  >
                    Tag 1
                  </Button>
                  <Button
                    className="h-7 w-[82px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "14",
                      background: "#fff",
                      border: "rgba(0, 0, 0, 0.5) solid 1px",
                      borderRadius: "5px",
                      "&:hover": { background: "#fff" },
                      width: 82,
                      height: 28,
                    }}
                  >
                    Tag 1
                  </Button>
                  <Button
                    className="h-7 w-[82px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#2299e4",
                      fontSize: "14",
                      background: "#fff",
                      border: "rgba(0, 0, 0, 0.5) solid 1px",
                      borderRadius: "5px",
                      "&:hover": { background: "#fff" },
                      width: 82,
                      height: 28,
                    }}
                  >
                    Tag 1
                  </Button>
                  <Button
                    className="h-7 w-[82px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#2299e4",
                      fontSize: "14",
                      background: "#fff",
                      border: "rgba(0, 0, 0, 0.5) solid 1px",
                      borderRadius: "5px",
                      "&:hover": { background: "#fff" },
                      width: 82,
                      height: 28,
                    }}
                  >
                    Tag 1
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}

export default EdicionCat