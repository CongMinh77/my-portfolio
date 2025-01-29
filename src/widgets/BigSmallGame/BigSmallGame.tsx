import { Box, Button } from '@mui/material'
import { TYPE_RESULT_ROLL } from 'configs'
import { useState } from 'react'
import f1 from '../../assets/AllFaceCube/t1l2r3.svg'
import f2 from '../../assets/AllFaceCube/t2l3r1.svg'
import f3 from '../../assets/AllFaceCube/t3l2r6.svg'
import f4 from '../../assets/AllFaceCube/t4l2r1.svg'
import f5 from '../../assets/AllFaceCube/t5l1r3.svg'
import f6 from '../../assets/AllFaceCube/t6l3r2.svg'
import { useTranslation } from 'react-i18next'

type IProps = {}

type IPropResults = {
  dice: number
}

export default function BigSmallGame() {
  const { t } = useTranslation()
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

  console.debug('results', results)

  const renderImg = (id: number | string) => {
    switch (id) {
      case 1:
        return f1
      case 2:
        return f2
      case 3:
        return f3
      case 4:
        return f4
      case 5:
        return f5
      case 6:
        return f6
      default:
        return f1
    }
  }

  const renderStyleCube = (index: number) => {
    switch (index) {
      case 1:
        return {
          position: 'absolute',
          left: '70px',
          top: '25px',
          width: '250px',
          transition: 'all 1s ease-out'
        }
      case 2:
        return {
          position: 'absolute',
          left: '0',
          top: '25px',
          width: '250px',
          transition: 'all 1s ease-out'
        }
      default:
        return {
          position: 'absolute',
          left: '35px',
          top: '0px',
          width: '250px',
          transition: 'all 1s ease-out'
        }
    }
  }

  return (
    <Box p={2}>
      <Button onClick={() => handleRandomDice()}>{t('random-dice')}</Button>
      <Button onClick={() => handleRandomDice(TYPE_RESULT_ROLL.SMALL)}>
        {t('small-result')}
      </Button>
      <Button onClick={() => handleRandomDice(TYPE_RESULT_ROLL.BIG)}>
        {t('big-result')}
      </Button>
      <Box
        sx={{
          position: 'relative',
          height: '250px',
          transition: 'all 1s ease-out'
        }}>
        {results.map((item: IPropResults, index) => {
          return (
            <>
              <img
                src={renderImg(item.dice)}
                alt={`f${item.dice}-cube`}
                style={renderStyleCube(index) as any}
              />
            </>
          )
        })}
      </Box>
    </Box>
  )
}
