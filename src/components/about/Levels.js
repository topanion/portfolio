import { StretchIn } from "../animation/StretchIn";

const skills = [
  { title: "CSS", percentage: "w-[80%]", color: "bg-blue-950" },
  { title: "HTML", percentage: "w-[90%]", color: "bg-blue-950/90" },
  { title: "React.js", percentage: "w-[80%]", color: "bg-blue-950/80" },
  { title: "Next.js", percentage: "w-[87%]", color: "bg-blue-950/70" },
  { title: "Javascript", percentage: "w-[100%]", color: "bg-blue-950/60" },
  { title: "TypeScript", percentage: "w-[85%]", color: "bg-blue-950/50" },
  { title: "Tailwind.css", percentage: "w-[95%]", color: "bg-blue-950/40" },
  { title: "SEO", percentage: "w-[87%]", color: "bg-blue-950/30" },
];

function Level({ title, percentage, color }) {
  return (
    <div className="w-full flex flex-row">
      <div className=" bg-slate-500  text-white p-1 text-sm text-center w-[30%]">
        {title}
      </div>
      <div className="w-[70%]">
        <div className={`${percentage} h-full`}>
          <StretchIn>
            <div className={`z-10  ${color} w-full h-full `}></div>
          </StretchIn>
        </div>
      </div>
    </div>
  );
}

export default function Levels() {
  return (
    <div className="flex flex-col gap-1">
      {skills.map((e, i) => {
        return <Level key={"skill " + e.title} {...e} />;
      })}
    </div>
  );
}
