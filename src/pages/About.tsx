import './About.css';

function About() {
  return (
    <div className="about-page">
      <h1>About This Project</h1>

      <div className="about-content">
        <section className="about-section">
          <h2>Technology Stack</h2>
          <ul className="tech-list">
            <li>React 19 with React Compiler</li>
            <li>TypeScript for type safety</li>
            <li>Vite for blazing fast builds</li>
            <li>React Router with HashRouter</li>
            <li>ESLint for code quality</li>
            <li>Prettier for code formatting</li>
            <li>Bun as the JavaScript runtime</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>About the Apps</h2>
          <p>
            This project showcases my early career Android applications, now
            ported to the modern web platform. Each app has been rebuilt using
            the latest web technologies while maintaining the original
            functionality and spirit.
          </p>
        </section>

        <section className="about-section">
          <h2>Built with ❤️ by Evgeny Vinnik</h2>
          <p>
            These apps represent a journey of learning and growth as a
            developer. From mobile to web, the evolution continues.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
