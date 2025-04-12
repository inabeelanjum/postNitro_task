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


## Demo

- [View Demo](https://post-nitro-task.vercel.app/)