import type { CacheItem } from "obsidian";
/**
 * Cache item containing a notes footnotes metadata
 */
export interface FootnoteCache extends CacheItem {
    identifier: string;
}
