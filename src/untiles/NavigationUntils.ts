import { Connection } from 'test_fluxjs';

export const getFirstConnection = (entryPoint: string) => {
    const connection = new Connection();
    connection.id = 'continue';
    connection.stepTo = entryPoint;
    connection.forceSync = true;
    return connection;
}
