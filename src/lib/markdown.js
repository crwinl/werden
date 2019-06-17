import marked from 'marked';
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';

function transMakrdown(content) {
    marked.setOptions({
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: true,
        smartLists: true,
        smartypants: true,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });
    return marked(content);
}


export { transMakrdown };