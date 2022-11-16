import React from 'react'
import Footer from '../CommonComponents/Footer'
import Header from '../CommonComponents/Header'
import TopSlider from './Components/TopSlider'
import ContentCarousel from './Components/ContentCarousel'
import Grid from '@mui/material/Unstable_Grid2'
import { Container } from '@mui/system'
import PhotosAlbum from './Components/PhotoAlbum'
import Contact from '../CommonComponents/Contact'

export default function HomePage() {
    return (
        <>
            <Contact />
            <div className="homepage-container">
                <Header position={"position: 'fixed'"} />
                <TopSlider />
                <Container>
                    <a href="https://www.facebook.com/PodClubVN">
                        <div className="Group-trade-n-sell color">
                            GROUP TRADE - SELL
                        </div>
                    </a>
                    <ContentCarousel />
                    <div className="line">
                        <div className="text-inline">Always by your side</div>
                    </div>
                    <div className="third-content">
                        <div className="foreword">
                            Giá Pod có thể lên xuống theo thị trường hoặc theo thời gian, nhưng PodClubVN cam kết sẽ đảm bảo giữ vững chất lượng sản phẩm, nói không với các hàng nhái, hàng giả để tạo ra môi trường tốt nhất cho tất cả anh em cũng như mang đến trải nghiệm tốt nhất cho người dùng.
                        </div>
                    </div>
                    <div className="feedback">
                        <p>FEEDBACK CỦA KHÁCH HÀNG</p>
                    </div>
                    <div className="link-to-photo-album">
                        <p>KHOẢNH KHẮC ĐẸP CÙNG VỚI PCV</p>
                        <PhotosAlbum />
                        <div className="photo-album-bottom"></div>
                    </div>
                </Container>
                <Footer />
            </div>
        </>
    )
}
