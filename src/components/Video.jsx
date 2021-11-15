import './Video.css'

export default function Video() {
    return (
        <div className='video'>
            <div className="text-box">
                <h2 className='title'>what happened</h2>
                <p className='description'>How to create mobile-optimized videos in minutes. Not a designer,
                    every team makes a lot of videos Can be trimmed. Take the first </p>
                    <button className="see-more">SEE MORE</button>
            </div>

            <img src={require('../img/video.png').default} id='video' />
            <img src={require('../img/video-object-01.png').default} id='video-object-01' />
            <img src={require('../img/video-object-02.png').default} id='video-object-02' />
            <img src={require('../img/video-object-03.png').default} id='video-object-03' />
            <img src={require('../img/video-object-04.png').default} id='video-object-04' />
            <img src={require('../img/video-object-05.png').default} id='video-object-05' />
            <img src={require('../img/video-object-06.png').default} id='video-object-06' />
            <img src={require('../img/video-object-07.png').default} id='video-object-07' />
            <img src={require('../img/video-object-08.png').default} id='video-object-08' />
            <img src={require('../img/video-object-09.png').default} id='video-object-09' />
        </div>
    )
}
