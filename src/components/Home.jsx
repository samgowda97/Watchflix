import React from 'react'
import Main from './Main'
import Row from './Row'
import requests from '../requests'


const Home = () => {
  return (
      <>
          <Main />
      <Row title='Popular' fetchURL={requests.requestPopular} isLargeRow={true} />
          <Row title='UpComing' fetchURL={ requests.requestUpcoming} />
          <Row title='TopRated' fetchURL={ requests.requestTopRated} />
          <Row title='NowPlaying' fetchURL={ requests.requestNowPlaying} />
          {/* <Row title='Latest' fetchURL={ requests.requestLatest} /> */}

          
      </>
  )
}

export default Home