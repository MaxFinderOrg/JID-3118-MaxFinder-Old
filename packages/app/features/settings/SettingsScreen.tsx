import {
    H1,
    Paragraph,
    Separator,
    YStack,
  } from '@my/ui'
  import React from 'react'
  
  export function SettingsScreen() {
    return (
      <YStack f={1} jc="center">
        <YStack space="$4" maw={600}>
          <H1 ta="center">Settings Screen</H1>
          <Paragraph ta="center">
            This is the Settings Screen.
          </Paragraph>
  
          <Separator />
          <Paragraph ta="center">
            User edits preferences here
          </Paragraph>
        </YStack>
        
      </YStack>
    )
  }
  