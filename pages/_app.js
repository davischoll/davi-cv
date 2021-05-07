import React from 'react'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <style jsx global>
        {`@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap');`}
      </style>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
