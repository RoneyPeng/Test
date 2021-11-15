import './HappenedIssue.css'

export default function HappenedIssue() {
    return (
        <div className='issue'>
            <div className="text-box">
                <h3>HAPPENED'S ISSUE</h3>
                <p>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
                    <button className="see-more">SEE MORE</button>
            </div>
            <img src={require('../img/news-object-02.png').default} id='new-obj-2'/>
            <img src={require('../img/news-object-03.png').default} id='new-obj-3'/>
            <img src={require('../img/news-object-04.png').default} id='new-obj-4'/>
            <img src={require('../img/news-object-05.png').default} id='new-obj-5'/>
            <img src={require('../img/news-object-06.png').default} id='new-obj-6'/>
            <div className="whpn-list">
                <div className="whpn-issue whpn-item">
                    <p>WHPN ISSUE</p>
                    <img src={require('../img/news-img-01.png').default} className="whpn-img" />
                </div>
                <div className="brand whpn-item">
                    <div className="brand-title">
                        <label>B BRAND</label>
                    </div>
                    <img src={require('../img/news-img-02.png').default} className="brand-img" />
                </div>
                <div className="brand whpn-item">
                    <div className="brand-title">
                        <label>C BRAND</label>
                    </div>
                    <img src={require('../img/news-img-03.png').default} className="brand-img" />
                </div>
                <div className="brand whpn-item">
                    <div className="brand-title" id='d-brand'>
                        <label>D BRAND</label>
                    </div>
                    <img src={require('../img/news-img-04.png').default} className="brand-img" />
                </div>
                <div className="brand whpn-item">
                    <div className="brand-title">
                        <label>E BRAND</label>
                    </div>
                    <img src={require('../img/news-img-05.png').default} className="brand-img" />
                </div>
            </div>
        </div>
    )
}
