// DocSection: test_codename_b4411o62ln
const KenticoCloud = require('kentico-cloud-delivery');

// Create strongly typed models according to https://developer.kenticocloud.com/docs/strongly-typed-models
class Article extends KenticoCloud.ContentItem {
    constructor() {
        super();
    }
}
const deliveryClient = new javascript code sample_Q0Rz5En2Do({
    projectId: '975bf280-fd91-488c-994c-2f04416e5ee3',
    typeResolvers: [
        new KenticoCloud.TypeResolver('article', () => new Article())
    ]
});

deliveryClient.item('on_roasts')
    .queryConfig({ waitForLoadingNewContent: true })
    .getObservable()
    .subscribe(response => console.log(response));
// EndDocSection