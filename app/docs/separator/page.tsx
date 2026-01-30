import CodeBlock from "@/app/components/codeblock"
import Separator from "@/app/components/separator"

export default function SeparatorDocsPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">CodeBlock</h1>
        <p className="text-muted-foreground mt-2">
          A lightweight inline separator component for separating parts of a webpage.
          Supports light and dark mode automatically.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock className="block w-fit">
          import CodeBlock from "@/app/components/separator"
        </CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage</h2>

        <div className="space-y-2">
          <p>Basic example:</p>
          <Separator length="80"/>
        </div>

        <div className="space-y-2">
          <p>With length 90%:</p>
          <Separator length="90"/>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 font-medium">Prop</th>
              <th className="py-2 font-medium">Type</th>
              <th className="py-2 font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">length</td>
              <td className="py-2">"50" | "75" | "80" | "90"</td>
              <td className="py-2">The length (in % of parent's width).</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">className</td>
              <td className="py-2">string</td>
              <td className="py-2">Additional Tailwind classes.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Component</h2>

        <CodeBlock className="block whitespace-pre-wrap">
{`import * as React from "react";

export default function CodeBlock({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={
        "text-center font-semibold font-mono bg-slate-100 dark:bg-slate-800 p-1.5 rounded-md " +
        className
      }
    >
      {children}
    </span>
  )
}`}
        </CodeBlock>
      </section>
    </div>
  )
}
