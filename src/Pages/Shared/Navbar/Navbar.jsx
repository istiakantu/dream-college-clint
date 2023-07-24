import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";


const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const handelLogout = () => {
        logout()
            .then()
            .catch()
    }


    const navbar = <>
        <Link to='/'>Home</Link>
        <Link to='/'>Colleges</Link>
        <Link to='/'>Admission</Link>
        {user && <Link to='/'>My College</Link>}

    </>
    return (
        <div className="navbar  bg-opacity-50 max-w-screen-xl text-white bg-slate-700 rounded-lg p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-5">
                        {
                            navbar
                        }
                    </ul>
                </div>
                <div className="text-center">
                    <Link to='/'>
                    <h2 className='font-bold text-2xl'>Dream  <br />College</h2>
                    </Link>
                    
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {
                        navbar
                    }
                </ul>
            </div>
            <div className="navbar-end mr-2">
                {
                    user ?
                        <>
                            <button onClick={handelLogout}>Log Out</button>
                            <div className="avatar ml-5">
                                <div className="w-16 rounded-full">
                                    <img src={user ? user.photoURL : ''} title={user ? user.displayName : ''} alt="" />
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <Link to='/login'>Login</Link>
                            {/* <UserCircleIcon className='h-16 ml-5'></UserCircleIcon> */}
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;