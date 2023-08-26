/* eslint-disable import/no-unused-modules */
declare module '*.png' {
  import type * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.ImgHTMLAttributes<HTMLImageElement>
  >

  const src: string
  export default src
}

declare module '*.jpg' {
  import type * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.ImgHTMLAttributes<HTMLImageElement>
  >

  const src: string
  export default src
}

declare module '*.jpeg' {
  import type * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.ImgHTMLAttributes<HTMLImageElement>
  >

  const src: string
  export default src
}

declare module '*.svg' {
  import type * as React from 'react'

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >

  const src: string
  export default src
}
