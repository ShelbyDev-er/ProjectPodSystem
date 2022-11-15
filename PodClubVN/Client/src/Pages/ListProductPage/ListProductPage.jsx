import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Grid, Pagination } from '@mui/material'
import Footer from '../CommonComponents/Footer'
import ListProductSlider from './Components/Slider'
import Paper from '@mui/material/Paper';
import Pagi from './Components/Pagination'
import { Link } from "react-router-dom";
import { Container } from '@mui/system'
import HeaderExtraPage from '../CommonComponents/HeaderExtraPage'
import Contact from '../CommonComponents/Contact'
import MenuIcon from '@mui/icons-material/Menu';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SortIcon from '@mui/icons-material/Sort';
import SortModal from './Components/SortModal'

const Item = styled(Paper)(({ theme }) => ({

}));

export default function ListProductPage() {
  const [toggleNav, setToggleNav] = useState(false)
  const [activeModal, setActiveModal] = useState(false)

  const handleToggleNav = () => setToggleNav(!toggleNav)
  const handleActiveModal = () => setActiveModal(true)
  const handleCloseModal = () => setActiveModal(false)

  return (
    <>
      <Contact />
      <div className="list-products-page-container">
        <HeaderExtraPage />
        <Container>
          <div className="third-content">
            <div className="foreword">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <ListProductSlider />
          <div className="content-nav" onClick={() => handleToggleNav()}>
            <div className={toggleNav === true ? 'toggle-nav-active' : 'toggle-nav'} >
              <DehazeIcon />
            </div>
            <div className={toggleNav === true ? 'nav-active' : 'nav-wrapper'}>
              <div className="nav">
                <div className="left-nav">
                  <div>
                    MÁY POD
                    <ul>
                      <li>
                        DẠNG BÚT
                      </li>
                      <li>
                        DẠNG HỘP
                      </li>
                    </ul>
                  </div>
                  <div>
                    TINH DẦU
                    <ul>
                      <li>
                        VỊ NGẬY
                      </li>
                      <li>
                        HOA QUẢ
                      </li>
                      <li>
                        FREEBASE
                      </li>
                    </ul>
                  </div>
                  <div>
                    POD 1 LẦN
                    <ul>
                      <li>
                        {`< 2000 HƠI`}
                      </li>
                      <li>
                        {`< 3000 HƠI`}
                      </li>
                      <li>
                        {`> 3000 HƠI`}
                      </li>
                    </ul>
                  </div>
                  <div>
                    PHỤ KIỆN
                    <ul>
                      <li>
                        OCC / ĐẦU POD
                      </li>
                      <li>
                        ĐẦU RỖNG
                      </li>
                      <li>
                        PIN / SẠC
                      </li>
                      <li>
                        THỜI TRANG
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="right-nav">
                  <button onClick={() => handleActiveModal()}>
                    <p>Sort</p>
                    <SortIcon />
                  </button>
                  {
                    activeModal === true ? <SortModal handleClose={handleCloseModal}/> : ``
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="list-products-content">
            <div className="list-products-items">
              <div className="list-products-items-container">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>
                      <div className="list-products-item-wrapper">
                        <Link to='/product-detail'>
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
                        </Link>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>
                      <div className="list-products-item-wrapper">
                        <Link to='/product-detail'>
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
                        </Link>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>
                      <div className="list-products-item-wrapper">
                        <Link to='/product-detail'>
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
                        </Link>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>
                      <div className="list-products-item-wrapper">
                        <Link to='/product-detail'>
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
                        </Link>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>
                      <div className="list-products-item-wrapper">
                        <Link to='/product-detail'>
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
                        </Link>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>
                      <div className="list-products-item-wrapper">
                        <Link to='/product-detail'>
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
                        </Link>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>
                      <div className="list-products-item-wrapper">
                        <Link to='/product-detail'>
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
                        </Link>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>
                      <div className="list-products-item-wrapper">
                        <Link to='/product-detail'>
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
                        </Link>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>
                      <div className="list-products-item-wrapper">
                        <Link to='/product-detail'>
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
                        </Link>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>
                      <div className="list-products-item-wrapper">
                        <Link to='/product-detail'>
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
                        </Link>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>
                      <div className="list-products-item-wrapper">
                        <Link to='/product-detail'>
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
                        </Link>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Item>
                      <div className="list-products-item-wrapper">
                        <Link to='/product-detail'>
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
                        </Link>
                      </div>
                    </Item>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <Item>
                      <Pagi />
                    </Item>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}
