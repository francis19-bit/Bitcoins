import { createSlice } from "@reduxjs/toolkit";

export const ItemDataSlice = createSlice({
  name: "ItemData",
  initialState: {
    AddToCart: [],
    //
    checkoutItems: [],

    // Speakers
    SpeakerAsano: {},
    SpeakerTonemac: {},
    SpeakerKora: {},
    SpeakerTurf: {},
    SpeakerSoundCore: {},
    SpeakerFranko: {},
    SpeakerItel: {},
    SpeakerMooved: {},
    SpeakerOriamo: {},
    SpeakerRemax: {},

    // Airconditions
    AirConSkyWorth: {},
    AirConFranko: {},

    // Accessories
    productDetails: {},
    CameraDetails: {},
    ChargerDetails: {},
    ComputerMouse: {},
    DataUSBCable: {},
    ExternalHardDrive: {},
    Handsfree: {},
    MobileWifi: {},
    PendDrives: {},
    PhoneCases: {},
    PowerBanks: {},
    SdCards: {},
    SmartWatch: {},
    Protector: {},

    // Computers
    ComputAcer: {},
    ComputApple: {},
    ComputAsus: {},
    ComputDell: {},
    ComputHp: {},
    ComputHuawei: {},
    ComputLenovo: {},
    ComputDesktop: {},

    // MobilePhones
    MobileApple: {},
    MobileAiEnabled: {},
    MobileItel: {},
    MobileInfinix: {},
    MobileTcl: {},
    MobileHuawei: {},
    MobileSamsung: {},
    MobileNokia: {},
    MobileTecno: {},
    MobileXtigi: {},
    MobileXioami: {},
    MobileOale: {},
    MobileAlcatel: {},
    MobileTablet: {},
    //
    BestAUdioDetails: [],
    //
    //
    Accessories: [],
    Products: [],
    Camera: [],
    Fans: [],
    MobilePhone: [],
    Television: [],
    Fridges: [],
    Computer: [],
    AirCondition: [],
    Speaker: [],
    WashingMachine: [],
    Printer: [],

    // Fridges
    FridgeFranko: {},
    FridgeSkyworth: {},
    FridgeAsano: {},

    // Fans
    FansRemax: {},
    FansItelSmart: {},
    FansTurfSwivel: {},

    // Printer
    PrinterEpson: {},
    PrinterHp: {},

    // Television
    TelevisonAsano: {},
    TelevisonFranko: {},
    TelevisonItel: {},
    TelevisonSkyworth: {},

    // Washing machine
    WashingMachineSkyworth: {},

    // Camera
    CameraDahua: {},

    // Home
    HomeFlashSales: {},
    HomeBestSelling: {},
    HomeExploreProduct: {},
    HomeNewArrive: {},
    HomeSpotLight: {},
    HomeDealsDelightCombo: {},

    // Home 2
    HomeFlash: {},
    HomeBest: {},
    HomeExplore: {},
    HomeNew: {},
  },

  reducers: {
    // Home
    setHomeFlashSales: (state, action) => {
      state.HomeFlashSales = action.payload;
    },
    setHomeDealsDelightCombo: (state, action) => {
      state.HomeDealsDelightCombo = action.payload;
    },
    setHomeBestSelling: (state, action) => {
      state.HomeBestSelling = action.payload;
    },
    setHomeSpotLight: (state, action) => {
      state.HomeSpotLight = action.payload;
    },
    setHomeExploreProduct: (state, action) => {
      state.HomeExploreProduct = action.payload;
    },
    setHomeNewArrive: (state, action) => {
      state.HomeNewArrive = action.payload;
    },

    // Home 2
    setHomeFlash: (state, action) => {
      state.HomeFlash = action.payload;
    },
    setHomeBest: (state, action) => {
      state.HomeBest = action.payload;
    },
    setHomeExplore: (state, action) => {
      state.HomeExplore = action.payload;
    },
    setHomeNew: (state, action) => {
      state.HomeNew = action.payload;
    },

    // Camera
    setCameraDahua: (state, action) => {
      state.CameraDahua = action.payload;
    },
    // Washing machine
    setWashingMachineSkyworth: (state, action) => {
      state.WashingMachineSkyworth = action.payload;
    },
    // Television
    setTelevisonAsano: (state, action) => {
      state.TelevisonAsano = action.payload;
    },

    setTelevisonFranko: (state, action) => {
      state.TelevisonFranko = action.payload;
    },

    setTelevisonItel: (state, action) => {
      state.TelevisonItel = action.payload;
    },
    setTelevisonSkyworth: (state, action) => {
      state.TelevisonSkyworth = action.payload;
    },

    // Printer
    setPrinterEpson: (state, action) => {
      state.PrinterEpson = action.payload;
    },
    setPrinterHp: (state, action) => {
      state.PrinterHp = action.payload;
    },
    //
    setFansRemax: (state, action) => {
      state.FansRemax = action.payload;
    },

    setFansItelSmart: (state, action) => {
      state.FansItelSmart = action.payload;
    },
    setFansTurfSwivel: (state, action) => {
      state.FansTurfSwivel = action.payload;
    },

    // Fridges
    setFridgeFranko: (state, action) => {
      state.FridgeFranko = action.payload;
    },
    setFridgeSkyworth: (state, action) => {
      state.FridgeSkyworth = action.payload;
    },
    setFridgeAsano: (state, action) => {
      state.FridgeAsano = action.payload;
    },

    // Speaker
    setSpeakerAsano: (state, action) => {
      state.SpeakerAsano = action.payload;
    },
    setSpeakerSoundCore: (state, action) => {
      state.SpeakerSoundCore = action.payload;
    },
    setSpeakerTurf: (state, action) => {
      state.SpeakerTurf = action.payload;
    },
    setSpeakerKora: (state, action) => {
      state.SpeakerKora = action.payload;
    },
    setSpeakerTonemac: (state, action) => {
      state.SpeakerTonemac = action.payload;
    },
    setSpeakerFranko: (state, action) => {
      state.SpeakerFranko = action.payload;
    },
    setSpeakerItel: (state, action) => {
      state.SpeakerItel = action.payload;
    },
    setSpeakerMooved: (state, action) => {
      state.SpeakerMooved = action.payload;
    },
    setSpeakerOriamo: (state, action) => {
      state.SpeakerOriamo = action.payload;
    },
    setSpeakerRemax: (state, action) => {
      state.SpeakerRemax = action.payload;
    },

    // Mobiles
    setMobileAiEnabled: (state, action) => {
      state.MobileAiEnabled = action.payload;
    },
    setMobileApple: (state, action) => {
      state.MobileApple = action.payload;
    },
    setMobileItel: (state, action) => {
      state.MobileItel = action.payload;
    },
    setMobileInfinix: (state, action) => {
      state.MobileInfinix = action.payload;
    },
    setMobileTcl: (state, action) => {
      state.MobileTcl = action.payload;
    },
    setMobileHuawei: (state, action) => {
      state.MobileHuawei = action.payload;
    },
    setMobileSamsung: (state, action) => {
      state.MobileSamsung = action.payload;
    },
    setMobileNokia: (state, action) => {
      state.MobileNokia = action.payload;
    },
    setMobileTecno: (state, action) => {
      state.MobileTecno = action.payload;
    },
    setMobileXtigi: (state, action) => {
      state.MobileXtigi = action.payload;
    },
    setMobileXioami: (state, action) => {
      state.MobileXioami = action.payload;
    },
    setMobileOale: (state, action) => {
      state.MobileOale = action.payload;
    },
    setMobileAlcatel: (state, action) => {
      state.MobileAlcatel = action.payload;
    },
    setMobileTablet: (state, action) => {
      state.MobileTablet = action.payload;
    },

    // Computer
    setComputDesktop: (state, action) => {
      state.ComputDesktop = action.payload;
    },
    setComputAcer: (state, action) => {
      state.ComputAcer = action.payload;
    },
    setComputApple: (state, action) => {
      state.ComputApple = action.payload;
    },
    setComputAsus: (state, action) => {
      state.ComputAsus = action.payload;
    },
    setComputDell: (state, action) => {
      state.ComputDell = action.payload;
    },
    setComputHp: (state, action) => {
      state.ComputHp = action.payload;
    },
    setComputHuawei: (state, action) => {
      state.ComputHuawei = action.payload;
    },
    setComputLenovo: (state, action) => {
      state.ComputLenovo = action.payload;
    },

    // Airconditions
    setAirConSkyWorth: (state, action) => {
      state.AirConSkyWorth = action.payload;
    },
    setAirConFranko: (state, action) => {
      state.AirConFranko = action.payload;
    },

    // CompoNent for AddToCart
    setAddToCart: (state, action) => {
      state.AddToCart = action.payload;
    },
    //

    setCheckoutItems: (state, action) => {
      state.checkoutItems = action.payload;
    },

    // Accessories
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },
    setCameraDetails: (state, action) => {
      state.CameraDetails = action.payload;
    },
    setBestAUdioDetails: (state, action) => {
      state.BestAUdioDetails = action.payload;
    },
    setChargerDetails: (state, action) => {
      state.ChargerDetails = action.payload;
    },
    setComputerMouse: (state, action) => {
      state.ComputerMouse = action.payload;
    },
    setDataUSBCable: (state, action) => {
      state.DataUSBCable = action.payload;
    },
    setExternalHardDrive: (state, action) => {
      state.ExternalHardDrive = action.payload;
    },
    setHandsfree: (state, action) => {
      state.Handsfree = action.payload;
    },
    setMobileWifi: (state, action) => {
      state.MobileWifi = action.payload;
    },
    setPendDrives: (state, action) => {
      state.PendDrives = action.payload;
    },
    setPhoneCases: (state, action) => {
      state.PhoneCases = action.payload;
    },
    setPowerBanks: (state, action) => {
      state.PowerBanks = action.payload;
    },
    setSdCards: (state, action) => {
      state.SdCards = action.payload;
    },
    setSmartWatch: (state, action) => {
      state.SmartWatch = action.payload;
    },
    setProtector: (state, action) => {
      state.Protector = action.payload;
    },
    //
    setAccessories: (state, action) => {
      state.Accessories = action.payload;
    },
    setProducts: (state, action) => {
      state.Products = action.payload;
    },
    setCamera: (state, action) => {
      state.Camera = action.payload;
    },
    setFans: (state, action) => {
      state.Fans = action.payload;
    },
    setMobilePhone: (state, action) => {
      state.MobilePhone = action.payload;
    },
    setTelevision: (state, action) => {
      state.Television = action.payload;
    },
    setFridges: (state, action) => {
      state.Fridges = action.payload;
    },
    setComputer: (state, action) => {
      state.Computer = action.payload;
    },
    setAirCondition: (state, action) => {
      state.AirCondition = action.payload;
    },
    setSpeaker: (state, action) => {
      state.Speaker = action.payload;
    },
    setWashingMachine: (state, action) => {
      state.WashingMachine = action.payload;
    },
    setPrinter: (state, action) => {
      state.Printer = action.payload;
    },
  },
});
// Home
export const selectHomeFlashSales = (state) => state.ItemData.HomeFlashSales;
export const selectHomeDealsDelightCombo = (state) =>
  state.ItemData.HomeDealsDelightCombo;
