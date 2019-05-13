# 居老师鼓励师

在 VS Code 中连续写代码一小时（时间可配置），会有居老师提醒你该休息啦~

## 使用

1、定时提醒页面(一共三种打开定时提醒页面的方式)
- 每过两小时会自动弹出提醒页面
- 按 `F1`, 然后输入 `zyl: 打开提醒页面`来打开提醒页面
- 右键菜单选择`召唤居老师`来打开提醒页面

2.背景图
默认背景图如图，也可以自己设置本地图片(file:///E:/xxx.jpg)or网络图片(http://xxx.jpg)

![usage](images/usage.png)

## 配置

* `zyl.reminder.enabled`: 是否启用定时展示提醒页面的功能，默认`true`
* `zyl.reminder.reminderViewIntervalInMinutes`: 展示提醒页面的时间间隔（分钟）。(默认值为**120**)
* `zyl.reminder.title`: 提示文字。 (默认值为**代码写久了，站起来休息一下，扭扭脖子~**)
* `zyl.reminder.content`: 提示内容，支持html标签。 (默认值为**今天也是和居老师一起努力工作的一天呢~**)
* `zyl.reminder.useDefault`: 使用默认图片，(默认值为`true`)
* `zyl.reminder.customImages`: 配置图片数组（需要搭配zyl.reminder.useDefault为`false` (默认值为**默认图片**)

* `zyl.background.enabled`: 是否启用背景图功能，默认`true`
* `zyl.background.style`: 自定义背景图样式
* `zyl.background.useDefault`: 使用默认图片，(默认值为`true`)
* `zyl.background.customImage`: 自己定制背景图（本地或网络图片）


## 如何使用本地图片作为展示图片

* vscode不允许读取外部文件路径，所以只能自己去替换插件内的图片。替换步骤如下：
  
  1、找到vscode插件安装的地方 (如mac 在~/.vscode/extensions/yanzilulu.zyl-{version})
  
  2、替换images/zyl内图片
