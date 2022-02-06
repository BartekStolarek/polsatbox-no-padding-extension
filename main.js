const extensionName = 'polsat-box-no-padding-extension';

const setBodyPadding = (value) => {
    try {
        const body = document.body;
        body.style.padding = 0;

        console.log(`Padding successfully set to ${value}.`);
    } catch (error) {
        console.log('An error occurred while resetting body padding');
    }
};

window.onload = () => {
    console.log(`${extensionName} is up and running...`);

    setBodyPadding(0);
};
