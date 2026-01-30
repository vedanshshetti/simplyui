import * as React from "react";

export default function CodeBlock({children, className}: {children: React.ReactNode, className?: string}){
    return  <pre className={"text-center m-2 font-semibold font-mono bg-slate-100 dark:bg-slate-800 p-1.5 rounded-md "+className}>{children}</pre>
       
}