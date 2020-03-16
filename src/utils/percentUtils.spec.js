import { getWidthAsPercentOfTotalWidth } from "./percentUtils";

describe('getWidthAsPercentOfTotalWidth', () => {
    test('Percentage 50 of 500 should have 250', () => {
        const width = getWidthAsPercentOfTotalWidth(500, 50)
        expect(width).toEqual(250);
    })
})
