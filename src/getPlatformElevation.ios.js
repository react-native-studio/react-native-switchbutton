/* eslint-enable import/no-unresolved, import/extensions */
const getPlatformElevation = (elevation) => {
    if (elevation !== 0) {
        return {
            shadowColor: 'black',
            shadowOpacity: 0.3,
            shadowRadius: elevation,
            shadowOffset: {
                height: 2,
                width: 0,
            },
            // we need to have zIndex on iOS, otherwise the shadow is under components that
            // are rendered later
            zIndex: 1,
        };
    }
    return { };
};

export default getPlatformElevation;
