import React from "react"

import SEO from "../components/Seo"

const NotFoundPage = () => (
  <div className="w-full h-screen bg-gray-200 flex flex-col justify-center py-16 md:py-64">
    <SEO title="404: Not found" />
    <h1 className="text-center font-bold text-4xl">NOT FOUND</h1>
    <p className="text-center font-bold text-4xl">
      You just hit a route that doesn&#39;t exist... the sadness.
    </p>
    <a
      className="mx-auto bg-gray-600 p-2 rounded-full font-bold text-white hover:text-blue-300 text-xl"
      href="/"
    >
      Go home
    </a>
  </div>
)

export default NotFoundPage
