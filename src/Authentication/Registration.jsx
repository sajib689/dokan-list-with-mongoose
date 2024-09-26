

const Registration = () => {
    return (
        <form className="mt-12 mb-12 max-w-4xl container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                <label htmlFor="name" className="block font-semibold text-gray-600 mb-2">Name</label>
                <input className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="name" id="" placeholder="Enter Your Name" />
                </div>
                <div>
                <label htmlFor="email" className="block font-semibold text-gray-600 mb-2">Email</label>
                <input className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" name="email" id="" placeholder="Enter Your Email" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3">
                <div>
                <label htmlFor="image" className="block font-semibold text-gray-600 mb-2">Image</label>
                <input type="file" className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"  />
                </div>
                <div>
                <label htmlFor="password" className="block font-semibold text-gray-600 mb-2">Password</label>
                <input className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" name="email" id="" placeholder="Enter Your Password" />
                </div>
            </div>
            
        </form>
    );
};

export default Registration;