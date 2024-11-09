const Services = () => {
    return (
        <div className="py-10">
            <div className="flex items-center gap-3 pb-4">
                <div className="bg-[#BFACEE] w-2 h-2 rounded-full"></div>
                <p className="font-bold text-xl">Our Services</p>
            </div>
            <p>We bring our passion for good design to brave brands and deliver something you can shout about.</p>

            <div>
                <p className="text-lg font-bold py-4">Problems</p>

                <div className="flex flex-col gap-1 px-3">
                    <div className="flex items-center gap-4 border-t py-2 border-gray-400/40">
                        <p className="w-fit font-semibold text-[1.2rem] px-2 py-1 rounded-lg">01</p>
                        <div>
                            <p className="text-md">Brand Identity Design</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1 px-3">
                    <div className="flex items-center gap-4 border-t py-2 border-gray-400/40">
                        <p className="w-fit font-semibold text-[1.2rem] px-2 py-1 rounded-lg">02</p>
                        <div>
                            <p className="text-md">User Interface Design</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1 px-3">
                    <div className="flex items-center gap-4 border-t py-2 border-gray-400/40">
                        <p className="w-fit font-semibold text-[1.2rem] px-2 py-1 rounded-lg">03</p>
                        <div>
                            <p className="text-md">Website Development</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1 px-3">
                    <div className="flex items-center gap-4 border-t py-2 border-gray-400/40">
                        <p className="w-fit font-semibold text-[1.2rem] px-2 py-1 rounded-lg">04</p>
                        <div>
                            <p className="text-md">App Development</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1 px-3">
                    <div className="flex items-center gap-4 border-y py-2 border-gray-400/40">
                        <p className="w-fit font-semibold text-[1.2rem] px-2 py-1 rounded-lg">05</p>
                        <div>
                            <p className="text-md">Business & Data Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;