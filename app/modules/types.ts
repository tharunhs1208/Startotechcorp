export type SectionType = 'radio' | 'checkbox' | 'select'

export interface Section {
  label:   string
  type:    SectionType
  name?:   string
  options: string[]
}

export interface ModuleDef {
  id:        string
  icon:      string
  iconClass: string
  name:      string
  desc:      string
  sections:  Section[]
}

export interface ModuleState {
  enabled:   boolean
  expanded:  boolean
  /* radio selections: sectionLabel → chosen option */
  radios:    Record<string, string>
  /* checkbox selections: sectionLabel → Set of checked options */
  checks:    Record<string, Set<string>>
  /* select values: sectionLabel → chosen option */
  selects:   Record<string, string>
}

export type AllModuleState = Record<string, ModuleState>