import {
    H1,
    Paragraph,
    Separator,
    YStack,
  } from '@my/ui'
  import React from 'react'
  
  export function PostScreen() {
    return (
      <YStack f={1} jc="center">
        <YStack space="$4" maw={600}>
          <H1 ta="center">Post Screen</H1>
          <Paragraph ta="center">
            This is the Post Screen.
          </Paragraph>
  
          <Separator />
          <Paragraph ta="center">
            Create / Comment on / Delete posts here
          </Paragraph>
        </YStack>
        
      </YStack>
    )
  }
  