//declare and get the element at the same time, it will be used later as "target"
const head = document.getElementsByTagName('head')[0];

//reset
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'css/reset.css';
head.appendChild(link);

//grid
link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'css/grid.css';
head.appendChild(link);

//common style of header, footer, color, font-size...
link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'css/common.css';
head.appendChild(link);

//style of homepage
link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'css/index.css';
head.appendChild(link);

//header


    