export const selectHomeSpotLight = (state) => state.ItemData.HomeSpotLight;
export const selectHomeBestSelling = (state) => state.ItemData.HomeBestSelling;
export const selectHomeExploreProduct = (state) =>
  state.ItemData.HomeExploreProduct;
export const selectHomeNewArrive = (state) => state.ItemData.HomeNewArrive;

// Home 2
export const selectHomeFlash = (state) => state.ItemData.HomeFlash;
export const selectHomeBest = (state) => state.ItemData.HomeBest;
export const selectHomeExplore = (state) => state.ItemData.HomeExplore;
export const selectHomeNew = (state) => state.ItemData.HomeNew;

// Camera
export const selectCameraDahua = (state) => state.ItemData.CameraDahua;

//Washing Machine
export const selectWashingMachineSkyworth = (state) =>
  state.ItemData.WashingMachineSkyworth;

// Television
export const selectTelevisonAsano = (state) => state.ItemData.TelevisonAsano;
export const selectTelevisonFranko = (state) => state.ItemData.TelevisonFranko;
export const selectTelevisonItel = (state) => state.ItemData.TelevisonItel;
export const selectTelevisonSkyworth = (state) =>
  state.ItemData.TelevisonSkyworth;

// Printer
export const selectPrinterEpson = (state) => state.ItemData.PrinterEpson;
export const selectPrinterHp = (state) => state.ItemData.PrinterHp;

