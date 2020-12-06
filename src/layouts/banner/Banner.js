import React from 'react'
import {useStyles} from '../Home/Styles'
import img1 from '../../assets/img/img1.webp'
import img2 from '../../assets/img/img2.webp'
import main from '../../assets/img/main.jpg'
import mobile from '../../assets/img/mobile.jpg'
import Inner from './Inner'
import clsx from 'clsx'

export default function Banner() {
    const classes = useStyles();
    return (
        <div className= {clsx(classes.banner,'main-banner')}>
            <Inner />
            <div className="background-image background-image-homepage">
                <picture>
                    <source media="(min-width: 576px)" srcSet={img1} type="image/webp"/>
                    <source media="(max-width: 575px)" srcSet={img2} type="image/webp"/>
                    <source media="(min-width: 576px)" srcSet={main} type="image/jpeg"/>
                    <source media="(max-width: 575px)" srcSet={mobile} type="image/jpeg"/>
                    <img src={main} alt=""/>
                    </picture>
                    </div>
        </div>
    )
}
