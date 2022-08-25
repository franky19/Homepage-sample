const Header =(props)=>{
    return(
        <div className="container-fluid mx-auto hidden lg:block bg-no-repeat bg-cover " style={{backgroundImage:`url('/assets/img/monas2.jpg')`,height:"800px",width:"100%"}}>
        <div className=" grid grid-cols-2 gap-4 content-center" style={{height:"800px"}}>
                <div className="sm:mt-0 ml-16">
                        <div className="ml-6">
                            <img src="https://pojokan.io/img/logo.webp" className="h-10" alt="logo" />
                            <div className="text-white mt-5" >
                                {props.description}
                                {/* <p>Large yet most efficient business oriented technology company in Indonesia</p> */}
                            </div>
                            <div className="mt-5">
                                <button className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
                                    {/* Learn more */}
                                    {props.buttonText}
                                </button>
                            </div>
                        </div>
                </div>
        </div>
    </div>
    )
}

export default Header