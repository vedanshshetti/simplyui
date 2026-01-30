
type SeparatorProps={
    length: "50" | "75" | "80" | "90";
    className?: string
}

export default function Separator({length, className}: SeparatorProps){
    const safeC=className == undefined || className == null || className == "" ? "" : className;
    return <div className={"bg-slate-200 my-2 dark:bg-slate-900 h-1.5 rounded-md "+`w-[${length}] `+safeC}></div>
      
}