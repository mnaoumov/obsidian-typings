/**
 * @see Original module
 * {@link https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts}
 * {@link file://./../../node_modules/obsidian/obsidian.d.ts}
 */
import "obsidian";

export * from "./internals/index.ts";

import type _AbstractInputSuggest from "./AbstractInputSuggest.d.ts";
import type _AbstractTextComponent from "./AbstractTextComponent.d.ts";
import type _App from "./App.d.ts";
import type _BaseComponent from "./BaseComponent.d.ts";
import type _BlockCache from "./BlockCache.d.ts";
import type _BlockSubpathResult from "./BlockSubpathResult.d.ts";
import type _ButtonComponent from "./ButtonComponent.d.ts";
import type _CachedMetadata from "./CachedMetadata.d.ts";
import type _CacheItem from "./CacheItem.d.ts";
import type _CloseableComponent from "./CloseableComponent.d.ts";
import type _ColorComponent from "./ColorComponent.d.ts";
import type _Command from "./Command.d.ts";
import type _Component from "./Component.d.ts";
import type _DataAdapter from "./DataAdapter.d.ts";
import type _DataWriteOptions from "./DataWriteOptions.d.ts";
import type _Debouncer from "./Debouncer.d.ts";
import type _DropdownComponent from "./DropdownComponent.d.ts";
import type _EditableFileView from "./EditableFileView.d.ts";
import type _Editor from "./Editor.d.ts";
import type _EditorChange from "./EditorChange.d.ts";
import type _EditorPosition from "./EditorPosition.d.ts";
import type _EditorRange from "./EditorRange.d.ts";
import type _EditorRangeOrCaret from "./EditorRangeOrCaret.d.ts";
import type _EditorScrollInfo from "./EditorScrollInfo.d.ts";
import type _EditorSelection from "./EditorSelection.d.ts";
import type _EditorSelectionOrCaret from "./EditorSelectionOrCaret.d.ts";
import type _EditorSuggest from "./EditorSuggest.d.ts";
import type _EditorSuggestContext from "./EditorSuggestContext.d.ts";
import type _EditorSuggestTriggerInfo from "./EditorSuggestTriggerInfo.d.ts";
import type _EditorTransaction from "./EditorTransaction.d.ts";
import type _EmbedCache from "./EmbedCache.d.ts";
import type _EventRef from "./EventRef.d.ts";
import type _Events from "./Events.d.ts";
import type _ExtraButtonComponent from "./ExtraButtonComponent.d.ts";
import type _FileManager from "./FileManager.d.ts";
import type _FileStats from "./FileStats.d.ts";
import type _FileSystemAdapter from "./FileSystemAdapter.d.ts";
import type _FileView from "./FileView.d.ts";
import type _FrontMatterCache from "./FrontMatterCache.d.ts";
import type _FrontMatterInfo from "./FrontMatterInfo.d.ts";
import type _FrontmatterLinkCache from "./FrontmatterLinkCache.d.ts";
import type _FuzzyMatch from "./FuzzyMatch.d.ts";
import type _FuzzySuggestModal from "./FuzzySuggestModal.d.ts";
import type _HeadingCache from "./HeadingCache.d.ts";
import type _HeadingSubpathResult from "./HeadingSubpathResult.d.ts";
import type _Hotkey from "./Hotkey.d.ts";
import type _HoverLinkSource from "./HoverLinkSource.d.ts";
import type _HoverParent from "./HoverParent.d.ts";
import type _HoverPopover from "./HoverPopover.d.ts";
import type _HSL from "./HSL.d.ts";
import type _Instruction from "./Instruction.d.ts";
import type _ISuggestOwner from "./ISuggestOwner.d.ts";
import type _ItemView from "./ItemView.d.ts";
import type _Keymap from "./Keymap.d.ts";
import type _KeymapContext from "./KeymapContext.d.ts";
import type _KeymapEventHandler from "./KeymapEventHandler.d.ts";
import type _KeymapInfo from "./KeymapInfo.d.ts";
import type _LinkCache from "./LinkCache.d.ts";
import type _ListedFiles from "./ListedFiles.d.ts";
import type _ListItemCache from "./ListItemCache.d.ts";
import type _LivePreviewState from "./LivePreviewState.d.ts";
import type _Loc from "./Loc.d.ts";
import type _MarkdownEditView from "./MarkdownEditView.d.ts";
import type _MarkdownFileInfo from "./MarkdownFileInfo.d.ts";
import type _MarkdownPostProcessor from "./MarkdownPostProcessor.d.ts";
import type _MarkdownPostProcessorContext from "./MarkdownPostProcessorContext.d.ts";
import type _MarkdownPreviewEvents from "./MarkdownPreviewEvents.d.ts";
import type _MarkdownPreviewRenderer from "./MarkdownPreviewRenderer.d.ts";
import type _MarkdownPreviewView from "./MarkdownPreviewView.d.ts";
import type _MarkdownRenderChild from "./MarkdownRenderChild.d.ts";
import type _MarkdownRenderer from "./MarkdownRenderer.d.ts";
import type _MarkdownSectionInformation from "./MarkdownSectionInformation.d.ts";
import type _MarkdownSubView from "./MarkdownSubView.d.ts";
import type _MarkdownView from "./MarkdownView.d.ts";
import type _Menu from "./Menu.d.ts";
import type _MenuItem from "./MenuItem.d.ts";
import type _MenuPositionDef from "./MenuPositionDef.d.ts";
import type _MenuSeparator from "./MenuSeparator.d.ts";
import type _MetadataCache from "./MetadataCache.d.ts";
import type _Modal from "./Modal.d.ts";
import type _MomentFormatComponent from "./MomentFormatComponent.d.ts";
import type _Notice from "./Notice.d.ts";
import type _ObsidianProtocolData from "./ObsidianProtocolData.d.ts";
import type _OpenViewState from "./OpenViewState.d.ts";
import type _Platform from "./Platform.d.ts";
import type _Plugin from "./Plugin.d.ts";
import type _PluginManifest from "./PluginManifest.d.ts";
import type _PluginSettingTab from "./PluginSettingTab.d.ts";
import type _Point from "./Point.d.ts";
import type _PopoverSuggest from "./PopoverSuggest.d.ts";
import type _Pos from "./Pos.d.ts";
import type _PreparedQuery from "./PreparedQuery.d.ts";
import type _ProgressBarComponent from "./ProgressBarComponent.d.ts";
import type _Reference from "./Reference.d.ts";
import type _ReferenceCache from "./ReferenceCache.d.ts";
import type _RequestUrlParam from "./RequestUrlParam.d.ts";
import type _RequestUrlResponse from "./RequestUrlResponse.d.ts";
import type _RequestUrlResponsePromise from "./RequestUrlResponsePromise.d.ts";
import type _RGB from "./RGB.d.ts";
import type _Scope from "./Scope.d.ts";
import type _SearchComponent from "./SearchComponent.d.ts";
import type _SearchResult from "./SearchResult.d.ts";
import type _SearchResultContainer from "./SearchResultContainer.d.ts";
import type _SectionCache from "./SectionCache.d.ts";
import type _Setting from "./Setting.d.ts";
import type _SettingTab from "./SettingTab.d.ts";
import type _SliderComponent from "./SliderComponent.d.ts";
import type _Stat from "./Stat.d.ts";
import type _SubpathResult from "./SubpathResult.d.ts";
import type _SuggestModal from "./SuggestModal.d.ts";
import type _TAbstractFile from "./TAbstractFile.d.ts";
import type _TagCache from "./TagCache.d.ts";
import type _Tasks from "./Tasks.d.ts";
import type _TextAreaComponent from "./TextAreaComponent.d.ts";
import type _TextComponent from "./TextComponent.d.ts";
import type _TextFileView from "./TextFileView.d.ts";
import type _TFile from "./TFile.d.ts";
import type _TFolder from "./TFolder.d.ts";
import type _ToggleComponent from "./ToggleComponent.d.ts";
import type _TooltipOptions from "./TooltipOptions.d.ts";
import type _ValueComponent from "./ValueComponent.d.ts";
import type _Vault from "./Vault.d.ts";
import type _View from "./View.d.ts";
import type _ViewState from "./ViewState.d.ts";
import type _ViewStateResult from "./ViewStateResult.d.ts";
import type _Workspace from "./Workspace.d.ts";
import type _WorkspaceContainer from "./WorkspaceContainer.d.ts";
import type _WorkspaceFloating from "./WorkspaceFloating.d.ts";
import type _WorkspaceItem from "./WorkspaceItem.d.ts";
import type _WorkspaceLeaf from "./WorkspaceLeaf.d.ts";
import type _WorkspaceMobileDrawer from "./WorkspaceMobileDrawer.d.ts";
import type _WorkspaceParent from "./WorkspaceParent.d.ts";
import type _WorkspaceRibbon from "./WorkspaceRibbon.d.ts";
import type _WorkspaceRoot from "./WorkspaceRoot.d.ts";
import type _WorkspaceSidedock from "./WorkspaceSidedock.d.ts";
import type _WorkspaceSplit from "./WorkspaceSplit.d.ts";
import type _WorkspaceTabs from "./WorkspaceTabs.d.ts";
import type _WorkspaceWindow from "./WorkspaceWindow.d.ts";
import type _WorkspaceWindowInitData from "./WorkspaceWindowInitData.d.ts";

