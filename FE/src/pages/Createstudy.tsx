import { useState } from "react";
import Button from "../components/reuse/Button";
import Input from "../components/reuse/Input";
import { Link, useNavigate } from "react-router-dom";
import { Createstud } from "../api/api";


const Createstudy = () => {
    const navigate = useNavigate();
    const [state, setState] = useState<string>("");
    const [state2, setstate2] = useState<string>("");
    const [state3, setstate3] = useState<string>("");


    // console.log("this is loading ", loading)
    const Handlesubmit = (e: any) => {
        e.preventDefault();

        Createstud("65b64d645f2da7113f209f90", { StudyTime: state, StretchTime: state2, BreakTime: state3 }).then((res) => {
            console.log("this is acc", res)
        })
    }

    return (
        <div className=" w-full h-[94vh] flex flex-col justify-center items-center ">
            <div className="mb-10 text-center flex items-center w-full flex-col">
                <div className="mb-5 w-20 h-20 rounded-full border flex justify-center items-center font-bold text-blue-600 text-[30px]">
                    study
                </div>
                <div className="text-[26px] font-bold mb-3">Create a study</div>

            </div>

            <form
                className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4"

            >
                <Input
                    placeholder="StudyTime"
                    className="w-[97%]"
                    type="text"
                    required
                    value={state}
                    onChange={(e: any) => {
                        setState(e.target.value);
                    }}
                />
                <Input
                    placeholder="StretchTime"
                    className="w-[97%]"
                    type="text"
                    required
                    value={state2}
                    onChange={(e: any) => {
                        setstate2(e.target.value);
                    }}
                />
                <Input
                    placeholder="BreakTime"
                    className="w-[97%]"
                    type="text"
                    required
                    value={state3}
                    onChange={(e: any) => {
                        setstate3(e.target.value);
                    }}
                />

                <div>
                    <Button
                        name={"register"}
                        className="w-[97%] bg-blue-900 text-white h-14 hover:bg-blue-800 transition-all duration-300"
                        onClick={Handlesubmit}

                    />

                </div>
                <div className="mt-10 mb-0 ml-2 text-[13px] font-medium ">
                    Sign up with social network
                </div>
                {/* <div className="flex flex-col">
          <Button
            name="Continue with Google"
            className="h-14 bg-red-500 hover:bg-red-600 hover:text-white  transition-all duration-300 font-medium text-[#ababab]"
            icon={<FaGoogle />}
          />
        </div> */}
            </form>
            <div className="mt-5 text-[13px]">
                Already have an Account?{" "}
                <span className="font-bold text-blue-900">
                    <Link to="/Login">Login here</Link>
                </span>
            </div>
        </div>
    );
};

export default Createstudy;
