import defBase64 from './defBase64';
import version from './version';

/**
 * 通过配置获取样式文本
 *
 * @param {object} options 用户配置
 * @param {boolean} useFront 是否前景图
 * @returns {string}
 */
function getStyleByOptions(options: object, useFront: boolean) {
    let styleArr: string[] = [];
    for (let k in options) {
        // 在使用背景图时，排除掉 pointer-events
        if (!useFront && ~['pointer-events', 'z-index'].indexOf(k)) {
            continue;
        }

        if (options.hasOwnProperty(k)) {
            styleArr.push(`${k}:${options[k]}`);
        }
    }
    return styleArr.join(';') + ';';
}

/**
 * 生成css样式
 *
 * @export
 * @param {String} image 图片数组
 * @param {any} [style={}] 自定义样式
 * @param {boolean} [useFront=true] 是否用前景图
 * @returns
 */
export default function (image = '', style = {}, useFront = true) {
    let img0 = image ? image : defBase64;

    let style0 = getStyleByOptions(style, useFront); // 默认样式

    // 在前景图时使用 ::after
    let frontContent = useFront ? '::after' : '::before';
    console.log(style0);

    let content = `

        /*css-background-start*/
        /*zyl.background.ver.${version}*/

        [id="workbench.parts.editor"] .split-view-view:nth-child(1) .editor-container .overflow-guard>.monaco-scrollable-element${frontContent}{background-image: url('${img0}');${style0}}

        [id="workbench.parts.editor"] .split-view-view .editor-container .overflow-guard>.monaco-scrollable-element>.monaco-editor-background{background: none;}

        /*css-background-end*/
        `;

    return content;
}