// Fans
export const selectFansRemax = (state) => state.ItemData.FansRemax;
export const selectFansItelSmart = (state) => state.ItemData.FansItelSmart;
export const selectFansTurfSwivel = (state) => state.ItemData.FansTurfSwivel;

// Fridges
export const selectFridgeFranko = (state) => state.ItemData.FridgeFranko;
export const selectFridgeSkyworth = (state) => state.ItemData.FridgeSkyworth;
export const selectFridgeAsano = (state) => state.ItemData.FridgeAsano;

// Speakers
export const selectSpeakerSoundCore = (state) =>
  state.ItemData.SpeakerSoundCore;
export const selectSpeakerAsano = (state) => state.ItemData.SpeakerAsano;
export const selectSpeakerTurf = (state) => state.ItemData.SpeakerTurf;
export const selectSpeakerKora = (state) => state.ItemData.SpeakerKora;
export const selectSpeakerTonemac = (state) => state.ItemData.SpeakerTonemac;
export const selectSpeakerFranko = (state) => state.ItemData.SpeakerFranko;
export const selectSpeakerItel = (state) => state.ItemData.SpeakerItel;
export const selectSpeakerMooved = (state) => state.ItemData.SpeakerMooved;
export const selectSpeakerOriamo = (state) => state.ItemData.SpeakerOriamo;
export const selectSpeakerRemax = (state) => state.ItemData.SpeakerRemax;

