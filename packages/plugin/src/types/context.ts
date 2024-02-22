import type { ModuleNode } from '../module/moduleNode'
import type { initRootModuleId } from '../util'
import type { Options } from './options'

export type Context = {
    filter: (id: string) => boolean,
    getRootModuleNode: () => ModuleNode | undefined
    handleLoadModule: (moduleId: string) => void
    moduleIdNodeMap: Map<string, ModuleNode>
} 
& Required<Options>