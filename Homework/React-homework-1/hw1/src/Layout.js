import { useReducer } from 'react';
import { Outlet } from 'react-router-dom';
import {App} from './App';
import Header from './header';
import {Button} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Layout.css";

export const AutoLayoutVariableExample=(props)=> {
  return (
      <div>
          <header>
            <Container>
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/$articles">Branch</Navbar.Brand>
        </Container>
      </Navbar> 
      <Row>
        <Col>
        <h3>조경서</h3>
        <span class="blog_cpeg"><br></br>
                        <span class="txt_info">COSMIC 학생</span><br></br>
                    </span>
                    <dl class="blog_count">
                        <dd>
                            <a href="" class="link_count #follower">
                                <em class="txt_g">구독자</em>
                                <span class="num_count">1,270</span>
                            </a>
                        </dd>
                        <dd>
                            <a href="" class="link_count #following">
                                <em class="txt_g">관심작가 </em>
                                <span class="num_count">26</span>
                            </a>
                        </dd>
                    </dl>
        </Col>
        <Col md="auto">
        <div class="bloger_thumb">
                    <img class="profileUserImage" src="https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTNfMTUz/MDAxNTg0MDc0OTI5MTMz.uJm-kdKZTOlxJZis7Uf6APQ1gEv9a8YmgSPMXXjy63Ig.SiCOkm1obZ0VUhvTqVKvFsXlGJum8F5AizK6_iFVeEEg.JPEG.julyhoho/SE-5d32444c-a0ec-4dd8-81ea-9d983f2b3628.jpg?type=w800" width="100" height="100" alt="이미지정보"></img>
                </div>
        </Col>
        <Col xs lg="2">
        </Col>
      </Row>
      <div class="tab_contents">
        <strong class="screen_out">작가프로필 하위메뉴</strong>
        <ul id="contentsTab" class="list_tab">
            <li><a href="/$info" class="infoTab link_tab #info_open"><span class="txt_tab">작가소개
                            </span></a></li>
            <li class="on">
              <a href="/$articles" class="articleTab link_tab"><span class="txt_tab">글 {props.items.length}</span></a></li>
            <li>
              <a href="/$works" class="magazineTab link_tab"><span class="txt_tab">작품 0</span></a></li>
        </ul>
    </div>
    </Container>
    </header>
    <main>
        <Outlet />
    </main>
</div>
  );
}
export default AutoLayoutVariableExample;