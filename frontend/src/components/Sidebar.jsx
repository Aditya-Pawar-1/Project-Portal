import React from 'react';
import { FaHome, FaInfoCircle, FaEnvelope, FaFileAlt, FaProjectDiagram, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-[20vw]  h-screen bg-purple-600 text-white p-6">
            <h1 className="text-3xl font-bold mb-10">Project Portal</h1>
            <nav className="space-y-8 pl-4 pt-5">

                <NavLink
                    to="/dashboard"
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
                    to="/about"
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
                    to="/contact"
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
            </nav>
            <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                <FaSignOutAlt />
                <a href="#" className="text-lg">Log Out</a>
            </div>
        </div >
    );
};

export default Sidebar;
