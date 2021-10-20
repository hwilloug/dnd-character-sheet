import { expectSaga } from "redux-saga-test-plan"
import { select } from "redux-saga/effects"
import { statsActions } from "../state/actions"
import { initialState } from "../state/reducer"
import { StatsState } from "../state/state"
import { createGetLevelSaga } from "./get-level"

const getLevelSaga = createGetLevelSaga()

let statsState: StatsState = {
  ...initialState
}

it('gets and sets level (1)', () => {

  statsState.level.experiencePoints = 0

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        1, 
        '+2'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (2)', () => {

  statsState.level.experiencePoints = 300

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        2,
        '+2'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (3)', () => {

  statsState.level.experiencePoints = 900

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        3,
        '+2'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (4)', () => {

  statsState.level.experiencePoints = 2700

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        4,
        '+2'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (5)', () => {

  statsState.level.experiencePoints = 6500

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        5,
        '+3'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (6)', () => {

  statsState.level.experiencePoints = 14000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        6,
        '+3'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (7)', () => {

  statsState.level.experiencePoints = 23000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        7,
        '+3'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (8)', () => {

  statsState.level.experiencePoints = 34000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        8,
        '+3'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (8 <2>)', () => {

  statsState.level.experiencePoints = 40000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        8,
        '+3'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (9)', () => {

  statsState.level.experiencePoints = 48000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        9,
        '+4'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (10)', () => {

  statsState.level.experiencePoints = 64000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        10,
        '+4'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (11)', () => {

  statsState.level.experiencePoints = 85000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        11,
        '+4'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (12)', () => {

  statsState.level.experiencePoints = 100000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        12,
        '+4'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (13)', () => {

  statsState.level.experiencePoints = 120000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        13,
        '+5'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (14)', () => {

  statsState.level.experiencePoints = 140000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        14,
        '+5'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (15)', () => {

  statsState.level.experiencePoints = 165000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        15,
        '+5'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (16)', () => {

  statsState.level.experiencePoints = 195000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        16,
        '+5'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (17)', () => {

  statsState.level.experiencePoints = 225000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        17,
        '+6'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (18)', () => {

  statsState.level.experiencePoints = 265000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        18,
        '+6'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (19)', () => {

  statsState.level.experiencePoints = 305000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        19,
        '+6'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (20)', () => {

  statsState.level.experiencePoints = 355000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        20,
        '+6'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})

it('gets and sets level (20 <2>)', () => {

  statsState.level.experiencePoints = 400000

  return expectSaga(
    getLevelSaga,
    statsActions.getLevel('asdf')
  )
    .provide([
      [
        select(),
        {
          stats: statsState
        }
      ]
    ])
    .put(
      statsActions.setLevel(
        'asdf',
        20,
        '+6'
      )
    )
    .run()
    .then((result) => {
      const { effects } = result
      
      expect(effects.put).toBe(undefined)
      expect(effects.call).toBe(undefined)
    })
})