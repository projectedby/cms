
export default class Opengraph {
    title = "인공지능 ..."; // TODO: 멋있는 말을 지어내자.
    type = 'website';
    url = null;
    description = '저희는 인공지능과 관련한 내용을 전달해드립니다.'; // TODO
    locale = 'ko_KR';
    site = {
        name: 'ProjectedBy/AI'
    };
    image = {
        url: '/asset/image/opengraph/default.jpg',
        width: '1280',
        height: '853'
    };

    constructor(url) {
        this.url = url;

    }
}