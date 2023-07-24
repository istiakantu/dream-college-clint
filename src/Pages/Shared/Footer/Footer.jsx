import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-black to-gray-800 text-white pt-12">
            <div className="container mx-auto px-4 py-8 sm:py-12">
                <div className="flex flex-col md:flex-row justify-around items-center">
                    <div className="lg:flex items-center">
                        {/* <img src='' alt="" className="mx-auto h-48 w-46" /> */}
                        <h2 className='text-4xl'>Dream <br /> College</h2>
                    </div>
                    <div className='mr-5 mt-5 lg:w-1/3'>
                        <div className='mb-3'>
                            <h3>Email : istakahmed636@gmail.com</h3>
                            <h3>Phone : +880 1*** ******</h3>
                        </div>
                        <div className="flex mt-4 gap-5 md:mt-0">
                            <a href="https://github.com/istiakantu" target='_blank' rel="noreferrer">
                                <FaGithub size={30}></FaGithub>
                            </a>
                            <a href="https://www.linkedin.com/in/istiak-ahmed-a35b89278/" target='_blank' rel="noreferrer">
                                <FaLinkedin size={30}></FaLinkedin>
                            </a>
                            <a href="https://www.facebook.com/ironmanaa" target='_blank' rel="noreferrer">
                                <FaFacebook size={30}></FaFacebook>
                            </a>
                        </div>
                    </div>
                </div>
                <h2 className='text-center text-xl font-bold mt-3'>Copyright 2023 © Istiak</h2>
            </div>
        </footer>
    );
};

export default Footer;