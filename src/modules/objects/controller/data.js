import { Item } from "../model/item";
import { Project } from "../model/project";
import { createCache, createProjectMap } from "../model/todo";

export const itemCache = createCache(Item);
export const projectCache = createCache(Project);
export const projectMap = createProjectMap();