import * as React from "react";

function SvgAnyConvcomPandas1(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="50px" height="40px" viewBox="0 0 500 666"  {...props}>
      {/* <path d="M0 0v667h500V0H0z"  fill='#ffffff'/> */}
      <path
        d="M357 71v396h58V71h-58m-180 31v120h58V102h-58m-92 98v396h58V200H85m182 0v120h58V200h-58z"
        fill="#ffffff"
      />
      <path d="M177 255v58h58v-58h-58z" fill="#ffca00" />
      <path d="M177 346v120h58V346h-58z" fill="#ffffff" />
      <path d="M267 353v57h58v-57h-58z" fill="#e70488" />
      <path d="M267 444v120h58V444h-58z" fill="#ffffff" />
    </svg>
  );
}

export default SvgAnyConvcomPandas1;
