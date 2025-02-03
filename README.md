# Image Gallery

Responsive image gallery that fetches images from the Picsum API.

### Live Demo

https://image-gallery-demo-123.netlify.app/

### Features

- **Responsive Design** – Adjusts seamlessly to different screen sizes.
- **Dynamic Image Fetching** – Retrieves high-quality images from the Picsum API.
- **Lazy Loading** – Optimizes performance by lazy loading the Image Components progressively.
- **Grid Layout** – Displays images in an organized, aesthetic format.
- **Infinite Scroll** – Automatically loads more images as the user scrolls.
- **Search by Author** – Allows users to find images based on the author's name.
- **Light & Dark Mode Support** – Toggle between the light and dark theme.
- **Skeleton Loading** – Displays placeholder skeletons while images are being fetched to improve user experience and prevent layout shifts.
- **Debounced Input** – Implements a delay in search input to optimize performance.

### Technology Stack & Implementation

- **React & TypeScript** – The gallery is built using React for a component-based architecture and TypeScript for type safety and maintainability.
- **Axios** – Used for making API requests to fetch images efficiently and with the help of `CancelToken` to purge unnecessary requests.
- **Custom Hooks** – Different functionalities are encapsulated within custom hooks:
  - **API Requests (`useFetchImages`)** – Manages fetching images from the Picsum API, handling loading states and errors.
  - **Debounced Input (`useDebounce`)** – Implements a delay in search input to reduce unnecessary API requests.
  - **Infinite Scroll (`useInfiniteScroll`)** – Detects when the user reaches the bottom of the page and loads more images dynamically.
  - **Dark Mode (`useDarkMode`)** – To toggle the theme.
- **CSS (Tailwind)** – Ensures a responsive, aesthetically pleasing layout.
- **ESLint** - Integrated for linting JavaScript and TypeScript code to enforce coding standards, catch syntax and style issues, and ensure code quality.
- **Husky** - Manages Git hooks to enforce pre-commit and pre-push checks like linting, testing, and formatting, ensuring a clean codebase.
- **Prettier** - Automatically formats code to a consistent style, integrated with ESLint to fix formatting issues and run automatically on pre-commit.

### Setup Guide

1. Clone the repository

```sh
git clone git@github.com:KruzeZab/image-gallery.git
```

2. Copy environment variables

```sh
cp .env.example .env
```

3. Install dependencies

```sh
yarn
```

4. Run the development server

```sh
yarn dev
```

### Screenshots

![image](https://github.com/user-attachments/assets/7da5073b-15de-44cc-a32f-008bf5768916)

![image](https://github.com/user-attachments/assets/862219cb-e829-49b9-90df-fd6ad2e5a7a0)

![image](https://github.com/user-attachments/assets/85215755-a6ec-44be-95c2-5530ab5fe150)

![image](https://github.com/user-attachments/assets/e48a77f1-40c2-486d-8c33-d326c9c2b544)

![image](https://github.com/user-attachments/assets/81f7be67-5c65-44ca-9303-ab7415173c84)

![image](https://github.com/user-attachments/assets/f061a6d2-30d0-4e78-bff8-469935352849)

![image](https://github.com/user-attachments/assets/3cf80a9c-3fbb-404d-bd6a-ce09d2f82b90)
