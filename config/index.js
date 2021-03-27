const dev = process.env.NODE_ENV !== 'production'

export const server = dev? 'http://locahost:3000/' : 'https://jobflix.vercel.app'