import { FaCubes} from "react-icons/fa";
import { Link } from "react-router-dom";
import {BiLineChart} from 'react-icons/bi'
import {AiOutlineDashboard} from 'react-icons/ai'

const AboutUs = (props) => {
    return (
            <div className="container-fluid mx-auto" id="AboutUs" htmlFor="#AboutUs">
                <div className=" bg-slate-50 mt-0 w-full">
            `       <div className="flex justify-center text-center" style={{marginTop:"2em"}}>
                        <h1 className="text-2xl text-xl font-bold">{props.title}</h1>
                    </div>
                    <div className="mt-2  mb-10 flex justify-center text-center" style={{marginTop:"2%"}}>
                        <h2 className="text-xl text-lg">{props.description}</h2>
                    </div>
                    <div className="sm:mt-0 ml-12 mr-12" style={{marginTop:"5%"}}>
                        <div className="md:grid md:grid-cols-2 md:gap-6">
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <div className="flex justify-center text-center" style={{height:"250px"}}>
                                    <div className="box-border hover:box-content bg-transparant w-1/4 mr-6 ml-6">
                                        <Link to="/"><BiLineChart size={"4em"} className="mr-auto ml-auto mt-3 text-blue-500"  /></Link>
                                        <Link to="/"> <h4 className="text-xl font-bold">Agile Framework</h4> </Link>
                                        <p className="mt-2">{props.descriptionSubTitle1}</p>
                                    </div>    
                                    <div className="box-border hover:box-content bg-transparant w-1/4 ml-6 mr-6">
                                        <Link to="/"><AiOutlineDashboard size={"4em"} className="mr-auto ml-auto mt-3 text-orange-500" /></Link>
                                        <Link to="/"><h4 className="text-xl font-bold">Continuously Integration</h4></Link>
                                        <p className="mt-2">{props.descriptionSubTitle2}</p>
                                    </div>  
                                    <div className="box-border hover:box-content bg-transparant w-1/4 mr-6 ml-6">
                                        <Link to="/"> <FaCubes size={"4em"} className="mr-auto ml-auto mt-3 text-red-500" /> </Link>
                                        <Link to="/"><h4 className="text-xl font-bold">Continuously delivery</h4> </Link>
                                        <p className="mt-2">{props.descriptionSubTitle3}</p>
                                    </div>  
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
		    </div>
    )
}

export default AboutUs