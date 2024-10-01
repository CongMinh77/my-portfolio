import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

type IProps = {}

type IPropResults = {
  dice: number
}

export default function BigSmallGame({}: IProps) {
  const [results, setResults] = useState<IPropResults[]>([
    { dice: 0 },
    { dice: 0 },
    { dice: 0 }
  ])

  const handleRandomDice = () => {
    setResults([
      { dice: (Math.floor(Math.random() * 6) + 1) as number },
      { dice: (Math.floor(Math.random() * 6) + 1) as number },
      { dice: (Math.floor(Math.random() * 6) + 1) as number }
    ])
  }

  return (
    <Box p={2}>
      <Button onClick={handleRandomDice}>Random dice</Button>
      {results.map((item: IPropResults) => (
        <Typography>{item.dice}</Typography>
      ))}
    </Box>
  )
}
