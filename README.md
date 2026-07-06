# 🏖️ SunCart – Summer Essentials Store

A modern summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare, beach accessories, and more. Users can browse products, view details, and place orders after authentication.

## 🎯 Purpose

SunCart was built to give users a clean, engaging way to discover and shop for summer essentials. The project demonstrates a full authentication flow, protected routing, and a responsive, theme-consistent UI built with modern web tools.

## ✨ Key Features

- 🔝 **Persistent Navbar & Footer** with route-based rendering (Next.js App Router)
- 🌅 **Hero Section** with a summer sale banner/slider highlighting hot deals
- 🔥 **Popular Products Section** showcasing featured items with image, name, rating, price, and a "View Details" button
- ☀️ **Summer Care Tips** section with hydration and skincare advice
- 🏷️ **Top Brands** showcase with static brand cards
- 🔒 **Protected Product Details Page** — accessible only to logged-in users, with redirect-back-after-login behavior
- 🔐 **Authentication with BetterAuth**
  - Email/Password Login with toast/error handling
  - Email/Password Registration (Name, Email, Photo URL, Password) with toast/error handling
  - Google Social Login on both Login and Register pages
- 👤 **My Profile Page** displaying the logged-in user's name, photo, and email
- ✏️ **Update Information Feature** — update profile name and photo from a dedicated route
- 📱 **Fully Responsive Design** across mobile, tablet, and desktop
- 🔑 **Environment Variables** used to secure configuration keys
- 🎬 **Animation Library Integration** for enhanced UI/UX

## 📦 NPM Packages Used

- `better-auth` – authentication and session management
- `react-toastify` – toast notifications for form feedback
- `motion-framer` – UI animations _(choose the one you implemented)_
- `daisyui` – prebuilt Tailwind UI components
- `react-icons` – icons

## 📁 Project Structure Highlights

- **Home Page:** Hero banner, popular products, summer care tips, top brands
- **Product Details Page:** Protected route showing full product information
- **Login / Register Pages:** Forms with validation, error toasts, and Google login
- **My Profile Page:** Displays and allows updating of user profile info