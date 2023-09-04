import React, { useState } from 'react'
import {
  H1,
  Paragraph,
} from '@my/ui'
import {
  Separator,
  YStack,
} from 'tamagui'

export function HomeScreen() {
  return (
    <YStack f={1} jc="center">
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to MaxFinder</H1>
        <Paragraph ta="center">
          This is the Home Screen.
        </Paragraph>

        <Separator />
        <Paragraph ta="center">
          Made by Group JD-3118
        </Paragraph>
      </YStack>
      
    </YStack>
  )
}
