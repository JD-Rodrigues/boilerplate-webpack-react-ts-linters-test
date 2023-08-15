/* eslint-disable @typescript-eslint/no-unused-vars */

const imageContext = require.context('.', true, /\.(jpg|png|jpeg)$/)

export const images = imageContext.keys().map(imageContext)