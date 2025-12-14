//constants//

//functions//
export function isNumericString(string: string): boolean { //returns TRUE if it is a number, and FALSE if it is not
	if (typeof string !== 'string' || string.trim() === '') {
		return false; //given input is not a string or empty string
	}

	const num = Number(string); //attempts to convert the string to a number

	return !isNaN(num) && isFinite(num); //checks if the conversion was successful and a finite number
}; //end of isNumericString function

//classes//
export class SimpleTimer {
    timeInSeconds: number;
    controller: AbortController;
    signal: AbortController['signal'];

    constructor(timeInSeconds: number) {
        this.timeInSeconds = timeInSeconds;
        this.controller = new AbortController();
        this.signal = this.controller.signal;

        this.state = {
            running: false,
            finished: false
        };
    }; //end of constructor

    async start() {
        console.log('Timer has started!');
        this.setState({ running: true });
        await new Promise(res => setTimeout(res, (this.timeInSeconds * 1000)))
            .catch(error => {
                if (error.name == 'AbortError') {
                    console.log('Timer operation aborted.');
                    this.setState({ running: false });
                    return;
                } else {
                    console.log('Something went wrong.');
                    console.error(error);
                    this.setState({ running: false });
                }
            });
        console.log('Timer has finished.');
        this.setState({ running: false, finished: true });
    };

    reset() {
        console.log('Timer has been reset.');
        if (!this.state.running) this.controller.abort();
        this.setState({ running: false, finished: false })
    }

}; //end of timer class