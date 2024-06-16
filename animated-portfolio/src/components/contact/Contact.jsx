import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaMedium, FaBlogger, FaTwitter, FaInstagram } from "react-icons/fa";
import "./contact.scss";

// Define your motion variants
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

// Styled component for icon with hover effect
const StyledIcon = styled(motion.a)`
  transition: transform 0.3s ease; /* Adding transition for smooth animation */
  cursor: pointer; /* Ensure the cursor changes to pointer on hover */
  color: rgb(162, 255, 0); /* Icon color */
  font-size: 2rem; /* Icon size */
  position: relative; /* Ensure relative positioning for tooltips */

  &:hover {
    transform: scale(1.2); /* Enlarge the icon on hover */
  }

  /* Tooltip styling */
  &:hover::before {
    content: attr(title);
    position: absolute;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    font-size: 2rem;
    top: 100%; /* Position below the icon */
    left: 50%; /* Centered horizontally */
    transform: translateX(-50%);
    white-space: nowrap;
    opacity: 0; /* Hidden by default */
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::before {
    opacity: 1; /* Show tooltip on hover */
  }
`;

// Styled component for footer
const StyledFooter = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  padding: 1rem;
`;

const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      animate="animate"
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <motion.h1 variants={variants}>Get&nbsp;&nbsp;&nbsp;in&nbsp;&nbsp;&nbsp;touch</motion.h1>
      <motion.div className="icons" variants={variants}>
        {/* Wrap each icon with the StyledIcon component */}
        <StyledIcon href="mailto:hello@react.dev" className="icon" variants={variants} title="221003003cse@gmail.com">
          <FaEnvelope />
        </StyledIcon>
        <StyledIcon href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="LinkedIn">
          <FaLinkedin />
        </StyledIcon>
        <StyledIcon href="https://medium.com" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="Medium">
          <FaMedium />
        </StyledIcon>
        <StyledIcon href="https://www.blogger.com" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="Blogger">
          <FaBlogger />
        </StyledIcon>
        <StyledIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="Twitter">
          <FaTwitter />
        </StyledIcon>
        <StyledIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon" variants={variants} title="Instagram">
          <FaInstagram />
        </StyledIcon>
      </motion.div>
      <StyledFooter variants={variants}>
        <p>&copy; {new Date().getFullYear()} All rights reserved. Made with ⚡ by a dragon.</p>
      </StyledFooter>
    </motion.div>
  );
};

export default Contact;
