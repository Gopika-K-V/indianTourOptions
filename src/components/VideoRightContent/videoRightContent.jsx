import styles from './videoRightContent.module.scss';
import Animate from '../Animate/animate'
import assets from '../../assets/assets'

const VideoRightContent = () => {
  return (
    <Animate as='section' effect='fade-in' className={styles.video_section} id="featuredVideo">
      <div className={styles.video_container}>
          <video width="100%" autoPlay muted loop>
              <source src={assets.BookTour} type="video/mp4"/>
              {/* <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg"/> */}
              Your browser does not support HTML video.
          </video>
      </div>
    </Animate>
  )
}

export default VideoRightContent
