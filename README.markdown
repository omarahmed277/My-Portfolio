# Orcha Portfolio

Welcome to **Orcha Portfolio**, a personal portfolio website for Omar Ahmed Abdelwareth, a Full-Stack Developer and Cybersecurity Enthusiast. This project showcases my skills, projects, and contact information with a modern, responsive design featuring a neon-themed aesthetic and interactive elements.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Responsive Design**: Optimized for mobile, tablet, and desktop with a hamburger menu for mobile navigation.
- **Interactive Hero Section**: Includes a slideshow with personal images and social media icons (GitHub, LinkedIn, Instagram) with neon hover effects (green, blue, pink).
- **Projects Showcase**: Displays two web applications (Chat App, User Authentication Dashboard System) with links to GitHub repositories.
- **Skills Section**: Highlights expertise in Frontend, Backend, Database, Security, and Performance.
- **Contact Form**: Allows users to send messages (logs to console; backend integration pending).
- **Background Animation**: Dynamic particle effects for a modern look.
- **Smooth Scrolling**: Anchor links for seamless navigation.

## Technologies
- **HTML5**: Structure and content.
- **CSS3**: Styling with animations, media queries, and neon effects.
- **JavaScript**: Interactivity (slideshow, form handling, hamburger menu, scroll effects).
- **Font Awesome**: Icons for social media and navigation.
- **Google Fonts**: Poppins font for typography.

## File Structure
```
orcha-portfolio/
├── images/
│   ├── Myphoto.jpg
│   ├── omar.jpg
│   ├── Myphoto2Edit.png
│   ├── Myphoto3.png
│   ├── Project1.png
│   ├── Project2.png
├── index.html
├── styles.css
├── script.js
├── README.md
```

- `images/`: Contains images for the hero slideshow and project cards.
- `index.html`: Main HTML file with the website structure.
- `styles.css`: CSS styles for layout, animations, and responsiveness.
- `script.js`: JavaScript for interactivity and animations.
- `README.md`: Project documentation.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/omarahmed277/orcha-portfolio.git
   cd orcha-portfolio
   ```

2. **Ensure Images**:
   - Place the required images (`Myphoto.jpg`, `omar.jpg`, `Myphoto2Edit.png`, `Myphoto3.png`, `Project1.png`, `Project2.png`) in the `images/` directory.
   - Alternatively, update image paths in `index.html` and `script.js` to use hosted URLs.

3. **Serve the Website**:
   - Use a local server (e.g., VS Code Live Server, or Python's HTTP server):
     ```bash
     python -m http.server 8000
     ```
   - Open `http://localhost:8000` in a browser.

4. **Optional Backend**:
   - The contact form logs to the console. To enable email functionality, integrate a backend service (e.g., Node.js with Nodemailer, or a service like Formspree).

## Usage
- **Navigation**: Use the top navigation bar (or hamburger menu on mobile) to jump to sections (Home, About, Portfolio, Skills, Contact).
- **Hero Section**: Click the slideshow indicators to cycle through images or wait for auto-sliding (every 5 seconds). Hover over social icons for neon effects.
- **Projects**: Click "View Project" links to visit GitHub repositories.
- **Contact**: Fill out the form to submit a message (displays a success message for 3 seconds).
- **Responsive Design**: Test on various devices to experience mobile optimizations.

## Screenshots
*(Add screenshots of the website, e.g., hero section, mobile view, neon hover effects, after deploying or testing locally.)*

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

Please ensure code follows the existing style and includes comments for clarity.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
- **Name**: Omar Ahmed Abdelwareth
- **Email**: omarahmedfathyabdelwareth@gmail.com
- **GitHub**: [omarahmed277](https://github.com/omarahmed277)
- **LinkedIn**: [Omar Ahmed Abdelwareth](https://www.linkedin.com/in/omar-ahmed-abdelwareth-ab2777257)
- **Instagram**: [omar_ahmed_abdelwareth27](https://www.instagram.com/omar_ahmed_abdelwareth27)

For inquiries or collaboration, use the contact form on the website or reach out directly.