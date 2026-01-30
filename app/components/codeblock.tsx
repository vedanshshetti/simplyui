import * as React from "react";

export default function CodeBlock({children, className}: {children: React.ReactNode, className?: string}){
    return  <span className={"text-center font-semibold font-mono bg-slate-100 dark:bg-slate-800 p-1.5 rounded-md "+className}>{children}/</span>
       
}