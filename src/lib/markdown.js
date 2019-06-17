import marked from 'marked';

function transMakrdown(content) {
    marked.setOptions({
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: true,
        smartLists: true,
        smartypants: true
    });
    return marked(content);
}


export { transMakrdown };