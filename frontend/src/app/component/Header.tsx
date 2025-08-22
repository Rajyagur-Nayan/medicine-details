"use client";
import { Button } from "@/components/ui/button";
import { Menu, User, Tablet, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { LoginDialog } from "./auth/Login";
import { RegisterDialog } from "./auth/Register";
import { useAuth } from "./auth/AuthContext";
import { ProfileDialog } from "./Profile";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="flex h-16 items-center justify-between px-4 lg:px-8 border-b dark:bg-gray-900 dark:text-white text-black border-gray-200 bg-white">
      {/* Logo with animation */}
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Tablet className="h-6 w-6 text-blue-600" />
        <span className="text-xl font-bold text-blue-700">MediLink</span>
      </motion.div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:flex items-center gap-6">
        {["Home", "Scan Now", "Help"].map((item, idx) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={
                item === "Home"
                  ? "/"
                  : item === "Scan Now"
                  ? "scan-medicineDialog"
                  : "help"
              }
              className="text-gray-600 dark:text-white hover:text-blue-600 text-sm font-medium transition-colors"
            >
              {item}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Search Input and User/Menu Icons */}
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <Button onClick={logout} className="bg-red-600 hover:bg-red-700">
            Logout
          </Button>
        ) : (
          <>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsLoginDialogOpen(true)}
            >
              Login
            </Button>
            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={() => setIsRegisterDialogOpen(true)}
            >
              Register
            </Button>
          </>
        )}
        {isLoginDialogOpen && (
          <LoginDialog onClose={() => setIsLoginDialogOpen(false)} />
        )}
        {isRegisterDialogOpen && (
          <RegisterDialog onClose={() => setIsRegisterDialogOpen(false)} />
        )}

        {/* Profile Button */}
        <Button
          variant="ghost"
          size="icon"
          className="hidden md:flex cursor-pointer"
          onClick={() => setIsProfileDialogOpen(true)}
        >
          <ProfileDialog
            isOpen={isProfileDialogOpen}
            onClose={() => setIsProfileDialogOpen(false)}
          />
          <span className="sr-only">User</span>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-gray-600 cursor-pointer" />
          ) : (
            <Menu className="h-5 w-5 text-gray-600 cursor-pointer" />
          )}
          <span className="sr-only">
            {isMobileMenuOpen ? "Close menu" : "Toggle menu"}
          </span>
        </Button>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-md md:hidden z-50"
          >
            <nav className="flex flex-col items-center py-4 gap-4">
              <Link
                href="/"
                className="text-gray-700 dark:text-white hover:text-blue-600 text-base font-medium transition-colors"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                href="scan-medicineDialog"
                className="text-blue-600 font-semibold text-base"
                onClick={toggleMobileMenu}
              >
                Scan Now
              </Link>
              <Link
                href="help"
                className="text-gray-700 dark:text-white hover:text-blue-600 text-base font-medium transition-colors"
                onClick={toggleMobileMenu}
              >
                Help
              </Link>

              <Button
                variant="ghost"
                className="w-full text-gray-700 dark:text-white hover:text-blue-600"
                onClick={() => {
                  setIsProfileDialogOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                <User className="h-5 w-5 mr-2" />
                User Profile
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
