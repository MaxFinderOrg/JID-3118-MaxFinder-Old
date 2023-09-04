import {
    H1,
    Paragraph,
    Separator,
    YStack,
  } from '@my/ui'
  import React from 'react'
  
  export function LoginScreen() {
    return (
      <YStack f={1} jc="center">
        <YStack space="$4" maw={600}>
          <H1 ta="center">Login Screen</H1>
          <Paragraph ta="center">
            This is the Login Screen.
          </Paragraph>
  
          <Separator />
          <Paragraph ta="center">
            User enters their ID & Password here
          </Paragraph>
        </YStack>
        
      </YStack>
    )
  }
  