import { FaBriefcase, FaIndustry, FaUsers,FaSignOutAlt} from "react-icons/fa";
import { Link } from "react-router-dom";

const Strategy = (props) => {
    return (
           <div className="container-fluid mx-auto">
                <div className=" bg-white mt-0 w-full">
            `       <div className="flex justify-center text-center" style={{marginTop:"2em"}} >
                        <h1 className="text-2xl text-xl font-bold">{props.title}</h1>
                    </div>
                    <div className="mt-2  mb-10 flex justify-center text-center" style={{marginTop:"2%"}}>
                        <h2 className="text-xl text-lg ">{props.description}</h2>
                    </div>
                    <div className="flex justify-center text-center text-white h-auto">
                        <div className="box-border hover:box-content bg-purple-700 w-1/4">
                            <Link to="/"><FaBriefcase size={"3em"} className="mr-auto ml-auto mt-3" /></Link>
                            <Link to="/"> <h3 className="text-xl text-lg text md font-bold">Business Oriented</h3> </Link>
                            <h4 className="mt-2 text-sm ">{props.descriptionSubTitle1}</h4>
                        </div>    
                        <div className="box-border hover:box-content bg-purple-800 w-1/4">
                            <Link to="/"><FaIndustry size={"3em"} className="mr-auto ml-auto mt-3" /></Link>
                            <Link to="/"><h3 className="text-xl text-lg text md font-bold">Advanced Technology</h3></Link>
                            <h4 className="mt-2 text-sm ">{props.descriptionSubTitle2}</h4>
                        </div>  
                        <div className="box-border hover:box-content bg-teal-500 w-1/4">
                            <Link to="/"> <FaUsers size={"3em"} className="mr-auto ml-auto mt-3" /> </Link>
                            <Link to="/"><h3 className="text-xl text-lg text md font-bold">Pure Indonesian</h3> </Link>
                            <h4 className="mt-2 text-sm">{props.descriptionSubTitle3}</h4>
                        </div>  
                        <div className="box-border hover:box-content bg-blue-400 w-1/4">
                            <Link to="/"><FaSignOutAlt size={"3em"} className="mr-auto ml-auto mt-3" /> </Link>
                            <Link to="/"><h3 className="text-xl text-lg text md font-bold">Out Of the box</h3> </Link>
                            <h4 className="mt-2 text-sm">{props.descriptionSubTitle4}</h4>
                        </div>  
                    </div>
                    
                </div>
		    </div>
    )
}

export default Strategy