const formatVolumeIconPath = require('../assets/scripts/main');


//using test/expect and having a test block for every branch logic
describe('If VolumeValue is _ then IconLevel is _', () => 
{
    test('>66, 3', () => {
        volumeValue = 67;
        iconLevel = 3;
        expected = `./assets/media/icons/volume-level-${iconLevel}.svg`;
        expect(formatVolumeIconPath(volumeValue)).toBe(expected);
    });

    test('>33, 2', () => {
        volumeValue = 34;
        iconLevel = 2;
        expected = `./assets/media/icons/volume-level-${iconLevel}.svg`;
        expect(formatVolumeIconPath(volumeValue)).toBe(expected);
    });

    test('>0, 1', () => {
        volumeValue = 1;
        iconLevel = 1;
        expected = `./assets/media/icons/volume-level-${iconLevel}.svg`;
        expect(formatVolumeIconPath(volumeValue)).toBe(expected);
    });

    test('< 0, 0', () => {
        volumeValue = -1;
        iconLevel = 0;
        expected = `./assets/media/icons/volume-level-${iconLevel}.svg`;
        expect(formatVolumeIconPath(volumeValue)).toBe(expected);
    });
})

