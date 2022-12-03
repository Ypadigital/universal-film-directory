import React from "react";

export default function CloseIcon({ className }) {
  return (
    <div>
      <svg
        className={className}
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1120_11127)">
          <path
            d="M1.19922 1.2002L10.567 10.568"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.19922 10.5679L10.567 1.2002"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1120_11127">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
