import React from 'react';
import { useState } from 'react';
import { ListedProjects} from './projectsSlice';
import {
    Container,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
  } from 'reactstrap';
  import ProjectRow from './ProjectRow';

  const listedProjects = ListedProjects();

const ProjectsCarousel = (args) => {
    const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === listedProjects.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? listedProjects.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };


  return (
    <Container className='py-5'>
   
       <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...args}
            >
            <CarouselIndicators
                items={listedProjects}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {
                listedProjects.map((rowSet) => {
                    return (
                    <CarouselItem
                        onExiting={() => setAnimating(true)}
                        onExited={() => setAnimating(false)}
                        key={rowSet.src}
                    >
                        <ProjectRow rowSet={rowSet} />
                    </CarouselItem>
                    )
                }) 
            }


            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
                className='blackColor'
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
                className='blackColor'
            />
        </Carousel>
    </Container>
  )
}

export default ProjectsCarousel