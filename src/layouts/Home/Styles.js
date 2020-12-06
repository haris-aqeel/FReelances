import {makeStyles } from "@material-ui/core/styles";


export const useStyles = makeStyles((theme) => ({
 banner:{
    position:'relative',
    '& .background-image':{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 560,
      width: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      '&.background-image-homepage':{
        height: '100%',
        minHeight: 923,
        maxHeight: 1141,
        '& img':{
          width: '100%',
          height: '100%',
          '-o-object-fit': 'cover',
          'object-fit': 'cover',
          '-o-object-position': '50% 0',
          'object-position': '50% 0'
        } 
      }
    }
    
  },
  Whyus:{
    paddingTop:60,
    position:"relative"
  }
  
}));
