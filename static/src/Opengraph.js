
export default class Opengraph {
    title = "ProjectedBy/CMS";
    type = 'website';
    url = null;
    description = '컨텐츠 관리 시스템';
    locale = 'ko_KR';
    site = {
        url: '/',
        name: 'ProjectedBy/CMS'
    };
    image = {
        url: '/asset/image/opengraph/default.jpg',
        width: '869',
        height: '701'
        
    };

    constructor(opengraph) {
        Object.assign(this, opengraph);
    }
}