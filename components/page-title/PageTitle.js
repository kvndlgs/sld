export default function PageTitle({title, subtitle, textColor, spanColor, titleColor, subtitleColor, aosData, aosDataDuration, aosDataEasing}) {
    return (
        <div data-aos={aosData} data-aos-duration={aosDataDuration} data-aos-easing={aosDataEasing} className="w-full flex flex-col items-center justify-center md:justify-around py-6 mt-3 mx-auto text-center">
            <h4 className={"text-md font-normal pb-3 " + `${subtitleColor}`}> { subtitle } </h4>
            <h2 className={"md:text-xl text-lg font-semibold pb-5 " + `${titleColor}`}> {title }</h2>
            <span className={"w-10 h-1 rounded-xl " + `${spanColor}`}></span>
        </div>
    )
}