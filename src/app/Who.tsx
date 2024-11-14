const Who = () => {
    return (
        <div className="flex gap-3 items-center py-16">
            <div className="flex flex-col justify-between lg:flex-row gap-3 w-full">
                <div className="flex items-center gap-3">
                    <div className="bg-[#BFACEE] w-2 h-2 rounded-full"></div>
                    <p className="font-bold text-xl">Who We Are</p>
                </div>
                <div className="flex flex-col gap-3 lg:max-w-[60vw]">
                    <p className="text-md leading-[30px]"><span className="font-bold">Problem:</span>Over forty million micro, small, and medium enterprises (MSMEs) in Nigeria face significant challenges, with 20-30% shutting down each year due to high operational costs and unreliable technology. Deficient technology complicates financial tracking, logistics management, and user interactions.</p>
                    <p className="text-md leading-[30px]"><span className="font-bold">Solution:</span> We created All-in to address these challenges. All-in provides businesses in Nigeria and beyond with a comprehensive technology solution to keep their operations running smoothly and facilitate growth. Our platform offers the building blocks to help businesses automate their processes, enabling them to thrive in the digital age. By leveraging technology, All-in brings customers closer to businesses and allows business owners to effectively manage their operations from anywhere in the world. Go all-in today.</p>
                </div>
            </div>
        </div>
    );
}

export default Who;