import React from 'react'

function SkillCard({ skill, index }) {
  const colors = [
    {
      text: "text-prim-violet",
      hover: "hover:border-prim-violet",
      border: "border-prim-violet/30",
      dot: "bg-prim-violet",
      softBg: "bg-prim-violet/10",
      glow: "shadow-[0_0_20px_rgba(139,92,246,0.25)]"
    },
    {
      text: "text-seco-cyan",
      hover: "hover:border-seco-cyan",
      border: "border-seco-cyan/30",
      dot: "bg-seco-cyan",
      softBg: "bg-seco-cyan/10",
      glow: "shadow-[0_0_20px_rgba(6,182,212,0.25)]"
    }
  ];

  const colour = colors[index % colors.length];

  return (
    <div
      className={`
        p-6 rounded-2xl 
        bg-white/80 dark:bg-card/80 backdrop-blur-md
        border border-slate-200 dark:border-slate-800 
        ${colour.hover}
        transition-all duration-300
        hover:scale-[1.03] hover:shadow-xl
      `}
    >
      {/* Header */}
      <div className='flex items-center gap-4 mb-4'>
        
        {/* Icon */}
        <div className={`
          w-12 h-12 rounded-xl flex items-center justify-center 
          ${colour.softBg} border ${colour.border} ${colour.glow}
        `}>
          <div className={`w-3 h-3 ${colour.dot} rounded-full animate-pulse`}></div>
        </div>

        {/* Title */}
        <h3 className={`text-lg font-semibold ${colour.text}`}>
          {skill.title}
        </h3>
      </div>

      {/* Tech Stack */}
      <ul className="space-y-2 font-mono text-sm text-slate-700 dark:text-slate-300">
        {skill.techStack.map((tech, i) => (
          <li key={i} className="flex items-center">
            <span className={`w-2 h-2 rounded-full mr-3 ${colour.dot}`}></span>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;