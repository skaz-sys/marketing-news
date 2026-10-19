# Marketing News Homepage

## Project Overview

This project is a responsive digital news homepage prototype developed for **Marketing Association New Zealand**.

The website was created using React and follows the provided desktop and mobile wireframes. The main goal was to build a clean, simple and responsive webpage that works on different screen sizes.

## Technologies Used

- **React** – Used to build the user interface.
- **JavaScript (JSX)** – Used to create components and display content dynamically.
- **CSS3** – Used for styling and responsive design.
- **Vite** – Used to set up and run the React application.

## Features

- Header with company logo and navigation links.
- Hero section with a heading and image.
- Search bar and search button.
- Three news cards containing images, titles and descriptions.
- Responsive desktop and mobile layouts.
- Interactive hamburger navigation menu on mobile devices.

**Note:** The search bar and login button are included for demonstration purposes only.

## Responsive Design

The website uses CSS Flexbox, Grid and Media Queries to adapt to different screen sizes.

**Desktop Version:**
- Horizontal navigation menu.
- Hero section with heading and image.
- Three news cards displayed in a row.

**Mobile Version:**
- Hamburger navigation menu.
- Vertically arranged search bar and button.
- News cards displayed in a single column.
- Hero image hidden to simplify the mobile layout.

## React Implementation

The main component is located in `src/App.jsx`.

The project uses React's `useState` hook to control the mobile navigation menu.

News card data is stored in a JavaScript array, and the `map()` function is used to dynamically render the cards.

## How to Run the Project

1. Clone or download the GitHub repository.
2. Open the project folder in VS Code.
3. Install dependencies using `npm install`.
4. Start the development server using `npm run dev`.
5. Open the local URL displayed in the terminal.

## Images

The website uses images from Unsplash for demonstration purposes.

## Project Status

Completed responsive homepage prototype based on the supplied wireframes.