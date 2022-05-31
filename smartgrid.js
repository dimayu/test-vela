let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '10px',
    mobileFirst: false,
    container: {
        maxWidth: '1440px',
        fields: '135px'
    },
    breakPoints: {
        lm: {
            width: '1240px',
            fields: '100px'
        },
        md: {
            width: '940px',
            fields: '25px'
        },
        sm: {
            width: '780px',
            fields: '20px'
        },
        xxs: {
            width: '375px',
            fields: '20px'
        }
    }
};

smartgrid('./src/styles', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */
