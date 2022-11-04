
const darkmode = {
        backg: `dark:bg-[#080238] dark:text-white transition duration-1000`,
        backb: `dark:bg-[#080238] dark:border-2 dark:border-indigo-900 transition duration-1000`
}


const Headerss = {
    input: `w-[360px] h-[50px] rounded-[30px] bg-gray-200 px-5 py-2`,
    text: `font-['Open Sans'] font-normal text-[24px]`
}
const Main = {
    MainBlock: `bg-gray-200 h-[413px] rounded-[30px] flex px-[8px] py-[22px] justify-around pl-[33px] mb-[30px] box-border`,
    blocks: `border-r-2 border-r-amber-600 w-[196px] h-[370px]`,
    InfoBlock: `w-[120px] font-['Open Sans'] font-normal text-[18px] text-gray-600 pt-[180px] leading-6`,
    PicturePart: `w-[280px] h-[365px]`,
    temp: `font-['Open Sans'] font-normal text-7xl leading-[85px]`,
    data: `font-['Open Sans'] font-medium text-2xl text-center`,
    info: `font-['Open Sans'] font-medium text-lg text-center m-[16px] mb-0`,
    inform: `mb-[12px]`
}

const Additional = {
    infotemp: `font-['Open Sans'] font-medium text-2xl`,
    addBlock: `w-[394px] h-[276px] bg-gray-200 rounded-[30px] p-[20px]`,
    infotext: `font-['Open Sans'] font-normal text-2xl flex justify-between mb-[23px]`,
    svgBlock: `h-[145px] flex justify-around`,
    vector: `flex justify-around`
}

const Week = {
    weekblock: `w-[182px] h-[165px] bg-gray-200 rounded-[30px] py-[12px] px-[16px]`,
    info: `font-['Open Sans'] font-normal text-lg `,
    content: `flex justify-between`
}

export const Style = {
    RootBlock: `w-[1440px] h-[1080px] mx-auto mt-4 px-[100px] pt-[30px] pb-[57px] text-black`,
    Buttons: `w-[50px] h-[50px] bg-gray-200 rounded-full justify-between`,
    Header: Headerss,
    Main: Main,
    Additional: Additional,
    Week: Week,
    darkMode: darkmode
}