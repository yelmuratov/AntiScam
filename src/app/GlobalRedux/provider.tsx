'use client'

import { Provider } from 'react-redux'
import { store } from './store'
import React, { ReactNode } from 'react' // Import React and ReactNode

interface ProvidersProps {
  children: ReactNode // Specify children prop as ReactNode
}

export function Providers({ children }: ProvidersProps) {
  // Destructure children from props and specify the type
  return <Provider store={store}>{children}</Provider>
}
