import { useState } from 'react';
import './ProjectsSection.css';

// Import assets
import image1 from '../../assets/kart.JPEG';
import image2 from '../../assets/montreal.jpg';
import image3 from '../../assets/team.jpg';
import image4 from '../../assets/falls.png';
import image5 from '../../assets/eloquence.jpg';

// Background images
import bg1 from '../../assets/brevet.jpg';
import bg2 from '../../assets/diplome.jpg';
import bg3 from '../../assets/eloquence.jpg';
import bg4 from '../../assets/montreal.jpg';
import bg5 from '../../assets/team.jpg';
import bg6 from '../../assets/kart.JPEG';
import bg7 from '../../assets/falls.png';
import bg8 from '../../assets/parents.JPG';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  accentColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Project Alpha',
    subtitle: 'Web Development',
    image: image1,
    accentColor: '#6B5B5B',
  },
  {
    id: 2,
    title: 'Project Beta',
    subtitle: 'Mobile Design',
    image: image2,
    accentColor: '#8f6666',
  },
  {
    id: 3,
    title: 'Project Gamma',
    subtitle: 'Full Stack',
    image: image3,
    accentColor: '#6B5B5B',
  },
  {
    id: 4,
    title: 'Project Delta',
    subtitle: 'UI/UX Design',
    image: image4,
    accentColor: '#8f6666',
  },
  {
    id: 5,
    title: 'Project Epsilon',
    subtitle: 'Data Visualization',
    image: image5,
    accentColor: '#6B5B5B',
  },
];

const backgroundImages = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8];

export default function ProjectsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isContainerHovered, setIsContainerHovered] = useState(false);

  return (
    <section className="projects-section" id="projects">
      {/* Background Layer */}
      <div className="projects-background">
        {backgroundImages.map((img, index) => (
          <div key={index} className="bg-tile">
            <img src={img} alt="" />
          </div>
        ))}
      </div>

      {/* Foreground Layer - Fan of Cards */}
      <div className="projects-foreground">
        <div
          className={`projects-fan ${isContainerHovered ? 'fan-open' : ''}`}
          onMouseEnter={() => setIsContainerHovered(true)}
          onMouseLeave={() => setIsContainerHovered(false)}
        >
          {projects.map((project, index) => {
            const totalCards = projects.length;
            const centerIndex = (totalCards - 1) / 2;
            const offset = index - centerIndex;

            return (
              <div
                key={project.id}
                className={`project-card ${hoveredCard === project.id ? 'card-active' : ''}`}
                style={{
                  '--card-index': index,
                  '--card-offset': offset,
                  '--total-cards': totalCards,
                  '--accent-color': project.accentColor,
                  zIndex: hoveredCard === project.id ? 100 : 10 - Math.abs(offset),
                } as React.CSSProperties}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="project-card-top">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
