# Work Patterns Pros & Cons Carousel

> The Work Patterns Pros & Cons Carousel is a React-based application that allows users to explore different work mode options (e.g. Home Office, Open Plan Office) and view detailed pros and cons for each option in a beautifully designed modal. The project emphasizes modularity, responsive design, and clean visual aesthetics using CSS modules and CSS variables for spacing, colors, and animations.

## Table of Contents

- [Work Patterns Pros \& Cons Carousel](#work-patterns-pros--cons-carousel)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Directory Structure](#directory-structure)
  - [Installation](#installation)
      - [1. Clone the Repository:](#1-clone-the-repository)
      - [2. Install Dependencies:](#2-install-dependencies)
      - [3. Run the Project:](#3-run-the-project)
  - [Usage](#usage)
    - [Navigating the Carousel:](#navigating-the-carousel)
    - [Viewing Details in the Modal:](#viewing-details-in-the-modal)
  - [Customization](#customization)
    - [Component Behavior:](#component-behavior)
    - [Data Source:](#data-source)
  - [Contributing](#contributing)

## Features

- **Interactive Carousel:**  
  Navigate through work pattern items using a circular carousel.

- **Info Modal:**  
  Display a modal with detailed pros and cons for the selected work pattern. The modal shows two independent, scrollable columns for "Pros" and "Cons" with fixed headers.

- **Unified Navigation Sidebar:**  
  A right-hand sidebar supports both horizontal carousel navigation (left/right buttons) and vertical navigation (separate sets of up/down buttons for the Pro and Con columns).

- **Custom NoScrollWrapper:**  
  A reusable wrapper component prevents scrolling via mouse wheel or touch gestures while still allowing users to scroll using the native scrollbar (with custom styling).

- **Responsive & Modular Design:**  
  All elements use CSS modules for styling and CSS variables for colors, fonts, spacing, and animations, ensuring a consistent, themeable design.

## Technologies Used

- **React** – For building interactive user interfaces.
- **TypeScript** – For static type checking and improved code quality.
- **CSS Modules** – For encapsulated, modular component styling.
- **Custom Components:**
  - InfoCarousel
  - InfoModal
  - InfoColumn
  - NavigationSidebar
  - CustomListItem
  - NoScrollWrapper

## Directory Structure

```plaintext
src/
├── components/
│   ├── common/
│   │   ├── DirectionButton.tsx
│   │   ├── NavigationSidebar.tsx
│   │   ├── CustomListItem.tsx
│   └── info/
│   │   ├── InfoCarousel.tsx
│   │   ├── InfoModal.tsx
│   │   └── InfoColumn.tsx
│   └── wrapper/
│       └── NoScrollWrapper.tsx
├── hooks/
│   └── useInfoData.ts
├── interfaces/
│   ├── IInfo.ts
│   └── IGlobal.ts
├── styles/
│   ├── common/
│   │   ├── DirectionButton.module.css
│   │   ├── NavigationSidebar.module.css
│   │   └── CustomListItem.module.css
│   ├── info/
│   │   ├── InfoModal.module.css
│   │   └── InfoColumn.module.css
├── App.tsx
└── index.tsx
```

## Installation

#### 1. Clone the Repository:

   ```bash
   git clone https://github.com/Lenam0n/workpatterns_pro_cons--BFW_Englisch-.git
   cd workpatterns_pro_cons--BFW_Englisch-
   ```

#### 2. Install Dependencies:

```bash
npm install
# or:
yarn install
```

#### 3. Run the Project:

```bash
npm start
# or:
yarn start
```

The development server will run on <http://localhost:3000>

## Usage

### Navigating the Carousel:

Use the left/right buttons (in the unified sidebar) to switch between work pattern items. The carousel rotates and updates the active item accordingly.

### Viewing Details in the Modal:

> When you click on a carousel item, a modal appears displaying the work pattern details.

- The modal contains two independent columns for "Pros" and "Cons".

- Each column has a fixed header outside a scrollable container.

- Vertical navigation within each list is handled by the up/down buttons on the sidebar.

- Scrolling via mouse wheel or touch swipe is disabled; users must use the native scrollbar for manual scrolling.

## Customization
Theme & Colors:
Modify the CSS variables in the global ``:root`` (in your index.css) to adjust the *color palette*, *spacing*, *fonts*, and *animation durations*.

### Component Behavior:
> The application is highly modular. 

You can adjust or extend components like the ``NoScrollWrapper``, ``NavigationSidebar``, or ``InfoModal`` to meet new design or functionality requirements.

### Data Source:
The work pattern data is handled by the useInfoData hook. Update it to fetch real data from an API if needed.

## Contributing
> Contributions are welcome!

If you have suggestions or improvements, please open an issue or submit a pull request.
