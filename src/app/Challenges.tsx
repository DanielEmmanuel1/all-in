import Image from "next/image";
import Boy from "../../public/assets/boy.png";
const Challenges = () => {
    return (
        <div>
            <p className="text-lg font-bold w-[300px] md:w-full py-2 leading-tight md:text-[30px] md:max-w-[400px]">Challenges Faced by Businesses Without All-in</p>
            <div className="md:flex md:justify-between md:items-center">
                <div className="flex flex-col items-center md:block">
                    <Image className="md:w-[600px]" src={Boy} alt="Man" width={300} height={200} />
                </div>
                <div>
                    <div>
                        <p className="text-lg font-bold py-4">Problems</p>
                        <div className="flex flex-col gap-3 px-3">
                            <div className="flex items-center gap-4 border-y py-4 border-gray-400/40">
                                <p className="bg-[#81F5F5] text-black w-fit font-semibold text-[2rem] px-2 py-1 rounded-lg">01</p>
                                <div>
                                    <p className="text-md font-bold">Lack of User-Friendly Interfaces</p>
                                    <p className="text-[0.7rem] opacity-80">Complex and confusing systems frustrate employees and customers, making work harder and services less appealing.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 border-b py-4 border-gray-400/40">
                                <p className="bg-[#81F5F5] text-black w-fit font-semibold text-[2rem] px-2 py-1 rounded-lg">02</p>
                                <div>
                                    <p className="text-md font-bold">Operational Inefficiencies</p>
                                    <p className="text-[0.7rem] opacity-80">Frequent breakdowns slow down business activities, lower productivity, and hurt customer trust.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 border-b py-4 border-gray-400/40">
                                <p className="bg-[#81F5F5] text-black w-fit font-semibold text-[2rem] px-2 py-1 rounded-lg">03</p>
                                <div>
                                    <p className="text-md font-bold">Inaccurate Financial Tracking</p>
                                    <p className="text-[0.7rem] opacity-80">When technology can&apos;t track finances correctly, businesses face money mistakes and budgeting problems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Challenges;