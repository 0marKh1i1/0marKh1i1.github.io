(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{1318:function(e,n,r){Promise.resolve().then(r.t.bind(r,2972,23)),Promise.resolve().then(r.bind(r,3322)),Promise.resolve().then(r.bind(r,6066)),Promise.resolve().then(r.bind(r,4766)),Promise.resolve().then(r.bind(r,5312)),Promise.resolve().then(r.bind(r,5472)),Promise.resolve().then(r.bind(r,124)),Promise.resolve().then(r.bind(r,2477)),Promise.resolve().then(r.bind(r,2092)),Promise.resolve().then(r.bind(r,3283)),Promise.resolve().then(r.bind(r,6709)),Promise.resolve().then(r.bind(r,4330)),Promise.resolve().then(r.bind(r,6356)),Promise.resolve().then(r.bind(r,8829)),Promise.resolve().then(r.bind(r,8047)),Promise.resolve().then(r.bind(r,287)),Promise.resolve().then(r.bind(r,7547)),Promise.resolve().then(r.bind(r,7457)),Promise.resolve().then(r.bind(r,1e3)),Promise.resolve().then(r.bind(r,6749)),Promise.resolve().then(r.bind(r,3404)),Promise.resolve().then(r.bind(r,1009)),Promise.resolve().then(r.bind(r,2258)),Promise.resolve().then(r.bind(r,1162)),Promise.resolve().then(r.bind(r,911)),Promise.resolve().then(r.bind(r,5094)),Promise.resolve().then(r.bind(r,9316)),Promise.resolve().then(r.bind(r,7550)),Promise.resolve().then(r.bind(r,1177)),Promise.resolve().then(r.bind(r,7868)),Promise.resolve().then(r.bind(r,3580)),Promise.resolve().then(r.bind(r,404)),Promise.resolve().then(r.bind(r,5022)),Promise.resolve().then(r.bind(r,9678)),Promise.resolve().then(r.bind(r,5234)),Promise.resolve().then(r.bind(r,9978)),Promise.resolve().then(r.bind(r,3500)),Promise.resolve().then(r.bind(r,7451)),Promise.resolve().then(r.bind(r,8932)),Promise.resolve().then(r.bind(r,5156)),Promise.resolve().then(r.bind(r,6204)),Promise.resolve().then(r.bind(r,435)),Promise.resolve().then(r.bind(r,8663)),Promise.resolve().then(r.bind(r,4630)),Promise.resolve().then(r.bind(r,7330)),Promise.resolve().then(r.bind(r,5731)),Promise.resolve().then(r.bind(r,8780)),Promise.resolve().then(r.bind(r,1467)),Promise.resolve().then(r.bind(r,9511)),Promise.resolve().then(r.bind(r,5995)),Promise.resolve().then(r.bind(r,3088)),Promise.resolve().then(r.bind(r,18)),Promise.resolve().then(r.bind(r,6983)),Promise.resolve().then(r.bind(r,8651)),Promise.resolve().then(r.bind(r,6948)),Promise.resolve().then(r.bind(r,2060)),Promise.resolve().then(r.bind(r,6694)),Promise.resolve().then(r.bind(r,2644)),Promise.resolve().then(r.bind(r,9909)),Promise.resolve().then(r.bind(r,197)),Promise.resolve().then(r.bind(r,6995)),Promise.resolve().then(r.bind(r,3714)),Promise.resolve().then(r.bind(r,6537)),Promise.resolve().then(r.bind(r,2796)),Promise.resolve().then(r.bind(r,2468))},3322:function(e,n,r){"use strict";r.d(n,{default:function(){return b}});var o=r(7437),t=r(2265);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach(function(n){var o;o=r[n],n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}class m extends t.Component{constructor(e){let n;super(e),this.reCalculateColumnCount=this.reCalculateColumnCount.bind(this),this.reCalculateColumnCountDebounce=this.reCalculateColumnCountDebounce.bind(this),n=this.props.breakpointCols&&this.props.breakpointCols.default?this.props.breakpointCols.default:parseInt(this.props.breakpointCols)||2,this.state={columnCount:n}}componentDidMount(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}componentDidUpdate(){this.reCalculateColumnCount()}componentWillUnmount(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}reCalculateColumnCountDebounce(){if(!window||!window.requestAnimationFrame){this.reCalculateColumnCount();return}window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame(()=>{this.reCalculateColumnCount()})}reCalculateColumnCount(){let e=window&&window.innerWidth||1/0,n=this.props.breakpointCols;"object"!=typeof n&&(n={default:parseInt(n)||2});let r=1/0,o=n.default||2;for(let t in n){let i=parseInt(t);i>0&&e<=i&&i<r&&(r=i,o=n[t])}o=Math.max(1,parseInt(o)||1),this.state.columnCount!==o&&this.setState({columnCount:o})}itemsInColumns(){let e=this.state.columnCount,n=Array(e),r=t.Children.toArray(this.props.children);for(let o=0;o<r.length;o++){let t=o%e;n[t]||(n[t]=[]),n[t].push(r[o])}return n}renderColumns(){let{column:e,columnAttrs:n={},columnClassName:r}=this.props,o=this.itemsInColumns(),s=`${100/o.length}%`,m=r;m&&"string"!=typeof m&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===m&&(m="my-masonry-grid_column"));let a=l(l(l({},e),n),{},{style:l(l({},n.style),{},{width:s}),className:m});return o.map((e,n)=>t.createElement("div",i({},a,{key:n}),e))}logDeprecated(e){console.error("[Masonry]",e)}render(){let e=this.props,{children:n,breakpointCols:r,columnClassName:o,columnAttrs:s,column:l,className:m}=e,a=function(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),d=m;return"string"!=typeof m&&(this.logDeprecated('The property "className" requires a string'),void 0===m&&(d="my-masonry-grid")),t.createElement("div",i({},a,{className:d}),this.renderColumns())}}m.defaultProps={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0};var a=r(4007),d=r(8069),u=r.n(d),h=r(9390);function b(){return(0,o.jsx)(m,{breakpointCols:{default:4,1440:3,1024:2,560:1},className:u().masonryGrid,columnClassName:u().masonryGridColumn,children:h.lj.images.map((e,n)=>(0,o.jsx)(a.Fd,{priority:n<10,sizes:"(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw",radius:"m",aspectRatio:"horizontal"===e.orientation?"16 / 9":"9 / 16",src:e.src,alt:e.alt,className:u().gridItem},n))})}},8069:function(e){e.exports={masonryGrid:"Gallery_masonryGrid__W_kbz",masonryGridColumn:"Gallery_masonryGridColumn___XYdw",gridItem:"Gallery_gridItem__u87n7"}}},function(e){e.O(0,[271,665,240,516,464,7,971,117,744],function(){return e(e.s=1318)}),_N_E=e.O()}]);