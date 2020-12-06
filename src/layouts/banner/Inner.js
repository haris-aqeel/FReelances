import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import bgWow from '../../assets/img/6348107bbaac33d26fe7e7023112.jpeg'
import Destiny from '../../assets/img/ded38539bfd4df67014245d7a499.webp'
import Classic from '../../assets/img/e325174f3b5463d0a8f7fe78fe17.jpeg'
import Diablo  from '../../assets/img/1a5a28c6cb1a4a82e53e8d5278d8.jpeg'
import Legends  from '../../assets/img/2da9eb692542092e3a84d0efe1e5.jpeg'

const gameSupport = [
    {
        bg:bgWow,
        title:'WoW',
        content:'Buy top-rated secured World of Warcraft carries. In-game coaching from professional gamers. Secured service with fast results!',
        buttons:['Show Services','Shadowlands Boost','Powerleveling','Dungeons','Raids','Character Boost','PvP','Collectibles']
    },
    {
        bg:Destiny,
        title:'Destiny 2',
        content:'Professional Destiny 2 boosting services. Get anything a true Guardian needs. Buy pinnacle weapons, godrolls, PvP & PvE carry, ultimate raid armor sets to dominate your opponents.',
        buttons:['Show Services','Featured','Weapons & Armor','Raid Carries','Bundles','PvE & Power Level','PvP & Gambit',]
    },
    {
        bg:Classic,
        title:'WoW Classic',
        content:'WoW Vanilla is back and we are ready to power-level you to 60, boost professions, carry classic dungeons and raids on all realms. Buy WoW Classic boost & 50 other services',
        buttons:['Show Services','Power-Leveling','Professions','PvP','Classic Raids','Classic Dungeons']
    },
    {
        bg:Diablo ,
        title:'Diablo III',
        content:'Buy Greater rifts or set dungeons boost! Any D3 carry service at your disposal. Fast Powerleveling to 70, bounty caches farm, legendaries, and other Season 22 services!',
        buttons:['Show Services','Power Leveling','Gearing','Rifts','Items']
    },
    {
        bg:Legends ,
        title:'Mobile Legends',
        content:'Extremely skillful MLBB boosting services. From Calibration to the Mythic ranks with a professional booster! Achievements and win rates carry together with 30 more services.',
        buttons:['Show Services','Rank Boost','Achievements']
    },
]


export default function Inner() {

    return (
        <div className="mt-56 absolute w-full px-5 md:px-7 bg-inner">
            <div className="grid grid-cols-1 lg:grid-cols-6  gap-4 container mx-auto">
             <div className ="lg:col-span-4"> 
            <Typography  color="primary" component="h6" gutterBottom className="font-bold text-base topheading">
            TOP LEVEL ITEMS AND SERVICES
            </Typography>
            <Typography  component="h3" gutterBottom className="font-black text-white mainHeading text-2xl lg:text-5xl md:text-3xl uppercase">
            Boost your gear, level and rating to dominate the game today
            </Typography>
            <Button color="primary" variant	="contained" className="text-white font-medium text-base py-4 px-10">Choose your game</Button>
            <Button color="primary" variant	="outlined" className="text-white font-medium text-base py-4 px-10 ml-7 border-2 hover:border-2 btnReview">See reviews</Button>
            </div>
            </div>
            <div className="mt-24">
            <Typography component="h2" gutterBottom className="text-4xl text-white font-black text-center mb-5">
            Games we support
            </Typography>
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {
                   gameSupport.map(val => (
                  <div className="game" key={val.title} style={{backgroundImage:`linear-gradient(180deg, rgba(23,24,24,0.1) 0%, rgba(23,24,24,0.745) 50%, rgb(23,24,24) 100%),url(${val.bg})`}}>
                    <Typography component="h5" gutterBottom className="text-2xl text-white font-black mt-8">
                    {val.title}
                    </Typography>
                    <Typography component="p" gutterBottom className="text-sm text-gray-300">
                    {val.content}
                    </Typography>
                    {val.buttons.map((btn) => (
                    <Button key={btn} color={btn === 'Show Services' ? 'primary':'secondary'} variant="contained" className='text-white text-xs mt-2 capitalize'>{btn}</Button> 
                    ))}
                    </div> 
                   ))   
                  }
                    
            </div>  
            </div>
            </div>  
        </div>
    )
}
