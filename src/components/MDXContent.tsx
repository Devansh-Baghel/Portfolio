import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { highlight } from "sugar-high";

const components = {
  h1: (props: any) => (
    <h1 className="mb-4 mt-8 text-4xl font-bold" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="mb-4 mt-8 text-3xl font-semibold" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="mb-3 mt-6 text-2xl font-semibold" {...props} />
  ),
  p: (props: any) => <p className="mb-4 text-lg leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="mb-4 ml-6 list-disc" {...props} />,
  ol: (props: any) => <ol className="mb-4 ml-6 list-decimal" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  a: (props: any) => (
    <Link
      href={props.href}
      className="text-lime-600 underline underline-offset-2 hover:text-lime-500"
      {...props}
    />
  ),
  img: (props: any) => (
    <Image
      src={props.src}
      alt={props.alt || ""}
      width={1000}
      height={400}
      className="my-6 rounded-lg shadow-lg"
      {...props}
    />
  ),
  pre: ({ children, ...props }: any) => {
    return (
      <pre
        className="my-6 overflow-x-auto rounded-lg bg-slate-900 p-4 text-white"
        {...props}
      >
        {children}
      </pre>
    );
  },
  code: ({ children, ...props }: any) => {
    const codeHTML = highlight(children);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  blockquote: (props: any) => (
    <blockquote
      className="my-6 border-l-4 border-lime-500 bg-slate-50 py-2 pl-4 italic"
      {...props}
    />
  ),
  hr: (props: any) => <hr className="my-8 border-slate-300" {...props} />,
};

interface MDXContentProps {
  content: string;
}

export default function MDXContent({ content }: MDXContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <MDXRemote source={content} components={components} />
    </div>
  );
}
