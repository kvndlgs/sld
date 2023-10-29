interface PageTitleProps {
    title?: string;
    subtitle?: string;
    spanColor?: string;
    titleColor?: string;
    subtitleColor?: string;
    aosData?: string;
    aosDataEasing?: string;
    aosDataDuration?: string;
}

const PageTitle = (props: PageTitleProps) => {
    return (
        <div data-aos={props?.aosData} data-aos-duration={props?.aosDataDuration} data-aos-easing={props?.aosDataEasing} className="w-full flex flex-col items-center justify-center md:justify-around py-6 mt-3 mx-auto text-center">
            <h4 className={"text-md font-base pb-3 " + `${props?.subtitleColor}`}> { props?.subtitle } </h4>
            <h2 className={"md:text-xl text-lg font-semibold pb-5 " + `${props?.titleColor}`}> {props?.title }</h2>
            <span className={"w-10 h-1 rounded-xl " + `${props?.spanColor}`}></span>
        </div>
    )
}

export default PageTitle;