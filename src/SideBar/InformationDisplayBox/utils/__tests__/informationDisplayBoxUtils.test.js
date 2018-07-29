import React from 'react'
import * as utils from '../informationDisplayBoxUtils'

describe('separateViolations', () => {
  describe('with a SECTION27', () => {
    describe('multi part string', () => {
      it('returns each violation with proper prefix', () => {
        const code = 'SECTION27-2001, 2003'
        const expected = ['SECTION27-2001', 'SECTION27-2003']

        expect(utils.separateViolations(code)).toEqual(expected)
      })
    })

    describe('single part string', () => {
      describe('with dangling comma', () => {
        it('returns each violation with proper prefix', () => {
          const code = 'SECTION27-2001,'
          const expected = ['SECTION27-2001']

          expect(utils.separateViolations(code)).toEqual(expected)
        })
      })

      describe('without dangling comma', () => {
        it('returns each violation with proper prefix', () => {
          const code = 'SECTION27-2001'
          const expected = ['SECTION27-2001']

          expect(utils.separateViolations(code)).toEqual(expected)
        })
      })
    })
  })

  describe('with a normal code', () => {
    it('returns each the code in an array', () => {
      const code = '1234'
      const expected = ['1234']

      expect(utils.separateViolations(code)).toEqual(expected)
    })
  })
})
