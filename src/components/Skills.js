
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2> Skills</h2>
                        <p>Skilled in crafting intuitive and visually engaging user experiences, blending design principles with user-centered strategies. Proficient in wireframing, prototyping, and user testing to create seamless digital interactions. Experienced in design tools like Figma and Adobe Illustrator,Adobe XD with a strong focus on accessibility and responsive design..</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}
