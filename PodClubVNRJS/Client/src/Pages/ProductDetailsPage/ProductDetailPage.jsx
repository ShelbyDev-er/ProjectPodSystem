import React from 'react'
import { Container, Grid } from '@mui/material'
import Footer from '../CommonComponents/Footer'
import Header from '../CommonComponents/Header'
import ProductDetailSlider from './Components/ProductDetailSlider'
import styled from '@emotion/styled'
import Paper from '@mui/material/Paper'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import HeaderExtraPage from '../CommonComponents/HeaderExtraPage'
import Contact from '../CommonComponents/Contact'

const Item = styled(Paper)(({ theme }) => ({

}));

export default function ProductDetailPage() {
  return (
    <>
      <Contact />
      <HeaderExtraPage />
      <Container>
        <div className="third-content">
          <div className="foreword">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="content">
          <div className="content-detail container">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
              <Grid item xs={12} sm={5} md={4}>
                <Item>
                  <ProductDetailSlider />
                  {/* <div className="button-below-img">
                    <button>
                      <ChatBubbleIcon />
                    </button>
                    <button>
                      <FavoriteIcon />
                    </button>
                    <button>
                      <ShareIcon />
                    </button>
                  </div> */}
                </Item>
              </Grid>
              <Grid item xs={12} sm={7} md={8}>
                <Item>
                  <div className="product-detail-wrapper">
                    <div className="product-detail-title">
                      Pod ABC
                    </div>
                    <div className="product-detail-type">
                      <span>6ml</span> -
                      <span> Mỹ</span> -
                      <span> 1000 mAH</span> -
                      <span> DotMod</span> -
                      <span> Disposable</span> -
                      <span> Pod</span>
                    </div>
                    <div className="rating-stars">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                    </div>
                    <div className="product-detail-describe">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat deleniti dolor reiciendis minus aliquam, iure culpa dolorum libero recusandae id labore a modi eius! Sit delectus pariatur blanditiis accusantium inventore?
                    </div>
                    <button className="order-button">
                      HỖ TRỢ ĐẶT HÀNG
                    </button>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </div>
          <div className="similar-product container">
            <div className="similar-product-header">
              <div className="similar-product-title">
                Sản phẩm tương tự
              </div>
              <a href="./podList.html">
                <button className="btn-show-more">
                  Xem thêm
                </button>
              </a>
            </div>
            <div className="list-product">
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                  <Item>
                    <div className="list-products-item">
                      <div className="item-content">
                        <div className="hinh-anh-san-pham">
                          <img src="https://www.albairaqkw.com/web/image/product.template/10590/image_1024?unique=66474fe" alt="" />
                        </div>
                        <div className="item-text">
                          <div className="ten-san-pham">
                            Pod ABC
                          </div>
                          <div className="mo-ta-san-pham">
                            Phe...
                          </div>
                          <div className="gia-tien">
                            200k
                          </div>
                        </div>
                      </div>
                    </div>
                  </Item>
                </Grid>
                {/* end */}

                <Grid item xs={12} sm={6} md={3}>
                  <Item>
                    <div className="list-products-item">
                      <div className="item-content">
                        <div className="hinh-anh-san-pham">
                          <img src="https://www.albairaqkw.com/web/image/product.template/10590/image_1024?unique=66474fe" alt="" />
                        </div>
                        <div className="item-text">
                          <div className="ten-san-pham">
                            Pod ABC
                          </div>
                          <div className="mo-ta-san-pham">
                            Phe...
                          </div>
                          <div className="gia-tien">
                            200k
                          </div>
                        </div>
                      </div>
                    </div>
                  </Item>
                </Grid>
                {/* end */}

                <Grid item xs={12} sm={6} md={3}>
                  <Item>
                    <div className="list-products-item">
                      <div className="item-content">
                        <div className="hinh-anh-san-pham">
                          <img src="https://www.albairaqkw.com/web/image/product.template/10590/image_1024?unique=66474fe" alt="" />
                        </div>
                        <div className="item-text">
                          <div className="ten-san-pham">
                            Pod ABC
                          </div>
                          <div className="mo-ta-san-pham">
                            Phe...
                          </div>
                          <div className="gia-tien">
                            200k
                          </div>
                        </div>
                      </div>
                    </div>
                  </Item>
                </Grid>
                {/* end */}

                <Grid item xs={12} sm={6} md={3}>
                  <Item>
                    <div className="list-products-item">
                      <div className="item-content">
                        <div className="hinh-anh-san-pham">
                          <img src="https://www.albairaqkw.com/web/image/product.template/10590/image_1024?unique=66474fe" alt="" />
                        </div>
                        <div className="item-text">
                          <div className="ten-san-pham">
                            Pod ABC
                          </div>
                          <div className="mo-ta-san-pham">
                            Phe...
                          </div>
                          <div className="gia-tien">
                            200k
                          </div>
                        </div>
                      </div>
                    </div>
                  </Item>
                </Grid>
                {/* end */}

              </Grid>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  )
}