// Mobile
export const selectMobileApple = (state) => state.ItemData.MobileApple;
export const selectMobileAiEnabled = (state) => state.ItemData.MobileAiEnabled;
export const selectMobileItel = (state) => state.ItemData.MobileItel;
export const selectMobileInfinix = (state) => state.ItemData.MobileInfinix;
export const selectMobileTcl = (state) => state.ItemData.MobileTcl;
export const selectMobileHuawei = (state) => state.ItemData.MobileHuawei;
export const selectMobileSamsung = (state) => state.ItemData.MobileSamsung;
export const selectMobileNokia = (state) => state.ItemData.MobileNokia;
export const selectMobileTecno = (state) => state.ItemData.MobileTecno;
export const selectMobileXtigi = (state) => state.ItemData.MobileXtigi;
export const selectMobileXioami = (state) => state.ItemData.MobileXioami;
export const selectMobileOale = (state) => state.ItemData.MobileOale;
export const selectMobileAlcatel = (state) => state.ItemData.MobileAlcatel;
export const selectMobileTablet = (state) => state.ItemData.MobileTablet;

// Computer
export const selectComputAcer = (state) => state.ItemData.ComputAcer;
export const selectComputApple = (state) => state.ItemData.ComputApple;
export const selectComputAsus = (state) => state.ItemData.ComputAsus;
export const selectComputDell = (state) => state.ItemData.ComputDell;
export const selectComputHp = (state) => state.ItemData.ComputHp;
export const selectComputHuawei = (state) => state.ItemData.ComputHuawei;
export const selectComputLenovo = (state) => state.ItemData.ComputLenovo;
export const selectComputDesktop = (state) => state.ItemData.ComputDesktop;

//
export const selectAddToCart = (state) => state.ItemData.AddToCart;
//

// Airconditions
export const selectAirConSkyWorth = (state) => state.ItemData.AirConSkyWorth;
export const selectAirConFranko = (state) => state.ItemData.AirConFranko;

// Accessories
export const selectCheckoutItems = (state) => state.ItemData.checkoutItems;
export const selectProductDetails = (state) => state.ItemData.productDetails;
export const selectChargerDetails = (state) => state.ItemData.ChargerDetails;
export const selectCameraDetails = (state) => state.ItemData.CameraDetails;
export const selectBestAUdioDetails = (state) =>
  state.ItemData.BestAUdioDetails;
