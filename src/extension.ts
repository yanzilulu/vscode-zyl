// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { ReminderView } from './reminderView';
import { Scheduler } from './scheduler';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const scheduler = new Scheduler(context);
    scheduler.start();

    context.subscriptions.push(vscode.commands.registerCommand('zyl.showReminderView', () => {
        ReminderView.show(context);
    }));
	/* console.log('Congratulations, your extension "zyl" is now active!');

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable); */
}

export function deactivate() {}
