'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
import { Button } from '../../ui/button'
import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/./public/logo.png';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Modules', href: '#modules' },
    { label: 'Pricing', href: '#pricing' },
    //   { label: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay for backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black backdrop-blur-lg z-40"
            onClick={onClose} // Close when clicking the overlay
          />

          {/* Menu container */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-80 bg-gray-100/95 backdrop-blur-xl border-l border-primary/20 shadow-2xl z-50"
          >
            <div className="p-6">
              {/* Header with close button */}
              <div className="flex justify-between items-center mb-8">
                <Image
                  src={Logo}
                  alt="Logo"
                  className='w-60'
                />

                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500"
                >
                  {/* Add logo or branding here */}
                </motion.span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose} // Close the menu when clicking the close button
                  className="hover:bg-primary/10 cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Navigation links */}
              <nav className="space-y-2">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    custom={i}
                    variants={itemVariants}
                    className="block text-lg font-medium px-4 py-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={onClose} // Close the menu when clicking any menu item
                  >
                    {item.label}
                  </motion.a>
                ))}

                {/* Additional button */}
                <motion.div
                  custom={menuItems.length + 1}
                  variants={itemVariants}
                  className="pt-4"
                >
                  <Link href="/login">
                    <Button variant="glow" className="w-full group">
                      <span>Get Started</span>
                      <Sparkles className="w-4 h-4 ml-2 group-hover:animate-pulse" />
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function MobileMenuContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle Button */}
      <Button
        onClick={toggleMenu}
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={toggleMenu} />
    </div>
  );
}
