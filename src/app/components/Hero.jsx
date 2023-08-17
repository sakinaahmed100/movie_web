import styles from "../styles/hero.module.css"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import "../globals.css";
import React from 'react';
import { HiOutlineLightBulb } from "react-icons/hi"
import { BsFillEmojiHeartEyesFill } from "react-icons/bs"
import 'animate.css';
import Link from 'next/link'

export default function Hero(){

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const images = [
      {
        label: 'Science Fiction',
        imgPath:
          'https://assets1.ignimgs.com/2018/11/15/top25scifimovies-yt-1542308741646.jpg',
      },
      {
        label: 'Horror',
        imgPath:
          'https://www.koimoi.com/wp-content/new-galleries/2020/12/best-horror-movies-on-amazon-prime-from-the-ring-to-tumbbad-check-out-this-must-watch-list-of-5-scary-films-0001.jpg',
      },
      {
        label: 'Comedy',
        imgPath:
          'https://cdn.feedingtrends.com/article-images/hollywood_comedy_movies_0e56fb9bf1.jpg',
      },
      {
        label: 'Action',
        imgPath:
          'https://assets-prd.ignimgs.com/2023/06/24/bestactionmovies-slideshow-1687567425222.jpg?crop=16%3A9&width=888',
      },
    ];
  
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };
  
  
    return(
        <>
          <section className={`${styles.hero} center`}>
        <div>

          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
              className={styles.label}
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default',
              }}
            >
              <Typography className={styles.labelText}>{images[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 255,
                        display: 'block',
                        maxWidth: 400,
                        overflow: 'hidden',
                        width: '100%',
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              className={styles.labelTwo}
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  className={styles.labelText}
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  className={styles.labelText}
                  size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </div>

        <div className={styles.line}>
          {/* <span>"a"</span> */}

        </div>
        <div className={styles.heroText}>
          <span className={`${styles.heroHeading} center`}>

            <p>Lights, Camera, Explore!</p>
            <p className={styles.para}>Now you can watch your favourite shows, rate them & share it with your loved ones <BsFillEmojiHeartEyesFill className='animate__animated animate__pulse animate__delay-5s'></BsFillEmojiHeartEyesFill></p>
          </span>



        </div>
      </section>
        </>
    )
}