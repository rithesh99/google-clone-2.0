import { GlobeIcon } from "@heroicons/react/solid"

function Footer() {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500 ">
            <div className="px-8 py-3">
                <p>India</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 px-8 py-3 grid-flow-row-dense">
                <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                    <p className="">About</p>
                    <p className="">Advertising</p>
                    <p className="">Bussiness</p>
                    <p className="">How Search Works</p>
                </div>
                <div className="flex justify-center space-x-8 md:ml-auto">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
