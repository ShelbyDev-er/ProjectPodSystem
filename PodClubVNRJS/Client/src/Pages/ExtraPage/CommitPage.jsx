import { Container } from '@mui/system'
import React from 'react'
import Footer from '../CommonComponents/Footer'
import HeaderExtraPage from '../CommonComponents/HeaderExtraPage'

export default function CommitPage() {
  return (
    <>
      <HeaderExtraPage />
      <Container>
        <div className="line">
          <div className="text-inline">Page bla bla</div>
        </div>
        <div className="content-extra-page">
          <h1>Title</h1>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos id labore doloribus ipsam eos omnis officiis dolorem ipsum soluta quidem praesentium vel beatae nesciunt nihil fugiat, quam culpa voluptatum facilis?</h2>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos id labore doloribus ipsam eos omnis officiis dolorem ipsum soluta quidem praesentium vel beatae nesciunt nihil fugiat, quam culpa voluptatum facilis?</h2>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos id labore doloribus ipsam eos omnis officiis dolorem ipsum soluta quidem praesentium vel beatae nesciunt nihil fugiat, quam culpa voluptatum facilis?</h2>
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos id labore doloribus ipsam eos omnis officiis dolorem ipsum soluta quidem praesentium vel beatae nesciunt nihil fugiat, quam culpa voluptatum facilis?</h2>
        </div>
      </Container>
      <Footer />
    </>
  )
}
