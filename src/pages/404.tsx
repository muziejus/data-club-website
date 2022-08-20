import * as React from "react"
import { Link, HeadFC } from "gatsby"

const pageClasses = [
  "text-[#232129]",
  "p-10",
]

const headingClasses = [
  "mt-0",
  "mb-10",
  "text-3xl",
  "max-w-96",


]
const paragraphClasses =
  ["mb-8"]

const codeClasses = [
  "text-[#8A6534]",
  "p-2",
  "bg-[#FFF4DB]",
  "text-lg",
  "rounded"
]

const NotFoundPage = () => {
  return (
    <main className={pageClasses.join(" ")}>
      <h1 className={headingClasses.join(" ")}>Page not found</h1>
      <p className={paragraphClasses.join(" ")}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code className={codeClasses.join(" ")}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
