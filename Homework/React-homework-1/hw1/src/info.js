import React from "react";
import App from "./App";   
import Button from 'react-bootstrap/Button';
import "./info.css";
const info =(props)=>{
    return (
        <div class="author_intro animation_up">
    <strong class="tit_intro">소개</strong>
    <p class="desc_intro">현재 저는 충북대학교에 재학중입니다</p>
    <ul class="list_tag">
        <li>
            <a href="/keyword/profile/IT" class="link_tag #profilekeyword">{props.userinfo.tag1}</a>
        </li>
        <li>
            <a href="/keyword/profile/교육" class="link_tag #profilekeyword">{props.userinfo.tag2}</a>
        </li>
        <li>
            <a href="/keyword/profile/스타트업" class="link_tag #profilekeyword">{props.userinfo.tag3}</a>
        </li>
        <li>
            <a href="/keyword/profile/CEO" class="link_tag #profilekeyword">{props.userinfo.tag4}</a>
        </li>
    </ul>
    </div>
    )
};
export default info;