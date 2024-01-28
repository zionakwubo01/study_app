import { useState } from "react";
import Button from "../components/reuse/Button";
import Input from "../components/reuse/Input";
import { Link, useNavigate } from "react-router-dom";
import { Loginuser } from "../api/api";



const Login = () => {
    const navigate = useNavigate();
    const [state, setState] = useState<string>("");
    const [state2, setstate2] = useState<string>("");


    const Handlesubmit = (e: any) => {
        e.preventDefault();

        Loginuser({ email: state, password: state2 }).then((res) => {
            console.log("this is acc", res)
        }).then(() => {
            navigate("/dash")
        })
    }

    return (
        <div className=" w-full h-[94vh] flex flex-col justify-center items-center ">
            <div className="mb-10 text-center flex items-center w-full flex-col">
                <div className="mb-5 w-20 h-20 rounded-full border flex justify-center items-center font-bold text-blue-600 text-[30px]">
                    study
                </div>
                <div className="text-[26px] font-bold mb-3">login your Account</div>
                <div className="text-[14px] -mt-4 ">
                    login to your study account
                </div>
            </div>

            <form
                className="rounded-md bg-white min-h-[300px] w-[80%] md:w-[500px] border p-4"

            >
                <Input
                    placeholder="Email"
                    className="w-[97%]"
                    type="email"
                    required
                    value={state}
                    onChange={(e: any) => {
                        setState(e.target.value);
                    }}
                />
                <Input
                    placeholder="password"
                    className="w-[97%]"
                    type="email"
                    required
                    value={state2}
                    onChange={(e: any) => {
                        setstate2(e.target.value);
                    }}
                />

                <div>
                    <Button
                        name={"login"}
                        className="w-[97%] bg-blue-900 text-white h-14 hover:bg-blue-800 transition-all duration-300"
                        onClick={Handlesubmit}
                    />

                </div>
                <div className="mt-10 mb-0 ml-2 text-[13px] font-medium ">
                    Sign up with social network
                </div>
            </form>s
        </div>
    );
};

export default Login;