declare module "obsidian" {
    interface AbstractInputSuggest<T> extends _AbstractInputSuggest<T> { }
    interface AbstractTextComponent<T> extends _AbstractTextComponent<T> { }
    interface App extends _App { }
    interface BaseComponent extends _BaseComponent { }
    interface BlockCache extends _BlockCache { }
    interface BlockSubpathResult extends _BlockSubpathResult { }
    interface ButtonComponent extends _ButtonComponent { }
    interface CachedMetadata extends _CachedMetadata { }
    interface CacheItem extends _CacheItem { }
    interface CloseableComponent extends _CloseableComponent { }
    interface ColorComponent extends _ColorComponent { }
    interface Command extends _Command { }
    interface Component extends _Component { }
    interface DataAdapter extends _DataAdapter { }
    interface DataWriteOptions extends _DataWriteOptions { }
    interface Debouncer<T, V> extends _Debouncer<T, V> { }
    interface DropdownComponent extends _DropdownComponent { }
    interface EditableFileView extends _EditableFileView { }
    interface Editor extends _Editor { }
    interface EditorChange extends _EditorChange { }
    interface EditorPosition extends _EditorPosition { }
    interface EditorRange extends _EditorRange { }
    interface EditorRangeOrCaret extends _EditorRangeOrCaret { }
    interface EditorScrollInfo extends _EditorScrollInfo { }
    interface EditorSelection extends _EditorSelection { }
    interface EditorSelectionOrCaret extends _EditorSelectionOrCaret { }
    interface EditorSuggest<T> extends _EditorSuggest<T> { }
    interface EditorSuggestContext extends _EditorSuggestContext { }
    interface EditorSuggestTriggerInfo extends _EditorSuggestTriggerInfo { }
    interface EditorTransaction extends _EditorTransaction { }
    interface EmbedCache extends _EmbedCache { }
    interface EventRef extends _EventRef { }
    interface Events extends _Events { }
    interface ExtraButtonComponent extends _ExtraButtonComponent { }
    interface FileManager extends _FileManager { }
    interface FileStats extends _FileStats { }
    interface FileSystemAdapter extends _FileSystemAdapter { }
    interface FileView extends _FileView { }
    interface FrontMatterCache extends _FrontMatterCache { }
    interface FrontMatterInfo extends _FrontMatterInfo { }
    interface FrontmatterLinkCache extends _FrontmatterLinkCache { }
    interface FuzzyMatch<T> extends _FuzzyMatch<T> { }
    interface FuzzySuggestModal<T> extends _FuzzySuggestModal<T> { }
    interface HeadingCache extends _HeadingCache { }
    interface HeadingSubpathResult extends _HeadingSubpathResult { }
    interface Hotkey extends _Hotkey { }
    interface HoverLinkSource extends _HoverLinkSource { }
    interface HoverParent extends _HoverParent { }
    interface HoverPopover extends _HoverPopover { }
    interface HSL extends _HSL { }
    interface Instruction extends _Instruction { }
    interface ISuggestOwner<T> extends _ISuggestOwner<T> { }
    interface ItemView extends _ItemView { }
    interface Keymap extends _Keymap { }
    interface KeymapContext extends _KeymapContext { }
    interface KeymapEventHandler extends _KeymapEventHandler { }
    interface KeymapInfo extends _KeymapInfo { }
    interface LinkCache extends _LinkCache { }
    interface ListedFiles extends _ListedFiles { }
    interface ListItemCache extends _ListItemCache { }
    interface LivePreviewState extends _LivePreviewState { }
    interface Loc extends _Loc { }
    interface MarkdownEditView extends _MarkdownEditView { }
    interface MarkdownFileInfo extends _MarkdownFileInfo { }
    interface MarkdownPostProcessor extends _MarkdownPostProcessor { }
    interface MarkdownPostProcessorContext extends _MarkdownPostProcessorContext { }
    interface MarkdownPreviewEvents extends _MarkdownPreviewEvents { }
    interface MarkdownPreviewRenderer extends _MarkdownPreviewRenderer { }
    interface MarkdownPreviewView extends _MarkdownPreviewView { }
    interface MarkdownRenderChild extends _MarkdownRenderChild { }
    interface MarkdownRenderer extends _MarkdownRenderer { }
    interface MarkdownSectionInformation extends _MarkdownSectionInformation { }
    interface MarkdownSubView extends _MarkdownSubView { }
    interface MarkdownView extends _MarkdownView { }
    interface Menu extends _Menu { }
    interface MenuItem extends _MenuItem { }
    interface MenuPositionDef extends _MenuPositionDef { }
    interface MenuSeparator extends _MenuSeparator { }
    interface MetadataCache extends _MetadataCache { }
    interface Modal extends _Modal { }
    interface MomentFormatComponent extends _MomentFormatComponent { }
    interface Notice extends _Notice { }
    interface ObsidianProtocolData extends _ObsidianProtocolData { }
    interface OpenViewState extends _OpenViewState { }
    interface Platform extends _Platform { }
    interface Plugin extends _Plugin { }
    interface PluginManifest extends _PluginManifest { }
    interface PluginSettingTab extends _PluginSettingTab { }
    interface Point extends _Point { }
    interface PopoverSuggest<T> extends _PopoverSuggest<T> { }
    interface Pos extends _Pos { }
    interface PreparedQuery extends _PreparedQuery { }
    interface ProgressBarComponent extends _ProgressBarComponent { }
    interface Reference extends _Reference { }
    interface ReferenceCache extends _ReferenceCache { }
    interface RequestUrlParam extends _RequestUrlParam { }
    interface RequestUrlResponse extends _RequestUrlResponse { }
    interface RequestUrlResponsePromise extends _RequestUrlResponsePromise { }
    interface RGB extends _RGB { }
    interface Scope extends _Scope { }
    interface SearchComponent extends _SearchComponent { }
    interface SearchResult extends _SearchResult { }
    interface SearchResultContainer extends _SearchResultContainer { }
    interface SectionCache extends _SectionCache { }
    interface Setting extends _Setting { }
    interface SettingTab extends _SettingTab { }
    interface SliderComponent extends _SliderComponent { }
    interface Stat extends _Stat { }
    interface SubpathResult extends _SubpathResult { }
    interface SuggestModal<T> extends _SuggestModal<T> { }
    interface TAbstractFile extends _TAbstractFile { }
    interface TagCache extends _TagCache { }
    interface Tasks extends _Tasks { }
    interface TextAreaComponent extends _TextAreaComponent { }
    interface TextComponent extends _TextComponent { }
    interface TextFileView extends _TextFileView { }
    interface TFile extends _TFile { }
    interface TFolder extends _TFolder { }
    interface ToggleComponent extends _ToggleComponent { }
    interface TooltipOptions extends _TooltipOptions { }
    interface ValueComponent<T> extends _ValueComponent<T> { }
    interface Vault extends _Vault { }
    interface View extends _View { }
    interface ViewState extends _ViewState { }
    interface ViewStateResult extends _ViewStateResult { }
    interface Workspace extends _Workspace { }
    interface WorkspaceContainer extends _WorkspaceContainer { }
    interface WorkspaceFloating extends _WorkspaceFloating { }
    interface WorkspaceItem extends _WorkspaceItem { }
    interface WorkspaceLeaf extends _WorkspaceLeaf { }
    interface WorkspaceMobileDrawer extends _WorkspaceMobileDrawer { }
    interface WorkspaceParent extends _WorkspaceParent { }
    interface WorkspaceRibbon extends _WorkspaceRibbon { }
    interface WorkspaceRoot extends _WorkspaceRoot { }
    interface WorkspaceSidedock extends _WorkspaceSidedock { }
    interface WorkspaceSplit extends _WorkspaceSplit { }
    interface WorkspaceTabs extends _WorkspaceTabs { }
    interface WorkspaceWindow extends _WorkspaceWindow { }
    interface WorkspaceWindowInitData extends _WorkspaceWindowInitData { }
}
