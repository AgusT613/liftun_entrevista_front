import type { ReactNode } from 'react'

export interface IActionApiJsonResponse {
  id: number
  name: string
  action_start: string
  action_end: string
  has_person_in_charge: boolean
  has_goals: boolean
  needs_carbon_footprint_calculation: boolean
  is_legal_duty: boolean
  action_type: string
}

export interface IRoutes {
  section: string
  url: string
  icon: React.ReactElement
}

// Components Types
export interface IPageTitleSection {
  children: string
  icon: ReactNode
}
