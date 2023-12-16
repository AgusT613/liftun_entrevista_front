import { ENVIRONMENT_ACTION_API } from './urls'

export interface ActionModel {
  name: string
  action_start: string
  action_end: string | null
  has_person_in_charge: boolean | null
  has_goals: boolean | null
  needs_carbon_footprint_calculation: boolean | null
  is_legal_duty: boolean | null
  action_type: string
}

export default async function createAction (body: any) {
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(ENVIRONMENT_ACTION_API, options)
  const data = await response.json()
  return data
}
