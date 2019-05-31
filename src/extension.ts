'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { ReminderView } from './reminder/reminderView';
import { Scheduler } from './scheduler';
import Background from './background/background';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "zyl" is now active!');
	const scheduler = new Scheduler(context);
	scheduler.start();

	let disposable = vscode.commands.registerCommand('zyl.showReminderView', () => {
        ReminderView.show(context);
	});

	/* let showBackground = vscode.commands.registerCommand('zyl.showBackground', () => {
		vscode.window.showInformationMessage('show background!');
	}); */
	
	context.subscriptions.push(disposable);
	context.subscriptions.push(scheduler.watch());

	context.subscriptions.push(Background.watch());
}


export function deactivate() {}
