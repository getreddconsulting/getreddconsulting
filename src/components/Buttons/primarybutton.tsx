import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import "../../styles/global.css";

interface PrimaryButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  to?: string; // for internal routing
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  className = "",
  icon,
  children,
  href,
  target,
  rel,
  to,
}) => {
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children ?? text}
    </>
  );

  const buttonContent = (
    <span className={`primary-button ${className}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {content}
    </span>
  );

  // ✅ Support internal navigation via Link
  if (to) {
    return <Link to={to}>{buttonContent}</Link>;
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel}>
        {buttonContent}
      </a>
    );
  }

  return <button onClick={onClick}>{buttonContent}</button>;
};

export default PrimaryButton;
