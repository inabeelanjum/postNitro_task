# PostNitro - AI Carousel Creator

A modern Next.js application for creating stunning AI-powered carousels for social media platforms including Instagram, LinkedIn, TikTok, and more.

## Features

- Interactive pricing plans with monthly/yearly billing options
- Responsive navigation with dropdown menus
- Multi-language support (English, Chinese, Spanish, French)
- AI-powered carousel generation
- Free tools section

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/inabeelanjum/postNitro_task.git
cd postNitro_task
```

2. Install dependencies
```bash
# Using npm
npm install

# Using yarn
yarn install
```

3. Run the development server
```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

### Build for Production

To create a production build:

```bash
# Using npm
npm run build
npm start

# Using yarn
yarn build
yarn start
```

## Technology Stack

- [Next.js](https://nextjs.org/) (v15.2.4) - React framework
- [Mantine](https://mantine.dev/) (v7.17.4) - UI component library
- [Next Intl](https://next-intl-docs.vercel.app/) (v4.0.2) - Internationalization
- [Phosphor Icons](https://phosphoricons.com/) (v2.1.7) - Icon library

## Project Structure

- `/app/[locale]` - Main application routes with locale support
- `/app/[locale]/plans` - Pricing plans page
- `/components` - Reusable UI components
- `/messages` - Translation files for different languages
- `/public` - Static assets and images

## Internationalization

The application supports multiple languages using Next Intl:
- English (default)
- Chinese
- Spanish
- French

To change the language, use the language switcher in the navigation bar.

## Deployment on Vercel

This project is configured for seamless deployment on Vercel.

### Manual Deployment

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel: https://vercel.com/new
3. Vercel will detect Next.js automatically and configure the build settings
4. Click "Deploy" and wait for the build to complete

### Automatic Deployment with GitHub

1. Push your code to a GitHub repository
2. Connect your GitHub account to Vercel
3. Select the repository to deploy
4. Vercel will deploy your application and create a production URL
5. Any future push to the main branch will trigger a new deployment

### Environment Variables

If your application requires environment variables, you can set them in the Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add your key-value pairs
4. Choose the environments where they should be applied (Production, Preview, Development)

### Custom Domain

To add a custom domain to your Vercel deployment:

1. Go to your project in the Vercel dashboard
2. Navigate to "Domains"
3. Add your domain and follow the verification instructions

## Build

To create a production build locally:

```bash
npm run build
# or
yarn build
```

To start the production build locally:

```bash
npm run start
# or
yarn start
```

