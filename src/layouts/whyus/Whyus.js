import React from 'react'
import Typography from '@material-ui/core/Typography';
import {useStyles} from '../Home/Styles'
import { Link } from '@material-ui/core';
import trustImg from '../../assets/img/trust.svg'
import Button from '@material-ui/core/Button';
import benefit1 from '../../assets/img/benifit-1.svg'
import benefit2 from '../../assets/img/benifit-2.svg'
import benefit3 from '../../assets/img/benifit-3.svg'
import productImg1 from '../../assets/img/c64e29120d7e6be9490e5b2b70ed.webp'

const benifit = [
    {   img: benefit1,
        heading:'We are online NOW and 24/7',
        context:'We will contact you and start working on your order within 7 minutes'

    },
    {   img: benefit2,
        heading:'Only game experts on our team',
        context:'Every manager, even the owner, has successfully personally completed over 300 orders'

    },
    {   img: benefit3,
        heading:'We only use safe and time-proven methods',
        context:'P.S. Never, ever, ever share your account when you order mythic raids'

    }

]
const tabs = {
   buttons : ['WoW','Destiny 2','WoW Classic','Diablo III','Mobile Legends'],
   data:[
       {
        innerdata :[   
           {img:productImg1,
            tag:'hit',
            heading:'Mythic +15 Run',
            price:'€129',
            oldPrice:'€149'
        },
            {
                img:productImg1,
                tag:'promo',
                heading:'heading',
                price:'',
                oldPrice:''},
               
        ]
       },
       {
        innerdata :[   
        { img:productImg1,
        tag:'dd',
        heading:'heading',
        price:'',
        oldPrice:''}
        ]
    },
    {
        innerdata :[   
        { img:productImg1,
        tag:'dd',
        heading:'heading',
        price:'',
        oldPrice:''}
        ]
    },
    {
        innerdata :[   
        { img:productImg1,
        tag:'dd',
        heading:'heading',
        price:'',
        oldPrice:''}
        ]
    },
    {
        innerdata :[   
        { img:productImg1,
        tag:'dd',
        heading:'heading',
        price:'',
        oldPrice:''}
        ]
    },
    
       
   ]
} 
export default function Whyus() {
    const [state, setState] = React.useState({
      value:'WoW'  
    })
    const classes = useStyles();
    const getData = (props)=> () =>{
    setState({...state, value:props})
    }
    return (
        <div className={classes.Whyus}>
        <div className="container px-5 md:px-7 mx-auto">
        <Typography  color="primary" component="h6" gutterBottom className="font-bold text-base text-center tracking-widest mb-7">
        CORE PRINCIPLES
        </Typography> 
        <Typography component="h2" gutterBottom className="text-4xl text-white font-black text-center mb-5">
          Why Choose Us?
            </Typography>
            <Typography component="p" gutterBottom className=" text-sm text-center w-full md:w-2/4 mx-auto text-gray-400">
            We are constantly improving our services to deliver mind-blowing experiences to our customers for every order, every day
            </Typography>
            <div className="why-us-bg mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
            <div className='lg:col-start-2 lg:col-end-7 left'>
            <div className="stars"><span className="star big green filled"></span><span className="star big green filled"></span><span className="star big green filled"></span><span className="star big green filled"></span><span className="star big green filled"></span></div>
            <div className="flex justify-center mt-5">
            <Link className="text-white text-sm hover:no-underline">See our <strong>1,092</strong> reviews on</Link>
            <Link className="w-20 ml-7" href="/"><img src={trustImg} alt="trust" /> </Link>

               </div>
               <hr className="divider-custom"></hr>
               <div className="completed"><span className="number">2</span><span className="number">3</span><span className="number">3</span><span className="number">0</span><span className="number">9</span></div>
               <Typography  component="h6" gutterBottom className="font-bold text-base text-white text-center tracking-widest mb-3">
               COMPLETED ORDERS
        </Typography> 
        <Typography component="p" gutterBottom className=" text-sm text-center text-gray-400">
        and counting…
            </Typography>
            </div>
             
               <div className="right lg:col-span-4">
               <Typography component="h2" gutterBottom className="text-3xl text-white font-black mb-4 mt-12">
               Rated 5 Stars
            </Typography>
            <Typography  color="primary" component="h6" className="font-bold text-base tracking-widest mb-4">
            ON TRUSTPILOT.COM
        </Typography> 
        <Typography component="p" className=" text-sm text-gray-400 mb-5">
            We are constantly improving our services to deliver mind-blowing experiences to our customers for every order, every day
            </Typography>
            <Button color="primary" variant	="contained" className="text-white font-bold text-base py-4 px-10">Choose your game</Button>
               </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-32">
                  {benifit.map(val => (
                 <div className="benefit-content">
                 <div className="benefit-hexagon"><img src={val.img} alt="img"/></div>
                 <Typography component="h2" gutterBottom className="text-2xl text-white font-black mb-4 mt-6 w-11/12 md:w-64 mx-auto">
               {val.heading}
            </Typography>
            <Typography component="p" className=" text-sm text-gray-400 w-11/12 md:w-64 mx-auto">
            {val.context}
            </Typography>
                </div>
                  ))}
                

              </div>
              <Typography component="h2" gutterBottom className="text-4xl text-white font-black text-center mb-5 mt-12">
             Top Selling this Week
            </Typography>
            <div className="tabs flex justify-center">
             {tabs.buttons.map(val => (
            <Button color={val === state.value ? 'primary':'secondary'} variant	="contained" onClick={getData(val)} id={val} className={`text-white font-medium capitalize text-sm`}>{val}</Button>
             ))}   
           
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 ">
             {tabs.buttons.map((val,i) => val === state.value  && tabs.data[i].innerdata.map( value =>
                <Link className="product text-white hover:no-underline" href="/">
                    <div className="product-image">
                    <img src={value.img} alt="product"/>
                    <div className={`badge ${value.tag ==='hit' ? 'badge--hit':value.tag ==='promo' && 'badge--promo'}`}>
                        <span className="badge-label">
                            </span>
                            </div>
                            </div>
                               <div className="product-header">{value.heading}</div>
                             <p className="product-starts"><span>Starts at</span></p>
                             <p class="product-price">
                                 <span className="pricing">
                                 <span className="pricing-value">
                                 <span>{value.price}</span>
                                </span>
                                       <span className="pricing-original">{value.oldPrice}</span>
                                </span>
                                </p>
                </Link>
             )
                
     )} 
                 </div>
        </div>
      
        </div>
       
        </div>
    )
}
