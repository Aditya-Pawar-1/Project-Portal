import React from 'react';
import { FaHome, FaInfoCircle, FaEnvelope, FaFileAlt, FaProjectDiagram, FaSignOutAlt } from 'react-icons/fa';
import { HiUserAdd } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="w-[20vw]  min-h-screen max-h-full bg-purple-600 text-white p-6">
            <h1 className="text-3xl font-bold mb-10">Project Portal</h1>
            <nav className="space-y-8 pl-4 pt-5">

                <NavLink
                    to={`/dashboard/${user.role + '/' + user.id}`}
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "black" : "white",
                            viewTransitionName: isTransitioning ? "slide" : "",
                        };
                    }}
                    className="flex items-center justify-start space-x-2"
                >
                    <FaHome />
                    <span>Home</span>
                </NavLink>

                <NavLink
                    to={`/dashboard/${user.role + '/' + user.id}/about`}
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "black" : "white",
                            viewTransitionName: isTransitioning ? "slide" : "",
                        };
                    }}
                    className="flex items-center justify-start  space-x-2"
                >
                    <FaInfoCircle />
                    <span>About</span>
                </NavLink>

                <NavLink
                   to={`/dashboard/${user.role + '/' + user.id}/contact`}
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "black" : "white",
                            viewTransitionName: isTransitioning ? "slide" : "",
                        };
                    }}
                    className="flex items-center justify-start space-x-2"
                >
                    <FaEnvelope />
                    <span>Contact</span>
                </NavLink>

                {(user.role !== "admin") ?
                    <>
                        <NavLink
                            to="/submissions"
                            style={({ isActive, isPending, isTransitioning }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isPending ? "black" : "white",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }}
                            className="flex items-center justify-start space-x-2"
                        >
                            <FaFileAlt />
                            <span>Submissions</span>
                        </NavLink>
                        <NavLink
                            to="/project"
                            style={({ isActive, isPending, isTransitioning }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isPending ? "black" : "white",
                                    viewTransitionName: isTransitioning ? "slide" : "",
                                };
                            }}
                            className="flex items-center justify-start space-x-2"
                        >
                            <FaProjectDiagram />
                            <span>Project</span>
                        </NavLink>
                    </>
                    :
                    <NavLink
                        to={`/dashboard/admin/${user.id}/addteacher`}
                        style={({ isActive, isPending, isTransitioning }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "black" : "white",
                                viewTransitionName: isTransitioning ? "slide" : "",
                            };
                        }}
                        className="flex items-center justify-start space-x-2"
                    >
                        <HiUserAdd />
                        <span>Add Teacher</span>
                    </NavLink>
                }



            </nav>
            <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                <FaSignOutAlt />
                <a href="#" className="text-lg">Log Out</a>
            </div>
        </div >
    );
};

export default Sidebar;
