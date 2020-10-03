import React from 'react'
import { ThemeProvider } from "@committed/components"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story/>
    </ThemeProvider>
  )
]