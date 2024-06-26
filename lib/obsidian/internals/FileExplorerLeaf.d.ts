import type {
    FileExplorerView,
    FileTreeItem
} from "../types.js";
import type {
    TFolder,
    WorkspaceLeaf
} from "obsidian";
/** @todo Documentation incomplete */
export interface FileExplorerLeaf extends WorkspaceLeaf {
    view: FileExplorerView;

    /** @internal */
    attachDropHandler(x: unknown, y: unknown, z: unknown): unknown;
    /** @internal Get a sorted list of the tree items for a specific folder) */
    getSortedFolderItems(folder: TFolder): FileTreeItem[];
}
