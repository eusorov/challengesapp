import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  primary?: boolean;
  outline?: boolean;
  light?: boolean;
}

function Button({ children, href, primary, outline, light }: ButtonProps) {
  const baseClasses =
    "py-3 px-8 rounded-lg font-semibold shadow-lg hover:shadow-xl transition duration-300";

  let variantClasses = "";
  if (primary) {
    variantClasses = "bg-blue-500 hover:bg-blue-600 text-white";
  } else if (outline) {
    variantClasses =
      "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white";
  } else if (light) {
    variantClasses = "bg-white text-blue-500 hover:bg-blue-100";
  }

  return href ? (
    <a href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </a>
  ) : (
    <button className={`${baseClasses} ${variantClasses}`}>{children}</button>
  );
}

export default Button;
