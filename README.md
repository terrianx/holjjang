# Holjjang - [Link to Website](https://holjjang.netlify.app/)

A mini marble game commonly known as odds and evens. I created this to learn Vue, Typescript, and SCSS. Hosted by 
[Netlify](https://www.netlify.com/).

## What I learned
### 1. Vue
- `options` API
  - `props` to pass down information from parent components, for example number of marbles when rendering the different game fields
  - `emits` to signal parent component on inputs
  - `data` to track state, such as turn, player marbles remaining, or if game has ended
  - `computed` for static computational helper function
  - `methods` for changing state and handling game logic
- `refs`
  - Manipulate DOM more directly in some cases, such as auto selecting input fields
### 2. Typescript
- Enforced types when handling DOM elements
- Types for improved readability and less error prone code
### 3. SCSS
- Variables to allow more efficient refactoring and style changes
- Nested styling for improved readiblity
### 4. Game Design
- How a game loop should run
  - Keeping track of turn order
- Player experience
  - Displaying necessary information at each step
  - Providing clear yet simple instructions

## Features
- Bot player with built in betting strategy
- Interactive game field
- Responsive to window resizing
- About section with origin and history of Holjjang
- Organic curves using SVGs in background for enhanced visuals

---
© Terrian Xiao 2023. All rights reserved.
