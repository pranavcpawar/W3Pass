import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ConnectWallet from "./ConnectWallet";
import { menu, search } from "../assets";

const address = "0xasw12sdsd";

const Navbar = () => {
	const navigate = useNavigate();
	const [isActive, setIsActive] = useState('dashboard');
	const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w[458px] py-2 pl-4 pr-2 h-[52px] bg-[#121212] rounded-[100px]">
				<input type="text" placeholder="search for passwords here..." className="flex w-full font-epilogue font-normal tex-[14px] placeholder:text-[#4b5264] bg-transparent text-white outline-none"/>
				<div className="w-[72px] h-full rounded-[20px] bg-[#d22c69] flex justify-center items-center cursor-pointer">
					<img src={search} alt="search" className="w-[20px] h-[20px] object-contain"/>
				</div>

			</div>
			<div className="sm:flex hidden flex-row justify-end gap-4">
				{/* <ConnectWallet 
					btntype="button" 
					title={address ? address : "Connect"}
					styles={address ? 'bd-[#1dc071]': '[#d42b69]'}
					handleClick={() => {
						if(address) navigate('password')
						else 'connect()'
					}}
				/> */}
			</div>
    </div>
  );
};

export default Navbar;