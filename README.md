# PADY (frontend)

## Introduction

This project provides a User Interface for a [PADY application](https://github.com/fcalabrese/Pady) by [fcalabrese](https://github.com/fcalabrese) - a service created to elevate user experience when working with digital copies of ancient cuneiform texts.

The User Interface enables users to perform lexical search within the available Akkadian texts, effectively display the 
resulting data enhanced by advanced algorythms within the PADY backend, as well as download the results in various accessible formats.

## Specifications

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Running in Docker

### First, build the image with:

```bash
docker build -t pady-frontend .
```

### Launch the container with the following command:

```bash
docker run -p 3000:3000 pady-frontend
```

## Running locally

### Preconditions

To use default environment, rename .env.example => .env.local 

Additionally, run "npm install" to install dependencies

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
