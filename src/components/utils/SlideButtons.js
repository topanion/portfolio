export default function SlideButtons({ onSlide }) {
  return (
    <div className="absolute top-0 left-0 h-full w-full z-10 flex justify-between">
      <div
        className="left-0 w-[10%] flex h-full bg-black/30 hover:cursor-pointer"
        onClick={() => onSlide(-1)}
      >
        <svg width="24" height="24" className="m-auto">
          <path
            d="M5 12l13 7v-14z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        onClick={() => onSlide(1)}
        className="right-0 w-[10%] flex h-full bg-black/30 hover:cursor-pointer"
      >
        <svg width="24" height="24" className="m-auto">
          <path
            d="M19 12L6 5v14z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