export const selectComputerMouse = (state) => state.ItemData.ComputerMouse;
export const selectDataUSBCable = (state) => state.ItemData.DataUSBCable;
export const selectExternalHardDrive = (state) =>
  state.ItemData.ExternalHardDrive;
export const selectHandsfree = (state) => state.ItemData.Handsfree;
export const selectMobileWifi = (state) => state.ItemData.MobileWifi;
export const selectPendDrives = (state) => state.ItemData.PendDrives;
export const selectPhoneCases = (state) => state.ItemData.PhoneCases;
export const selectProtector = (state) => state.ItemData.Protector;
export const selectPowerBanks = (state) => state.ItemData.PowerBanks;
export const selectSdCards = (state) => state.ItemData.SdCards;
export const selectSmartWatch = (state) => state.ItemData.SmartWatch;
//
export const selectAccessories = (state) => state.ItemData.Accessories;
export const selectProducts = (state) => state.ItemData.Products;
export const selectCamera = (state) => state.ItemData.Camera;
export const selectFans = (state) => state.ItemData.Fans;
export const selectMobilePhone = (state) => state.ItemData.MobilePhone;
export const selectTelevision = (state) => state.ItemData.Television;
export const selectFridges = (state) => state.ItemData.Fridges;
export const selectComputer = (state) => state.ItemData.Computer;
export const selectAirCondition = (state) => state.ItemData.AirCondition;
export const selectSpeaker = (state) => state.ItemData.Speaker;
export const selectWashingMachine = (state) => state.ItemData.WashingMachine;
export const selectPrinter = (state) => state.ItemData.Printer;

export const {
  setHomeDealsDelightCombo,
  setHomeBest,
  setHomeFlash,
  setHomeNew,
  setHomeExplore,
  setHomeBestSelling,
  setHomeSpotLight,
  setHomeExploreProduct,
  setHomeFlashSales,
  setHomeNewArrive,
  setFans,
  setCameraDahua,
  setWashingMachineSkyworth,
  setTelevisonAsano,
  setTelevisonFranko,
  setTelevisonItel,
  setTelevisonSkyworth,
  setFansItelSmart,
  setFansRemax,
  setFansTurfSwivel,
  setPrinterEpson,
  setPrinterHp,
  setSpeakerKora,
  setSpeakerSoundCore,
  setSpeakerTonemac,
  setSpeakerTurf,
  setFridgeAsano,
  setFridgeFranko,
  setFridgeSkyworth,
  setMobileAiEnabled,
  setMobileInfinix,
  setMobileItel,
  setMobileTcl,
  setComputDesktop,
  setComputAcer,
  setComputApple,
  setComputAsus,
  setComputDell,
  setComputHp,
  setComputHuawei,
  setComputLenovo,
  setMobileAlcatel,
  setMobileApple,
  setMobileHuawei,
  setMobileNokia,
  setMobileOale,
  setMobileSamsung,
  setMobileTablet,
  setMobileTecno,
  setMobileXioami,
  setMobileXtigi,
  setAirConFranko,
  setAirConSkyWorth,
  setExternalHardDrive,
  setProtector,
  setHandsfree,
  setMobileWifi,
  setPendDrives,
  setPhoneCases,
  setPowerBanks,
  setSdCards,
  setSmartWatch,
  setDataUSBCable,
  setChargerDetails,
  setAddToCart,
  setCheckoutItems,
  setProductDetails,
  setCameraDetails,
  setBestAUdioDetails,
  setAccessories,
  setProducts,
  setCamera,
  setMobilePhone,
  setTelevision,
  setFridges,
  setComputer,
  setAirCondition,
  setSpeaker,
  setWashingMachine,
  setPrinter,
  setComputerMouse,
  setSpeakerAsano,
  setSpeakerFranko,
  setSpeakerItel,
  setSpeakerMooved,
  setSpeakerOriamo,
  setSpeakerRemax,
} = ItemDataSlice.actions;

export default ItemDataSlice.reducer;
