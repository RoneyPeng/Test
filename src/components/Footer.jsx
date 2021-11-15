import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="contact-main">
                <div className="contact-wh">
                    <h6>what happened</h6>
                    <div className="contact-links">
                        <a href="#">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
                        <a href="#">[공지] 29CM 강남 스토어 영업 종료</a>
                        <a href="#">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
                        <a href="#">[공지] iOS 10 이하 버전 지원 중단 안내</a>
                        <a href="#">[공지] 개인 정보 처리 방침 변경 사전 안내</a>
                    </div>
                </div>
                <div className="contact-detail">
                    <div className="about-us contact-detail__item">
                        <h6>about us</h6>
                        <a href='#'>회사 소개
                            인재 채용
                            상시 할인 혜택
                        </a>
                    </div>
                    <div className="my-order contact-detail__item">
                        <h6>my order</h6>
                        <a href='#'>내 주문
                            주문 배송
                            취소 / 교환 / 반품 내역
                            상품 리뷰 내역
                            증빙 서류 발급
                        </a>
                    </div>
                    <div className="my-account contact-detail__item">
                        <h6>my account</h6>
                        <a href='#'>회원 정보 수정
                            회원 등급
                            마일리지 현황
                            쿠폰
                        </a>
                    </div>
                    <div className="help contact-detail__item">
                        <h6>help</h6>
                        <a href='#'>1 : 1 상담 내역
                            상품 Q & A 내역
                            공지 사항
                            자주하는 질문
                            고객의 소리
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact-sub">
                <span>© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                    서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</span>
                <div className="icon-social">
                    <a href="#"><img src={require('../img/snsicon-03.png').default}/></a>
                    <a href="#"><img src={require('../img/snsicon-02.png').default}/></a>
                    <a href="#"><img src={require('../img/snsicon-01.png').default}/></a>
                </div>
            </div>
        </footer>
    )
}


