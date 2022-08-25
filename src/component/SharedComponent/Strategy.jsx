import { FaBriefcase, FaIndustry, FaUsers,FaSignOutAlt} from "react-icons/fa";
import { Link } from "react-router-dom";

const Strategy = (props) => {
    return (
           <div className="container-fluid mx-auto">
                <div className="hidden lg:block bg-white mt-0 w-full">
            `       <div className="flex justify-center text-center" style={{marginTop:"2em"}} >
                        <h4 className="text-2xl font-bold">{props.title}</h4>
                    </div>
                    <div className="mt-2  mb-10 flex justify-center text-center" style={{marginTop:"2%"}}>
                        <p className="text-2xl ">{props.description}</p>
                    </div>
                    <div className="flex justify-center text-center text-white h-auto">
                        <div className="box-border hover:box-content bg-purple-700 w-1/4">
                            <Link to="/"><FaBriefcase size={"3em"} className="mr-auto ml-auto mt-3" /></Link>
                            <Link to="/"> <h4 className="text-xl font-bold">Business Oriented</h4> </Link>
                            <p className="mt-2">{props.descriptionSubTitle1}</p>
                        </div>    
                        <div className="box-border hover:box-content bg-purple-800 w-1/4">
                            <Link to="/"><FaIndustry size={"3em"} className="mr-auto ml-auto mt-3" /></Link>
                            <Link to="/"><h4 className="text-xl font-bold">Advanced Technology</h4></Link>
                            <p className="mt-2">{props.descriptionSubTitle2}</p>
                        </div>  
                        <div className="box-border hover:box-content bg-teal-500 w-1/4">
                            <Link to="/"> <FaUsers size={"3em"} className="mr-auto ml-auto mt-3" /> </Link>
                            <Link to="/"><h4 className="text-xl font-bold">Pure Indonesian</h4> </Link>
                            <p className="mt-2">{props.descriptionSubTitle3}</p>
                        </div>  
                        <div className="box-border hover:box-content bg-blue-400 w-1/4">
                            <Link to="/"><FaSignOutAlt size={"3em"} className="mr-auto ml-auto mt-3" /> </Link>
                            <Link to="/"><h4 className="text-xl font-bold">Out Of the box</h4> </Link>
                            <p className="mt-2">{props.descriptionSubTitle4}</p>
                        </div>  
                    </div>
                    
                </div>
		    </div>
    )
}

export default Strategy