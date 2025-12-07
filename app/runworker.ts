import { Worker } from 'worker_threads';

function runWorker(tsMigrationToJsMigrationPath: string, jsMigrationToTsMigrationPath: string) {
    const worker = new Worker(tsMigrationToJsMigrationPath, {
        workerData: {
            path: jsMigrationToTsMigrationPath
        }
    });
    
    worker.on('message', function (data) {
        console.log('In message');
    });

    worker.on('error', function (error) {
        worker.terminate();
    });

    worker.on('exit', (code) => {
        if (code !== 0) {
            worker.terminate();
        };
    });

    return worker;
};

export default runWorker;