interface TwitterIconProps {
  size: number
}

export const TwitterIcon = ({size = 20}: TwitterIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 39 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 36H3.41024L16.6762 21.8658L27.3948 36H39L23.0953 15.027L37.1992 0H33.789L21.5716 13.0173L11.7002 0H0.095082L15.1526 19.8561L0 36V36ZM33.9843 33.5223H28.6528L5.11011 2.47754H10.4415L33.9843 33.5223V33.5223Z"
        fill="#1BA986"
      />
    </svg>
  );
};
