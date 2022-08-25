import { FaTelegramPlane} from "react-icons/fa";

const ContactUs = (props) => {
    return (
           <div className="container-fluid mx-auto">
                <div className="bg-no-repeat bg-cover mt-0" style={{backgroundImage:`url('/assets/img/monas2.jpg')`,height:"700px",width:"100%"}}  >
                       <div className="flex justify-center text-center text-white"  htmlFor="#/Contact-Us">
                                <h4 className="text-2xl text-xl  font-bold" style={{marginTop:"10%"}}>{props.title}</h4>
                        </div>
                        <div className="mt-2  mb-10 flex justify-center text-center text-white" style={{marginTop:"2%"}}>
                            <p className="text-xl text-lg">
                                {props.description}
                            </p>
                        </div>

                    <div className="sm:mt-0 ml-12 mr-12" style={{marginTop:"10%"}}>
                        <div className="md:grid md:grid-cols-2 md:gap-6">
                            <div className="mt-5 md:mt-0 md:col-span-2">
                                <form action="#" method="POST">
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-slate-50 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    {props.label1}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    // placeholder="Fullname"
                                                    placeholder={props.InputPlaceholderName}
                                                    autoComplete="given-name"
                                                    className="caret-gray-50 mt-1 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                    {props.label2}
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email-address"
                                                    id="email-address"
                                                    placeholder={props.InputPlaceholderEmail}
                                                    autoComplete="email"
                                                    className="caret-pink-500  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md h-10"
                                                />
                                            </div>

                                            <div className="col-span-6">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    {props.label3}
                                                </label>
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    rows={3}
                                                    className="caret-pink-500  shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border  rounded-md"
                                                    placeholder={props.InputPlaceholderMessage}
                                                />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="px-4 py-3 text-right sm:px-6 bg-slate-50">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                <FaTelegramPlane size={'1.5em'}/>  &nbsp; {props.buttonTitle}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
		    </div>
    )
}

export default ContactUs