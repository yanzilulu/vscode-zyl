'use strict';
import * as vscode from "vscode";
import { ReminderView } from './reminder/reminderView';
import vsHelp from './tool/vsHelp';
import { Utility } from './utility';

export class Scheduler {
    public constructor(private context: vscode.ExtensionContext) {
    }

    private config: any = vscode.workspace.getConfiguration('zyl');

    public start() {
        setInterval(() => {
            ReminderView.show(this.context);
        }, 1000 * 60 * (Utility.getReminderConfiguration().get<number>('reminderViewIntervalInMinutes') || 120));
    }
    
    // 监听zyl属性是否修改
    public checkChange(){
        let lastConfig = this.config;
        let config = vscode.workspace.getConfiguration('zyl');

        if(JSON.stringify(lastConfig) === JSON.stringify(config)){
            // 配置值没有修改，返回
            return;
        }
        this.config = config;
        vsHelp.showInfoRestart('Extension Zyl has been changed! Please restart.');
    }

    /**
     * 初始化，并开始监听配置文件改变
     * 
     * @returns {vscode.Disposable} 
     * @memberof Zyl
     */
    public watch(): vscode.Disposable {
        // 修改了配置
        return vscode.workspace.onDidChangeConfiguration(() => this.checkChange());
    }
}