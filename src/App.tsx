import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Home, Leaf, Bird, Fish, Apple, Carrot, GraduationCap, Calculator, LogOut, CarTaxiFront, Flower2Icon } from 'lucide-react';

import HomePage from './pages/HomePage';
import AnimalsPage from './pages/AnimalsPage';
import AquaticPage from './pages/AquaticPage';
import BirdsPage from './pages/BirdsPage';
import FruitsPage from './pages/FruitsPage';
import VegetablesPage from './pages/VegetablesPage';
import FlowerPage from './pages/FlowersPage';
import VehiclesPage from './pages/VehiclesPage';
import MathPage from './pages/MathPage';
import TestingPage from './pages/TestingPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ResultsPage from './pages/ResultsPage';

import image from "./boy.svg";

// Define theme colors for each navigation item
const navColors = {
  home: 'text-blue-600',
  animals: 'text-green-600',
  aquatic: 'text-cyan-600',
  birds: 'text-yellow-600',
  fruits: 'text-orange-600',
  vegetables: 'text-emerald-600',
  flowers: 'text-pink-600',
  vehicles: 'text-purple-600',
  math: 'text-indigo-600',
  tests: 'text-red-600',
};

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { currentUser } = useAuth();
  return currentUser ? <>{children}</> : <Navigate to="/login" />;
}

function AppRoutes() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* App Logo and Name */}
            <div className="flex items-center pr-1 border-r">
              <NavLink to="/" className="flex items-center">
                {/* <BookOpen className="w-6 h-6 text-blue-600" /> */}
                <img src={image} alt="Kid Learning Logo" />
                <span className="ml-1 text-base font-semibold text-gray-900">KL</span>
              </NavLink>
            </div>

            <div className="flex space-x-8 overflow-x-auto ml-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `flex items-center whitespace-nowrap ${isActive ? navColors.home : 'hover:' + navColors.home}`
                }
              >
                {({ isActive }) => (
                  <>
                    <Home className={`w-5 h-5 mr-2 ${isActive ? navColors.home : ''}`} />
                    <span>Home</span>
                  </>
                )}
              </NavLink>
              <NavLink 
                to="/animals" 
                className={({ isActive }) => 
                  `flex items-center whitespace-nowrap ${isActive ? navColors.animals : 'hover:' + navColors.animals}`
                }
              >
                {({ isActive }) => (
                  <>
                    <Leaf className={`w-5 h-5 mr-2 ${isActive ? navColors.animals : ''}`} />
                    <span>Animals</span>
                  </>
                )}
              </NavLink>
              <NavLink 
                to="/aquatic" 
                className={({ isActive }) => 
                  `flex items-center whitespace-nowrap ${isActive ? navColors.aquatic : 'hover:' + navColors.aquatic}`
                }
              >
                {({ isActive }) => (
                  <>
                    <Fish className={`w-5 h-5 mr-2 ${isActive ? navColors.aquatic : ''}`} />
                    <span>Aquatic</span>
                  </>
                )}
              </NavLink>
              <NavLink 
                to="/birds" 
                className={({ isActive }) => 
                  `flex items-center whitespace-nowrap ${isActive ? navColors.birds : 'hover:' + navColors.birds}`
                }
              >
                {({ isActive }) => (
                  <>
                    <Bird className={`w-5 h-5 mr-2 ${isActive ? navColors.birds : ''}`} />
                    <span>Birds</span>
                  </>
                )}
              </NavLink>
              <NavLink 
                to="/fruits" 
                className={({ isActive }) => 
                  `flex items-center whitespace-nowrap ${isActive ? navColors.fruits : 'hover:' + navColors.fruits}`
                }
              >
                {({ isActive }) => (
                  <>
                    <Apple className={`w-5 h-5 mr-2 ${isActive ? navColors.fruits : ''}`} />
                    <span>Fruits</span>
                  </>
                )}
              </NavLink>
              <NavLink 
                to="/vegetables" 
                className={({ isActive }) => 
                  `flex items-center whitespace-nowrap ${isActive ? navColors.vegetables : 'hover:' + navColors.vegetables}`
                }
              >
                {({ isActive }) => (
                  <>
                    <Carrot className={`w-5 h-5 mr-2 ${isActive ? navColors.vegetables : ''}`} />
                    <span>Vegetables</span>
                  </>
                )}
              </NavLink>
              <NavLink 
                to="/flowers" 
                className={({ isActive }) => 
                  `flex items-center whitespace-nowrap ${isActive ? navColors.flowers : 'hover:' + navColors.flowers}`
                }
              >
                {({ isActive }) => (
                  <>
                    <Flower2Icon className={`w-5 h-5 mr-2 ${isActive ? navColors.flowers : ''}`} />
                    <span>Flowers</span>
                  </>
                )}
              </NavLink>
              <NavLink 
                to="/vehicles" 
                className={({ isActive }) => 
                  `flex items-center whitespace-nowrap ${isActive ? navColors.vehicles : 'hover:' + navColors.vehicles}`
                }
              >
                {({ isActive }) => (
                  <>
                    <CarTaxiFront className={`w-5 h-5 mr-2 ${isActive ? navColors.vehicles : ''}`} />
                    <span>Vehicle</span>
                  </>
                )}
              </NavLink>
              <NavLink 
                to="/math" 
                className={({ isActive }) => 
                  `flex items-center whitespace-nowrap ${isActive ? navColors.math : 'hover:' + navColors.math}`
                }
              >
                {({ isActive }) => (
                  <>
                    <Calculator className={`w-5 h-5 mr-2 ${isActive ? navColors.math : ''}`} />
                    <span>Math</span>
                  </>
                )}
              </NavLink>
              {currentUser && (
                <NavLink 
                  to="/testing" 
                  className={({ isActive }) => 
                    `flex items-center whitespace-nowrap ${isActive ? navColors.tests : 'hover:' + navColors.tests}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <GraduationCap className={`w-5 h-5 mr-2 ${isActive ? navColors.tests : ''}`} />
                      <span>Tests</span>
                    </>
                  )}
                </NavLink>
              )}
            </div>
            <div className="flex items-center space-x-4 whitespace-nowrap">
              {currentUser ? (
                <button
                  onClick={logout}
                  className="flex items-center text-red-600 hover:text-red-800"
                >
                  <LogOut className="w-5 h-5 mr-2" />
                  <span>Logout</span>
                </button>
              ) : (
                <>
                  <NavLink 
                    to="/login" 
                    className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'text-blue-600 hover:text-blue-800'}
                  >
                    Login
                  </NavLink>
                  {/* <NavLink
                    to="/signup"
                    className={({ isActive }) => 
                      isActive 
                        ? 'bg-blue-700 text-white px-4 py-2 rounded-lg'
                        : 'bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
                    }
                  >
                    Sign Up
                  </NavLink> */}
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Content with padding to account for fixed navbar */}
      <div className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/animals" element={<AnimalsPage />} />
          <Route path="/aquatic" element={<AquaticPage />} />
          <Route path="/birds" element={<BirdsPage />} />
          <Route path="/fruits" element={<FruitsPage />} />
          <Route path="/vegetables" element={<VegetablesPage />} />
          <Route path="/flowers" element={<FlowerPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/math" element={<MathPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/results" element={<PrivateRoute> <ResultsPage /> </PrivateRoute>} />
          <Route
            path="/testing"
            element={
              <PrivateRoute>
                <TestingPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;