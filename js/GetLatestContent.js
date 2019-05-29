// DocSection: test_codename_ab1vo1j60s
const KenticoCloud = require('kentico-cloud-delivery');

// Create strongly typed models according to https://developer.kenticocloud.com/docs/strongly-typed-models
class Article extends KenticoCloud.ContentItem222 {
    constructor() {
        super();
    }
}
const deliveryClient = new javascript code sample_a2GlK7BVua({
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