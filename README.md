This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Sheetal E-commerce Platform

A modern headless e-commerce platform built with Next.js and Wix for transitioning a local offline store to online presence.

## Features

- 🛍️ **Product Management**

  - Product listings with categories
  - Product search and filtering
  - Detailed product pages with multiple images
  - Product variants (size, color, etc.)
  - Stock management

- 🛒 **Shopping Experience**

  - User-friendly cart management
  - Secure checkout process
  - Order tracking
  - Wishlist functionality
  - Product reviews

- 👤 **User Management**

  - User registration and authentication
  - User profiles
  - Order history
  - Address management

- 💳 **Payment Integration**

  - Multiple payment methods support
  - Secure payment processing
  - PayPal, Mastercard, Visa, Discover, and Skrill integration

- 🎨 **UI/UX Features**
  - Responsive design
  - Image optimization
  - Dynamic product filtering
  - Interactive product customization
  - Mobile-friendly interface

## Tech Stack

- **Frontend**: Next.js 14, React
- **Styling**: Tailwind CSS
- **E-commerce Backend**: Wix Headless
- **State Management**: Zustand
- **Authentication**: Wix Auth
- **Media Handling**: Wix Media
- **Payment Processing**: Wix Payments

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```env
NEXT_PUBLIC_WIX_CLIENT_ID=your_wix_client_id
NEXT_PUBLIC_WIX_APP_ID=your_wix_app_id
FEATURED_PRODUCTS_CATEGORY_ID=your_featured_category_id
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/app` - Next.js pages and routing
- `/src/components` - Reusable React components
- `/src/context` - Context providers (Wix client)
- `/src/hooks` - Custom hooks (cart, auth)
- `/src/lib` - Utility functions and API clients
- `/public` - Static assets and images

## Key Components

- `CategoryList` - Displays product categories
- `ProductList` - Shows filtered product listings
- `CartModal` - Manages shopping cart
- `CustomizeProducts` - Handles product variants
- `NavIcons` - Navigation and user interface
- `Slider` - Featured products showcase

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is proprietary and owned by Sheetal. All rights reserved.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
