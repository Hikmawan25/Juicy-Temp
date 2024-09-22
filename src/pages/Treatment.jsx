import React from "react";
import TreatmentBanner from '../assets/images/treatmenbanner.png'

const Treatment = () => {
    return (
        <div className="relative">
            
            <img src={TreatmentBanner} className='w-full h-full'/>

            <div className='absolute top-11 left-12 lg:top-24 lg:left-32'>
                <h1 className='font-semibold text-lg lg:text-[32px] font-montserrat text-charcoal lg:mb-1'>Putih Signature Facial</h1>
                <p className='text-[8px] leading-none font-normal font-montserrat lg:text-sm text-charcoal'>Glowing terus dengan Facial Treatment</p>
            </div>

            <div className="px-12 py-8 lg:py-12 lg:px-32">
                <h1 className='text-center mb-4 lg:mb-8 font-semibold text-lg lg:text-[32px] font-montserrat text-charcoal'>Pilih Treatment</h1>

                <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
                    
                    <div className="border border-black rounded-3xl lg:px-8 lg:py-4">
                        <h1 className="font-semibold lg:text-2xl lg:mb-3 font-montserrat text-charcoal">Putih Skin Rejuve Facial</h1>

                        <div className="flex flex-row items-center">

                            <div>
                                <p className="italic font-medium lg:text-sm font-montserrat text-charcoal">Essential</p>
                                <p className="overflow-hidden font-normal lg:h-16 lg:text-xs font-montserrat text-charcoal">Cleansing + Welcome Massage + Steamer + Ekskom + Ice Globe + Masker Peel Off + PDT + Sunscreen / Shooting Cr</p>
                                <hr className="w-64 h-px my-4 bg-black border-0"></hr>
                                <p className="font-semibold lg:text-sm font-montserrat text-charcoal">Bermanfaat untuk:</p>
                                <li className="font-normal lg:text-xs font-montserrat text-charcoal">Relaksasi</li>
                                <li className="font-normal lg:text-xs font-montserrat text-charcoal">Membersihkan komedo</li>
                                
                                <div className="mt-3 space-y-2">
                                    <button className="flex flex-col items-center justify-center w-40 h-12 py-2 rounded-full bg-btnprice focus:outline-none">
                                        <p className="font-montserrat text-white text-[13px] font-normal">
                                            Price Member
                                        </p>
                                        <p className="font-montserrat text-white text-[15px] font-semibold">
                                            349K
                                        </p>
                                    </button>
                                    
                                    <button className="flex flex-col items-center justify-center w-40 h-12 py-2 rounded-full bg-secondary focus:outline-none">
                                        <p className="font-montserrat text-charcoal text-[13px] font-normal">
                                            Price New Member
                                        </p>
                                        <p className="font-montserrat text-charcoal text-[15px] font-semibold">
                                            299K
                                        </p>
                                    </button>
                                </div>
                            </div>

                            <div class="h-[290px] bg-black w-[5px] mx-2"></div>

                            <div>
                                <p className="italic font-medium lg:text-sm font-montserrat text-charcoal">Medical</p>
                                <p className="overflow-hidden font-normal lg:h-16 lg:text-xs font-montserrat text-charcoal">Cleansing + Welcome Massage + Steamer + Ekskom + Ice Globe + Masker Peel Off + PDT + Enzym Peeling Brightening 0,5 cc+ Sunscreen / Shooting Cr</p>
                                <hr className="w-64 h-px my-4 bg-black border-0"></hr>
                                <p className="font-semibold lg:text-sm font-montserrat text-charcoal">Bermanfaat untuk:</p>
                                <li className="font-normal lg:text-xs font-montserrat text-charcoal">Relaksasi</li>
                                <li className="font-normal lg:text-xs font-montserrat text-charcoal">Membersihkan komedo</li>

                                <div className="mt-3 space-y-2">
                                    <button className="flex flex-col items-center justify-center w-40 h-12 py-2 rounded-full bg-btnprice focus:outline-none">
                                        <p className="font-montserrat text-white text-[13px] font-normal">
                                            Price Member
                                        </p>
                                        <p className="font-montserrat text-white text-[15px] font-semibold">
                                            449K
                                        </p>
                                    </button>
                                    
                                    <button className="flex flex-col items-center justify-center w-40 h-12 py-2 rounded-full bg-secondary focus:outline-none">
                                        <p className="font-montserrat text-charcoal text-[13px] font-normal">
                                            Price New Member
                                        </p>
                                        <p className="font-montserrat text-charcoal text-[15px] font-semibold">
                                            399K
                                        </p>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="bg-blue-300 lg:px-8 lg:py-4">2</div>
                </div>
            </div>
        </div>
    )
}

export default Treatment;
