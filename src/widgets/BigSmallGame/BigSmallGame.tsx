import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TYPE_RESULT_ROLL } from '../../constants/commonVariables'

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

  const handleRandomDice = (typeResult?: number) => {
    const number = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    if (typeResult === TYPE_RESULT_ROLL.SMALL) {
      const lastNumber = Math.floor(Math.random() * 6) + 1
      if (lastNumber)
        setResults([
          { dice: (Math.floor(Math.random() * 3) + 1) as number },
          { dice: (Math.floor(Math.random() * 3) + 1) as number },
          { dice: (Math.floor(Math.random() * 3) + 1) as number }
        ])
    } else if (typeResult === TYPE_RESULT_ROLL.BIG) {
      setResults([
        { dice: (Math.floor(Math.random() * 6) + 1) as number },
        { dice: (Math.floor(Math.random() * 6) + 1) as number },
        { dice: (Math.floor(Math.random() * 6) + 1) as number }
      ])
    } else {
      setResults([
        { dice: (Math.floor(Math.random() * 6) + 1) as number },
        { dice: (Math.floor(Math.random() * 6) + 1) as number },
        { dice: (Math.floor(Math.random() * 6) + 1) as number }
      ])
    }
  }

  return (
    <Box p={2}>
      <Button onClick={() => handleRandomDice()}>Random dice</Button>
      <Button onClick={() => handleRandomDice(TYPE_RESULT_ROLL.SMALL)}>
        Small result
      </Button>
      <Button onClick={() => handleRandomDice(TYPE_RESULT_ROLL.BIG)}>
        Big result
      </Button>
      {results.map((item: IPropResults) => (
        <Typography>{item.dice}</Typography>
      ))}
    </Box>
  )
}
