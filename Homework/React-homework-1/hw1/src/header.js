const Header=()=>{
    return (
        <header class="header_menubar">
        <div class="cover_image"></div>
        <div class="wrap_profile">
            <div class="bloger_thumb">
                <img class="profileUserImage" src="C:/Users/jsjs8/HTML-practice/reacthw01/src/11.jpg" width="100" height="100" alt="이미지정보"></img>
            </div>
            <div class="wrap_profile_desc">
                <strong class="profileUserName">조경서</strong>
                <span class="blog_cpeg">
                    <em class="screen_out">소속</em>
                    <span class="txt_info">COSMIC</span>
                    <em calss="screen_out">직업</em>
                    <span class="txt_info">학생</span>
                </span>
                <dl class="blog_count">
                    <dt class="screen_out">브런치 정보</dt>
                    <dd>
                        <a href="" class="link_count #follower">
                            <em class="txt_g">구독자</em>
                            <span class="num_count">1,270</span>
                        </a>
                    </dd>
                    <dd>
                        <a href="" class="link_count #following">
                            <em class="txt_g">관심작가</em>
                            <span class="num_count">26</span>
                        </a>
                    </dd>
                </dl>
            </div>
            <div class="wrap_profile_btn">
                    <span class="#my_follow">
                        <button type="button" class="btn_type btn_default btn_profile btnFollow #p_follow">구독하기</button>
                    </span>
                    <div class="more_control">
                        <button type="button" class="btnMoreToggle btn_morectrl">
                            <span class="ico_brunch_v1 ico_morectrl">
                                메뉴 더보기
                            </span>
                        </button>
                        <div class="layer_action_ctrl">
                            <div class="inner_action_ctrl">
                                <button type="button" class="btnBlockProfile btn_ctrl requireLogin">
                                    차단하기
                                </button>
                                <button type="button" class="btnReportProfile btn_ctrl requireLogin">
                                    신고하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab_contents">
                <strong class="screen_out">작가프로필 하위메뉴</strong>
                <ul id="contentsTab" class="list_tab">
                    <li>
                        <a href="#info" class="infoTab link_tab #info_open">
                            <span class="txt_tab">작가소개</span>
                        </a>
                    </li>
                    <li class="on">
                        <a href="#articles" class="articleTab link_tab">
                            <span class="txt_tab">글 28</span>
                        </a>
                    </li>
                    <li>
                        <a href="#works" class="magazineTab link_tab">
                            <span class="txt_tab">작품 0</span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};
export default Header();