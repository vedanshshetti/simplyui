import CodeBlock from "@/app/components/codeblock"

export default function CodeBlockDocsPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold tracking-tight">CodeBlock</h1>
        <p className="text-muted-foreground mt-2">
          A lightweight inline code component for highlighting short snippets of text.
          Supports light and dark mode automatically.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Import</h2>
        <CodeBlock className="block w-fit">
          import CodeBlock from "@/app/components/codeblock"
        </CodeBlock>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage</h2>

        <div className="space-y-2">
          <p>Basic example:</p>
          <CodeBlock>npm run dev</CodeBlock>
        </div>

        <div className="space-y-2">
          <p>With custom classes:</p>
          <CodeBlock className="text-red-500">
            console.log("Hello")
          </CodeBlock>
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
              <td className="py-2">children</td>
              <td className="py-2">React.ReactNode</td>
              <td className="py-2">The inline code content.</td>
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
