// Components
import NavigationBar from '@/components/NavigationBar'
import PageTitleSection from '@/components/PageTitleSection'
import Header from '@/components/Header'
import ActionListContainer from '@/components/ActionList'
import ActionContainer from '@/components/ActionContainer'
import MainContainer from '@/components/MainContainer'
// React Icons
import { RiPlantFill } from 'react-icons/ri'
// Utils
import { ENVIRONMENT_ACTION_API } from '@/services/urls'
import { routes } from './routes'
// TS Types
import type { IActionApiJsonResponse } from '@/types'

export default async function Home () {
  const response = await fetch(ENVIRONMENT_ACTION_API, { next: { revalidate: 60 } })
  const actionList: IActionApiJsonResponse[] = await response.json()

  return (
    <>
      <Header>
        <PageTitleSection icon={<RiPlantFill />}>My Actions</PageTitleSection>
        <NavigationBar routes={routes} />
      </Header>
      <MainContainer>
        <ActionListContainer>
          {actionList.map((action, index) => <ActionContainer key={index} action={action} index={index} />)}
        </ActionListContainer>
      </MainContainer>
    </>
  )
}
