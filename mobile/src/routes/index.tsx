import { BaseNavigationContainer } from "@react-navigation/native"

import { AppRoutes } from "./app-routes"

export function Routes() {
  return (
    <BaseNavigationContainer>
      <AppRoutes />
    </BaseNavigationContainer>
  )
}
