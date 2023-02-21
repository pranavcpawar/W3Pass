import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ConnectWallet from "./ConnectWallet";
import { menu, logo, search } from "../assets";

import { navlinks } from "../constants";

const address = "0xasw12sdsd";

const Navbar = () => {
	const navigate = useNavigate();
	const [isActive, setIsActive] = useState('dashboard');
	const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#121212] rounded-[100px]">
				<input type="text" placeholder="search for passwords here..." className="flex w-full font-epilogue font-normal tex-[14px] placeholder:text-[#4b5264] bg-transparent text-white outline-none"/>
				<div className="w-[72px] h-full rounded-[20px] bg-[rgba(212,43,105,0.3)] flex justify-center items-center cursor-pointer">
					<img src={search} alt="search" className="w-[20px] h-[20px] object-contain"/>
				</div>

			</div>
			<div className="sm:flex hidden flex-row justify-end gap-4">
				<ConnectWallet 
					btnType="button" 
					title={address ? "address" : "Connect"}
					styles={address ? 'bg-[rgba(212,43,105,0.3)] text-[#000]': 'bg-[#d42b69]'}
					handleClick={() => {
						if(address) navigate('password')
						else 'connect()'
					}}
				/>
			</div>
			{/* small screen navigation */}
			<div className="sm:hidden flex justify-between items-center relative">
				<div className="w-[40px] h-[40px] rounded-[10px] bg-[rgba(212,43,105,0.3)] flex justify-center items-center cursor-pointer">
					<img src={logo} alt="logo" />
				</div>
				<img src={menu} alt="menu" className="w-[35px] h-[35px] object-contain cursor-pointer" onClick={() => setToggleMenu(!toggleMenu)}/>
				<div className={`absolute top-[50px] right-0 left-0 bg-black z-10 text-[#d42b69] shadow-secondary py-4 ${!toggleMenu ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
					<ul className="mb-4">
						{navlinks.map((link) => (
							<li 
								key={link.name} 
								className={`flex p-4 ${isActive === link.name && 'bg-[rgba(212,43,105,0.3)]' }`} 
								onClick={() => {
									setIsActive(link.name);
									setToggleMenu(false);
									navigate(link.link);
								}}
							>
								<img 
									src={link.imgUrl} 
									alt={link.name}
									className={`w-[24px] h-[24px] object-contain ${isActive === link.name ? 'grayscale-0' : 'grayscale'}`}
								/>
                <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#d42b69]' : 'text-[#808191]'}`}>
									{link.name}
								</p>
							</li>
						))}
					</ul>
					<div className="flex flex-col mx-4 w-[50%]items-center">
					<ConnectWallet 
					btnType="button" 
					title={address ? "address" : "Connect"}
					styles={address ? 'bg-[rgba(212,43,105,0.3)] text-[#000]': 'bg-[#d42b69]'}
					handleClick={() => {
						if(address) navigate('password')
						else 'connect()'
					}}
					/>
					</div>

				</div>
			</div>
    </div>
  );
};

export default Navbar;