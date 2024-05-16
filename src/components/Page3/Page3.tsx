import { FunctionComponent } from "react";
import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl
} from "@mui/material";
import Nav from "../Nav/Nav";

import ReportIcon from "@mui/icons-material/Report";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const Page: FunctionComponent = () => {
  return (
    <div className="flex flex-row mt-20">
      <div>
        <Nav />
      </div>
      <div className="w-[1484px] bg-whitesmoke max-w-full overflow-y-auto flex flex-row items-start justify-start py-[60px] px-[10px] box-border tracking-[normal] leading-[normal]">
        <section className="h-[1024px] flex-1 rounded bg-white flex flex-col items-start justify-start pt-[314px] px-7 pb-[30px] box-border gap-[50px] max-w-full text-left text-base text-white font-inter lg:h-auto mq750:gap-[25px] mq750:pt-[133px] mq750:box-border mq1050:pt-[204px] mq1050:pb-5 mq1050:box-border">
          <div className="mt-[-344px] self-stretch flex flex-col items-start justify-start gap-[30px] shrink-0 max-w-full">
            <div className="rounded bg-darkslateblue flex flex-row items-start justify-start py-[20.5px] px-6 box-border min-h-[30px] max-h-[60px] whitespace-nowrap">
              <div className="relative inline-block min-w-[62px]">
                Mi Perfil
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full text-13xl text-darkslateblue">
              <div className="flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
                <div className="overflow-hidden flex flex-row items-start justify-start max-w-full">
                  <div className="relative mq750:text-7xl mq450:text-lgi">
                    RAZON SOCIAL - 0123456789
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full text-black">
                  <div className="h-[150px] w-[150px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 relative bg-black" />
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[10px] min-w-[770px] max-w-full mq1050:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[30px] max-w-full mq1050:flex-wrap">
                      <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[123px] mq750:text-7xl mq450:text-lgi">
                        Mi perfil
                      </h1>
                      <div className="flex-1 flex flex-row items-center justify-start gap-[10px] min-w-[339px] max-w-full text-center text-sm text-white mq750:pr-[170px] mq750:box-border mq750:min-w-full mq1050:flex-wrap mq1050:pr-[341px] mq1050:box-border mq450:pr-5 mq450:box-border">
                        <div className="h-[45px] rounded bg-cornflowerblue hidden flex-row items-center justify-center py-2 px-6 box-border min-h-[30px] max-h-[60px]">
                          <div className="relative uppercase">Editar</div>
                        </div>
                        <Button
                          className="h-[45px] min-w-[140px] min-h-[30px] max-h-[60px]"
                          disableElevation={true}
                          variant="contained"
                          sx={{
                            color: "#fff",
                            fontSize: "14",
                            background: "#2299e4",
                            borderRadius: "4px",
                            "&:hover": { background: "#2299e4" },
                            height: 45,
                          }}
                        >
                          guardar los cambios
                        </Button>
                        <Button
                          className="h-[45px] min-h-[30px] max-h-[60px]"
                          disableElevation={true}
                          variant="contained"
                          sx={{
                            color: "#fff",
                            fontSize: "14",
                            background: "#2299e4",
                            borderRadius: "4px",
                            "&:hover": { background: "#2299e4" },
                            height: 45,
                          }}
                        >
                          cancelar
                        </Button>
                        <div className="h-[45px] rounded bg-cornflowerblue hidden flex-row items-center justify-center py-2 px-6 box-border min-h-[30px] max-h-[60px] whitespace-nowrap">
                          <div className="relative uppercase">
                            IR AL CATÁLOgO DE PRODUCTOS
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start max-w-full text-sm">
                      <div className="flex-1 relative uppercase [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:5] [-webkit-box-orient:vertical] max-w-full">
                        <p className="m-0">
                          Completa todos los datos para mejorar nuestro servicio
                          contigo
                        </p>
                        <p className="m-0">
                          Los campos marcados con * son obligatorios para usar
                          B2M
                        </p>
                        <p className="m-0">
                          Los logotipos indican requisito de homologación previa
                          para algunos compradores
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 box-border shrink-0 max-w-full text-black">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full">
              <div className="flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] rounded bg-white box-border flex flex-col items-start justify-start pt-[50px] pb-[30px] pr-7 pl-[30px] relative min-w-[326px] min-h-[123px] max-w-full border-[1px] border-solid border-black">
                <div className="self-stretch rounded bg-white overflow-hidden flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start max-w-full">
                    <input
                      className="[outline:none] bg-white h-[43px] flex-1 rounded box-border flex flex-row items-center justify-start py-3 px-[18px] font-inter text-base text-black min-w-[225px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                      placeholder="Texto"
                      type="text"
                    />
                  </div>
                  <div className="self-stretch overflow-hidden hidden flex-row items-start justify-start max-w-full">
                    <div className="flex-1 relative [display:-webkit-inline-box] items-center overflow-hidden text-ellipsis [-webkit-line-clamp:6] [-webkit-box-orient:vertical] max-w-full">
                      <span>
                        <p className="m-0">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore
                        </p>
                        <p className="m-0">
                          magna aliquam erat volutpat. Ut wisi enim ad minim
                          veniam, quis nostrud exerci tation ullamcorper
                          suscipit lobortis nisl ut
                        </p>
                        <p className="m-0">aliquip ex ea commodo consequat.</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="!m-[0] absolute top-[-8.5px] left-[54px] rounded bg-darkslateblue flex flex-col items-start justify-center py-2 px-6 box-border min-h-[30px] max-h-[60px] text-sm text-white">
                  <div className="relative">
                    Breve descripción de la empresa
                  </div>
                </div>
              </div>
              <div className="flex-1 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] rounded bg-white box-border flex flex-col items-start justify-start pt-[50px] pb-[30px] pr-7 pl-[30px] relative gap-[10px] min-w-[326px] min-h-[278px] max-w-full text-cornflowerblue border-[1px] border-solid border-black">
                <div className="self-stretch rounded bg-white overflow-hidden flex flex-col items-start justify-start gap-[20px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-[64.7px] pl-0 gap-[10px] mq750:flex-wrap mq450:pr-5 mq450:box-border">
                    <FormControl
                      className="h-[43px] flex-1 font-inter text-base text-black min-w-[175px] min-h-[30px] max-h-[60px] w-auto"
                      variant="standard"
                      sx={{
                        borderColor: "#000",
                        borderStyle: "SOLID",
                        borderTopWidth: "2px",
                        borderRightWidth: "2px",
                        borderBottomWidth: "2px",
                        borderLeftWidth: "2px",
                        backgroundColor: "#fff",
                        borderRadius: "4px",
                        width: "72.05764611689351%",
                        height: "43px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "43px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "43px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "43px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "43px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          color: "#000",
                          fontSize: 16,
                          fontWeight: "Regular",
                          fontFamily: "Inter",
                          textAlign: "left",
                          p: "0 !important",
                          marginLeft: "18px",
                        },
                      }}
                    >
                      <InputLabel color="secondary" />
                      <Select
                        color="secondary"
                        disableUnderline
                        displayEmpty
                        IconComponent={() => (
                          <img
                            width="10px"
                            height="5px"
                            src="/polygon-1.svg"
                            style={{ marginRight: "18px" }}
                          />
                        )}
                      >
                        <MenuItem>Texto</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                    <img className="h-[30px] w-[30px] relative" />
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[10px]">
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[246px] pl-0 gap-[10px] mq750:flex-wrap mq450:pr-5 mq450:box-border">
                      <div className="relative [text-decoration:underline] font-medium inline-block min-w-[90px]">
                        Categoría 4
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-2.5 w-[5px] relative"
                          loading="lazy"
                          alt=""
                          src="/polygon-2.svg"
                        />
                      </div>
                      <div className="relative font-medium text-gray inline-block min-w-[14px] mq750:w-full mq750:h-3.5">
                        ...
                      </div>
                      <div className="hidden flex-row items-start justify-start h-[px] w-[px]">
                        <img
                          className="h-2.5 w-[5px] relative"
                          alt=""
                          src="/polygon-2.svg"
                        />
                      </div>
                      <div className="self-stretch w-[90px] relative [text-decoration:underline] font-medium hidden items-center">
                        Categoría 4
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[143.7px] pl-0 gap-[10px] mq750:flex-wrap mq450:pr-5 mq450:box-border">
                      <div className="relative [text-decoration:underline] font-medium inline-block min-w-[89px]">
                        Categoría 2
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-2.5 w-[5px] relative"
                          alt=""
                          src="/polygon-2.svg"
                        />
                      </div>
                      <div className="relative font-medium text-black inline-block min-w-[117px]">
                        Subcategoría 6
                      </div>
                      <div className="hidden flex-row items-start justify-start h-[px] w-[px]">
                        <img
                          className="h-2.5 w-[5px] relative"
                          alt=""
                          src="/polygon-2.svg"
                        />
                      </div>
                      <div className="self-stretch w-[90px] relative [text-decoration:underline] font-medium hidden items-center">
                        Categoría 4
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[50.7px] pl-0 gap-[10px] mq750:flex-wrap mq450:pr-5 mq450:box-border">
                      <div className="relative [text-decoration:underline] font-medium inline-block min-w-[87px]">
                        Categoría 1
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-2.5 w-[5px] relative"
                          alt=""
                          src="/polygon-2.svg"
                        />
                      </div>
                      <div className="relative [text-decoration:underline] font-medium inline-block min-w-[117px]">
                        Subcategoría 6
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-2.5 w-[5px] relative"
                          alt=""
                          src="/polygon-2.svg"
                        />
                      </div>
                      <div className="relative font-medium text-black inline-block min-w-[70px]">
                        Nested 3
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[247px] pl-0 gap-[10px] mq750:flex-wrap mq450:pr-5 mq450:box-border">
                      <div className="relative [text-decoration:underline] font-medium inline-block min-w-[89px]">
                        Categoría 7
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-2.5 w-[5px] relative"
                          alt=""
                          src="/polygon-2.svg"
                        />
                      </div>
                      <div className="relative font-medium text-gray inline-block min-w-[14px] mq750:w-full mq750:h-3.5">
                        ...
                      </div>
                      <div className="hidden flex-row items-start justify-start h-[px] w-[px]">
                        <img
                          className="h-2.5 w-[5px] relative"
                          alt=""
                          src="/polygon-2.svg"
                        />
                      </div>
                      <div className="self-stretch w-[90px] relative [text-decoration:underline] font-medium hidden items-center">
                        Categoría 4
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[143.7px] pl-0 gap-[10px] mq750:flex-wrap mq450:pr-5 mq450:box-border">
                      <div className="relative [text-decoration:underline] font-medium inline-block min-w-[89px]">
                        Categoría 2
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <img
                          className="h-2.5 w-[5px] relative"
                          alt=""
                          src="/polygon-2.svg"
                        />
                      </div>
                      <div className="relative font-medium text-black inline-block min-w-[117px]">
                        Subcategoría 4
                      </div>
                      <div className="hidden flex-row items-start justify-start h-[px] w-[px]">
                        <img
                          className="h-2.5 w-[5px] relative"
                          alt=""
                          src="/polygon-2.svg"
                        />
                      </div>
                      <div className="self-stretch w-[90px] relative [text-decoration:underline] font-medium hidden items-center">
                        Categoría 4
                      </div>
                    </div>
                  </div>
                </div>
                <div className="!m-[0] absolute top-[-8.5px] left-[54px] rounded bg-darkslateblue flex flex-col items-start justify-center py-2 px-6 box-border min-h-[30px] max-h-[60px] text-sm text-white">
                  <div className="relative">
                    Categorías CIIU en las que participa
                  </div>
                </div>
              </div>
              <div className="flex-1 [filter:drop-shadow(0px_0px_2px_rgba(0,_0,_0,_0.25))] rounded box-border flex flex-col items-start justify-start pt-[50px] pb-[30px] pr-7 pl-[30px] relative gap-[10px] min-w-[326px] min-h-[278px] max-w-full text-sm text-white border-[1px] border-solid border-black">
                <div className="self-stretch rounded bg-white overflow-hidden flex flex-col items-start justify-start gap-[20px]">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-[64.7px] pl-0 gap-[10px] mq750:flex-wrap mq450:pr-5 mq450:box-border">
                    <FormControl
                      className="h-[43px] flex-1 font-inter text-base text-black min-w-[175px] min-h-[30px] max-h-[60px] w-auto"
                      variant="standard"
                      sx={{
                        borderColor: "#000",
                        borderStyle: "SOLID",
                        borderTopWidth: "2px",
                        borderRightWidth: "2px",
                        borderBottomWidth: "2px",
                        borderLeftWidth: "2px",
                        backgroundColor: "#fff",
                        borderRadius: "4px",
                        width: "72.05764611689351%",
                        height: "43px",
                        m: 0,
                        p: 0,
                        "& .MuiInputBase-root": {
                          m: 0,
                          p: 0,
                          minHeight: "43px",
                          justifyContent: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInputLabel-root": {
                          m: 0,
                          p: 0,
                          minHeight: "43px",
                          display: "inline-flex",
                        },
                        "& .MuiMenuItem-root": {
                          m: 0,
                          p: 0,
                          height: "43px",
                          display: "inline-flex",
                        },
                        "& .MuiSelect-select": {
                          m: 0,
                          p: 0,
                          height: "43px",
                          alignItems: "center",
                          display: "inline-flex",
                        },
                        "& .MuiInput-input": { m: 0, p: 0 },
                        "& .MuiInputBase-input": {
                          color: "#000",
                          fontSize: 16,
                          fontWeight: "Regular",
                          fontFamily: "Inter",
                          textAlign: "left",
                          p: "0 !important",
                          marginLeft: "18px",
                        },
                      }}
                    >
                      <InputLabel color="secondary" />
                      <Select
                        color="secondary"
                        disableUnderline
                        displayEmpty
                        IconComponent={() => (
                          <img
                            width="10px"
                            height="5px"
                            src="/polygon-1-1.svg"
                            style={{ marginRight: "18px" }}
                          />
                        )}
                      >
                        <MenuItem>Completar Tag</MenuItem>
                      </Select>
                      <FormHelperText />
                    </FormControl>
                    <ControlPointIcon/>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-between min-h-[135px] gap-[15.849999999999994px]">
                    <button className="cursor-pointer py-1.5 px-[9px] bg-white flex flex-row items-center justify-start gap-[10px] border-[1px] border-solid border-darkgray">
                      <div className="relative text-base font-medium font-inter text-cornflowerblue text-left inline-block min-w-[72px]">
                        Tag1Tag1
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="relative text-base font-inter text-cornflowerblue text-center inline-block min-w-[11px]">
                          X
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer py-1.5 px-[9px] bg-white flex flex-row items-center justify-start gap-[10px] border-[1px] border-solid border-darkgray">
                      <div className="relative text-base font-medium font-inter text-cornflowerblue text-left inline-block min-w-[72px]">
                        Tag1Tag1
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="relative text-base font-inter text-cornflowerblue text-center inline-block min-w-[11px]">
                          X
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer py-1.5 px-[9px] bg-white flex flex-row items-center justify-start gap-[10px] border-[1px] border-solid border-darkgray">
                      <div className="relative text-base font-medium font-inter text-cornflowerblue text-left inline-block min-w-[72px]">
                        Tag1Tag1
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="relative text-base font-inter text-cornflowerblue text-center inline-block min-w-[11px]">
                          X
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer py-1.5 px-[9px] bg-white flex flex-row items-center justify-start gap-[10px] border-[1px] border-solid border-darkgray">
                      <div className="relative text-base font-medium font-inter text-cornflowerblue text-left inline-block min-w-[72px]">
                        Tag1Tag1
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="relative text-base font-inter text-cornflowerblue text-center inline-block min-w-[11px]">
                          X
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer py-1.5 px-[9px] bg-white flex flex-row items-center justify-start gap-[10px] border-[1px] border-solid border-darkgray">
                      <div className="relative text-base font-medium font-inter text-cornflowerblue text-left inline-block min-w-[72px]">
                        Tag1Tag1
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="relative text-base font-inter text-cornflowerblue text-center inline-block min-w-[11px]">
                          X
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer py-1.5 px-[9px] bg-white flex flex-row items-center justify-start gap-[10px] border-[1px] border-solid border-darkgray">
                      <div className="relative text-base font-medium font-inter text-cornflowerblue text-left inline-block min-w-[72px]">
                        Tag1Tag1
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="relative text-base font-inter text-cornflowerblue text-center inline-block min-w-[11px]">
                          X
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer py-1.5 px-[9px] bg-white flex flex-row items-center justify-start gap-[10px] border-[1px] border-solid border-darkgray">
                      <div className="relative text-base font-medium font-inter text-cornflowerblue text-left inline-block min-w-[72px]">
                        Tag1Tag1
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="relative text-base font-inter text-cornflowerblue text-center inline-block min-w-[11px]">
                          X
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer py-1.5 px-[9px] bg-white flex flex-row items-center justify-start gap-[10px] border-[1px] border-solid border-darkgray">
                      <div className="relative text-base font-medium font-inter text-cornflowerblue text-left inline-block min-w-[72px]">
                        Tag1Tag1
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="relative text-base font-inter text-cornflowerblue text-center inline-block min-w-[11px]">
                          X
                        </div>
                      </div>
                    </button>
                    <button className="cursor-pointer py-1.5 px-[9px] bg-white flex flex-row items-center justify-start gap-[10px] border-[1px] border-solid border-darkgray">
                      <div className="relative text-base font-medium font-inter text-cornflowerblue text-left inline-block min-w-[72px]">
                        Tag1Tag1
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="relative text-base font-inter text-cornflowerblue text-center inline-block min-w-[11px]">
                          X
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="!m-[0] absolute top-[-8.5px] left-[54px] rounded bg-darkslateblue flex flex-col items-start justify-center py-2 px-6 box-border min-h-[30px] max-h-[60px]">
                  <div className="relative inline-block min-w-[32px]">Tags</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full shrink-0">
            <div className="shadow-[0px_0px_2px_rgba(0,_0,_0,_0.25)] rounded bg-white box-border flex flex-row items-start justify-start max-w-full border-[1px] border-solid border-black">
              <div className="h-[267px] overflow-y-auto flex flex-col items-start justify-start pt-[50px] px-[30px] pb-[30px] box-border gap-[40.5px] max-w-full mq750:h-auto mq750:gap-[20px] mq1050:pt-7 mq1050:pb-[145px] mq1050:box-border mq450:pt-5 mq450:pb-[94px] mq450:box-border">
                <div className="mt-[-59.5px] flex flex-row items-start justify-start py-0 px-6">
                  <div className="rounded bg-darkslateblue flex flex-row items-start justify-start py-2 px-6 box-border min-h-[30px] max-h-[60px] shrink-0 [debug_commit:1de1738]">
                    <div className="relative inline-block min-w-[44px]">
                      YURA
                    </div>
                  </div>
                </div>
                <div className="w-[1022px] rounded bg-white overflow-x-auto shrink-0 flex flex-col items-start justify-start gap-[10px] [debug_commit:1de1738] max-w-full text-black">
                  <div className="w-[1022px] overflow-hidden flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[400px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
                        <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[238px] max-w-full">
                          <div className="self-stretch relative">
                            Información Fiscal del Contribuyente
                          </div>
                        </div>
                        <ReportIcon/>
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-start py-0 pr-8 pl-0 box-border gap-[10px] max-w-full">
                      <div className="hidden flex-row items-center justify-start py-0 pr-[29px] pl-0 gap-[10px]">
                        <div className="h-[19px] flex flex-row items-center justify-start">
                          <div className="self-stretch relative flex items-center">
                            archivo actualmente subido
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                          <AttachFileIcon/>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[450px] mq450:max-w-full">
                        <input
                          className="[outline:none] bg-white h-10 flex-1 rounded box-border flex flex-row items-center justify-start py-[10.5px] px-[18px] font-inter text-base text-black min-w-[270px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                          placeholder="Texto"
                          type="text"
                        />
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                        <AttachFileIcon/>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[400px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
                        <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[238px] max-w-full">
                          <div className="self-stretch relative">
                            Información de Representantes Legales
                          </div>
                        </div>
                        <ReportIcon/>
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-start py-0 pr-8 pl-0 box-border gap-[10px] max-w-full">
                      <div className="hidden flex-row items-center justify-start py-0 pr-[29px] pl-0 gap-[10px]">
                        <div className="h-[19px] flex flex-row items-center justify-start">
                          <div className="self-stretch relative flex items-center">
                            archivo actualmente subido
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                        <AttachFileIcon/>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[450px] mq450:max-w-full">
                        <input
                          className="[outline:none] bg-white h-10 flex-1 rounded box-border flex flex-row items-center justify-start py-[10.5px] px-[18px] font-inter text-base text-black min-w-[270px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                          placeholder="Texto"
                          type="text"
                        />
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                        <AttachFileIcon/>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[400px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
                        <div className="flex-1 relative inline-block min-w-[238px] max-w-full">
                          Estado de Omisiones tributarias Remitidas a Centrales
                          de Riesgo
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                        <ReportIcon/>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-start py-0 pr-8 pl-0 box-border gap-[10px] max-w-full">
                      <div className="hidden flex-row items-center justify-start py-0 pr-[29px] pl-0 gap-[10px]">
                        <div className="h-[19px] flex flex-row items-center justify-start">
                          <div className="self-stretch relative flex items-center">
                            archivo actualmente subido
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                        <AttachFileIcon/>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[450px] mq450:max-w-full">
                        <input
                          className="[outline:none] bg-white h-10 flex-1 rounded box-border flex flex-row items-center justify-start py-[10.5px] px-[18px] font-inter text-base text-black min-w-[270px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                          placeholder="Texto"
                          type="text"
                        />
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                        <AttachFileIcon/>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[400px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
                        <div className="flex-1 relative inline-block min-w-[238px] max-w-full">
                          Estado de Deudas Coactivas Remitidas a Centrales de
                          Riesgo
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                        <ReportIcon/>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-start py-0 pr-8 pl-0 box-border gap-[10px] max-w-full">
                      <div className="hidden flex-row items-center justify-start py-0 pr-[29px] pl-0 gap-[10px]">
                        <div className="h-[19px] flex flex-row items-center justify-start">
                          <div className="self-stretch relative flex items-center">
                            archivo actualmente subido
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                          <img
                            className="h-6 w-6 relative"
                            alt=""
                            src="/clip-icon-1.svg"
                          />
                          <img
                            className="h-6 w-6 relative hidden min-h-[24px]"
                            alt=""
                            src="/clip-icon-1.svg"
                          />
                          <img
                            className="h-6 w-6 relative hidden min-h-[24px]"
                            alt=""
                            src="/clip-icon-1.svg"
                          />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[450px] mq450:max-w-full">
                        <input
                          className="[outline:none] bg-white h-10 flex-1 rounded box-border flex flex-row items-center justify-start py-[10.5px] px-[18px] font-inter text-base text-black min-w-[270px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                          placeholder="Texto"
                          type="text"
                        />
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                        <AttachFileIcon/>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[400px] flex flex-row items-start justify-start gap-[10px] max-w-full">
                      <div className="flex-1 relative inline-block min-w-[238px] max-w-full">
                        Sanciones aplicadas por el Instituto Nacional de Defensa
                        de la Competencia y de la Protección de la Propiedad
                        Intelectual (INDECOPI)
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[16.5px] px-0 pb-0">
                      <ReportIcon/>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-8 pl-0 box-border gap-[10px] max-w-full">
                        <div className="hidden flex-row items-center justify-start py-0 pr-[29px] pl-0 gap-[10px]">
                          <div className="h-[19px] flex flex-row items-center justify-start">
                            <div className="self-stretch relative flex items-center">
                              archivo actualmente subido
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                          <AttachFileIcon/>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[450px] mq450:max-w-full">
                          <input
                            className="[outline:none] bg-white h-10 flex-1 rounded box-border flex flex-row items-center justify-start py-[10.5px] px-[18px] font-inter text-base text-black min-w-[270px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                            placeholder="Texto"
                            type="text"
                          />
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                          <AttachFileIcon/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[400px] flex flex-row items-start justify-start gap-[10px] max-w-full">
                      <div className="h-[57px] flex-1 relative inline-block min-w-[238px] max-w-full">
                        Sanciones y multas aplicadas por la Superintendencia
                        Nacional de Fiscalización Laboral (SUNAFIL)
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[16.5px] px-0 pb-0">
                      <ReportIcon/>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-8 pl-0 box-border gap-[10px] max-w-full">
                        <div className="hidden flex-row items-center justify-start py-0 pr-[29px] pl-0 gap-[10px]">
                          <div className="h-[19px] flex flex-row items-center justify-start">
                            <div className="self-stretch relative flex items-center">
                              archivo actualmente subido
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                            <img
                              className="h-6 w-6 relative"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                            <img
                              className="h-6 w-6 relative hidden min-h-[24px]"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                            <img
                              className="h-6 w-6 relative hidden min-h-[24px]"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[450px] mq450:max-w-full">
                          <input
                            className="[outline:none] bg-white h-10 flex-1 rounded box-border flex flex-row items-center justify-start py-[10.5px] px-[18px] font-inter text-base text-black min-w-[270px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                            placeholder="Texto"
                            type="text"
                          />
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                          <AttachFileIcon/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[400px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
                        <div className="flex-1 relative inline-block min-w-[238px] max-w-full">
                          Estado de Inscripción en Registro Nacional de
                          Proveedores de Bienes y Servicios
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                          <ReportIcon/>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-start py-0 pr-8 pl-0 box-border gap-[10px] max-w-full">
                      <div className="hidden flex-row items-center justify-start py-0 pr-[29px] pl-0 gap-[10px]">
                        <div className="h-[19px] flex flex-row items-center justify-start">
                          <div className="self-stretch relative flex items-center">
                            archivo actualmente subido
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                        <ReportIcon/>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[450px] mq450:max-w-full">
                        <input
                          className="[outline:none] bg-white h-10 flex-1 rounded box-border flex flex-row items-center justify-start py-[10.5px] px-[18px] font-inter text-base text-black min-w-[270px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                          placeholder="Texto"
                          type="text"
                        />
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                        <AttachFileIcon/>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[400px] flex flex-row items-start justify-start gap-[10px] max-w-full">
                      <div className="h-[57px] flex-1 relative inline-block min-w-[238px] max-w-full">
                        Relación de proveedores sancionados por el Tribunal de
                        Contrataciones del Estado con sanción vigente
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[16.5px] px-0 pb-0">
                      <ReportIcon/>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-8 pl-0 box-border gap-[10px] max-w-full">
                        <div className="hidden flex-row items-center justify-start py-0 pr-[29px] pl-0 gap-[10px]">
                          <div className="h-[19px] flex flex-row items-center justify-start">
                            <div className="self-stretch relative flex items-center">
                              archivo actualmente subido
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                            <img
                              className="h-6 w-6 relative"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                            <img
                              className="h-6 w-6 relative hidden min-h-[24px]"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                            <img
                              className="h-6 w-6 relative hidden min-h-[24px]"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[450px] mq450:max-w-full">
                          <input
                            className="[outline:none] bg-white h-10 flex-1 rounded box-border flex flex-row items-center justify-start py-[10.5px] px-[18px] font-inter text-base text-black min-w-[270px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                            placeholder="Texto"
                            type="text"
                          />
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                          <AttachFileIcon/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[400px] flex flex-row items-start justify-start gap-[10px] max-w-full">
                      <div className="h-[57px] flex-1 relative inline-block min-w-[238px] max-w-full">
                        Información relacionada a actos de corrupción cometidos
                        por la Empresa y/o Representantes Legales
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[16.5px] px-0 pb-0">
                      <ReportIcon/>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-8 pl-0 box-border gap-[10px] max-w-full">
                        <div className="hidden flex-row items-center justify-start py-0 pr-[29px] pl-0 gap-[10px]">
                          <div className="h-[19px] flex flex-row items-center justify-start">
                            <div className="self-stretch relative flex items-center">
                              archivo actualmente subido
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                          <ReportIcon/>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[450px] mq450:max-w-full">
                          <input
                            className="[outline:none] bg-white h-10 flex-1 rounded box-border flex flex-row items-center justify-start py-[10.5px] px-[18px] font-inter text-base text-black min-w-[270px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                            placeholder="Texto"
                            type="text"
                          />
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                          <AttachFileIcon/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[400px] flex flex-row items-start justify-start gap-[10px] max-w-full">
                      <div className="h-[57px] flex-1 relative inline-block min-w-[238px] max-w-full">
                        Información relacionada a actos de soborno cometidos por
                        la Empresa y/o Representantes Legales
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[16.5px] px-0 pb-0">
                      <ReportIcon/>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-8 pl-0 box-border gap-[10px] max-w-full">
                        <div className="hidden flex-row items-center justify-start py-0 pr-[29px] pl-0 gap-[10px]">
                          <div className="h-[19px] flex flex-row items-center justify-start">
                            <div className="self-stretch relative flex items-center">
                              archivo actualmente subido
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                            <img
                              className="h-6 w-6 relative"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                            <img
                              className="h-6 w-6 relative hidden min-h-[24px]"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                            <img
                              className="h-6 w-6 relative hidden min-h-[24px]"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[450px] mq450:max-w-full">
                          <input
                            className="[outline:none] bg-white flex-1 rounded box-border flex flex-row items-center justify-start py-2 px-4 font-inter text-base text-black min-w-[270px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                            placeholder="Texto"
                            type="text"
                          />
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                          <AttachFileIcon/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[400px] flex flex-row items-start justify-start gap-[10px] max-w-full">
                      <div className="h-[57px] flex-1 relative inline-block min-w-[238px] max-w-full">
                        Información relacionada a actos de violencia de género
                        cometidos por la Empresa y/o Representantes Legales
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[16.5px] px-0 pb-0">
                      <ReportIcon/>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-8 pl-0 box-border gap-[10px] max-w-full">
                        <div className="hidden flex-row items-center justify-start py-0 pr-[29px] pl-0 gap-[10px]">
                          <div className="h-[19px] flex flex-row items-center justify-start">
                            <div className="self-stretch relative flex items-center">
                              archivo actualmente subido
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                            <img
                              className="h-6 w-6 relative"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                            <img
                              className="h-6 w-6 relative hidden min-h-[24px]"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                            <img
                              className="h-6 w-6 relative hidden min-h-[24px]"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[450px] mq450:max-w-full">
                          <input
                            className="[outline:none] bg-white flex-1 rounded box-border flex flex-row items-center justify-start py-2 px-4 font-inter text-base text-black min-w-[270px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                            placeholder="Texto"
                            type="text"
                          />
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                          <AttachFileIcon/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[400px] flex flex-row items-start justify-start gap-[10px] max-w-full">
                      <div className="h-[57px] flex-1 relative inline-block min-w-[238px] max-w-full">
                        Información relacionada a actos de hostigamiento sexual
                        cometidos por la Empresa y/o Representantes Legales
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[16.5px] px-0 pb-0">
                      <ReportIcon/>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-8 pl-0 box-border gap-[10px] max-w-full">
                        <div className="hidden flex-row items-center justify-start py-0 pr-[29px] pl-0 gap-[10px]">
                          <div className="h-[19px] flex flex-row items-center justify-start">
                            <div className="self-stretch relative flex items-center">
                              archivo actualmente subido
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                            <img
                              className="h-6 w-6 relative"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                            <img
                              className="h-6 w-6 relative hidden min-h-[24px]"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                            <img
                              className="h-6 w-6 relative hidden min-h-[24px]"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[450px] mq450:max-w-full">
                          <input
                            className="[outline:none] bg-white flex-1 rounded box-border flex flex-row items-center justify-start py-2 px-4 font-inter text-base text-black min-w-[270px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                            placeholder="Texto"
                            type="text"
                          />
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                          <AttachFileIcon/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[400px] flex flex-row items-start justify-start gap-[10px] max-w-full">
                      <div className="h-[57px] flex-1 relative inline-block min-w-[238px] max-w-full">
                        Información relacionada a actos de discriminación
                        cometidos por la Empresa y/o Representantes Legales
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[16.5px] px-0 pb-0">
                      <ReportIcon/>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-0 pr-8 pl-0 box-border gap-[10px] max-w-full">
                        <div className="hidden flex-row items-center justify-start py-0 pr-[29px] pl-0 gap-[10px]">
                          <div className="h-[19px] flex flex-row items-center justify-start">
                            <div className="self-stretch relative flex items-center">
                              archivo actualmente subido
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                            <img
                              className="h-6 w-6 relative"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                            <img
                              className="h-6 w-6 relative hidden min-h-[24px]"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                            <img
                              className="h-6 w-6 relative hidden min-h-[24px]"
                              alt=""
                              src="/clip-icon-1.svg"
                            />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[450px] mq450:max-w-full">
                          <input
                            className="[outline:none] bg-white flex-1 rounded box-border flex flex-row items-center justify-start py-2 px-4 font-inter text-base text-black min-w-[270px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                            placeholder="Texto"
                            type="text"
                          />
                          <div className="flex flex-row items-center justify-start gap-[5px]">
                          <AttachFileIcon/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden flex flex-row items-start justify-start gap-[30px]">
                    <div className="w-[400px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
                      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
                        <div className="flex-1 relative inline-block min-w-[238px] max-w-full">
                          Listado de Los Mejores Lugares Para Trabajar en Perú
                          2024
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                        <ReportIcon/>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-start py-0 pr-8 pl-0 box-border gap-[10px] max-w-full">
                      <div className="hidden flex-row items-center justify-start py-0 pr-[29px] pl-0 gap-[10px]">
                        <div className="h-[19px] flex flex-row items-center justify-start">
                          <div className="self-stretch relative flex items-center">
                            archivo actualmente subido
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                          <img
                            className="h-6 w-6 relative"
                            alt=""
                            src="/clip-icon-1.svg"
                          />
                          <img
                            className="h-6 w-6 relative hidden min-h-[24px]"
                            alt=""
                            src="/clip-icon-1.svg"
                          />
                          <img
                            className="h-6 w-6 relative hidden min-h-[24px]"
                            alt=""
                            src="/clip-icon-1.svg"
                          />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-[450px] mq450:max-w-full">
                        <input
                          className="[outline:none] bg-white h-10 flex-1 rounded box-border flex flex-row items-center justify-start py-[10.5px] px-[18px] font-inter text-base text-black min-w-[270px] min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black"
                          placeholder="Texto"
                          type="text"
                        />
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                        <AttachFileIcon/>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                      <div className="overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-limegreen" />
                        <div className="h-5 w-5 relative rounded bg-gold" />
                      </div>
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden hidden flex-row items-center justify-start gap-[30px] max-w-full">
                    <div className="w-[400px] flex flex-row items-center justify-start gap-[10px] max-w-full">
                      <div className="h-[38px] flex-1 relative flex items-center max-w-[calc(100%_-_34px)]">
                        Listado de Los Mejores Lugares Para Trabajar en Perú
                        2024
                      </div>
                      <ReportIcon/>
                    </div>
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-start gap-[10px] min-w-[243px] max-w-full">
                      <div className="flex flex-row items-center justify-start gap-[10px]">
                        <div className="h-[19px] flex flex-row items-center justify-start">
                          <div className="self-stretch relative flex items-center">
                            archivo actualmente subido
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                          <img
                            className="h-6 w-6 relative"
                            alt=""
                            src="/clip-icon-1.svg"
                          />
                          <img
                            className="h-6 w-6 relative hidden min-h-[24px]"
                            alt=""
                            src="/clip-icon-1.svg"
                          />
                          <img
                            className="h-6 w-6 relative hidden min-h-[24px]"
                            alt=""
                            src="/clip-icon-1.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[450px] hidden flex-row items-center justify-start max-w-[450px] mq450:max-w-full">
                        <div className="h-10 flex-1 rounded bg-white box-border flex flex-row items-center justify-start py-3 px-4 min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black">
                          <div className="h-[19px] flex-1 relative inline-block max-w-full">
                            Texto
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-hidden flex flex-row items-start justify-center gap-[10px]">
                      <div className="h-5 w-5 relative rounded bg-limegreen" />
                      <div className="h-5 w-5 relative rounded bg-limegreen" />
                      <div className="h-5 w-5 relative rounded bg-gold" />
                    </div>
                  </div>
                  <div className="w-[1022px] overflow-hidden hidden flex-row items-center justify-start gap-[30px] max-w-full">
                    <div className="w-[400px] flex flex-row items-center justify-start gap-[10px] max-w-full">
                      <div className="h-[38px] flex-1 relative flex items-center max-w-[calc(100%_-_34px)]">
                        Listado de Los Mejores Lugares Para Trabajar en Perú
                        2024
                      </div>
                      <ReportIcon/>
                    </div>
                    <div className="flex-1 overflow-hidden flex flex-row items-center justify-start gap-[10px] min-w-[243px] max-w-full">
                      <div className="flex flex-row items-center justify-start gap-[10px]">
                        <div className="h-[19px] flex flex-row items-center justify-start">
                          <div className="self-stretch relative flex items-center">
                            archivo actualmente subido
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[5px]">
                          <img
                            className="h-6 w-6 relative"
                            alt=""
                            src="/clip-icon-1.svg"
                          />
                          <img
                            className="h-6 w-6 relative hidden min-h-[24px]"
                            alt=""
                            src="/clip-icon-1.svg"
                          />
                          <img
                            className="h-6 w-6 relative hidden min-h-[24px]"
                            alt=""
                            src="/clip-icon-1.svg"
                          />
                        </div>
                      </div>
                      <div className="w-[450px] hidden flex-row items-center justify-start max-w-[450px] mq450:max-w-full">
                        <div className="h-10 flex-1 rounded bg-white box-border flex flex-row items-center justify-start py-3 px-4 min-h-[30px] max-h-[60px] max-w-full border-[2px] border-solid border-black">
                          <div className="h-[19px] flex-1 relative inline-block max-w-full">
                            Texto
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-hidden flex flex-row items-start justify-center gap-[10px]">
                      <div className="h-5 w-5 relative rounded bg-limegreen" />
                      <div className="h-5 w-5 relative rounded bg-limegreen" />
                      <div className="h-5 w-5 relative rounded bg-gold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
