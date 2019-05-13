import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { Utility } from './utility';

export default class Asset {

    public constructor(private context: vscode.ExtensionContext) {
    }

    public getImageUri(): vscode.Uri | string {
        const useDefault: boolean = this.getConfigUseDefault();
        let images: vscode.Uri[] | string[];

        if (useDefault) {
            images = this.getDefaultImages();
        } else {
            images = this.getCustomImages();
        }
        // user forget setting customImages, get default images
        if (images.length === 0) {
            images = this.getDefaultImages();
        }
        const image = this.getRandomOne(images);

        return image;
    }

    protected getRandomOne(images: string[] | vscode.Uri[]): string | vscode.Uri {
        const n = Math.floor(Math.random() * images.length + 1) - 1;
        return images[n];
    }

    protected getDefaultImages(): vscode.Uri[] {
        const dirPath = this.getDefaultZylImagePath();
        const files = this.readPathImage(dirPath);
        return files;
    }

    // 获取默认背景图
    protected getDefaultBackgroundImage(): vscode.Uri[] {
        const dirPath = path.join(this.context.extensionPath, 'images/zyl/zyl3.jpg');
        const file = this.readPathImage(dirPath);
        console.log(file);
        return file;
    }

    protected readPathImage(dirPath: string): vscode.Uri[] {
        let files: vscode.Uri[] = [];
        const result = fs.readdirSync(dirPath);
        result.forEach(function (item, index) {
            const stat = fs.lstatSync(path.join(dirPath, item));
            if (stat.isFile()) {
                files.push(vscode.Uri.file(path.join(dirPath, item)).with({ scheme: 'vscode-resource' }));
            }
        });
        return files;
    }

    protected getDefaultZylImagePath() {
        return path.join(this.context.extensionPath, 'images/zyl');
    }


    protected getConfigUseDefault(): boolean {
        return Utility.getReminderConfiguration().get<boolean>('useDefault', true);
    }

    protected getCustomImages() {
        return Utility.getReminderConfiguration().get<string[]>('customImages', []);
    }

    public getTitle(): string {
        return Utility.getReminderConfiguration().get<string>('title', '代码写久了，站起来休息一下，扭扭脖子~');
    }

    public getContent(): string {
        return Utility.getReminderConfiguration().get<string>('content', '今天也是和居老师一起努力工作的一天呢~');
    }
}
