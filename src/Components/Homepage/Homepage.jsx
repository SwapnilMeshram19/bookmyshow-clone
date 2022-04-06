import React from 'react';
import { CarouselSection } from './CarouselSection';
import { Entertainment } from './Entertainment';
import { EventsHappening } from './EventsHappening';
import { ExploreFunActivites } from './ExploreFunActivites';
import { LatestEvents } from './LatestEvents';
import { LaughterEvents } from './LaughterEvents';
import { OutdoorEvents } from './OutdoorEvents';
import { PopularEvents } from './PopularEvents';
import { PremierMovies } from './PremierMovies';
import { RecommendedMovies } from './RecommendedMovies';

const Homepage = () => {
  return (
    <div>
      <CarouselSection />
      <RecommendedMovies />
      <Entertainment />
      <PremierMovies />
      <EventsHappening />
      <OutdoorEvents />
      <div style={{ backgroundColor: "F2F2F2"}}>
            <LatestEvents />
            <LaughterEvents />
            <PopularEvents />
            <ExploreFunActivites/>
      </div>
    </div>
  )
}

export {Homepage}
