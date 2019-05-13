"use strict";
import * as vscode from "vscode";

export class Utility {

    public static getReminderConfiguration(): vscode.WorkspaceConfiguration {
        return vscode.workspace.getConfiguration("zyl.reminder");
    }

    public static getBackgroundConfiguration(): vscode.WorkspaceConfiguration {
        return vscode.workspace.getConfiguration("zyl.background");
    }
}