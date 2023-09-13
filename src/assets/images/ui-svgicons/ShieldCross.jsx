import React from "react";

const ShieldCross = ({className}) => {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.3636 3L5 6.27273V11.1818C5 15.7227 8.14182 19.9691 12.3636 21C16.5855 19.9691 19.7273 15.7227 19.7273 11.1818V6.27273L12.3636 3ZM15.5355 14.1213L14.1213 15.5355L12 13.4142L9.87867 15.5355L8.46446 14.1213L10.5858 12L8.46446 9.87868L9.87867 8.46447L12 10.5858L14.1213 8.46447L15.5355 9.87868L13.4142 12L15.5355 14.1213Z"
          fill="#ffdbd3"
        ></path>{" "}
      </g>
    </svg>
  );
};

export default ShieldCross;
