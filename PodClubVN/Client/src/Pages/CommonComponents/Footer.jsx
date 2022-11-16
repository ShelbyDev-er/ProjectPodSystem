import { Container, Grid } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import Paper from '@mui/material/Paper'
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({

}));

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Container>
          <div className="footer-content">
            <Container>
              <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                  <Grid item xs={6} sm={4} md={2.375}>
                    <Item>
                      <Link to='/commit'>
                        <div className="cam-doan">
                          CAM ĐOAN
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </Link>
                    </Item>
                  </Grid>
                  <Grid item xs={6} sm={4} md={2.375}>
                    <Item>
                      <Link to='/commit'>
                        <div className="tuyen-dung">
                          TUYỂN DỤNG
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </Link>
                    </Item>
                  </Grid>
                  <Grid item xs={12} sm={4} md={2.375}>
                    <Item>
                      <Link to='/commit'>
                        <div className="lien-he">
                          LIÊN HỆ
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </Link>
                    </Item>
                  </Grid>
                  <Grid item xs={6} sm={6} md={2.375}>
                    <Item>
                      <Link to='/commit'>
                        <div className="chinh-sach">
                          CHÍNH SÁCH
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </Link>
                    </Item>
                  </Grid>
                  <Grid item xs={6} sm={6} md={2.375}>
                    <Item>
                      <Link to='/commit'>
                        <div className="ban-quyen">
                          BẢN QUYỀN
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </Link>
                    </Item>
                  </Grid>
                </Grid>
              </Container>
            </Container>
          </div>
        </Container>
        <div className="end-footer">
          Bản quyền thuộc về PodClubVN, Thành lập từ 2019.
        </div>
      </div>
    </>
  )
}
