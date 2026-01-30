import CodeBlock from "../components/codeblock";
import Separator from "../components/separator";


export default function Page(){
    return <div className="text-center text-black bg-zinc-50 dark:bg-black dark:text-white gap-5 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl text-center font-mono">Welcome to SimplyUI</h1>
        <p>From  
        <CodeBlock>codeblocks</CodeBlock>  to  <br/> <br/> <Separator length="75"/> <br/>
        Separators, you'll find almost anything here!
       </p>
       <Separator length="80"></Separator>
       <section>

       </section>
    </div>
}